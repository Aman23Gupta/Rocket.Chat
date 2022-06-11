(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var Log = Package.logging.Log;
var Hook = Package['callback-hook'].Hook;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var Email, EmailInternals, EmailTest;

var require = meteorInstall({"node_modules":{"meteor":{"email":{"email.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/email/email.js                                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
!function (module1) {
  let _objectSpread;

  module1.link("@babel/runtime/helpers/objectSpread2", {
    default(v) {
      _objectSpread = v;
    }

  }, 0);
  module1.export({
    Email: () => Email,
    EmailTest: () => EmailTest,
    EmailInternals: () => EmailInternals
  });
  let Meteor;
  module1.link("meteor/meteor", {
    Meteor(v) {
      Meteor = v;
    }

  }, 0);
  let Log;
  module1.link("meteor/logging", {
    Log(v) {
      Log = v;
    }

  }, 1);
  let Hook;
  module1.link("meteor/callback-hook", {
    Hook(v) {
      Hook = v;
    }

  }, 2);
  let Future;
  module1.link("fibers/future", {
    default(v) {
      Future = v;
    }

  }, 3);
  let url;
  module1.link("url", {
    default(v) {
      url = v;
    }

  }, 4);
  let nodemailer;
  module1.link("nodemailer", {
    default(v) {
      nodemailer = v;
    }

  }, 5);
  let wellKnow;
  module1.link("nodemailer/lib/well-known", {
    default(v) {
      wellKnow = v;
    }

  }, 6);
  const Email = {};
  const EmailTest = {};
  const EmailInternals = {
    NpmModules: {
      mailcomposer: {
        version: Npm.require('nodemailer/package.json').version,
        module: Npm.require('nodemailer/lib/mail-composer')
      },
      nodemailer: {
        version: Npm.require('nodemailer/package.json').version,
        module: Npm.require('nodemailer')
      }
    }
  };
  const MailComposer = EmailInternals.NpmModules.mailcomposer.module;

  const makeTransport = function (mailUrlString) {
    const mailUrl = new URL(mailUrlString);

    if (mailUrl.protocol !== 'smtp:' && mailUrl.protocol !== 'smtps:') {
      throw new Error("Email protocol in $MAIL_URL (" + mailUrlString + ") must be 'smtp' or 'smtps'");
    }

    if (mailUrl.protocol === 'smtp:' && mailUrl.port === '465') {
      Log.debug("The $MAIL_URL is 'smtp://...:465'.  " + "You probably want 'smtps://' (The 's' enables TLS/SSL) " + "since '465' is typically a secure port.");
    } // Allow overriding pool setting, but default to true.


    if (!mailUrl.query) {
      mailUrl.query = {};
    }

    if (!mailUrl.query.pool) {
      mailUrl.query.pool = 'true';
    }

    const transport = nodemailer.createTransport(url.format(mailUrl));
    transport._syncSendMail = Meteor.wrapAsync(transport.sendMail, transport);
    return transport;
  }; // More info: https://nodemailer.com/smtp/well-known/


  const knownHostsTransport = function () {
    let settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    let url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    let service, user, password;

    if (url && !settings) {
      let host = url.split(':')[0];
      const urlObject = new URL(url);

      if (host === 'http' || host === 'https') {
        // Look to hostname for service
        host = urlObject.hostname;
        user = urlObject.username;
        password = urlObject.password;
      } else if (urlObject.protocol && urlObject.username && urlObject.password) {
        // We have some data from urlObject
        host = urlObject.protocol.split(':')[0];
        user = urlObject.username;
        password = urlObject.password;
      } else {
        var _urlObject$pathname$s;

        // We need to disect the URL ourselves to get the data
        // First get rid of the leading '//' and split to username and the rest
        const temp = (_urlObject$pathname$s = urlObject.pathname.substring(2)) === null || _urlObject$pathname$s === void 0 ? void 0 : _urlObject$pathname$s.split(':');
        user = temp[0]; // Now we split by '@' to get password and hostname

        const temp2 = temp[1].split('@');
        password = temp2[0];
        host = temp2[1];
      }

      service = host;
    }

    if (!wellKnow((settings === null || settings === void 0 ? void 0 : settings.service) || service)) {
      throw new Error('Could not recognize e-mail service. See list at https://nodemailer.com/smtp/well-known/ for services that we can configure for you.');
    }

    const transport = nodemailer.createTransport({
      service: (settings === null || settings === void 0 ? void 0 : settings.service) || service,
      auth: {
        user: (settings === null || settings === void 0 ? void 0 : settings.user) || user,
        pass: (settings === null || settings === void 0 ? void 0 : settings.password) || password
      }
    });
    transport._syncSendMail = Meteor.wrapAsync(transport.sendMail, transport);
    return transport;
  };

  EmailTest.knowHostsTransport = knownHostsTransport;

  const getTransport = function () {
    var _Meteor$settings$pack;

    const packageSettings = ((_Meteor$settings$pack = Meteor.settings.packages) === null || _Meteor$settings$pack === void 0 ? void 0 : _Meteor$settings$pack.email) || {}; // We delay this check until the first call to Email.send, in case someone
    // set process.env.MAIL_URL in startup code. Then we store in a cache until
    // process.env.MAIL_URL changes.

    const url = process.env.MAIL_URL;

    if (this.cacheKey === undefined || this.cacheKey !== url || this.cacheKey !== (packageSettings === null || packageSettings === void 0 ? void 0 : packageSettings.service) || 'settings') {
      if (packageSettings !== null && packageSettings !== void 0 && packageSettings.service && wellKnow(packageSettings.service) || url && wellKnow(new URL(url).hostname) || wellKnow((url === null || url === void 0 ? void 0 : url.split(':')[0]) || '')) {
        this.cacheKey = packageSettings.service || 'settings';
        this.cache = knownHostsTransport(packageSettings, url);
      } else {
        this.cacheKey = url;
        this.cache = url ? makeTransport(url, packageSettings) : null;
      }
    }

    return this.cache;
  };

  let nextDevModeMailId = 0;
  let output_stream = process.stdout; // Testing hooks

  EmailTest.overrideOutputStream = function (stream) {
    nextDevModeMailId = 0;
    output_stream = stream;
  };

  EmailTest.restoreOutputStream = function () {
    output_stream = process.stdout;
  };

  const devModeSend = function (mail) {
    let devModeMailId = nextDevModeMailId++;
    const stream = output_stream; // This approach does not prevent other writers to stdout from interleaving.

    stream.write("====== BEGIN MAIL #" + devModeMailId + " ======\n");
    stream.write("(Mail not sent; to enable sending, set the MAIL_URL " + "environment variable.)\n");
    const readStream = new MailComposer(mail).compile().createReadStream();
    readStream.pipe(stream, {
      end: false
    });
    const future = new Future();
    readStream.on('end', function () {
      stream.write("====== END MAIL #" + devModeMailId + " ======\n");
      future.return();
    });
    future.wait();
  };

  const smtpSend = function (transport, mail) {
    transport._syncSendMail(mail);
  };

  const sendHooks = new Hook();
  /**
   * @summary Hook that runs before email is sent.
   * @locus Server
   *
   * @param f {function} receives the arguments to Email.send and should return true to go
   * ahead and send the email (or at least, try subsequent hooks), or
   * false to skip sending.
   * @returns {{ stop: function, callback: function }}
   */

  Email.hookSend = function (f) {
    return sendHooks.register(f);
  };
  /**
   * @summary Overrides sending function with your own.
   * @locus Server
   * @since 2.2
   * @param f {function} function that will receive options from the send function and under `packageSettings` will
   * include the package settings from Meteor.settings.packages.email for your custom transport to access.
   */


  Email.customTransport = undefined;
  /**
   * @summary Send an email. Throws an `Error` on failure to contact mail server
   * or if mail server returns an error. All fields should match
   * [RFC5322](http://tools.ietf.org/html/rfc5322) specification.
   *
   * If the `MAIL_URL` environment variable is set, actually sends the email.
   * Otherwise, prints the contents of the email to standard out.
   *
   * Note that this package is based on **nodemailer**, so make sure to refer to
   * [the documentation](http://nodemailer.com/)
   * when using the `attachments` or `mailComposer` options.
   *
   * @locus Server
   * @param {Object} options
   * @param {String} [options.from] "From:" address (required)
   * @param {String|String[]} options.to,cc,bcc,replyTo
   *   "To:", "Cc:", "Bcc:", and "Reply-To:" addresses
   * @param {String} [options.inReplyTo] Message-ID this message is replying to
   * @param {String|String[]} [options.references] Array (or space-separated string) of Message-IDs to refer to
   * @param {String} [options.messageId] Message-ID for this message; otherwise, will be set to a random value
   * @param {String} [options.subject]  "Subject:" line
   * @param {String} [options.text|html] Mail body (in plain text and/or HTML)
   * @param {String} [options.watchHtml] Mail body in HTML specific for Apple Watch
   * @param {String} [options.icalEvent] iCalendar event attachment
   * @param {Object} [options.headers] Dictionary of custom headers - e.g. `{ "header name": "header value" }`. To set an object under a header name, use `JSON.stringify` - e.g. `{ "header name": JSON.stringify({ tracking: { level: 'full' } }) }`.
   * @param {Object[]} [options.attachments] Array of attachment objects, as
   * described in the [nodemailer documentation](https://nodemailer.com/message/attachments/).
   * @param {MailComposer} [options.mailComposer] A [MailComposer](https://nodemailer.com/extras/mailcomposer/#e-mail-message-fields)
   * object representing the message to be sent.  Overrides all other options.
   * You can create a `MailComposer` object via
   * `new EmailInternals.NpmModules.mailcomposer.module`.
   */

  Email.send = function (options) {
    var _Meteor$settings$pack3;

    if (options.mailComposer) {
      options = options.mailComposer.mail;
    }

    let send = true;
    sendHooks.each(hook => {
      send = hook(options);
      return send;
    });
    if (!send) return;
    const customTransport = Email.customTransport;

    if (customTransport) {
      var _Meteor$settings$pack2;

      const packageSettings = ((_Meteor$settings$pack2 = Meteor.settings.packages) === null || _Meteor$settings$pack2 === void 0 ? void 0 : _Meteor$settings$pack2.email) || {};
      customTransport(_objectSpread({
        packageSettings
      }, options));
      return;
    }

    if (Meteor.isProduction || process.env.MAIL_URL || (_Meteor$settings$pack3 = Meteor.settings.packages) !== null && _Meteor$settings$pack3 !== void 0 && _Meteor$settings$pack3.email) {
      const transport = getTransport();
      smtpSend(transport, options);
      return;
    }

    devModeSend(options);
  };
}.call(this, module);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"nodemailer":{"package.json":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// node_modules/meteor/email/node_modules/nodemailer/package.json                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = {
  "name": "nodemailer",
  "version": "6.6.3",
  "main": "lib/nodemailer.js"
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"nodemailer.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// node_modules/meteor/email/node_modules/nodemailer/lib/nodemailer.js                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.useNode();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"well-known":{"index.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// node_modules/meteor/email/node_modules/nodemailer/lib/well-known/index.js                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.useNode();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/email/email.js");

/* Exports */
Package._define("email", exports, {
  Email: Email,
  EmailInternals: EmailInternals,
  EmailTest: EmailTest
});

})();

//# sourceURL=meteor://💻app/packages/email.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZW1haWwvZW1haWwuanMiXSwibmFtZXMiOlsiX29iamVjdFNwcmVhZCIsIm1vZHVsZTEiLCJsaW5rIiwiZGVmYXVsdCIsInYiLCJleHBvcnQiLCJFbWFpbCIsIkVtYWlsVGVzdCIsIkVtYWlsSW50ZXJuYWxzIiwiTWV0ZW9yIiwiTG9nIiwiSG9vayIsIkZ1dHVyZSIsInVybCIsIm5vZGVtYWlsZXIiLCJ3ZWxsS25vdyIsIk5wbU1vZHVsZXMiLCJtYWlsY29tcG9zZXIiLCJ2ZXJzaW9uIiwiTnBtIiwicmVxdWlyZSIsIm1vZHVsZSIsIk1haWxDb21wb3NlciIsIm1ha2VUcmFuc3BvcnQiLCJtYWlsVXJsU3RyaW5nIiwibWFpbFVybCIsIlVSTCIsInByb3RvY29sIiwiRXJyb3IiLCJwb3J0IiwiZGVidWciLCJxdWVyeSIsInBvb2wiLCJ0cmFuc3BvcnQiLCJjcmVhdGVUcmFuc3BvcnQiLCJmb3JtYXQiLCJfc3luY1NlbmRNYWlsIiwid3JhcEFzeW5jIiwic2VuZE1haWwiLCJrbm93bkhvc3RzVHJhbnNwb3J0Iiwic2V0dGluZ3MiLCJ1bmRlZmluZWQiLCJzZXJ2aWNlIiwidXNlciIsInBhc3N3b3JkIiwiaG9zdCIsInNwbGl0IiwidXJsT2JqZWN0IiwiaG9zdG5hbWUiLCJ1c2VybmFtZSIsInRlbXAiLCJwYXRobmFtZSIsInN1YnN0cmluZyIsInRlbXAyIiwiYXV0aCIsInBhc3MiLCJrbm93SG9zdHNUcmFuc3BvcnQiLCJnZXRUcmFuc3BvcnQiLCJwYWNrYWdlU2V0dGluZ3MiLCJwYWNrYWdlcyIsImVtYWlsIiwicHJvY2VzcyIsImVudiIsIk1BSUxfVVJMIiwiY2FjaGVLZXkiLCJjYWNoZSIsIm5leHREZXZNb2RlTWFpbElkIiwib3V0cHV0X3N0cmVhbSIsInN0ZG91dCIsIm92ZXJyaWRlT3V0cHV0U3RyZWFtIiwic3RyZWFtIiwicmVzdG9yZU91dHB1dFN0cmVhbSIsImRldk1vZGVTZW5kIiwibWFpbCIsImRldk1vZGVNYWlsSWQiLCJ3cml0ZSIsInJlYWRTdHJlYW0iLCJjb21waWxlIiwiY3JlYXRlUmVhZFN0cmVhbSIsInBpcGUiLCJlbmQiLCJmdXR1cmUiLCJvbiIsInJldHVybiIsIndhaXQiLCJzbXRwU2VuZCIsInNlbmRIb29rcyIsImhvb2tTZW5kIiwiZiIsInJlZ2lzdGVyIiwiY3VzdG9tVHJhbnNwb3J0Iiwic2VuZCIsIm9wdGlvbnMiLCJtYWlsQ29tcG9zZXIiLCJlYWNoIiwiaG9vayIsImlzUHJvZHVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBSUEsYUFBSjs7QUFBa0JDLFNBQU8sQ0FBQ0MsSUFBUixDQUFhLHNDQUFiLEVBQW9EO0FBQUNDLFdBQU8sQ0FBQ0MsQ0FBRCxFQUFHO0FBQUNKLG1CQUFhLEdBQUNJLENBQWQ7QUFBZ0I7O0FBQTVCLEdBQXBELEVBQWtGLENBQWxGO0FBQWxCSCxTQUFPLENBQUNJLE1BQVIsQ0FBZTtBQUFDQyxTQUFLLEVBQUMsTUFBSUEsS0FBWDtBQUFpQkMsYUFBUyxFQUFDLE1BQUlBLFNBQS9CO0FBQXlDQyxrQkFBYyxFQUFDLE1BQUlBO0FBQTVELEdBQWY7QUFBNEYsTUFBSUMsTUFBSjtBQUFXUixTQUFPLENBQUNDLElBQVIsQ0FBYSxlQUFiLEVBQTZCO0FBQUNPLFVBQU0sQ0FBQ0wsQ0FBRCxFQUFHO0FBQUNLLFlBQU0sR0FBQ0wsQ0FBUDtBQUFTOztBQUFwQixHQUE3QixFQUFtRCxDQUFuRDtBQUFzRCxNQUFJTSxHQUFKO0FBQVFULFNBQU8sQ0FBQ0MsSUFBUixDQUFhLGdCQUFiLEVBQThCO0FBQUNRLE9BQUcsQ0FBQ04sQ0FBRCxFQUFHO0FBQUNNLFNBQUcsR0FBQ04sQ0FBSjtBQUFNOztBQUFkLEdBQTlCLEVBQThDLENBQTlDO0FBQWlELE1BQUlPLElBQUo7QUFBU1YsU0FBTyxDQUFDQyxJQUFSLENBQWEsc0JBQWIsRUFBb0M7QUFBQ1MsUUFBSSxDQUFDUCxDQUFELEVBQUc7QUFBQ08sVUFBSSxHQUFDUCxDQUFM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WUFBUCxJQUF1Qm5DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFuQyw4QkFBK0N0RCxNQUFNLENBQUMrQixRQUFQLENBQWdCbUIsUUFBL0QsbURBQStDLHVCQUEwQkMsS0FBN0UsRUFBb0Y7QUFDbEYsWUFBTTNCLFNBQVMsR0FBR3dCLFlBQVksRUFBOUI7QUFDQTRCLGNBQVEsQ0FBQ3BELFNBQUQsRUFBWTJELE9BQVosQ0FBUjtBQUNBO0FBQ0Q7O0FBQ0RwQixlQUFXLENBQUNvQixPQUFELENBQVg7QUFDRCxHQXhCRCIsImZpbGUiOiIvcGFja2FnZXMvZW1haWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IExvZyB9IGZyb20gJ21ldGVvci9sb2dnaW5nJztcbmltcG9ydCB7IEhvb2sgfSBmcm9tICdtZXRlb3IvY2FsbGJhY2staG9vayc7XG5cbmltcG9ydCBGdXR1cmUgZnJvbSAnZmliZXJzL2Z1dHVyZSc7XG5pbXBvcnQgdXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcbmltcG9ydCB3ZWxsS25vdyBmcm9tICdub2RlbWFpbGVyL2xpYi93ZWxsLWtub3duJztcblxuZXhwb3J0IGNvbnN0IEVtYWlsID0ge307XG5leHBvcnQgY29uc3QgRW1haWxUZXN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBFbWFpbEludGVybmFscyA9IHtcbiAgTnBtTW9kdWxlczoge1xuICAgIG1haWxjb21wb3Nlcjoge1xuICAgICAgdmVyc2lvbjogTnBtLnJlcXVpcmUoJ25vZGVtYWlsZXIvcGFja2FnZS5qc29uJykudmVyc2lvbixcbiAgICAgIG1vZHVsZTogTnBtLnJlcXVpcmUoJ25vZGVtYWlsZXIvbGliL21haWwtY29tcG9zZXInKVxuICAgIH0sXG4gICAgbm9kZW1haWxlcjoge1xuICAgICAgdmVyc2lvbjogTnBtLnJlcXVpcmUoJ25vZGVtYWlsZXIvcGFja2FnZS5qc29uJykudmVyc2lvbixcbiAgICAgIG1vZHVsZTogTnBtLnJlcXVpcmUoJ25vZGVtYWlsZXInKVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgTWFpbENvbXBvc2VyID0gRW1haWxJbnRlcm5hbHMuTnBtTW9kdWxlcy5tYWlsY29tcG9zZXIubW9kdWxlO1xuXG5jb25zdCBtYWtlVHJhbnNwb3J0ID0gZnVuY3Rpb24gKG1haWxVcmxTdHJpbmcpIHtcbiAgY29uc3QgbWFpbFVybCA9IG5ldyBVUkwobWFpbFVybFN0cmluZyk7XG5cbiAgaWYgKG1haWxVcmwucHJvdG9jb2wgIT09ICdzbXRwOicgJiYgbWFpbFVybC5wcm90b2NvbCAhPT0gJ3NtdHBzOicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbWFpbCBwcm90b2NvbCBpbiAkTUFJTF9VUkwgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgbWFpbFVybFN0cmluZyArIFwiKSBtdXN0IGJlICdzbXRwJyBvciAnc210cHMnXCIpO1xuICB9XG5cbiAgaWYgKG1haWxVcmwucHJvdG9jb2wgPT09ICdzbXRwOicgJiYgbWFpbFVybC5wb3J0ID09PSAnNDY1Jykge1xuICAgIExvZy5kZWJ1ZyhcIlRoZSAkTUFJTF9VUkwgaXMgJ3NtdHA6Ly8uLi46NDY1Jy4gIFwiICtcbiAgICAgICAgICAgICAgXCJZb3UgcHJvYmFibHkgd2FudCAnc210cHM6Ly8nIChUaGUgJ3MnIGVuYWJsZXMgVExTL1NTTCkgXCIgK1xuICAgICAgICAgICAgICBcInNpbmNlICc0NjUnIGlzIHR5cGljYWxseSBhIHNlY3VyZSBwb3J0LlwiKTtcbiAgfVxuXG4gIC8vIEFsbG93IG92ZXJyaWRpbmcgcG9vbCBzZXR0aW5nLCBidXQgZGVmYXVsdCB0byB0cnVlLlxuICBpZiAoIW1haWxVcmwucXVlcnkpIHtcbiAgICBtYWlsVXJsLnF1ZXJ5ID0ge307XG4gIH1cblxuICBpZiAoIW1haWxVcmwucXVlcnkucG9vbCkge1xuICAgIG1haWxVcmwucXVlcnkucG9vbCA9ICd0cnVlJztcbiAgfVxuXG4gIGNvbnN0IHRyYW5zcG9ydCA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHVybC5mb3JtYXQobWFpbFVybCkpO1xuXG4gIHRyYW5zcG9ydC5fc3luY1NlbmRNYWlsID0gTWV0ZW9yLndyYXBBc3luYyh0cmFuc3BvcnQuc2VuZE1haWwsIHRyYW5zcG9ydCk7XG4gIHJldHVybiB0cmFuc3BvcnQ7XG59O1xuXG4vLyBNb3JlIGluZm86IGh0dHBzOi8vbm9kZW1haWxlci5jb20vc210cC93ZWxsLWtub3duL1xuY29uc3Qga25vd25Ib3N0c1RyYW5zcG9ydCA9IGZ1bmN0aW9uKHNldHRpbmdzID0gdW5kZWZpbmVkLCB1cmwgPSB1bmRlZmluZWQpIHtcbiAgbGV0IHNlcnZpY2UsIHVzZXIsIHBhc3N3b3JkO1xuICBpZiAodXJsICYmICFzZXR0aW5ncykge1xuICAgIGxldCBob3N0ID0gdXJsLnNwbGl0KCc6JylbMF07XG4gICAgY29uc3QgdXJsT2JqZWN0ID0gbmV3IFVSTCh1cmwpO1xuICAgIGlmIChob3N0ID09PSAnaHR0cCcgfHwgaG9zdCA9PT0gJ2h0dHBzJykge1xuICAgICAgLy8gTG9vayB0byBob3N0bmFtZSBmb3Igc2VydmljZVxuICAgICAgaG9zdCA9IHVybE9iamVjdC5ob3N0bmFtZTtcbiAgICAgIHVzZXIgPSB1cmxPYmplY3QudXNlcm5hbWU7XG4gICAgICBwYXNzd29yZCA9IHVybE9iamVjdC5wYXNzd29yZDtcbiAgICB9IGVsc2UgaWYgKHVybE9iamVjdC5wcm90b2NvbCAmJiB1cmxPYmplY3QudXNlcm5hbWUgJiYgdXJsT2JqZWN0LnBhc3N3b3JkKSB7XG4gICAgICAvLyBXZSBoYXZlIHNvbWUgZGF0YSBmcm9tIHVybE9iamVjdFxuICAgICAgaG9zdCA9IHVybE9iamVjdC5wcm90b2NvbC5zcGxpdCgnOicpWzBdO1xuICAgICAgdXNlciA9IHVybE9iamVjdC51c2VybmFtZTtcbiAgICAgIHBhc3N3b3JkID0gdXJsT2JqZWN0LnBhc3N3b3JkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIGRpc2VjdCB0aGUgVVJMIG91cnNlbHZlcyB0byBnZXQgdGhlIGRhdGFcbiAgICAgIC8vIEZpcnN0IGdldCByaWQgb2YgdGhlIGxlYWRpbmcgJy8vJyBhbmQgc3BsaXQgdG8gdXNlcm5hbWUgYW5kIHRoZSByZXN0XG4gICAgICBjb25zdCB0ZW1wID0gdXJsT2JqZWN0LnBhdGhuYW1lLnN1YnN0cmluZygyKT8uc3BsaXQoJzonKTtcbiAgICAgIHVzZXIgPSB0ZW1wWzBdO1xuICAgICAgLy8gTm93IHdlIHNwbGl0IGJ5ICdAJyB0byBnZXQgcGFzc3dvcmQgYW5kIGhvc3RuYW1lXG4gICAgICBjb25zdCB0ZW1wMiA9IHRlbXBbMV0uc3BsaXQoJ0AnKTtcbiAgICAgIHBhc3N3b3JkID0gdGVtcDJbMF07XG4gICAgICBob3N0ID0gdGVtcDJbMV07XG4gICAgfVxuICAgIHNlcnZpY2UgPSBob3N0O1xuICB9XG5cbiAgaWYgKCF3ZWxsS25vdyhzZXR0aW5ncz8uc2VydmljZSB8fCBzZXJ2aWNlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHJlY29nbml6ZSBlLW1haWwgc2VydmljZS4gU2VlIGxpc3QgYXQgaHR0cHM6Ly9ub2RlbWFpbGVyLmNvbS9zbXRwL3dlbGwta25vd24vIGZvciBzZXJ2aWNlcyB0aGF0IHdlIGNhbiBjb25maWd1cmUgZm9yIHlvdS4nKTtcbiAgfVxuXG4gIGNvbnN0IHRyYW5zcG9ydCA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICBzZXJ2aWNlOiBzZXR0aW5ncz8uc2VydmljZSB8fCBzZXJ2aWNlLFxuICAgIGF1dGg6IHtcbiAgICAgIHVzZXI6IHNldHRpbmdzPy51c2VyIHx8IHVzZXIsXG4gICAgICBwYXNzOiBzZXR0aW5ncz8ucGFzc3dvcmQgfHwgcGFzc3dvcmRcbiAgICB9XG4gIH0pO1xuXG4gIHRyYW5zcG9ydC5fc3luY1NlbmRNYWlsID0gTWV0ZW9yLndyYXBBc3luYyh0cmFuc3BvcnQuc2VuZE1haWwsIHRyYW5zcG9ydCk7XG4gIHJldHVybiB0cmFuc3BvcnQ7XG59O1xuRW1haWxUZXN0Lmtub3dIb3N0c1RyYW5zcG9ydCA9IGtub3duSG9zdHNUcmFuc3BvcnQ7XG5cbmNvbnN0IGdldFRyYW5zcG9ydCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBwYWNrYWdlU2V0dGluZ3MgPSBNZXRlb3Iuc2V0dGluZ3MucGFja2FnZXM/LmVtYWlsIHx8IHt9O1xuICAvLyBXZSBkZWxheSB0aGlzIGNoZWNrIHVudGlsIHRoZSBmaXJzdCBjYWxsIHRvIEVtYWlsLnNlbmQsIGluIGNhc2Ugc29tZW9uZVxuICAvLyBzZXQgcHJvY2Vzcy5lbnYuTUFJTF9VUkwgaW4gc3RhcnR1cCBjb2RlLiBUaGVuIHdlIHN0b3JlIGluIGEgY2FjaGUgdW50aWxcbiAgLy8gcHJvY2Vzcy5lbnYuTUFJTF9VUkwgY2hhbmdlcy5cbiAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuTUFJTF9VUkw7XG4gIGlmICh0aGlzLmNhY2hlS2V5ID09PSB1bmRlZmluZWQgfHwgKHRoaXMuY2FjaGVLZXkgIT09IHVybCB8fCB0aGlzLmNhY2hlS2V5ICE9PSBwYWNrYWdlU2V0dGluZ3M/LnNlcnZpY2UgfHwgJ3NldHRpbmdzJykpIHtcbiAgICBpZiAoKHBhY2thZ2VTZXR0aW5ncz8uc2VydmljZSAmJiB3ZWxsS25vdyhwYWNrYWdlU2V0dGluZ3Muc2VydmljZSkpIHx8ICh1cmwgJiYgd2VsbEtub3cobmV3IFVSTCh1cmwpLmhvc3RuYW1lKSB8fCB3ZWxsS25vdyh1cmw/LnNwbGl0KCc6JylbMF0gfHwgJycpKSkge1xuICAgICAgdGhpcy5jYWNoZUtleSA9IHBhY2thZ2VTZXR0aW5ncy5zZXJ2aWNlIHx8ICdzZXR0aW5ncyc7XG4gICAgICB0aGlzLmNhY2hlID0ga25vd25Ib3N0c1RyYW5zcG9ydChwYWNrYWdlU2V0dGluZ3MsIHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FjaGVLZXkgPSB1cmw7XG4gICAgICB0aGlzLmNhY2hlID0gdXJsID8gbWFrZVRyYW5zcG9ydCh1cmwsIHBhY2thZ2VTZXR0aW5ncykgOiBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcy5jYWNoZTtcbn07XG5cbmxldCBuZXh0RGV2TW9kZU1haWxJZCA9IDA7XG5sZXQgb3V0cHV0X3N0cmVhbSA9IHByb2Nlc3Muc3Rkb3V0O1xuXG4vLyBUZXN0aW5nIGhvb2tzXG5FbWFpbFRlc3Qub3ZlcnJpZGVPdXRwdXRTdHJlYW0gPSBmdW5jdGlvbiAoc3RyZWFtKSB7XG4gIG5leHREZXZNb2RlTWFpbElkID0gMDtcbiAgb3V0cHV0X3N0cmVhbSA9IHN0cmVhbTtcbn07XG5cbkVtYWlsVGVzdC5yZXN0b3JlT3V0cHV0U3RyZWFtID0gZnVuY3Rpb24gKCkge1xuICBvdXRwdXRfc3RyZWFtID0gcHJvY2Vzcy5zdGRvdXQ7XG59O1xuXG5jb25zdCBkZXZNb2RlU2VuZCA9IGZ1bmN0aW9uIChtYWlsKSB7XG4gIGxldCBkZXZNb2RlTWFpbElkID0gbmV4dERldk1vZGVNYWlsSWQrKztcblxuICBjb25zdCBzdHJlYW0gPSBvdXRwdXRfc3RyZWFtO1xuXG4gIC8vIFRoaXMgYXBwcm9hY2ggZG9lcyBub3QgcHJldmVudCBvdGhlciB3cml0ZXJzIHRvIHN0ZG91dCBmcm9tIGludGVybGVhdmluZy5cbiAgc3RyZWFtLndyaXRlKFwiPT09PT09IEJFR0lOIE1BSUwgI1wiICsgZGV2TW9kZU1haWxJZCArIFwiID09PT09PVxcblwiKTtcbiAgc3RyZWFtLndyaXRlKFwiKE1haWwgbm90IHNlbnQ7IHRvIGVuYWJsZSBzZW5kaW5nLCBzZXQgdGhlIE1BSUxfVVJMIFwiICtcbiAgICAgICAgICAgICAgIFwiZW52aXJvbm1lbnQgdmFyaWFibGUuKVxcblwiKTtcbiAgY29uc3QgcmVhZFN0cmVhbSA9IG5ldyBNYWlsQ29tcG9zZXIobWFpbCkuY29tcGlsZSgpLmNyZWF0ZVJlYWRTdHJlYW0oKTtcbiAgcmVhZFN0cmVhbS5waXBlKHN0cmVhbSwge2VuZDogZmFsc2V9KTtcbiAgY29uc3QgZnV0dXJlID0gbmV3IEZ1dHVyZTtcbiAgcmVhZFN0cmVhbS5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgIHN0cmVhbS53cml0ZShcIj09PT09PSBFTkQgTUFJTCAjXCIgKyBkZXZNb2RlTWFpbElkICsgXCIgPT09PT09XFxuXCIpO1xuICAgIGZ1dHVyZS5yZXR1cm4oKTtcbiAgfSk7XG4gIGZ1dHVyZS53YWl0KCk7XG59O1xuXG5jb25zdCBzbXRwU2VuZCA9IGZ1bmN0aW9uICh0cmFuc3BvcnQsIG1haWwpIHtcbiAgdHJhbnNwb3J0Ll9zeW5jU2VuZE1haWwobWFpbCk7XG59O1xuXG5jb25zdCBzZW5kSG9va3MgPSBuZXcgSG9vaygpO1xuXG4vKipcbiAqIEBzdW1tYXJ5IEhvb2sgdGhhdCBydW5zIGJlZm9yZSBlbWFpbCBpcyBzZW50LlxuICogQGxvY3VzIFNlcnZlclxuICpcbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gcmVjZWl2ZXMgdGhlIGFyZ3VtZW50cyB0byBFbWFpbC5zZW5kIGFuZCBzaG91bGQgcmV0dXJuIHRydWUgdG8gZ29cbiAqIGFoZWFkIGFuZCBzZW5kIHRoZSBlbWFpbCAob3IgYXQgbGVhc3QsIHRyeSBzdWJzZXF1ZW50IGhvb2tzKSwgb3JcbiAqIGZhbHNlIHRvIHNraXAgc2VuZGluZy5cbiAqIEByZXR1cm5zIHt7IHN0b3A6IGZ1bmN0aW9uLCBjYWxsYmFjazogZnVuY3Rpb24gfX1cbiAqL1xuRW1haWwuaG9va1NlbmQgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gc2VuZEhvb2tzLnJlZ2lzdGVyKGYpO1xufTtcblxuLyoqXG4gKiBAc3VtbWFyeSBPdmVycmlkZXMgc2VuZGluZyBmdW5jdGlvbiB3aXRoIHlvdXIgb3duLlxuICogQGxvY3VzIFNlcnZlclxuICogQHNpbmNlIDIuMlxuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVjZWl2ZSBvcHRpb25zIGZyb20gdGhlIHNlbmQgZnVuY3Rpb24gYW5kIHVuZGVyIGBwYWNrYWdlU2V0dGluZ3NgIHdpbGxcbiAqIGluY2x1ZGUgdGhlIHBhY2thZ2Ugc2V0dGluZ3MgZnJvbSBNZXRlb3Iuc2V0dGluZ3MucGFja2FnZXMuZW1haWwgZm9yIHlvdXIgY3VzdG9tIHRyYW5zcG9ydCB0byBhY2Nlc3MuXG4gKi9cbkVtYWlsLmN1c3RvbVRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBAc3VtbWFyeSBTZW5kIGFuIGVtYWlsLiBUaHJvd3MgYW4gYEVycm9yYCBvbiBmYWlsdXJlIHRvIGNvbnRhY3QgbWFpbCBzZXJ2ZXJcbiAqIG9yIGlmIG1haWwgc2VydmVyIHJldHVybnMgYW4gZXJyb3IuIEFsbCBmaWVsZHMgc2hvdWxkIG1hdGNoXG4gKiBbUkZDNTMyMl0oaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMikgc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBJZiB0aGUgYE1BSUxfVVJMYCBlbnZpcm9ubWVudCB2YXJpYWJsZSBpcyBzZXQsIGFjdHVhbGx5IHNlbmRzIHRoZSBlbWFpbC5cbiAqIE90aGVyd2lzZSwgcHJpbnRzIHRoZSBjb250ZW50cyBvZiB0aGUgZW1haWwgdG8gc3RhbmRhcmQgb3V0LlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIHBhY2thZ2UgaXMgYmFzZWQgb24gKipub2RlbWFpbGVyKiosIHNvIG1ha2Ugc3VyZSB0byByZWZlciB0b1xuICogW3RoZSBkb2N1bWVudGF0aW9uXShodHRwOi8vbm9kZW1haWxlci5jb20vKVxuICogd2hlbiB1c2luZyB0aGUgYGF0dGFjaG1lbnRzYCBvciBgbWFpbENvbXBvc2VyYCBvcHRpb25zLlxuICpcbiAqIEBsb2N1cyBTZXJ2ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZnJvbV0gXCJGcm9tOlwiIGFkZHJlc3MgKHJlcXVpcmVkKVxuICogQHBhcmFtIHtTdHJpbmd8U3RyaW5nW119IG9wdGlvbnMudG8sY2MsYmNjLHJlcGx5VG9cbiAqICAgXCJUbzpcIiwgXCJDYzpcIiwgXCJCY2M6XCIsIGFuZCBcIlJlcGx5LVRvOlwiIGFkZHJlc3Nlc1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmluUmVwbHlUb10gTWVzc2FnZS1JRCB0aGlzIG1lc3NhZ2UgaXMgcmVwbHlpbmcgdG9cbiAqIEBwYXJhbSB7U3RyaW5nfFN0cmluZ1tdfSBbb3B0aW9ucy5yZWZlcmVuY2VzXSBBcnJheSAob3Igc3BhY2Utc2VwYXJhdGVkIHN0cmluZykgb2YgTWVzc2FnZS1JRHMgdG8gcmVmZXIgdG9cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5tZXNzYWdlSWRdIE1lc3NhZ2UtSUQgZm9yIHRoaXMgbWVzc2FnZTsgb3RoZXJ3aXNlLCB3aWxsIGJlIHNldCB0byBhIHJhbmRvbSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnN1YmplY3RdICBcIlN1YmplY3Q6XCIgbGluZVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnRleHR8aHRtbF0gTWFpbCBib2R5IChpbiBwbGFpbiB0ZXh0IGFuZC9vciBIVE1MKVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLndhdGNoSHRtbF0gTWFpbCBib2R5IGluIEhUTUwgc3BlY2lmaWMgZm9yIEFwcGxlIFdhdGNoXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWNhbEV2ZW50XSBpQ2FsZW5kYXIgZXZlbnQgYXR0YWNobWVudFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmhlYWRlcnNdIERpY3Rpb25hcnkgb2YgY3VzdG9tIGhlYWRlcnMgLSBlLmcuIGB7IFwiaGVhZGVyIG5hbWVcIjogXCJoZWFkZXIgdmFsdWVcIiB9YC4gVG8gc2V0IGFuIG9iamVjdCB1bmRlciBhIGhlYWRlciBuYW1lLCB1c2UgYEpTT04uc3RyaW5naWZ5YCAtIGUuZy4gYHsgXCJoZWFkZXIgbmFtZVwiOiBKU09OLnN0cmluZ2lmeSh7IHRyYWNraW5nOiB7IGxldmVsOiAnZnVsbCcgfSB9KSB9YC5cbiAqIEBwYXJhbSB7T2JqZWN0W119IFtvcHRpb25zLmF0dGFjaG1lbnRzXSBBcnJheSBvZiBhdHRhY2htZW50IG9iamVjdHMsIGFzXG4gKiBkZXNjcmliZWQgaW4gdGhlIFtub2RlbWFpbGVyIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vbm9kZW1haWxlci5jb20vbWVzc2FnZS9hdHRhY2htZW50cy8pLlxuICogQHBhcmFtIHtNYWlsQ29tcG9zZXJ9IFtvcHRpb25zLm1haWxDb21wb3Nlcl0gQSBbTWFpbENvbXBvc2VyXShodHRwczovL25vZGVtYWlsZXIuY29tL2V4dHJhcy9tYWlsY29tcG9zZXIvI2UtbWFpbC1tZXNzYWdlLWZpZWxkcylcbiAqIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG1lc3NhZ2UgdG8gYmUgc2VudC4gIE92ZXJyaWRlcyBhbGwgb3RoZXIgb3B0aW9ucy5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgYE1haWxDb21wb3NlcmAgb2JqZWN0IHZpYVxuICogYG5ldyBFbWFpbEludGVybmFscy5OcG1Nb2R1bGVzLm1haWxjb21wb3Nlci5tb2R1bGVgLlxuICovXG5FbWFpbC5zZW5kID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMubWFpbENvbXBvc2VyKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMubWFpbENvbXBvc2VyLm1haWw7XG4gIH1cblxuICBsZXQgc2VuZCA9IHRydWU7XG4gIHNlbmRIb29rcy5lYWNoKGhvb2sgPT4ge1xuICAgIHNlbmQgPSBob29rKG9wdGlvbnMpO1xuICAgIHJldHVybiBzZW5kO1xuICB9KTtcbiAgaWYgKCFzZW5kKSByZXR1cm47XG5cbiAgY29uc3QgY3VzdG9tVHJhbnNwb3J0ID0gRW1haWwuY3VzdG9tVHJhbnNwb3J0O1xuICBpZiAoY3VzdG9tVHJhbnNwb3J0KSB7XG4gICAgY29uc3QgcGFja2FnZVNldHRpbmdzID0gTWV0ZW9yLnNldHRpbmdzLnBhY2thZ2VzPy5lbWFpbCB8fCB7fTtcbiAgICBjdXN0b21UcmFuc3BvcnQoeyBwYWNrYWdlU2V0dGluZ3MsIC4uLm9wdGlvbnMgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChNZXRlb3IuaXNQcm9kdWN0aW9uIHx8IHByb2Nlc3MuZW52Lk1BSUxfVVJMIHx8IE1ldGVvci5zZXR0aW5ncy5wYWNrYWdlcz8uZW1haWwpIHtcbiAgICBjb25zdCB0cmFuc3BvcnQgPSBnZXRUcmFuc3BvcnQoKTtcbiAgICBzbXRwU2VuZCh0cmFuc3BvcnQsIG9wdGlvbnMpO1xuICAgIHJldHVybjtcbiAgfVxuICBkZXZNb2RlU2VuZChvcHRpb25zKTtcbn07XG4iXX0=
