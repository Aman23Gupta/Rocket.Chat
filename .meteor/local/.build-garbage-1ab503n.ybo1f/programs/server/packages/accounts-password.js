(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Accounts = Package['accounts-base'].Accounts;
var SHA256 = Package.sha.SHA256;
var EJSON = Package.ejson.EJSON;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var Email = Package.email.Email;
var EmailInternals = Package.email.EmailInternals;
var Random = Package.random.Random;
var check = Package.check.check;
var Match = Package.check.Match;
var ECMAScript = Package.ecmascript.ECMAScript;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"accounts-password":{"email_templates.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-password/email_templates.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);

const greet = welcomeMsg => (user, url) => {
  const greeting = user.profile && user.profile.name ? "Hello ".concat(user.profile.name, ",") : 'Hello,';
  return "".concat(greeting, "\n\n").concat(welcomeMsg, ", simply click the link below.\n\n").concat(url, "\n\nThank you.\n");
};
/**
 * @summary Options to customize emails sent from the Accounts system.
 * @locus Server
 * @importFromPackage accounts-base
 */


Accounts.emailTemplates = _objectSpread(_objectSpread({}, Accounts.emailTemplates || {}), {}, {
  from: 'Accounts Example <no-reply@example.com>',
  siteName: Meteor.absoluteUrl().replace(/^https?:\/\//, '').replace(/\/$/, ''),
  resetPassword: {
    subject: () => "How to reset your password on ".concat(Accounts.emailTemplates.siteName),
    text: greet('To reset your password')
  },
  verifyEmail: {
    subject: () => "How to verify email address on ".concat(Accounts.emailTemplates.siteName),
    text: greet('To verify your account email')
  },
  enrollAccount: {
    subject: () => "An account has been created for you on ".concat(Accounts.emailTemplates.siteName),
    text: greet('To start using the service')
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"password_server.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-password/password_server.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let bcrypt;
module.link("bcrypt", {
  default(v) {
    bcrypt = v;
  }

}, 0);
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 1);
const bcryptHash = Meteor.wrapAsync(bcrypt.hash);
const bcryptCompare = Meteor.wrapAsync(bcrypt.compare); // Utility for grabbing user

const getUserById = (id, options) => Meteor.users.findOne(id, Accounts._addDefaultFieldSelector(options)); // User records have a 'services.password.bcrypt' field on them to hold
// their hashed passwords.
//
// When the client sends a password to the server, it can either be a
// string (the plaintext password) or an object with keys 'digest' and
// 'algorithm' (must be "sha-256" for now). The Meteor client always sends
// password objects { digest: *, algorithm: "sha-256" }, but DDP clients
// that don't have access to SHA can just send plaintext passwords as
// strings.
//
// When the server receives a plaintext password as a string, it always
// hashes it with SHA256 before passing it into bcrypt. When the server
// receives a password as an object, it asserts that the algorithm is
// "sha-256" and then passes the digest to bcrypt.


Accounts._bcryptRounds = () => Accounts._options.bcryptRounds || 10; // Given a 'password' from the client, extract the string that we should
// bcrypt. 'password' can be one of:
//  - String (the plaintext password)
//  - Object with 'digest' and 'algorithm' keys. 'algorithm' must be "sha-256".
//


const getPasswordString = password => {
  if (typeof password === "string") {
    password = SHA256(password);
  } else {
    // 'password' is an object
    if (password.algorithm !== "sha-256") {
      throw new Error("Invalid password hash algorithm. " + "Only 'sha-256' is allowed.");
    }

    password = password.digest;
  }

  return password;
}; // Use bcrypt to hash the password for storage in the database.
// `password` can be a string (in which case it will be run through
// SHA256 before bcrypt) or an object with properties `digest` and
// `algorithm` (in which case we bcrypt `password.digest`).
//


const hashPassword = password => {
  password = getPasswordString(password);
  return bcryptHash(password, Accounts._bcryptRounds());
}; // Extract the number of rounds used in the specified bcrypt hash.


const getRoundsFromBcryptHash = hash => {
  let rounds;

  if (hash) {
    const hashSegments = hash.split('$');

    if (hashSegments.length > 2) {
      rounds = parseInt(hashSegments[2], 10);
    }
  }

  return rounds;
}; // Check whether the provided password matches the bcrypt'ed password in
// the database user record. `password` can be a string (in which case
// it will be run through SHA256 before bcrypt) or an object with
// properties `digest` and `algorithm` (in which case we bcrypt
// `password.digest`).
//
// The user parameter needs at least user._id and user.services


Accounts._checkPasswordUserFields = {
  _id: 1,
  services: 1
}; //

Accounts._checkPassword = (user, password) => {
  const result = {
    userId: user._id
  };
  const formattedPassword = getPasswordString(password);
  const hash = user.services.password.bcrypt;
  const hashRounds = getRoundsFromBcryptHash(hash);

  if (!bcryptCompare(formattedPassword, hash)) {
    result.error = Accounts._handleError("Incorrect password", false);
  } else if (hash && Accounts._bcryptRounds() != hashRounds) {
    // The password checks out, but the user's bcrypt hash needs to be updated.
    Meteor.defer(() => {
      Meteor.users.update({
        _id: user._id
      }, {
        $set: {
          'services.password.bcrypt': bcryptHash(formattedPassword, Accounts._bcryptRounds())
        }
      });
    });
  }

  return result;
};

const checkPassword = Accounts._checkPassword; ///
/// LOGIN
///

/**
 * @summary Finds the user with the specified username.
 * First tries to match username case sensitively; if that fails, it
 * tries case insensitively; but if more than one user matches the case
 * insensitive search, it returns null.
 * @locus Server
 * @param {String} username The username to look for
 * @param {Object} [options]
 * @param {MongoFieldSpecifier} options.fields Dictionary of fields to return or exclude.
 * @returns {Object} A user if found, else null
 * @importFromPackage accounts-base
 */

Accounts.findUserByUsername = (username, options) => Accounts._findUserByQuery({
  username
}, options);
/**
 * @summary Finds the user with the specified email.
 * First tries to match email case sensitively; if that fails, it
 * tries case insensitively; but if more than one user matches the case
 * insensitive search, it returns null.
 * @locus Server
 * @param {String} email The email address to look for
 * @param {Object} [options]
 * @param {MongoFieldSpecifier} options.fields Dictionary of fields to return or exclude.
 * @returns {Object} A user if found, else null
 * @importFromPackage accounts-base
 */


Accounts.findUserByEmail = (email, options) => Accounts._findUserByQuery({
  email
}, options); // XXX maybe this belongs in the check package


const NonEmptyString = Match.Where(x => {
  check(x, String);
  return x.length > 0;
});
const passwordValidator = Match.OneOf(Match.Where(str => {
  var _Meteor$settings, _Meteor$settings$pack, _Meteor$settings$pack2;

  return Match.test(str, String) && str.length <= ((_Meteor$settings = Meteor.settings) === null || _Meteor$settings === void 0 ? void 0 : (_Meteor$settings$pack = _Meteor$settings.packages) === null || _Meteor$settings$pack === void 0 ? void 0 : (_Meteor$settings$pack2 = _Meteor$settings$pack.accounts) === null || _Meteor$settings$pack2 === void 0 ? void 0 : _Meteor$settings$pack2.passwordMaxLength) || 256;
}), {
  digest: Match.Where(str => Match.test(str, String) && str.length === 64),
  algorithm: Match.OneOf('sha-256')
}); // Handler to login with a password.
//
// The Meteor client sets options.password to an object with keys
// 'digest' (set to SHA256(password)) and 'algorithm' ("sha-256").
//
// For other DDP clients which don't have access to SHA, the handler
// also accepts the plaintext password in options.password as a string.
//
// (It might be nice if servers could turn the plaintext password
// option off. Or maybe it should be opt-in, not opt-out?
// Accounts.config option?)
//
// Note that neither password option is secure without SSL.
//

Accounts.registerLoginHandler("password", options => {
  if (!options.password) return undefined; // don't handle

  check(options, {
    user: Accounts._userQueryValidator,
    password: passwordValidator
  });

  const user = Accounts._findUserByQuery(options.user, {
    fields: _objectSpread({
      services: 1
    }, Accounts._checkPasswordUserFields)
  });

  if (!user) {
    Accounts._handleError("User not found");
  }

  if (!user.services || !user.services.password || !user.services.password.bcrypt) {
    Accounts._handleError("User has no password set");
  }

  return checkPassword(user, options.password);
}); ///
/// CHANGING
///

/**
 * @summary Change a user's username. Use this instead of updating the
 * database directly. The operation will fail if there is an existing user
 * with a username only differing in case.
 * @locus Server
 * @param {String} userId The ID of the user to update.
 * @param {String} newUsername A new username for the user.
 * @importFromPackage accounts-base
 */

Accounts.setUsername = (userId, newUsername) => {
  check(userId, NonEmptyString);
  check(newUsername, NonEmptyString);
  const user = getUserById(userId, {
    fields: {
      username: 1
    }
  });

  if (!user) {
    Accounts._handleError("User not found");
  }

  const oldUsername = user.username; // Perform a case insensitive check for duplicates before update

  Accounts._checkForCaseInsensitiveDuplicates('username', 'Username', newUsername, user._id);

  Meteor.users.update({
    _id: user._id
  }, {
    $set: {
      username: newUsername
    }
  }); // Perform another check after update, in case a matching user has been
  // inserted in the meantime

  try {
    Accounts._checkForCaseInsensitiveDuplicates('username', 'Username', newUsername, user._id);
  } catch (ex) {
    // Undo update if the check fails
    Meteor.users.update({
      _id: user._id
    }, {
      $set: {
        username: oldUsername
      }
    });
    throw ex;
  }
}; // Let the user change their own password if they know the old
// password. `oldPassword` and `newPassword` should be objects with keys
// `digest` and `algorithm` (representing the SHA256 of the password).


Meteor.methods({
  changePassword: function (oldPassword, newPassword) {
    check(oldPassword, passwordValidator);
    check(newPassword, passwordValidator);

    if (!this.userId) {
      throw new Meteor.Error(401, "Must be logged in");
    }

    const user = getUserById(this.userId, {
      fields: _objectSpread({
        services: 1
      }, Accounts._checkPasswordUserFields)
    });

    if (!user) {
      Accounts._handleError("User not found");
    }

    if (!user.services || !user.services.password || !user.services.password.bcrypt) {
      Accounts._handleError("User has no password set");
    }

    const result = checkPassword(user, oldPassword);

    if (result.error) {
      throw result.error;
    }

    const hashed = hashPassword(newPassword); // It would be better if this removed ALL existing tokens and replaced
    // the token for the current connection with a new one, but that would
    // be tricky, so we'll settle for just replacing all tokens other than
    // the one for the current connection.

    const currentToken = Accounts._getLoginToken(this.connection.id);

    Meteor.users.update({
      _id: this.userId
    }, {
      $set: {
        'services.password.bcrypt': hashed
      },
      $pull: {
        'services.resume.loginTokens': {
          hashedToken: {
            $ne: currentToken
          }
        }
      },
      $unset: {
        'services.password.reset': 1
      }
    });
    return {
      passwordChanged: true
    };
  }
}); // Force change the users password.

/**
 * @summary Forcibly change the password for a user.
 * @locus Server
 * @param {String} userId The id of the user to update.
 * @param {String} newPassword A new password for the user.
 * @param {Object} [options]
 * @param {Object} options.logout Logout all current connections with this userId (default: true)
 * @importFromPackage accounts-base
 */

Accounts.setPassword = (userId, newPlaintextPassword, options) => {
  check(userId, String);
  check(newPlaintextPassword, Match.Where(str => {
    var _Meteor$settings2, _Meteor$settings2$pac, _Meteor$settings2$pac2;

    return Match.test(str, String) && str.length <= ((_Meteor$settings2 = Meteor.settings) === null || _Meteor$settings2 === void 0 ? void 0 : (_Meteor$settings2$pac = _Meteor$settings2.packages) === null || _Meteor$settings2$pac === void 0 ? void 0 : (_Meteor$settings2$pac2 = _Meteor$settings2$pac.accounts) === null || _Meteor$settings2$pac2 === void 0 ? void 0 : _Meteor$settings2$pac2.passwordMaxLength) || 256;
  }));
  check(options, Match.Maybe({
    logout: Boolean
  }));
  options = _objectSpread({
    logout: true
  }, options);
  const user = getUserById(userId, {
    fields: {
      _id: 1
    }
  });

  if (!user) {
    throw new Meteor.Error(403, "User not found");
  }

  const update = {
    $unset: {
      'services.password.reset': 1
    },
    $set: {
      'services.password.bcrypt': hashPassword(newPlaintextPassword)
    }
  };

  if (options.logout) {
    update.$unset['services.resume.loginTokens'] = 1;
  }

  Meteor.users.update({
    _id: user._id
  }, update);
}; ///
/// RESETTING VIA EMAIL
///
// Utility for plucking addresses from emails


const pluckAddresses = function () {
  let emails = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return emails.map(email => email.address);
}; // Method called by a user to request a password reset email. This is
// the start of the reset process.


Meteor.methods({
  forgotPassword: options => {
    check(options, {
      email: String
    });
    const user = Accounts.findUserByEmail(options.email, {
      fields: {
        emails: 1
      }
    });

    if (!user) {
      Accounts._handleError("User not found");
    }

    const emails = pluckAddresses(user.emails);
    const caseSensitiveEmail = emails.find(email => email.toLowerCase() === options.email.toLowerCase());
    Accounts.sendResetPasswordEmail(user._id, caseSensitiveEmail);
  }
});
/**
 * @summary Generates a reset token and saves it into the database.
 * @locus Server
 * @param {String} userId The id of the user to generate the reset token for.
 * @param {String} email Which address of the user to generate the reset token for. This address must be in the user's `emails` list. If `null`, defaults to the first email in the list.
 * @param {String} reason `resetPassword` or `enrollAccount`.
 * @param {Object} [extraTokenData] Optional additional data to be added into the token record.
 * @returns {Object} Object with {email, user, token} values.
 * @importFromPackage accounts-base
 */

Accounts.generateResetToken = (userId, email, reason, extraTokenData) => {
  // Make sure the user exists, and email is one of their addresses.
  // Don't limit the fields in the user object since the user is returned
  // by the function and some other fields might be used elsewhere.
  const user = getUserById(userId);

  if (!user) {
    Accounts._handleError("Can't find user");
  } // pick the first email if we weren't passed an email.


  if (!email && user.emails && user.emails[0]) {
    email = user.emails[0].address;
  } // make sure we have a valid email


  if (!email || !pluckAddresses(user.emails).includes(email)) {
    Accounts._handleError("No such email for user.");
  }

  const token = Random.secret();
  const tokenRecord = {
    token,
    email,
    when: new Date()
  };

  if (reason === 'resetPassword') {
    tokenRecord.reason = 'reset';
  } else if (reason === 'enrollAccount') {
    tokenRecord.reason = 'enroll';
  } else if (reason) {
    // fallback so that this function can be used for unknown reasons as well
    tokenRecord.reason = reason;
  }

  if (extraTokenData) {
    Object.assign(tokenRecord, extraTokenData);
  } // if this method is called from the enroll account work-flow then
  // store the token record in 'services.password.enroll' db field
  // else store the token record in in 'services.password.reset' db field


  if (reason === 'enrollAccount') {
    Meteor.users.update({
      _id: user._id
    }, {
      $set: {
        'services.password.enroll': tokenRecord
      }
    }); // before passing to template, update user object with new token

    Meteor._ensure(user, 'services', 'password').enroll = tokenRecord;
  } else {
    Meteor.users.update({
      _id: user._id
    }, {
      $set: {
        'services.password.reset': tokenRecord
      }
    }); // before passing to template, update user object with new token

    Meteor._ensure(user, 'services', 'password').reset = tokenRecord;
  }

  return {
    email,
    user,
    token
  };
};
/**
 * @summary Generates an e-mail verification token and saves it into the database.
 * @locus Server
 * @param {String} userId The id of the user to generate the  e-mail verification token for.
 * @param {String} email Which address of the user to generate the e-mail verification token for. This address must be in the user's `emails` list. If `null`, defaults to the first unverified email in the list.
 * @param {Object} [extraTokenData] Optional additional data to be added into the token record.
 * @returns {Object} Object with {email, user, token} values.
 * @importFromPackage accounts-base
 */


Accounts.generateVerificationToken = (userId, email, extraTokenData) => {
  // Make sure the user exists, and email is one of their addresses.
  // Don't limit the fields in the user object since the user is returned
  // by the function and some other fields might be used elsewhere.
  const user = getUserById(userId);

  if (!user) {
    Accounts._handleError("Can't find user");
  } // pick the first unverified email if we weren't passed an email.


  if (!email) {
    const emailRecord = (user.emails || []).find(e => !e.verified);
    email = (emailRecord || {}).address;

    if (!email) {
      Accounts._handleError("That user has no unverified email addresses.");
    }
  } // make sure we have a valid email


  if (!email || !pluckAddresses(user.emails).includes(email)) {
    Accounts._handleError("No such email for user.");
  }

  const token = Random.secret();
  const tokenRecord = {
    token,
    // TODO: This should probably be renamed to "email" to match reset token record.
    address: email,
    when: new Date()
  };

  if (extraTokenData) {
    Object.assign(tokenRecord, extraTokenData);
  }

  Meteor.users.update({
    _id: user._id
  }, {
    $push: {
      'services.email.verificationTokens': tokenRecord
    }
  }); // before passing to template, update user object with new token

  Meteor._ensure(user, 'services', 'email');

  if (!user.services.email.verificationTokens) {
    user.services.email.verificationTokens = [];
  }

  user.services.email.verificationTokens.push(tokenRecord);
  return {
    email,
    user,
    token
  };
}; // send the user an email with a link that when opened allows the user
// to set a new password, without the old password.

/**
 * @summary Send an email with a link the user can use to reset their password.
 * @locus Server
 * @param {String} userId The id of the user to send email to.
 * @param {String} [email] Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first email in the list.
 * @param {Object} [extraTokenData] Optional additional data to be added into the token record.
 * @param {Object} [extraParams] Optional additional params to be added to the reset url.
 * @returns {Object} Object with {email, user, token, url, options} values.
 * @importFromPackage accounts-base
 */


Accounts.sendResetPasswordEmail = (userId, email, extraTokenData, extraParams) => {
  const {
    email: realEmail,
    user,
    token
  } = Accounts.generateResetToken(userId, email, 'resetPassword', extraTokenData);
  const url = Accounts.urls.resetPassword(token, extraParams);
  const options = Accounts.generateOptionsForEmail(realEmail, user, url, 'resetPassword');
  Email.send(options);

  if (Meteor.isDevelopment) {
    console.log("\nReset password URL: ".concat(url));
  }

  return {
    email: realEmail,
    user,
    token,
    url,
    options
  };
}; // send the user an email informing them that their account was created, with
// a link that when opened both marks their email as verified and forces them
// to choose their password. The email must be one of the addresses in the
// user's emails field, or undefined to pick the first email automatically.
//
// This is not called automatically. It must be called manually if you
// want to use enrollment emails.

/**
 * @summary Send an email with a link the user can use to set their initial password.
 * @locus Server
 * @param {String} userId The id of the user to send email to.
 * @param {String} [email] Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first email in the list.
 * @param {Object} [extraTokenData] Optional additional data to be added into the token record.
 * @param {Object} [extraParams] Optional additional params to be added to the enrollment url.
 * @returns {Object} Object with {email, user, token, url, options} values.
 * @importFromPackage accounts-base
 */


Accounts.sendEnrollmentEmail = (userId, email, extraTokenData, extraParams) => {
  const {
    email: realEmail,
    user,
    token
  } = Accounts.generateResetToken(userId, email, 'enrollAccount', extraTokenData);
  const url = Accounts.urls.enrollAccount(token, extraParams);
  const options = Accounts.generateOptionsForEmail(realEmail, user, url, 'enrollAccount');
  Email.send(options);

  if (Meteor.isDevelopment) {
    console.log("\nEnrollment email URL: ".concat(url));
  }

  return {
    email: realEmail,
    user,
    token,
    url,
    options
  };
}; // Take token from sendResetPasswordEmail or sendEnrollmentEmail, change
// the users password, and log them in.


Meteor.methods({
  resetPassword: function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    const token = args[0];
    const newPassword = args[1];
    return Accounts._loginMethod(this, "resetPassword", args, "password", () => {
      check(token, String);
      check(newPassword, passwordValidator);
      let user = Meteor.users.findOne({
        "services.password.reset.token": token
      }, {
        fields: {
          services: 1,
          emails: 1
        }
      });
      let isEnroll = false; // if token is in services.password.reset db field implies
      // this method is was not called from enroll account workflow
      // else this method is called from enroll account workflow

      if (!user) {
        user = Meteor.users.findOne({
          "services.password.enroll.token": token
        }, {
          fields: {
            services: 1,
            emails: 1
          }
        });
        isEnroll = true;
      }

      if (!user) {
        throw new Meteor.Error(403, "Token expired");
      }

      let tokenRecord = {};

      if (isEnroll) {
        tokenRecord = user.services.password.enroll;
      } else {
        tokenRecord = user.services.password.reset;
      }

      const {
        when,
        email
      } = tokenRecord;

      let tokenLifetimeMs = Accounts._getPasswordResetTokenLifetimeMs();

      if (isEnroll) {
        tokenLifetimeMs = Accounts._getPasswordEnrollTokenLifetimeMs();
      }

      const currentTimeMs = Date.now();
      if (currentTimeMs - when > tokenLifetimeMs) throw new Meteor.Error(403, "Token expired");
      if (!pluckAddresses(user.emails).includes(email)) return {
        userId: user._id,
        error: new Meteor.Error(403, "Token has invalid email address")
      };
      const hashed = hashPassword(newPassword); // NOTE: We're about to invalidate tokens on the user, who we might be
      // logged in as. Make sure to avoid logging ourselves out if this
      // happens. But also make sure not to leave the connection in a state
      // of having a bad token set if things fail.

      const oldToken = Accounts._getLoginToken(this.connection.id);

      Accounts._setLoginToken(user._id, this.connection, null);

      const resetToOldToken = () => Accounts._setLoginToken(user._id, this.connection, oldToken);

      try {
        // Update the user record by:
        // - Changing the password to the new one
        // - Forgetting about the reset token or enroll token that was just used
        // - Verifying their email, since they got the password reset via email.
        let affectedRecords = {}; // if reason is enroll then check services.password.enroll.token field for affected records

        if (isEnroll) {
          affectedRecords = Meteor.users.update({
            _id: user._id,
            'emails.address': email,
            'services.password.enroll.token': token
          }, {
            $set: {
              'services.password.bcrypt': hashed,
              'emails.$.verified': true
            },
            $unset: {
              'services.password.enroll': 1
            }
          });
        } else {
          affectedRecords = Meteor.users.update({
            _id: user._id,
            'emails.address': email,
            'services.password.reset.token': token
          }, {
            $set: {
              'services.password.bcrypt': hashed,
              'emails.$.verified': true
            },
            $unset: {
              'services.password.reset': 1
            }
          });
        }

        if (affectedRecords !== 1) return {
          userId: user._id,
          error: new Meteor.Error(403, "Invalid email")
        };
      } catch (err) {
        resetToOldToken();
        throw err;
      } // Replace all valid login tokens with new ones (changing
      // password should invalidate existing sessions).


      Accounts._clearAllLoginTokens(user._id);

      return {
        userId: user._id
      };
    });
  }
}); ///
/// EMAIL VERIFICATION
///
// send the user an email with a link that when opened marks that
// address as verified

/**
 * @summary Send an email with a link the user can use verify their email address.
 * @locus Server
 * @param {String} userId The id of the user to send email to.
 * @param {String} [email] Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first unverified email in the list.
 * @param {Object} [extraTokenData] Optional additional data to be added into the token record.
 * @param {Object} [extraParams] Optional additional params to be added to the verification url.
 *
 * @returns {Object} Object with {email, user, token, url, options} values.
 * @importFromPackage accounts-base
 */

Accounts.sendVerificationEmail = (userId, email, extraTokenData, extraParams) => {
  // XXX Also generate a link using which someone can delete this
  // account if they own said address but weren't those who created
  // this account.
  const {
    email: realEmail,
    user,
    token
  } = Accounts.generateVerificationToken(userId, email, extraTokenData);
  const url = Accounts.urls.verifyEmail(token, extraParams);
  const options = Accounts.generateOptionsForEmail(realEmail, user, url, 'verifyEmail');
  Email.send(options);

  if (Meteor.isDevelopment) {
    console.log("\nVerification email URL: ".concat(url));
  }

  return {
    email: realEmail,
    user,
    token,
    url,
    options
  };
}; // Take token from sendVerificationEmail, mark the email as verified,
// and log them in.


Meteor.methods({
  verifyEmail: function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    const token = args[0];
    return Accounts._loginMethod(this, "verifyEmail", args, "password", () => {
      check(token, String);
      const user = Meteor.users.findOne({
        'services.email.verificationTokens.token': token
      }, {
        fields: {
          services: 1,
          emails: 1
        }
      });
      if (!user) throw new Meteor.Error(403, "Verify email link expired");
      const tokenRecord = user.services.email.verificationTokens.find(t => t.token == token);
      if (!tokenRecord) return {
        userId: user._id,
        error: new Meteor.Error(403, "Verify email link expired")
      };
      const emailsRecord = user.emails.find(e => e.address == tokenRecord.address);
      if (!emailsRecord) return {
        userId: user._id,
        error: new Meteor.Error(403, "Verify email link is for unknown address")
      }; // By including the address in the query, we can use 'emails.$' in the
      // modifier to get a reference to the specific object in the emails
      // array. See
      // http://www.mongodb.org/display/DOCS/Updating/#Updating-The%24positionaloperator)
      // http://www.mongodb.org/display/DOCS/Updating#Updating-%24pull

      Meteor.users.update({
        _id: user._id,
        'emails.address': tokenRecord.address
      }, {
        $set: {
          'emails.$.verified': true
        },
        $pull: {
          'services.email.verificationTokens': {
            address: tokenRecord.address
          }
        }
      });
      return {
        userId: user._id
      };
    });
  }
});
/**
 * @summary Add an email address for a user. Use this instead of directly
 * updating the database. The operation will fail if there is a different user
 * with an email only differing in case. If the specified user has an existing
 * email only differing in case however, we replace it.
 * @locus Server
 * @param {String} userId The ID of the user to update.
 * @param {String} newEmail A new email address for the user.
 * @param {Boolean} [verified] Optional - whether the new email address should
 * be marked as verified. Defaults to false.
 * @importFromPackage accounts-base
 */

Accounts.addEmail = (userId, newEmail, verified) => {
  check(userId, NonEmptyString);
  check(newEmail, NonEmptyString);
  check(verified, Match.Optional(Boolean));

  if (verified === void 0) {
    verified = false;
  }

  const user = getUserById(userId, {
    fields: {
      emails: 1
    }
  });
  if (!user) throw new Meteor.Error(403, "User not found"); // Allow users to change their own email to a version with a different case
  // We don't have to call checkForCaseInsensitiveDuplicates to do a case
  // insensitive check across all emails in the database here because: (1) if
  // there is no case-insensitive duplicate between this user and other users,
  // then we are OK and (2) if this would create a conflict with other users
  // then there would already be a case-insensitive duplicate and we can't fix
  // that in this code anyway.

  const caseInsensitiveRegExp = new RegExp("^".concat(Meteor._escapeRegExp(newEmail), "$"), 'i');
  const didUpdateOwnEmail = (user.emails || []).reduce((prev, email) => {
    if (caseInsensitiveRegExp.test(email.address)) {
      Meteor.users.update({
        _id: user._id,
        'emails.address': email.address
      }, {
        $set: {
          'emails.$.address': newEmail,
          'emails.$.verified': verified
        }
      });
      return true;
    } else {
      return prev;
    }
  }, false); // In the other updates below, we have to do another call to
  // checkForCaseInsensitiveDuplicates to make sure that no conflicting values
  // were added to the database in the meantime. We don't have to do this for
  // the case where the user is updating their email address to one that is the
  // same as before, but only different because of capitalization. Read the
  // big comment above to understand why.

  if (didUpdateOwnEmail) {
    return;
  } // Perform a case insensitive check for duplicates before update


  Accounts._checkForCaseInsensitiveDuplicates('emails.address', 'Email', newEmail, user._id);

  Meteor.users.update({
    _id: user._id
  }, {
    $addToSet: {
      emails: {
        address: newEmail,
        verified: verified
      }
    }
  }); // Perform another check after update, in case a matching user has been
  // inserted in the meantime

  try {
    Accounts._checkForCaseInsensitiveDuplicates('emails.address', 'Email', newEmail, user._id);
  } catch (ex) {
    // Undo update if the check fails
    Meteor.users.update({
      _id: user._id
    }, {
      $pull: {
        emails: {
          address: newEmail
        }
      }
    });
    throw ex;
  }
};
/**
 * @summary Remove an email address for a user. Use this instead of updating
 * the database directly.
 * @locus Server
 * @param {String} userId The ID of the user to update.
 * @param {String} email The email address to remove.
 * @importFromPackage accounts-base
 */


Accounts.removeEmail = (userId, email) => {
  check(userId, NonEmptyString);
  check(email, NonEmptyString);
  const user = getUserById(userId, {
    fields: {
      _id: 1
    }
  });
  if (!user) throw new Meteor.Error(403, "User not found");
  Meteor.users.update({
    _id: user._id
  }, {
    $pull: {
      emails: {
        address: email
      }
    }
  });
}; ///
/// CREATING USERS
///
// Shared createUser function called from the createUser method, both
// if originates in client or server code. Calls user provided hooks,
// does the actual user insertion.
//
// returns the user id


const createUser = options => {
  // Unknown keys allowed, because a onCreateUserHook can take arbitrary
  // options.
  check(options, Match.ObjectIncluding({
    username: Match.Optional(String),
    email: Match.Optional(String),
    password: Match.Optional(passwordValidator)
  }));
  const {
    username,
    email,
    password
  } = options;
  if (!username && !email) throw new Meteor.Error(400, "Need to set a username or email");
  const user = {
    services: {}
  };

  if (password) {
    const hashed = hashPassword(password);
    user.services.password = {
      bcrypt: hashed
    };
  }

  return Accounts._createUserCheckingDuplicates({
    user,
    email,
    username,
    options
  });
}; // method for create user. Requests come from the client.


Meteor.methods({
  createUser: function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    const options = args[0];
    return Accounts._loginMethod(this, "createUser", args, "password", () => {
      // createUser() above does more checking.
      check(options, Object);
      if (Accounts._options.forbidClientAccountCreation) return {
        error: new Meteor.Error(403, "Signups forbidden")
      };
      const userId = Accounts.createUserVerifyingEmail(options); // client gets logged in as the new user afterwards.

      return {
        userId: userId
      };
    });
  }
});
/**
 * @summary Creates an user and sends an email if `options.email` is informed.
 * Then if the `sendVerificationEmail` option from the `Accounts` package is
 * enabled, you'll send a verification email if `options.password` is informed,
 * otherwise you'll send an enrollment email.
 * @locus Server
 * @param {Object} options The options object to be passed down when creating
 * the user
 * @param {String} options.username A unique name for this user.
 * @param {String} options.email The user's email address.
 * @param {String} options.password The user's password. This is __not__ sent in plain text over the wire.
 * @param {Object} options.profile The user's profile, typically including the `name` field.
 * @importFromPackage accounts-base
 * */

Accounts.createUserVerifyingEmail = options => {
  options = _objectSpread({}, options); // Create user. result contains id and token.

  const userId = createUser(options); // safety belt. createUser is supposed to throw on error. send 500 error
  // instead of sending a verification email with empty userid.

  if (!userId) throw new Error("createUser failed to insert new user"); // If `Accounts._options.sendVerificationEmail` is set, register
  // a token to verify the user's primary email, and send it to
  // that address.

  if (options.email && Accounts._options.sendVerificationEmail) {
    if (options.password) {
      Accounts.sendVerificationEmail(userId, options.email);
    } else {
      Accounts.sendEnrollmentEmail(userId, options.email);
    }
  }

  return userId;
}; // Create user directly on the server.
//
// Unlike the client version, this does not log you in as this user
// after creation.
//
// returns userId or throws an error if it can't create
//
// XXX add another argument ("server options") that gets sent to onCreateUser,
// which is always empty when called from the createUser method? eg, "admin:
// true", which we want to prevent the client from setting, but which a custom
// method calling Accounts.createUser could set?
//


Accounts.createUser = (options, callback) => {
  options = _objectSpread({}, options); // XXX allow an optional callback?

  if (callback) {
    throw new Error("Accounts.createUser with callback not supported on the server yet.");
  }

  return createUser(options);
}; ///
/// PASSWORD-SPECIFIC INDEXES ON USERS
///


Meteor.users.createIndex('services.email.verificationTokens.token', {
  unique: true,
  sparse: true
});
Meteor.users.createIndex('services.password.reset.token', {
  unique: true,
  sparse: true
});
Meteor.users.createIndex('services.password.enroll.token', {
  unique: true,
  sparse: true
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"bcrypt":{"package.json":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/accounts-password/node_modules/bcrypt/package.json                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = {
  "name": "bcrypt",
  "version": "5.0.1",
  "main": "./bcrypt"
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bcrypt.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/accounts-password/node_modules/bcrypt/bcrypt.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/accounts-password/email_templates.js");
require("/node_modules/meteor/accounts-password/password_server.js");

/* Exports */
Package._define("accounts-password");

})();

//# sourceURL=meteor://💻app/packages/accounts-password.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvYWNjb3VudHMtcGFzc3dvcmQvZW1haWxfdGVtcGxhdGVzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9hY2NvdW50cy1wYXNzd29yZC9wYXNzd29yZF9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiX29iamVjdFNwcmVhZCIsIm1vZHVsZSIsImxpbmsiLCJkZWZhdWx0IiwidiIsImdyZWV0Iiwid2VsY29tZU1zZyIsInVzZXIiLCJ1cmwiLCJncmVldGluZyIsInByb2ZpbGUiLCJuYW1lIiwiQWNjb3VudHMiLCJlbWFpbFRlbXBsYXRlcyIsImZyb20iLCJzaXRlTmFtZSIsIk1ldGVvciIsImFic29sdXRlVXJsIiwicmVwbGFjZSIsInJlc2V0UGFzc3dvcmQiLCJzdWJqZWN0IiwidGV4dCIsInZlcmlmeUVtYWlsIiwiZW5yb2xsQWNjb3VudCIsImJjcnlwdCIsImJjcnlwdEhhc2giLCJ3cmFwQXN5bmMiLCJoYXNoIiwiYmNyeXB0Q29tcGFyZSIsImNvbXBhcmUiLCJnZXRVc2VyQnlJZCIsImlkIiwib3B0aW9ucyIsInVzZXJzIiwiZmluZE9uZSIsIl9hZGREZWZhdWx0RmllbGRTZWxlY3RvciIsIl9iY3J5cHRSb3VuZHMiLCJfb3B0aW9ucyIsImJjcnlwdFJvdW5kcyIsImdldFBhc3N3b3JkU3RyaW5nIiwicGFzc3dvcmQiLCJTSEEyNTYiLCJhbGdvcml0aG0iLCJFcnJvciIsImRpZ2VzdCIsImhhc2hQYXNzd29yZCIsImdldFJvdW5kc0Zyb21CY3J5cHRIYXNoIiwicm91bmRzIiwiaGFzaFNlZ21lbnRzIiwic3BsaXQiLCJsZW5ndGgiLCJwYXJzZUludCIsIl9jaGVja1Bhc3N3b3JkVXNlckZpZWxkcyIsIl9pZCIsInNlcnZpY2VzIiwiX2NoZWNrUGFzc3dvcmQiLCJyZXN1bHQiLCJ1c2VySWQiLCJmb3JtYXR0ZWRQYXNzd29yZCIsImhhc2hSb3VuZHMiLCJlcnJvciIsIl9oYW5kbGVFcnJvciIsImRlZmVyIiwidXBkYXRlIiwiJHNldCIsImNoZWNrUGFzc3dvcmQiLCJmaW5kVXNlckJ5VXNlcm5hbWUiLCJ1c2VybmFtZSIsIl9maW5kVXNlckJ5UXVlcnkiLCJmaW5kVXNlckJ5RW1haWwiLCJlbWFpbCIsIk5vbkVtcHR5U3RyaW5nIiwiTWF0Y2giLCJXaGVyZSIsIngiLCJjaGVjayIsIlN0cmluZyIsInBhc3N3b3JkVmFsaWRhdG9yIiwiT25lT2YiLCJzdHIiLCJ0ZXN0Iiwic2V0dGluZ3MiLCJwYWNrYWdlcyIsImFjY291bnRzIiwicGFzc3dvcmRNYXhMZW5ndGgiLCJyZWdpc3RlckxvZ2luSGFuZGxlciIsInVuZGVmaW5lZCIsIl91c2VyUXVlcnlWYWxpZGF0b3IiLCJmaWVsZHMiLCJzZXRVc2VybmFtZSIsIm5ld1VzZXJuYW1lIiwib2xkVXNlcm5hbWUiLCJfY2hlY2tGb3JDYXNlSW5zZW5zaXRpdmVEdXBsaWNhdGVzIiwiZXgiLCJtZXRob2RzIiwiY2hhbmdlUGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiaGFzaGVkIiwiY3VycmVudFRva2VuIiwiX2dldExvZ2luVG9rZW4iLCJjb25uZWN0aW9uIiwiJHB1bGwiLCJoYXNoZWRUb2tlbiIsIiRuZSIsIiR1bnNldCIsInBhc3N3b3JkQ2hhbmdlZCIsInNldFBhc3N3b3JkIiwibmV3UGxhaW50ZXh0UGFzc3dvcmQiLCJNYXliZSIsImxvZ291dCIsIkJvb2xlYW4iLCJwbHVja0FkZHJlc3NlcyIsImVtYWlscyIsIm1hcCIsImFkZHJlc3MiLCJmb3Jnb3RQYXNzd29yZCIsImNhc2VTZW5zaXRpdmVFbWFpbCIsImZpbmQiLCJ0b0xvd2VyQ2FzZSIsInNlbmRSZXNldFBhc3N3b3JkRW1haWwiLCJnZW5lcmF0ZVJlc2V0VG9rZW4iLCJyZWFzb24iLCJleHRyYVRva2VuRGF0YSIsImluY2x1ZGVzIiwidG9rZW4iLCJSYW5kb20iLCJzZWNyZXQiLCJ0b2tlblJlY29yZCIsIndoZW4iLCJEYXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiX2Vuc3VyZSIsImVucm9sbCIsInJlc2V0IiwiZ2VuZXJhdGVWZXJpZmljYXRpb25Ub2tlbiIsImVtYWlsUmVjb3JkIiwiZSIsInZlcmlmaWVkIiwiJHB1c2giLCJ2ZXJpZmljYXRpb25Ub2tlbnMiLCJwdXNoIiwiZXh0cmFQYXJhbXMiLCJyZWFsRW1haWwiLCJ1cmxzIiwiZ2VuZXJhdGVPcHRpb25zRm9yRW1haWwiLCJFbWFpbCIsInNlbmQiLCJpc0RldmVsb3BtZW50IiwiY29uc29sZSIsImxvZyIsInNlbmRFbnJvbGxtZW50RW1haWwiLCJhcmdzIiwiX2xvZ2luTWV0aG9kIiwiaXNFbnJvbGwiLCJ0b2tlbkxpZmV0aW1lTXMiLCJfZ2V0UGFzc3dvcmRSZXNldFRva2VuTGlmZXRpbWVNcyIsIl9nZXRQYXNzd29yZEVucm9sbFRva2VuTGlmZXRpbWVNcyIsImN1cnJlbnRUaW1lTXMiLCJub3ciLCJvbGRUb2tlbiIsIl9zZXRMb2dpblRva2VuIiwicmVzZXRUb09sZFRva2VuIiwiYWZmZWN0ZWRSZWNvcmRzIiwiZXJyIiwiX2NsZWFyQWxsTG9naW5Ub2tlbnMiLCJzZW5kVmVyaWZpY2F0aW9uRW1haWwiLCJ0IiwiZW1haWxzUmVjb3JkIiwiYWRkRW1haWwiLCJuZXdFbWFpbCIsIk9wdGlvbmFsIiwiY2FzZUluc2Vuc2l0aXZlUmVnRXhwIiwiUmVnRXhwIiwiX2VzY2FwZVJlZ0V4cCIsImRpZFVwZGF0ZU93bkVtYWlsIiwicmVkdWNlIiwicHJldiIsIiRhZGRUb1NldCIsInJlbW92ZUVtYWlsIiwiY3JlYXRlVXNlciIsIk9iamVjdEluY2x1ZGluZyIsIl9jcmVhdGVVc2VyQ2hlY2tpbmdEdXBsaWNhdGVzIiwiZm9yYmlkQ2xpZW50QWNjb3VudENyZWF0aW9uIiwiY3JlYXRlVXNlclZlcmlmeWluZ0VtYWlsIiwiY2FsbGJhY2siLCJjcmVhdGVJbmRleCIsInVuaXF1ZSIsInNwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQUo7O0FBQWtCQyxNQUFNLENB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YztBQUNaLFVBQU0sSUFBSS9JLEtBQUosQ0FBVSxvRUFBVixDQUFOO0FBQ0Q7O0FBRUQsU0FBTzBJLFVBQVUsQ0FBQ3JKLE9BQUQsQ0FBakI7QUFDRCxDQVRELEMsQ0FXQTtBQUNBO0FBQ0E7OztBQUNBaEIsTUFBTSxDQUFDaUIsS0FBUCxDQUFhMEosV0FBYixDQUF5Qix5Q0FBekIsRUFDMEI7QUFBRUMsUUFBTSxFQUFFLElBQVY7QUFBZ0JDLFFBQU0sRUFBRTtBQUF4QixDQUQxQjtBQUVBN0ssTUFBTSxDQUFDaUIsS0FBUCxDQUFhMEosV0FBYixDQUF5QiwrQkFBekIsRUFDMEI7QUFBRUMsUUFBTSxFQUFFLElBQVY7QUFBZ0JDLFFBQU0sRUFBRTtBQUF4QixDQUQxQjtBQUVBN0ssTUFBTSxDQUFDaUIsS0FBUCxDQUFhMEosV0FBYixDQUF5QixnQ0FBekIsRUFDMEI7QUFBRUMsUUFBTSxFQUFFLElBQVY7QUFBZ0JDLFFBQU0sRUFBRTtBQUF4QixDQUQxQixFIiwiZmlsZSI6Ii9wYWNrYWdlcy9hY2NvdW50cy1wYXNzd29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdyZWV0ID0gd2VsY29tZU1zZyA9PiAodXNlciwgdXJsKSA9PiB7XG4gIGNvbnN0IGdyZWV0aW5nID1cbiAgICB1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLm5hbWVcbiAgICAgID8gYEhlbGxvICR7dXNlci5wcm9maWxlLm5hbWV9LGBcbiAgICAgIDogJ0hlbGxvLCc7XG4gIHJldHVybiBgJHtncmVldGluZ31cblxuJHt3ZWxjb21lTXNnfSwgc2ltcGx5IGNsaWNrIHRoZSBsaW5rIGJlbG93LlxuXG4ke3VybH1cblxuVGhhbmsgeW91LlxuYDtcbn07XG5cbi8qKlxuICogQHN1bW1hcnkgT3B0aW9ucyB0byBjdXN0b21pemUgZW1haWxzIHNlbnQgZnJvbSB0aGUgQWNjb3VudHMgc3lzdGVtLlxuICogQGxvY3VzIFNlcnZlclxuICogQGltcG9ydEZyb21QYWNrYWdlIGFjY291bnRzLWJhc2VcbiAqL1xuQWNjb3VudHMuZW1haWxUZW1wbGF0ZXMgPSB7XG4gIC4uLihBY2NvdW50cy5lbWFpbFRlbXBsYXRlcyB8fCB7fSksXG4gIGZyb206ICdBY2NvdW50cyBFeGFtcGxlIDxuby1yZXBseUBleGFtcGxlLmNvbT4nLFxuICBzaXRlTmFtZTogTWV0ZW9yLmFic29sdXRlVXJsKClcbiAgICAucmVwbGFjZSgvXmh0dHBzPzpcXC9cXC8vLCAnJylcbiAgICAucmVwbGFjZSgvXFwvJC8sICcnKSxcblxuICByZXNldFBhc3N3b3JkOiB7XG4gICAgc3ViamVjdDogKCkgPT5cbiAgICAgIGBIb3cgdG8gcmVzZXQgeW91ciBwYXNzd29yZCBvbiAke0FjY291bnRzLmVtYWlsVGVtcGxhdGVzLnNpdGVOYW1lfWAsXG4gICAgdGV4dDogZ3JlZXQoJ1RvIHJlc2V0IHlvdXIgcGFzc3dvcmQnKSxcbiAgfSxcbiAgdmVyaWZ5RW1haWw6IHtcbiAgICBzdWJqZWN0OiAoKSA9PlxuICAgICAgYEhvdyB0byB2ZXJpZnkgZW1haWwgYWRkcmVzcyBvbiAke0FjY291bnRzLmVtYWlsVGVtcGxhdGVzLnNpdGVOYW1lfWAsXG4gICAgdGV4dDogZ3JlZXQoJ1RvIHZlcmlmeSB5b3VyIGFjY291bnQgZW1haWwnKSxcbiAgfSxcbiAgZW5yb2xsQWNjb3VudDoge1xuICAgIHN1YmplY3Q6ICgpID0+XG4gICAgICBgQW4gYWNjb3VudCBoYXMgYmVlbiBjcmVhdGVkIGZvciB5b3Ugb24gJHtBY2NvdW50cy5lbWFpbFRlbXBsYXRlcy5zaXRlTmFtZX1gLFxuICAgIHRleHQ6IGdyZWV0KCdUbyBzdGFydCB1c2luZyB0aGUgc2VydmljZScpLFxuICB9LFxufTtcbiIsImltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0J1xuaW1wb3J0IHtBY2NvdW50c30gZnJvbSBcIm1ldGVvci9hY2NvdW50cy1iYXNlXCI7XG5cbmNvbnN0IGJjcnlwdEhhc2ggPSBNZXRlb3Iud3JhcEFzeW5jKGJjcnlwdC5oYXNoKTtcbmNvbnN0IGJjcnlwdENvbXBhcmUgPSBNZXRlb3Iud3JhcEFzeW5jKGJjcnlwdC5jb21wYXJlKTtcblxuLy8gVXRpbGl0eSBmb3IgZ3JhYmJpbmcgdXNlclxuY29uc3QgZ2V0VXNlckJ5SWQgPSAoaWQsIG9wdGlvbnMpID0+IE1ldGVvci51c2Vycy5maW5kT25lKGlkLCBBY2NvdW50cy5fYWRkRGVmYXVsdEZpZWxkU2VsZWN0b3Iob3B0aW9ucykpO1xuXG4vLyBVc2VyIHJlY29yZHMgaGF2ZSBhICdzZXJ2aWNlcy5wYXNzd29yZC5iY3J5cHQnIGZpZWxkIG9uIHRoZW0gdG8gaG9sZFxuLy8gdGhlaXIgaGFzaGVkIHBhc3N3b3Jkcy5cbi8vXG4vLyBXaGVuIHRoZSBjbGllbnQgc2VuZHMgYSBwYXNzd29yZCB0byB0aGUgc2VydmVyLCBpdCBjYW4gZWl0aGVyIGJlIGFcbi8vIHN0cmluZyAodGhlIHBsYWludGV4dCBwYXNzd29yZCkgb3IgYW4gb2JqZWN0IHdpdGgga2V5cyAnZGlnZXN0JyBhbmRcbi8vICdhbGdvcml0aG0nIChtdXN0IGJlIFwic2hhLTI1NlwiIGZvciBub3cpLiBUaGUgTWV0ZW9yIGNsaWVudCBhbHdheXMgc2VuZHNcbi8vIHBhc3N3b3JkIG9iamVjdHMgeyBkaWdlc3Q6ICosIGFsZ29yaXRobTogXCJzaGEtMjU2XCIgfSwgYnV0IEREUCBjbGllbnRzXG4vLyB0aGF0IGRvbid0IGhhdmUgYWNjZXNzIHRvIFNIQSBjYW4ganVzdCBzZW5kIHBsYWludGV4dCBwYXNzd29yZHMgYXNcbi8vIHN0cmluZ3MuXG4vL1xuLy8gV2hlbiB0aGUgc2VydmVyIHJlY2VpdmVzIGEgcGxhaW50ZXh0IHBhc3N3b3JkIGFzIGEgc3RyaW5nLCBpdCBhbHdheXNcbi8vIGhhc2hlcyBpdCB3aXRoIFNIQTI1NiBiZWZvcmUgcGFzc2luZyBpdCBpbnRvIGJjcnlwdC4gV2hlbiB0aGUgc2VydmVyXG4vLyByZWNlaXZlcyBhIHBhc3N3b3JkIGFzIGFuIG9iamVjdCwgaXQgYXNzZXJ0cyB0aGF0IHRoZSBhbGdvcml0aG0gaXNcbi8vIFwic2hhLTI1NlwiIGFuZCB0aGVuIHBhc3NlcyB0aGUgZGlnZXN0IHRvIGJjcnlwdC5cblxuXG5BY2NvdW50cy5fYmNyeXB0Um91bmRzID0gKCkgPT4gQWNjb3VudHMuX29wdGlvbnMuYmNyeXB0Um91bmRzIHx8IDEwO1xuXG4vLyBHaXZlbiBhICdwYXNzd29yZCcgZnJvbSB0aGUgY2xpZW50LCBleHRyYWN0IHRoZSBzdHJpbmcgdGhhdCB3ZSBzaG91bGRcbi8vIGJjcnlwdC4gJ3Bhc3N3b3JkJyBjYW4gYmUgb25lIG9mOlxuLy8gIC0gU3RyaW5nICh0aGUgcGxhaW50ZXh0IHBhc3N3b3JkKVxuLy8gIC0gT2JqZWN0IHdpdGggJ2RpZ2VzdCcgYW5kICdhbGdvcml0aG0nIGtleXMuICdhbGdvcml0aG0nIG11c3QgYmUgXCJzaGEtMjU2XCIuXG4vL1xuY29uc3QgZ2V0UGFzc3dvcmRTdHJpbmcgPSBwYXNzd29yZCA9PiB7XG4gIGlmICh0eXBlb2YgcGFzc3dvcmQgPT09IFwic3RyaW5nXCIpIHtcbiAgICBwYXNzd29yZCA9IFNIQTI1NihwYXNzd29yZCk7XG4gIH0gZWxzZSB7IC8vICdwYXNzd29yZCcgaXMgYW4gb2JqZWN0XG4gICAgaWYgKHBhc3N3b3JkLmFsZ29yaXRobSAhPT0gXCJzaGEtMjU2XCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFzc3dvcmQgaGFzaCBhbGdvcml0aG0uIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBcIk9ubHkgJ3NoYS0yNTYnIGlzIGFsbG93ZWQuXCIpO1xuICAgIH1cbiAgICBwYXNzd29yZCA9IHBhc3N3b3JkLmRpZ2VzdDtcbiAgfVxuICByZXR1cm4gcGFzc3dvcmQ7XG59O1xuXG4vLyBVc2UgYmNyeXB0IHRvIGhhc2ggdGhlIHBhc3N3b3JkIGZvciBzdG9yYWdlIGluIHRoZSBkYXRhYmFzZS5cbi8vIGBwYXNzd29yZGAgY2FuIGJlIGEgc3RyaW5nIChpbiB3aGljaCBjYXNlIGl0IHdpbGwgYmUgcnVuIHRocm91Z2hcbi8vIFNIQTI1NiBiZWZvcmUgYmNyeXB0KSBvciBhbiBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIGBkaWdlc3RgIGFuZFxuLy8gYGFsZ29yaXRobWAgKGluIHdoaWNoIGNhc2Ugd2UgYmNyeXB0IGBwYXNzd29yZC5kaWdlc3RgKS5cbi8vXG5jb25zdCBoYXNoUGFzc3dvcmQgPSBwYXNzd29yZCA9PiB7XG4gIHBhc3N3b3JkID0gZ2V0UGFzc3dvcmRTdHJpbmcocGFzc3dvcmQpO1xuICByZXR1cm4gYmNyeXB0SGFzaChwYXNzd29yZCwgQWNjb3VudHMuX2JjcnlwdFJvdW5kcygpKTtcbn07XG5cbi8vIEV4dHJhY3QgdGhlIG51bWJlciBvZiByb3VuZHMgdXNlZCBpbiB0aGUgc3BlY2lmaWVkIGJjcnlwdCBoYXNoLlxuY29uc3QgZ2V0Um91bmRzRnJvbUJjcnlwdEhhc2ggPSBoYXNoID0+IHtcbiAgbGV0IHJvdW5kcztcbiAgaWYgKGhhc2gpIHtcbiAgICBjb25zdCBoYXNoU2VnbWVudHMgPSBoYXNoLnNwbGl0KCckJyk7XG4gICAgaWYgKGhhc2hTZWdtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICByb3VuZHMgPSBwYXJzZUludChoYXNoU2VnbWVudHNbMl0sIDEwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJvdW5kcztcbn07XG5cbi8vIENoZWNrIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhc3N3b3JkIG1hdGNoZXMgdGhlIGJjcnlwdCdlZCBwYXNzd29yZCBpblxuLy8gdGhlIGRhdGFiYXNlIHVzZXIgcmVjb3JkLiBgcGFzc3dvcmRgIGNhbiBiZSBhIHN0cmluZyAoaW4gd2hpY2ggY2FzZVxuLy8gaXQgd2lsbCBiZSBydW4gdGhyb3VnaCBTSEEyNTYgYmVmb3JlIGJjcnlwdCkgb3IgYW4gb2JqZWN0IHdpdGhcbi8vIHByb3BlcnRpZXMgYGRpZ2VzdGAgYW5kIGBhbGdvcml0aG1gIChpbiB3aGljaCBjYXNlIHdlIGJjcnlwdFxuLy8gYHBhc3N3b3JkLmRpZ2VzdGApLlxuLy9cbi8vIFRoZSB1c2VyIHBhcmFtZXRlciBuZWVkcyBhdCBsZWFzdCB1c2VyLl9pZCBhbmQgdXNlci5zZXJ2aWNlc1xuQWNjb3VudHMuX2NoZWNrUGFzc3dvcmRVc2VyRmllbGRzID0ge19pZDogMSwgc2VydmljZXM6IDF9O1xuLy9cbkFjY291bnRzLl9jaGVja1Bhc3N3b3JkID0gKHVzZXIsIHBhc3N3b3JkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICB1c2VySWQ6IHVzZXIuX2lkXG4gIH07XG5cbiAgY29uc3QgZm9ybWF0dGVkUGFzc3dvcmQgPSBnZXRQYXNzd29yZFN0cmluZyhwYXNzd29yZCk7XG4gIGNvbnN0IGhhc2ggPSB1c2VyLnNlcnZpY2VzLnBhc3N3b3JkLmJjcnlwdDtcbiAgY29uc3QgaGFzaFJvdW5kcyA9IGdldFJvdW5kc0Zyb21CY3J5cHRIYXNoKGhhc2gpO1xuXG4gIGlmICghIGJjcnlwdENvbXBhcmUoZm9ybWF0dGVkUGFzc3dvcmQsIGhhc2gpKSB7XG4gICAgcmVzdWx0LmVycm9yID0gQWNjb3VudHMuX2hhbmRsZUVycm9yKFwiSW5jb3JyZWN0IHBhc3N3b3JkXCIsIGZhbHNlKTtcbiAgfSBlbHNlIGlmIChoYXNoICYmIEFjY291bnRzLl9iY3J5cHRSb3VuZHMoKSAhPSBoYXNoUm91bmRzKSB7XG4gICAgLy8gVGhlIHBhc3N3b3JkIGNoZWNrcyBvdXQsIGJ1dCB0aGUgdXNlcidzIGJjcnlwdCBoYXNoIG5lZWRzIHRvIGJlIHVwZGF0ZWQuXG4gICAgTWV0ZW9yLmRlZmVyKCgpID0+IHtcbiAgICAgIE1ldGVvci51c2Vycy51cGRhdGUoeyBfaWQ6IHVzZXIuX2lkIH0sIHtcbiAgICAgICAgJHNldDoge1xuICAgICAgICAgICdzZXJ2aWNlcy5wYXNzd29yZC5iY3J5cHQnOlxuICAgICAgICAgICAgYmNyeXB0SGFzaChmb3JtYXR0ZWRQYXNzd29yZCwgQWNjb3VudHMuX2JjcnlwdFJvdW5kcygpKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuY29uc3QgY2hlY2tQYXNzd29yZCA9IEFjY291bnRzLl9jaGVja1Bhc3N3b3JkO1xuXG4vLy9cbi8vLyBMT0dJTlxuLy8vXG5cblxuLyoqXG4gKiBAc3VtbWFyeSBGaW5kcyB0aGUgdXNlciB3aXRoIHRoZSBzcGVjaWZpZWQgdXNlcm5hbWUuXG4gKiBGaXJzdCB0cmllcyB0byBtYXRjaCB1c2VybmFtZSBjYXNlIHNlbnNpdGl2ZWx5OyBpZiB0aGF0IGZhaWxzLCBpdFxuICogdHJpZXMgY2FzZSBpbnNlbnNpdGl2ZWx5OyBidXQgaWYgbW9yZSB0aGFuIG9uZSB1c2VyIG1hdGNoZXMgdGhlIGNhc2VcbiAqIGluc2Vuc2l0aXZlIHNlYXJjaCwgaXQgcmV0dXJucyBudWxsLlxuICogQGxvY3VzIFNlcnZlclxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJuYW1lIFRoZSB1c2VybmFtZSB0byBsb29rIGZvclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtNb25nb0ZpZWxkU3BlY2lmaWVyfSBvcHRpb25zLmZpZWxkcyBEaWN0aW9uYXJ5IG9mIGZpZWxkcyB0byByZXR1cm4gb3IgZXhjbHVkZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IEEgdXNlciBpZiBmb3VuZCwgZWxzZSBudWxsXG4gKiBAaW1wb3J0RnJvbVBhY2thZ2UgYWNjb3VudHMtYmFzZVxuICovXG5BY2NvdW50cy5maW5kVXNlckJ5VXNlcm5hbWUgPVxuICAodXNlcm5hbWUsIG9wdGlvbnMpID0+IEFjY291bnRzLl9maW5kVXNlckJ5UXVlcnkoeyB1c2VybmFtZSB9LCBvcHRpb25zKTtcblxuLyoqXG4gKiBAc3VtbWFyeSBGaW5kcyB0aGUgdXNlciB3aXRoIHRoZSBzcGVjaWZpZWQgZW1haWwuXG4gKiBGaXJzdCB0cmllcyB0byBtYXRjaCBlbWFpbCBjYXNlIHNlbnNpdGl2ZWx5OyBpZiB0aGF0IGZhaWxzLCBpdFxuICogdHJpZXMgY2FzZSBpbnNlbnNpdGl2ZWx5OyBidXQgaWYgbW9yZSB0aGFuIG9uZSB1c2VyIG1hdGNoZXMgdGhlIGNhc2VcbiAqIGluc2Vuc2l0aXZlIHNlYXJjaCwgaXQgcmV0dXJucyBudWxsLlxuICogQGxvY3VzIFNlcnZlclxuICogQHBhcmFtIHtTdHJpbmd9IGVtYWlsIFRoZSBlbWFpbCBhZGRyZXNzIHRvIGxvb2sgZm9yXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge01vbmdvRmllbGRTcGVjaWZpZXJ9IG9wdGlvbnMuZmllbGRzIERpY3Rpb25hcnkgb2YgZmllbGRzIHRvIHJldHVybiBvciBleGNsdWRlLlxuICogQHJldHVybnMge09iamVjdH0gQSB1c2VyIGlmIGZvdW5kLCBlbHNlIG51bGxcbiAqIEBpbXBvcnRGcm9tUGFja2FnZSBhY2NvdW50cy1iYXNlXG4gKi9cbkFjY291bnRzLmZpbmRVc2VyQnlFbWFpbCA9XG4gIChlbWFpbCwgb3B0aW9ucykgPT4gQWNjb3VudHMuX2ZpbmRVc2VyQnlRdWVyeSh7IGVtYWlsIH0sIG9wdGlvbnMpO1xuXG4vLyBYWFggbWF5YmUgdGhpcyBiZWxvbmdzIGluIHRoZSBjaGVjayBwYWNrYWdlXG5jb25zdCBOb25FbXB0eVN0cmluZyA9IE1hdGNoLldoZXJlKHggPT4ge1xuICBjaGVjayh4LCBTdHJpbmcpO1xuICByZXR1cm4geC5sZW5ndGggPiAwO1xufSk7XG5cbmNvbnN0IHBhc3N3b3JkVmFsaWRhdG9yID0gTWF0Y2guT25lT2YoXG4gIE1hdGNoLldoZXJlKHN0ciA9PiBNYXRjaC50ZXN0KHN0ciwgU3RyaW5nKSAmJiBzdHIubGVuZ3RoIDw9IE1ldGVvci5zZXR0aW5ncz8ucGFja2FnZXM/LmFjY291bnRzPy5wYXNzd29yZE1heExlbmd0aCB8fCAyNTYpLCB7XG4gICAgZGlnZXN0OiBNYXRjaC5XaGVyZShzdHIgPT4gTWF0Y2gudGVzdChzdHIsIFN0cmluZykgJiYgc3RyLmxlbmd0aCA9PT0gNjQpLFxuICAgIGFsZ29yaXRobTogTWF0Y2guT25lT2YoJ3NoYS0yNTYnKVxuICB9XG4pO1xuXG4vLyBIYW5kbGVyIHRvIGxvZ2luIHdpdGggYSBwYXNzd29yZC5cbi8vXG4vLyBUaGUgTWV0ZW9yIGNsaWVudCBzZXRzIG9wdGlvbnMucGFzc3dvcmQgdG8gYW4gb2JqZWN0IHdpdGgga2V5c1xuLy8gJ2RpZ2VzdCcgKHNldCB0byBTSEEyNTYocGFzc3dvcmQpKSBhbmQgJ2FsZ29yaXRobScgKFwic2hhLTI1NlwiKS5cbi8vXG4vLyBGb3Igb3RoZXIgRERQIGNsaWVudHMgd2hpY2ggZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gU0hBLCB0aGUgaGFuZGxlclxuLy8gYWxzbyBhY2NlcHRzIHRoZSBwbGFpbnRleHQgcGFzc3dvcmQgaW4gb3B0aW9ucy5wYXNzd29yZCBhcyBhIHN0cmluZy5cbi8vXG4vLyAoSXQgbWlnaHQgYmUgbmljZSBpZiBzZXJ2ZXJzIGNvdWxkIHR1cm4gdGhlIHBsYWludGV4dCBwYXNzd29yZFxuLy8gb3B0aW9uIG9mZi4gT3IgbWF5YmUgaXQgc2hvdWxkIGJlIG9wdC1pbiwgbm90IG9wdC1vdXQ/XG4vLyBBY2NvdW50cy5jb25maWcgb3B0aW9uPylcbi8vXG4vLyBOb3RlIHRoYXQgbmVpdGhlciBwYXNzd29yZCBvcHRpb24gaXMgc2VjdXJlIHdpdGhvdXQgU1NMLlxuLy9cbkFjY291bnRzLnJlZ2lzdGVyTG9naW5IYW5kbGVyKFwicGFzc3dvcmRcIiwgb3B0aW9ucyA9PiB7XG4gIGlmICghb3B0aW9ucy5wYXNzd29yZClcbiAgICByZXR1cm4gdW5kZWZpbmVkOyAvLyBkb24ndCBoYW5kbGVcblxuICBjaGVjayhvcHRpb25zLCB7XG4gICAgdXNlcjogQWNjb3VudHMuX3VzZXJRdWVyeVZhbGlkYXRvcixcbiAgICBwYXNzd29yZDogcGFzc3dvcmRWYWxpZGF0b3JcbiAgfSk7XG5cblxuICBjb25zdCB1c2VyID0gQWNjb3VudHMuX2ZpbmRVc2VyQnlRdWVyeShvcHRpb25zLnVzZXIsIHtmaWVsZHM6IHtcbiAgICBzZXJ2aWNlczogMSxcbiAgICAuLi5BY2NvdW50cy5fY2hlY2tQYXNzd29yZFVzZXJGaWVsZHMsXG4gIH19KTtcbiAgaWYgKCF1c2VyKSB7XG4gICAgQWNjb3VudHMuX2hhbmRsZUVycm9yKFwiVXNlciBub3QgZm91bmRcIik7XG4gIH1cblxuICBpZiAoIXVzZXIuc2VydmljZXMgfHwgIXVzZXIuc2VydmljZXMucGFzc3dvcmQgfHxcbiAgICAgICF1c2VyLnNlcnZpY2VzLnBhc3N3b3JkLmJjcnlwdCkge1xuICAgIEFjY291bnRzLl9oYW5kbGVFcnJvcihcIlVzZXIgaGFzIG5vIHBhc3N3b3JkIHNldFwiKTtcbiAgfVxuXG4gIHJldHVybiBjaGVja1Bhc3N3b3JkKFxuICAgIHVzZXIsXG4gICAgb3B0aW9ucy5wYXNzd29yZFxuICApO1xufSk7XG5cbi8vL1xuLy8vIENIQU5HSU5HXG4vLy9cblxuLyoqXG4gKiBAc3VtbWFyeSBDaGFuZ2UgYSB1c2VyJ3MgdXNlcm5hbWUuIFVzZSB0aGlzIGluc3RlYWQgb2YgdXBkYXRpbmcgdGhlXG4gKiBkYXRhYmFzZSBkaXJlY3RseS4gVGhlIG9wZXJhdGlvbiB3aWxsIGZhaWwgaWYgdGhlcmUgaXMgYW4gZXhpc3RpbmcgdXNlclxuICogd2l0aCBhIHVzZXJuYW1lIG9ubHkgZGlmZmVyaW5nIGluIGNhc2UuXG4gKiBAbG9jdXMgU2VydmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlcklkIFRoZSBJRCBvZiB0aGUgdXNlciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmV3VXNlcm5hbWUgQSBuZXcgdXNlcm5hbWUgZm9yIHRoZSB1c2VyLlxuICogQGltcG9ydEZyb21QYWNrYWdlIGFjY291bnRzLWJhc2VcbiAqL1xuQWNjb3VudHMuc2V0VXNlcm5hbWUgPSAodXNlcklkLCBuZXdVc2VybmFtZSkgPT4ge1xuICBjaGVjayh1c2VySWQsIE5vbkVtcHR5U3RyaW5nKTtcbiAgY2hlY2sobmV3VXNlcm5hbWUsIE5vbkVtcHR5U3RyaW5nKTtcblxuICBjb25zdCB1c2VyID0gZ2V0VXNlckJ5SWQodXNlcklkLCB7ZmllbGRzOiB7XG4gICAgdXNlcm5hbWU6IDEsXG4gIH19KTtcbiAgaWYgKCF1c2VyKSB7XG4gICAgQWNjb3VudHMuX2hhbmRsZUVycm9yKFwiVXNlciBub3QgZm91bmRcIik7XG4gIH1cblxuICBjb25zdCBvbGRVc2VybmFtZSA9IHVzZXIudXNlcm5hbWU7XG5cbiAgLy8gUGVyZm9ybSBhIGNhc2UgaW5zZW5zaXRpdmUgY2hlY2sgZm9yIGR1cGxpY2F0ZXMgYmVmb3JlIHVwZGF0ZVxuICBBY2NvdW50cy5fY2hlY2tGb3JDYXNlSW5zZW5zaXRpdmVEdXBsaWNhdGVzKCd1c2VybmFtZScsXG4gICAgJ1VzZXJuYW1lJywgbmV3VXNlcm5hbWUsIHVzZXIuX2lkKTtcblxuICBNZXRlb3IudXNlcnMudXBkYXRlKHtfaWQ6IHVzZXIuX2lkfSwgeyRzZXQ6IHt1c2VybmFtZTogbmV3VXNlcm5hbWV9fSk7XG5cbiAgLy8gUGVyZm9ybSBhbm90aGVyIGNoZWNrIGFmdGVyIHVwZGF0ZSwgaW4gY2FzZSBhIG1hdGNoaW5nIHVzZXIgaGFzIGJlZW5cbiAgLy8gaW5zZXJ0ZWQgaW4gdGhlIG1lYW50aW1lXG4gIHRyeSB7XG4gICAgQWNjb3VudHMuX2NoZWNrRm9yQ2FzZUluc2Vuc2l0aXZlRHVwbGljYXRlcygndXNlcm5hbWUnLFxuICAgICAgJ1VzZXJuYW1lJywgbmV3VXNlcm5hbWUsIHVzZXIuX2lkKTtcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICAvLyBVbmRvIHVwZGF0ZSBpZiB0aGUgY2hlY2sgZmFpbHNcbiAgICBNZXRlb3IudXNlcnMudXBkYXRlKHtfaWQ6IHVzZXIuX2lkfSwgeyRzZXQ6IHt1c2VybmFtZTogb2xkVXNlcm5hbWV9fSk7XG4gICAgdGhyb3cgZXg7XG4gIH1cbn07XG5cbi8vIExldCB0aGUgdXNlciBjaGFuZ2UgdGhlaXIgb3duIHBhc3N3b3JkIGlmIHRoZXkga25vdyB0aGUgb2xkXG4vLyBwYXNzd29yZC4gYG9sZFBhc3N3b3JkYCBhbmQgYG5ld1Bhc3N3b3JkYCBzaG91bGQgYmUgb2JqZWN0cyB3aXRoIGtleXNcbi8vIGBkaWdlc3RgIGFuZCBgYWxnb3JpdGhtYCAocmVwcmVzZW50aW5nIHRoZSBTSEEyNTYgb2YgdGhlIHBhc3N3b3JkKS5cbk1ldGVvci5tZXRob2RzKHtjaGFuZ2VQYXNzd29yZDogZnVuY3Rpb24gKG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCkge1xuICBjaGVjayhvbGRQYXNzd29yZCwgcGFzc3dvcmRWYWxpZGF0b3IpO1xuICBjaGVjayhuZXdQYXNzd29yZCwgcGFzc3dvcmRWYWxpZGF0b3IpO1xuXG4gIGlmICghdGhpcy51c2VySWQpIHtcbiAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDQwMSwgXCJNdXN0IGJlIGxvZ2dlZCBpblwiKTtcbiAgfVxuXG4gIGNvbnN0IHVzZXIgPSBnZXRVc2VyQnlJZCh0aGlzLnVzZXJJZCwge2ZpZWxkczoge1xuICAgIHNlcnZpY2VzOiAxLFxuICAgIC4uLkFjY291bnRzLl9jaGVja1Bhc3N3b3JkVXNlckZpZWxkcyxcbiAgfX0pO1xuICBpZiAoIXVzZXIpIHtcbiAgICBBY2NvdW50cy5faGFuZGxlRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIGlmICghdXNlci5zZXJ2aWNlcyB8fCAhdXNlci5zZXJ2aWNlcy5wYXNzd29yZCB8fCAhdXNlci5zZXJ2aWNlcy5wYXNzd29yZC5iY3J5cHQpIHtcbiAgICBBY2NvdW50cy5faGFuZGxlRXJyb3IoXCJVc2VyIGhhcyBubyBwYXNzd29yZCBzZXRcIik7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBjaGVja1Bhc3N3b3JkKHVzZXIsIG9sZFBhc3N3b3JkKTtcbiAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgfVxuXG4gIGNvbnN0IGhhc2hlZCA9IGhhc2hQYXNzd29yZChuZXdQYXNzd29yZCk7XG5cbiAgLy8gSXQgd291bGQgYmUgYmV0dGVyIGlmIHRoaXMgcmVtb3ZlZCBBTEwgZXhpc3RpbmcgdG9rZW5zIGFuZCByZXBsYWNlZFxuICAvLyB0aGUgdG9rZW4gZm9yIHRoZSBjdXJyZW50IGNvbm5lY3Rpb24gd2l0aCBhIG5ldyBvbmUsIGJ1dCB0aGF0IHdvdWxkXG4gIC8vIGJlIHRyaWNreSwgc28gd2UnbGwgc2V0dGxlIGZvciBqdXN0IHJlcGxhY2luZyBhbGwgdG9rZW5zIG90aGVyIHRoYW5cbiAgLy8gdGhlIG9uZSBmb3IgdGhlIGN1cnJlbnQgY29ubmVjdGlvbi5cbiAgY29uc3QgY3VycmVudFRva2VuID0gQWNjb3VudHMuX2dldExvZ2luVG9rZW4odGhpcy5jb25uZWN0aW9uLmlkKTtcbiAgTWV0ZW9yLnVzZXJzLnVwZGF0ZShcbiAgICB7IF9pZDogdGhpcy51c2VySWQgfSxcbiAgICB7XG4gICAgICAkc2V0OiB7ICdzZXJ2aWNlcy5wYXNzd29yZC5iY3J5cHQnOiBoYXNoZWQgfSxcbiAgICAgICRwdWxsOiB7XG4gICAgICAgICdzZXJ2aWNlcy5yZXN1bWUubG9naW5Ub2tlbnMnOiB7IGhhc2hlZFRva2VuOiB7ICRuZTogY3VycmVudFRva2VuIH0gfVxuICAgICAgfSxcbiAgICAgICR1bnNldDogeyAnc2VydmljZXMucGFzc3dvcmQucmVzZXQnOiAxIH1cbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHtwYXNzd29yZENoYW5nZWQ6IHRydWV9O1xufX0pO1xuXG5cbi8vIEZvcmNlIGNoYW5nZSB0aGUgdXNlcnMgcGFzc3dvcmQuXG5cbi8qKlxuICogQHN1bW1hcnkgRm9yY2libHkgY2hhbmdlIHRoZSBwYXNzd29yZCBmb3IgYSB1c2VyLlxuICogQGxvY3VzIFNlcnZlclxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJJZCBUaGUgaWQgb2YgdGhlIHVzZXIgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtTdHJpbmd9IG5ld1Bhc3N3b3JkIEEgbmV3IHBhc3N3b3JkIGZvciB0aGUgdXNlci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmxvZ291dCBMb2dvdXQgYWxsIGN1cnJlbnQgY29ubmVjdGlvbnMgd2l0aCB0aGlzIHVzZXJJZCAoZGVmYXVsdDogdHJ1ZSlcbiAqIEBpbXBvcnRGcm9tUGFja2FnZSBhY2NvdW50cy1iYXNlXG4gKi9cbkFjY291bnRzLnNldFBhc3N3b3JkID0gKHVzZXJJZCwgbmV3UGxhaW50ZXh0UGFzc3dvcmQsIG9wdGlvbnMpID0+IHtcbiAgY2hlY2sodXNlcklkLCBTdHJpbmcpXG4gIGNoZWNrKG5ld1BsYWludGV4dFBhc3N3b3JkLCBNYXRjaC5XaGVyZShzdHIgPT4gTWF0Y2gudGVzdChzdHIsIFN0cmluZykgJiYgc3RyLmxlbmd0aCA8PSBNZXRlb3Iuc2V0dGluZ3M/LnBhY2thZ2VzPy5hY2NvdW50cz8ucGFzc3dvcmRNYXhMZW5ndGggfHwgMjU2KSlcbiAgY2hlY2sob3B0aW9ucywgTWF0Y2guTWF5YmUoeyBsb2dvdXQ6IEJvb2xlYW4gfSkpXG4gIG9wdGlvbnMgPSB7IGxvZ291dDogdHJ1ZSAsIC4uLm9wdGlvbnMgfTtcblxuICBjb25zdCB1c2VyID0gZ2V0VXNlckJ5SWQodXNlcklkLCB7ZmllbGRzOiB7X2lkOiAxfX0pO1xuICBpZiAoIXVzZXIpIHtcbiAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDQwMywgXCJVc2VyIG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAkdW5zZXQ6IHtcbiAgICAgICdzZXJ2aWNlcy5wYXNzd29yZC5yZXNldCc6IDFcbiAgICB9LFxuICAgICRzZXQ6IHsnc2VydmljZXMucGFzc3dvcmQuYmNyeXB0JzogaGFzaFBhc3N3b3JkKG5ld1BsYWludGV4dFBhc3N3b3JkKX1cbiAgfTtcblxuICBpZiAob3B0aW9ucy5sb2dvdXQpIHtcbiAgICB1cGRhdGUuJHVuc2V0WydzZXJ2aWNlcy5yZXN1bWUubG9naW5Ub2tlbnMnXSA9IDE7XG4gIH1cblxuICBNZXRlb3IudXNlcnMudXBkYXRlKHtfaWQ6IHVzZXIuX2lkfSwgdXBkYXRlKTtcbn07XG5cblxuLy8vXG4vLy8gUkVTRVRUSU5HIFZJQSBFTUFJTFxuLy8vXG5cbi8vIFV0aWxpdHkgZm9yIHBsdWNraW5nIGFkZHJlc3NlcyBmcm9tIGVtYWlsc1xuY29uc3QgcGx1Y2tBZGRyZXNzZXMgPSAoZW1haWxzID0gW10pID0+IGVtYWlscy5tYXAoZW1haWwgPT4gZW1haWwuYWRkcmVzcyk7XG5cbi8vIE1ldGhvZCBjYWxsZWQgYnkgYSB1c2VyIHRvIHJlcXVlc3QgYSBwYXNzd29yZCByZXNldCBlbWFpbC4gVGhpcyBpc1xuLy8gdGhlIHN0YXJ0IG9mIHRoZSByZXNldCBwcm9jZXNzLlxuTWV0ZW9yLm1ldGhvZHMoe2ZvcmdvdFBhc3N3b3JkOiBvcHRpb25zID0+IHtcbiAgY2hlY2sob3B0aW9ucywge2VtYWlsOiBTdHJpbmd9KVxuXG4gIGNvbnN0IHVzZXIgPSBBY2NvdW50cy5maW5kVXNlckJ5RW1haWwob3B0aW9ucy5lbWFpbCwgeyBmaWVsZHM6IHsgZW1haWxzOiAxIH0gfSk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgQWNjb3VudHMuX2hhbmRsZUVycm9yKFwiVXNlciBub3QgZm91bmRcIik7XG4gIH1cblxuICBjb25zdCBlbWFpbHMgPSBwbHVja0FkZHJlc3Nlcyh1c2VyLmVtYWlscyk7XG4gIGNvbnN0IGNhc2VTZW5zaXRpdmVFbWFpbCA9IGVtYWlscy5maW5kKFxuICAgIGVtYWlsID0+IGVtYWlsLnRvTG93ZXJDYXNlKCkgPT09IG9wdGlvbnMuZW1haWwudG9Mb3dlckNhc2UoKVxuICApO1xuXG4gIEFjY291bnRzLnNlbmRSZXNldFBhc3N3b3JkRW1haWwodXNlci5faWQsIGNhc2VTZW5zaXRpdmVFbWFpbCk7XG59fSk7XG5cbi8qKlxuICogQHN1bW1hcnkgR2VuZXJhdGVzIGEgcmVzZXQgdG9rZW4gYW5kIHNhdmVzIGl0IGludG8gdGhlIGRhdGFiYXNlLlxuICogQGxvY3VzIFNlcnZlclxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJJZCBUaGUgaWQgb2YgdGhlIHVzZXIgdG8gZ2VuZXJhdGUgdGhlIHJlc2V0IHRva2VuIGZvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBlbWFpbCBXaGljaCBhZGRyZXNzIG9mIHRoZSB1c2VyIHRvIGdlbmVyYXRlIHRoZSByZXNldCB0b2tlbiBmb3IuIFRoaXMgYWRkcmVzcyBtdXN0IGJlIGluIHRoZSB1c2VyJ3MgYGVtYWlsc2AgbGlzdC4gSWYgYG51bGxgLCBkZWZhdWx0cyB0byB0aGUgZmlyc3QgZW1haWwgaW4gdGhlIGxpc3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVhc29uIGByZXNldFBhc3N3b3JkYCBvciBgZW5yb2xsQWNjb3VudGAuXG4gKiBAcGFyYW0ge09iamVjdH0gW2V4dHJhVG9rZW5EYXRhXSBPcHRpb25hbCBhZGRpdGlvbmFsIGRhdGEgdG8gYmUgYWRkZWQgaW50byB0aGUgdG9rZW4gcmVjb3JkLlxuICogQHJldHVybnMge09iamVjdH0gT2JqZWN0IHdpdGgge2VtYWlsLCB1c2VyLCB0b2tlbn0gdmFsdWVzLlxuICogQGltcG9ydEZyb21QYWNrYWdlIGFjY291bnRzLWJhc2VcbiAqL1xuQWNjb3VudHMuZ2VuZXJhdGVSZXNldFRva2VuID0gKHVzZXJJZCwgZW1haWwsIHJlYXNvbiwgZXh0cmFUb2tlbkRhdGEpID0+IHtcbiAgLy8gTWFrZSBzdXJlIHRoZSB1c2VyIGV4aXN0cywgYW5kIGVtYWlsIGlzIG9uZSBvZiB0aGVpciBhZGRyZXNzZXMuXG4gIC8vIERvbid0IGxpbWl0IHRoZSBmaWVsZHMgaW4gdGhlIHVzZXIgb2JqZWN0IHNpbmNlIHRoZSB1c2VyIGlzIHJldHVybmVkXG4gIC8vIGJ5IHRoZSBmdW5jdGlvbiBhbmQgc29tZSBvdGhlciBmaWVsZHMgbWlnaHQgYmUgdXNlZCBlbHNld2hlcmUuXG4gIGNvbnN0IHVzZXIgPSBnZXRVc2VyQnlJZCh1c2VySWQpO1xuICBpZiAoIXVzZXIpIHtcbiAgICBBY2NvdW50cy5faGFuZGxlRXJyb3IoXCJDYW4ndCBmaW5kIHVzZXJcIik7XG4gIH1cblxuICAvLyBwaWNrIHRoZSBmaXJzdCBlbWFpbCBpZiB3ZSB3ZXJlbid0IHBhc3NlZCBhbiBlbWFpbC5cbiAgaWYgKCFlbWFpbCAmJiB1c2VyLmVtYWlscyAmJiB1c2VyLmVtYWlsc1swXSkge1xuICAgIGVtYWlsID0gdXNlci5lbWFpbHNbMF0uYWRkcmVzcztcbiAgfVxuXG4gIC8vIG1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmFsaWQgZW1haWxcbiAgaWYgKCFlbWFpbCB8fFxuICAgICEocGx1Y2tBZGRyZXNzZXModXNlci5lbWFpbHMpLmluY2x1ZGVzKGVtYWlsKSkpIHtcbiAgICBBY2NvdW50cy5faGFuZGxlRXJyb3IoXCJObyBzdWNoIGVtYWlsIGZvciB1c2VyLlwiKTtcbiAgfVxuXG4gIGNvbnN0IHRva2VuID0gUmFuZG9tLnNlY3JldCgpO1xuICBjb25zdCB0b2tlblJlY29yZCA9IHtcbiAgICB0b2tlbixcbiAgICBlbWFpbCxcbiAgICB3aGVuOiBuZXcgRGF0ZSgpXG4gIH07XG5cbiAgaWYgKHJlYXNvbiA9PT0gJ3Jlc2V0UGFzc3dvcmQnKSB7XG4gICAgdG9rZW5SZWNvcmQucmVhc29uID0gJ3Jlc2V0JztcbiAgfSBlbHNlIGlmIChyZWFzb24gPT09ICdlbnJvbGxBY2NvdW50Jykge1xuICAgIHRva2VuUmVjb3JkLnJlYXNvbiA9ICdlbnJvbGwnO1xuICB9IGVsc2UgaWYgKHJlYXNvbikge1xuICAgIC8vIGZhbGxiYWNrIHNvIHRoYXQgdGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCBmb3IgdW5rbm93biByZWFzb25zIGFzIHdlbGxcbiAgICB0b2tlblJlY29yZC5yZWFzb24gPSByZWFzb247XG4gIH1cblxuICBpZiAoZXh0cmFUb2tlbkRhdGEpIHtcbiAgICBPYmplY3QuYXNzaWduKHRva2VuUmVjb3JkLCBleHRyYVRva2VuRGF0YSk7XG4gIH1cbiAgLy8gaWYgdGhpcyBtZXRob2QgaXMgY2FsbGVkIGZyb20gdGhlIGVucm9sbCBhY2NvdW50IHdvcmstZmxvdyB0aGVuXG4gIC8vIHN0b3JlIHRoZSB0b2tlbiByZWNvcmQgaW4gJ3NlcnZpY2VzLnBhc3N3b3JkLmVucm9sbCcgZGIgZmllbGRcbiAgLy8gZWxzZSBzdG9yZSB0aGUgdG9rZW4gcmVjb3JkIGluIGluICdzZXJ2aWNlcy5wYXNzd29yZC5yZXNldCcgZGIgZmllbGRcbiAgaWYocmVhc29uID09PSAnZW5yb2xsQWNjb3VudCcpIHtcbiAgICBNZXRlb3IudXNlcnMudXBkYXRlKHtfaWQ6IHVzZXIuX2lkfSwge1xuICAgICAgJHNldCA6IHtcbiAgICAgICAgJ3NlcnZpY2VzLnBhc3N3b3JkLmVucm9sbCc6IHRva2VuUmVjb3JkXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gYmVmb3JlIHBhc3NpbmcgdG8gdGVtcGxhdGUsIHVwZGF0ZSB1c2VyIG9iamVjdCB3aXRoIG5ldyB0b2tlblxuICAgIE1ldGVvci5fZW5zdXJlKHVzZXIsICdzZXJ2aWNlcycsICdwYXNzd29yZCcpLmVucm9sbCA9IHRva2VuUmVjb3JkO1xuICB9IGVsc2Uge1xuICAgIE1ldGVvci51c2Vycy51cGRhdGUoe19pZDogdXNlci5faWR9LCB7XG4gICAgICAkc2V0IDoge1xuICAgICAgICAnc2VydmljZXMucGFzc3dvcmQucmVzZXQnOiB0b2tlblJlY29yZFxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGJlZm9yZSBwYXNzaW5nIHRvIHRlbXBsYXRlLCB1cGRhdGUgdXNlciBvYmplY3Qgd2l0aCBuZXcgdG9rZW5cbiAgICBNZXRlb3IuX2Vuc3VyZSh1c2VyLCAnc2VydmljZXMnLCAncGFzc3dvcmQnKS5yZXNldCA9IHRva2VuUmVjb3JkO1xuICB9XG5cbiAgcmV0dXJuIHtlbWFpbCwgdXNlciwgdG9rZW59O1xufTtcblxuLyoqXG4gKiBAc3VtbWFyeSBHZW5lcmF0ZXMgYW4gZS1tYWlsIHZlcmlmaWNhdGlvbiB0b2tlbiBhbmQgc2F2ZXMgaXQgaW50byB0aGUgZGF0YWJhc2UuXG4gKiBAbG9jdXMgU2VydmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlcklkIFRoZSBpZCBvZiB0aGUgdXNlciB0byBnZW5lcmF0ZSB0aGUgIGUtbWFpbCB2ZXJpZmljYXRpb24gdG9rZW4gZm9yLlxuICogQHBhcmFtIHtTdHJpbmd9IGVtYWlsIFdoaWNoIGFkZHJlc3Mgb2YgdGhlIHVzZXIgdG8gZ2VuZXJhdGUgdGhlIGUtbWFpbCB2ZXJpZmljYXRpb24gdG9rZW4gZm9yLiBUaGlzIGFkZHJlc3MgbXVzdCBiZSBpbiB0aGUgdXNlcidzIGBlbWFpbHNgIGxpc3QuIElmIGBudWxsYCwgZGVmYXVsdHMgdG8gdGhlIGZpcnN0IHVudmVyaWZpZWQgZW1haWwgaW4gdGhlIGxpc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW2V4dHJhVG9rZW5EYXRhXSBPcHRpb25hbCBhZGRpdGlvbmFsIGRhdGEgdG8gYmUgYWRkZWQgaW50byB0aGUgdG9rZW4gcmVjb3JkLlxuICogQHJldHVybnMge09iamVjdH0gT2JqZWN0IHdpdGgge2VtYWlsLCB1c2VyLCB0b2tlbn0gdmFsdWVzLlxuICogQGltcG9ydEZyb21QYWNrYWdlIGFjY291bnRzLWJhc2VcbiAqL1xuQWNjb3VudHMuZ2VuZXJhdGVWZXJpZmljYXRpb25Ub2tlbiA9ICh1c2VySWQsIGVtYWlsLCBleHRyYVRva2VuRGF0YSkgPT4ge1xuICAvLyBNYWtlIHN1cmUgdGhlIHVzZXIgZXhpc3RzLCBhbmQgZW1haWwgaXMgb25lIG9mIHRoZWlyIGFkZHJlc3Nlcy5cbiAgLy8gRG9uJ3QgbGltaXQgdGhlIGZpZWxkcyBpbiB0aGUgdXNlciBvYmplY3Qgc2luY2UgdGhlIHVzZXIgaXMgcmV0dXJuZWRcbiAgLy8gYnkgdGhlIGZ1bmN0aW9uIGFuZCBzb21lIG90aGVyIGZpZWxkcyBtaWdodCBiZSB1c2VkIGVsc2V3aGVyZS5cbiAgY29uc3QgdXNlciA9IGdldFVzZXJCeUlkKHVzZXJJZCk7XG4gIGlmICghdXNlcikge1xuICAgIEFjY291bnRzLl9oYW5kbGVFcnJvcihcIkNhbid0IGZpbmQgdXNlclwiKTtcbiAgfVxuXG4gIC8vIHBpY2sgdGhlIGZpcnN0IHVudmVyaWZpZWQgZW1haWwgaWYgd2Ugd2VyZW4ndCBwYXNzZWQgYW4gZW1haWwuXG4gIGlmICghZW1haWwpIHtcbiAgICBjb25zdCBlbWFpbFJlY29yZCA9ICh1c2VyLmVtYWlscyB8fCBbXSkuZmluZChlID0+ICFlLnZlcmlmaWVkKTtcbiAgICBlbWFpbCA9IChlbWFpbFJlY29yZCB8fCB7fSkuYWRkcmVzcztcblxuICAgIGlmICghZW1haWwpIHtcbiAgICAgIEFjY291bnRzLl9oYW5kbGVFcnJvcihcIlRoYXQgdXNlciBoYXMgbm8gdW52ZXJpZmllZCBlbWFpbCBhZGRyZXNzZXMuXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmFsaWQgZW1haWxcbiAgaWYgKCFlbWFpbCB8fFxuICAgICEocGx1Y2tBZGRyZXNzZXModXNlci5lbWFpbHMpLmluY2x1ZGVzKGVtYWlsKSkpIHtcbiAgICBBY2NvdW50cy5faGFuZGxlRXJyb3IoXCJObyBzdWNoIGVtYWlsIGZvciB1c2VyLlwiKTtcbiAgfVxuXG4gIGNvbnN0IHRva2VuID0gUmFuZG9tLnNlY3JldCgpO1xuICBjb25zdCB0b2tlblJlY29yZCA9IHtcbiAgICB0b2tlbixcbiAgICAvLyBUT0RPOiBUaGlzIHNob3VsZCBwcm9iYWJseSBiZSByZW5hbWVkIHRvIFwiZW1haWxcIiB0byBtYXRjaCByZXNldCB0b2tlbiByZWNvcmQuXG4gICAgYWRkcmVzczogZW1haWwsXG4gICAgd2hlbjogbmV3IERhdGUoKVxuICB9O1xuXG4gIGlmIChleHRyYVRva2VuRGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odG9rZW5SZWNvcmQsIGV4dHJhVG9rZW5EYXRhKTtcbiAgfVxuXG4gIE1ldGVvci51c2Vycy51cGRhdGUoe19pZDogdXNlci5faWR9LCB7JHB1c2g6IHtcbiAgICAnc2VydmljZXMuZW1haWwudmVyaWZpY2F0aW9uVG9rZW5zJzogdG9rZW5SZWNvcmRcbiAgfX0pO1xuXG4gIC8vIGJlZm9yZSBwYXNzaW5nIHRvIHRlbXBsYXRlLCB1cGRhdGUgdXNlciBvYmplY3Qgd2l0aCBuZXcgdG9rZW5cbiAgTWV0ZW9yLl9lbnN1cmUodXNlciwgJ3NlcnZpY2VzJywgJ2VtYWlsJyk7XG4gIGlmICghdXNlci5zZXJ2aWNlcy5lbWFpbC52ZXJpZmljYXRpb25Ub2tlbnMpIHtcbiAgICB1c2VyLnNlcnZpY2VzLmVtYWlsLnZlcmlmaWNhdGlvblRva2VucyA9IFtdO1xuICB9XG4gIHVzZXIuc2VydmljZXMuZW1haWwudmVyaWZpY2F0aW9uVG9rZW5zLnB1c2godG9rZW5SZWNvcmQpO1xuXG4gIHJldHVybiB7ZW1haWwsIHVzZXIsIHRva2VufTtcbn07XG5cblxuLy8gc2VuZCB0aGUgdXNlciBhbiBlbWFpbCB3aXRoIGEgbGluayB0aGF0IHdoZW4gb3BlbmVkIGFsbG93cyB0aGUgdXNlclxuLy8gdG8gc2V0IGEgbmV3IHBhc3N3b3JkLCB3aXRob3V0IHRoZSBvbGQgcGFzc3dvcmQuXG5cbi8qKlxuICogQHN1bW1hcnkgU2VuZCBhbiBlbWFpbCB3aXRoIGEgbGluayB0aGUgdXNlciBjYW4gdXNlIHRvIHJlc2V0IHRoZWlyIHBhc3N3b3JkLlxuICogQGxvY3VzIFNlcnZlclxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJJZCBUaGUgaWQgb2YgdGhlIHVzZXIgdG8gc2VuZCBlbWFpbCB0by5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbZW1haWxdIE9wdGlvbmFsLiBXaGljaCBhZGRyZXNzIG9mIHRoZSB1c2VyJ3MgdG8gc2VuZCB0aGUgZW1haWwgdG8uIFRoaXMgYWRkcmVzcyBtdXN0IGJlIGluIHRoZSB1c2VyJ3MgYGVtYWlsc2AgbGlzdC4gRGVmYXVsdHMgdG8gdGhlIGZpcnN0IGVtYWlsIGluIHRoZSBsaXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtleHRyYVRva2VuRGF0YV0gT3B0aW9uYWwgYWRkaXRpb25hbCBkYXRhIHRvIGJlIGFkZGVkIGludG8gdGhlIHRva2VuIHJlY29yZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZXh0cmFQYXJhbXNdIE9wdGlvbmFsIGFkZGl0aW9uYWwgcGFyYW1zIHRvIGJlIGFkZGVkIHRvIHRoZSByZXNldCB1cmwuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBPYmplY3Qgd2l0aCB7ZW1haWwsIHVzZXIsIHRva2VuLCB1cmwsIG9wdGlvbnN9IHZhbHVlcy5cbiAqIEBpbXBvcnRGcm9tUGFja2FnZSBhY2NvdW50cy1iYXNlXG4gKi9cbkFjY291bnRzLnNlbmRSZXNldFBhc3N3b3JkRW1haWwgPSAodXNlcklkLCBlbWFpbCwgZXh0cmFUb2tlbkRhdGEsIGV4dHJhUGFyYW1zKSA9PiB7XG4gIGNvbnN0IHtlbWFpbDogcmVhbEVtYWlsLCB1c2VyLCB0b2tlbn0gPVxuICAgIEFjY291bnRzLmdlbmVyYXRlUmVzZXRUb2tlbih1c2VySWQsIGVtYWlsLCAncmVzZXRQYXNzd29yZCcsIGV4dHJhVG9rZW5EYXRhKTtcbiAgY29uc3QgdXJsID0gQWNjb3VudHMudXJscy5yZXNldFBhc3N3b3JkKHRva2VuLCBleHRyYVBhcmFtcyk7XG4gIGNvbnN0IG9wdGlvbnMgPSBBY2NvdW50cy5nZW5lcmF0ZU9wdGlvbnNGb3JFbWFpbChyZWFsRW1haWwsIHVzZXIsIHVybCwgJ3Jlc2V0UGFzc3dvcmQnKTtcbiAgRW1haWwuc2VuZChvcHRpb25zKTtcbiAgaWYgKE1ldGVvci5pc0RldmVsb3BtZW50KSB7XG4gICAgY29uc29sZS5sb2coYFxcblJlc2V0IHBhc3N3b3JkIFVSTDogJHt1cmx9YCk7XG4gIH1cbiAgcmV0dXJuIHtlbWFpbDogcmVhbEVtYWlsLCB1c2VyLCB0b2tlbiwgdXJsLCBvcHRpb25zfTtcbn07XG5cbi8vIHNlbmQgdGhlIHVzZXIgYW4gZW1haWwgaW5mb3JtaW5nIHRoZW0gdGhhdCB0aGVpciBhY2NvdW50IHdhcyBjcmVhdGVkLCB3aXRoXG4vLyBhIGxpbmsgdGhhdCB3aGVuIG9wZW5lZCBib3RoIG1hcmtzIHRoZWlyIGVtYWlsIGFzIHZlcmlmaWVkIGFuZCBmb3JjZXMgdGhlbVxuLy8gdG8gY2hvb3NlIHRoZWlyIHBhc3N3b3JkLiBUaGUgZW1haWwgbXVzdCBiZSBvbmUgb2YgdGhlIGFkZHJlc3NlcyBpbiB0aGVcbi8vIHVzZXIncyBlbWFpbHMgZmllbGQsIG9yIHVuZGVmaW5lZCB0byBwaWNrIHRoZSBmaXJzdCBlbWFpbCBhdXRvbWF0aWNhbGx5LlxuLy9cbi8vIFRoaXMgaXMgbm90IGNhbGxlZCBhdXRvbWF0aWNhbGx5LiBJdCBtdXN0IGJlIGNhbGxlZCBtYW51YWxseSBpZiB5b3Vcbi8vIHdhbnQgdG8gdXNlIGVucm9sbG1lbnQgZW1haWxzLlxuXG4vKipcbiAqIEBzdW1tYXJ5IFNlbmQgYW4gZW1haWwgd2l0aCBhIGxpbmsgdGhlIHVzZXIgY2FuIHVzZSB0byBzZXQgdGhlaXIgaW5pdGlhbCBwYXNzd29yZC5cbiAqIEBsb2N1cyBTZXJ2ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSB1c2VySWQgVGhlIGlkIG9mIHRoZSB1c2VyIHRvIHNlbmQgZW1haWwgdG8uXG4gKiBAcGFyYW0ge1N0cmluZ30gW2VtYWlsXSBPcHRpb25hbC4gV2hpY2ggYWRkcmVzcyBvZiB0aGUgdXNlcidzIHRvIHNlbmQgdGhlIGVtYWlsIHRvLiBUaGlzIGFkZHJlc3MgbXVzdCBiZSBpbiB0aGUgdXNlcidzIGBlbWFpbHNgIGxpc3QuIERlZmF1bHRzIHRvIHRoZSBmaXJzdCBlbWFpbCBpbiB0aGUgbGlzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZXh0cmFUb2tlbkRhdGFdIE9wdGlvbmFsIGFkZGl0aW9uYWwgZGF0YSB0byBiZSBhZGRlZCBpbnRvIHRoZSB0b2tlbiByZWNvcmQuXG4gKiBAcGFyYW0ge09iamVjdH0gW2V4dHJhUGFyYW1zXSBPcHRpb25hbCBhZGRpdGlvbmFsIHBhcmFtcyB0byBiZSBhZGRlZCB0byB0aGUgZW5yb2xsbWVudCB1cmwuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBPYmplY3Qgd2l0aCB7ZW1haWwsIHVzZXIsIHRva2VuLCB1cmwsIG9wdGlvbnN9IHZhbHVlcy5cbiAqIEBpbXBvcnRGcm9tUGFja2FnZSBhY2NvdW50cy1iYXNlXG4gKi9cbkFjY291bnRzLnNlbmRFbnJvbGxtZW50RW1haWwgPSAodXNlcklkLCBlbWFpbCwgZXh0cmFUb2tlbkRhdGEsIGV4dHJhUGFyYW1zKSA9PiB7XG4gIGNvbnN0IHtlbWFpbDogcmVhbEVtYWlsLCB1c2VyLCB0b2tlbn0gPVxuICAgIEFjY291bnRzLmdlbmVyYXRlUmVzZXRUb2tlbih1c2VySWQsIGVtYWlsLCAnZW5yb2xsQWNjb3VudCcsIGV4dHJhVG9rZW5EYXRhKTtcbiAgY29uc3QgdXJsID0gQWNjb3VudHMudXJscy5lbnJvbGxBY2NvdW50KHRva2VuLCBleHRyYVBhcmFtcyk7XG4gIGNvbnN0IG9wdGlvbnMgPSBBY2NvdW50cy5nZW5lcmF0ZU9wdGlvbnNGb3JFbWFpbChyZWFsRW1haWwsIHVzZXIsIHVybCwgJ2Vucm9sbEFjY291bnQnKTtcbiAgRW1haWwuc2VuZChvcHRpb25zKTtcbiAgaWYgKE1ldGVvci5pc0RldmVsb3BtZW50KSB7XG4gICAgY29uc29sZS5sb2coYFxcbkVucm9sbG1lbnQgZW1haWwgVVJMOiAke3VybH1gKTtcbiAgfVxuICByZXR1cm4ge2VtYWlsOiByZWFsRW1haWwsIHVzZXIsIHRva2VuLCB1cmwsIG9wdGlvbnN9O1xufTtcblxuXG4vLyBUYWtlIHRva2VuIGZyb20gc2VuZFJlc2V0UGFzc3dvcmRFbWFpbCBvciBzZW5kRW5yb2xsbWVudEVtYWlsLCBjaGFuZ2Vcbi8vIHRoZSB1c2VycyBwYXNzd29yZCwgYW5kIGxvZyB0aGVtIGluLlxuTWV0ZW9yLm1ldGhvZHMoe3Jlc2V0UGFzc3dvcmQ6IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gIGNvbnN0IHRva2VuID0gYXJnc1swXTtcbiAgY29uc3QgbmV3UGFzc3dvcmQgPSBhcmdzWzFdO1xuICByZXR1cm4gQWNjb3VudHMuX2xvZ2luTWV0aG9kKFxuICAgIHRoaXMsXG4gICAgXCJyZXNldFBhc3N3b3JkXCIsXG4gICAgYXJncyxcbiAgICBcInBhc3N3b3JkXCIsXG4gICAgKCkgPT4ge1xuICAgICAgY2hlY2sodG9rZW4sIFN0cmluZyk7XG4gICAgICBjaGVjayhuZXdQYXNzd29yZCwgcGFzc3dvcmRWYWxpZGF0b3IpO1xuXG4gICAgICBsZXQgdXNlciA9IE1ldGVvci51c2Vycy5maW5kT25lKFxuICAgICAgICB7XCJzZXJ2aWNlcy5wYXNzd29yZC5yZXNldC50b2tlblwiOiB0b2tlbn0sXG4gICAgICAgIHtmaWVsZHM6IHtcbiAgICAgICAgICBzZXJ2aWNlczogMSxcbiAgICAgICAgICBlbWFpbHM6IDEsXG4gICAgICAgIH19XG4gICAgICApO1xuXG4gICAgICBsZXQgaXNFbnJvbGwgPSBmYWxzZTtcbiAgICAgIC8vIGlmIHRva2VuIGlzIGluIHNlcnZpY2VzLnBhc3N3b3JkLnJlc2V0IGRiIGZpZWxkIGltcGxpZXNcbiAgICAgIC8vIHRoaXMgbWV0aG9kIGlzIHdhcyBub3QgY2FsbGVkIGZyb20gZW5yb2xsIGFjY291bnQgd29ya2Zsb3dcbiAgICAgIC8vIGVsc2UgdGhpcyBtZXRob2QgaXMgY2FsbGVkIGZyb20gZW5yb2xsIGFjY291bnQgd29ya2Zsb3dcbiAgICAgIGlmKCF1c2VyKSB7XG4gICAgICAgIHVzZXIgPSBNZXRlb3IudXNlcnMuZmluZE9uZShcbiAgICAgICAgICB7XCJzZXJ2aWNlcy5wYXNzd29yZC5lbnJvbGwudG9rZW5cIjogdG9rZW59LFxuICAgICAgICAgIHtmaWVsZHM6IHtcbiAgICAgICAgICAgIHNlcnZpY2VzOiAxLFxuICAgICAgICAgICAgZW1haWxzOiAxLFxuICAgICAgICAgIH19XG4gICAgICAgICk7XG4gICAgICAgIGlzRW5yb2xsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDQwMywgXCJUb2tlbiBleHBpcmVkXCIpO1xuICAgICAgfVxuICAgICAgbGV0IHRva2VuUmVjb3JkID0ge307XG4gICAgICBpZihpc0Vucm9sbCkge1xuICAgICAgICB0b2tlblJlY29yZCA9IHVzZXIuc2VydmljZXMucGFzc3dvcmQuZW5yb2xsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9rZW5SZWNvcmQgPSB1c2VyLnNlcnZpY2VzLnBhc3N3b3JkLnJlc2V0O1xuICAgICAgfVxuICAgICAgY29uc3QgeyB3aGVuLCBlbWFpbCB9ID0gdG9rZW5SZWNvcmQ7XG4gICAgICBsZXQgdG9rZW5MaWZldGltZU1zID0gQWNjb3VudHMuX2dldFBhc3N3b3JkUmVzZXRUb2tlbkxpZmV0aW1lTXMoKTtcbiAgICAgIGlmIChpc0Vucm9sbCkge1xuICAgICAgICB0b2tlbkxpZmV0aW1lTXMgPSBBY2NvdW50cy5fZ2V0UGFzc3dvcmRFbnJvbGxUb2tlbkxpZmV0aW1lTXMoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lTXMgPSBEYXRlLm5vdygpO1xuICAgICAgaWYgKChjdXJyZW50VGltZU1zIC0gd2hlbikgPiB0b2tlbkxpZmV0aW1lTXMpXG4gICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoNDAzLCBcIlRva2VuIGV4cGlyZWRcIik7XG4gICAgICBpZiAoIShwbHVja0FkZHJlc3Nlcyh1c2VyLmVtYWlscykuaW5jbHVkZXMoZW1haWwpKSlcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1c2VySWQ6IHVzZXIuX2lkLFxuICAgICAgICAgIGVycm9yOiBuZXcgTWV0ZW9yLkVycm9yKDQwMywgXCJUb2tlbiBoYXMgaW52YWxpZCBlbWFpbCBhZGRyZXNzXCIpXG4gICAgICAgIH07XG5cbiAgICAgIGNvbnN0IGhhc2hlZCA9IGhhc2hQYXNzd29yZChuZXdQYXNzd29yZCk7XG5cbiAgICAgIC8vIE5PVEU6IFdlJ3JlIGFib3V0IHRvIGludmFsaWRhdGUgdG9rZW5zIG9uIHRoZSB1c2VyLCB3aG8gd2UgbWlnaHQgYmVcbiAgICAgIC8vIGxvZ2dlZCBpbiBhcy4gTWFrZSBzdXJlIHRvIGF2b2lkIGxvZ2dpbmcgb3Vyc2VsdmVzIG91dCBpZiB0aGlzXG4gICAgICAvLyBoYXBwZW5zLiBCdXQgYWxzbyBtYWtlIHN1cmUgbm90IHRvIGxlYXZlIHRoZSBjb25uZWN0aW9uIGluIGEgc3RhdGVcbiAgICAgIC8vIG9mIGhhdmluZyBhIGJhZCB0b2tlbiBzZXQgaWYgdGhpbmdzIGZhaWwuXG4gICAgICBjb25zdCBvbGRUb2tlbiA9IEFjY291bnRzLl9nZXRMb2dpblRva2VuKHRoaXMuY29ubmVjdGlvbi5pZCk7XG4gICAgICBBY2NvdW50cy5fc2V0TG9naW5Ub2tlbih1c2VyLl9pZCwgdGhpcy5jb25uZWN0aW9uLCBudWxsKTtcbiAgICAgIGNvbnN0IHJlc2V0VG9PbGRUb2tlbiA9ICgpID0+XG4gICAgICAgIEFjY291bnRzLl9zZXRMb2dpblRva2VuKHVzZXIuX2lkLCB0aGlzLmNvbm5lY3Rpb24sIG9sZFRva2VuKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB1c2VyIHJlY29yZCBieTpcbiAgICAgICAgLy8gLSBDaGFuZ2luZyB0aGUgcGFzc3dvcmQgdG8gdGhlIG5ldyBvbmVcbiAgICAgICAgLy8gLSBGb3JnZXR0aW5nIGFib3V0IHRoZSByZXNldCB0b2tlbiBvciBlbnJvbGwgdG9rZW4gdGhhdCB3YXMganVzdCB1c2VkXG4gICAgICAgIC8vIC0gVmVyaWZ5aW5nIHRoZWlyIGVtYWlsLCBzaW5jZSB0aGV5IGdvdCB0aGUgcGFzc3dvcmQgcmVzZXQgdmlhIGVtYWlsLlxuICAgICAgICBsZXQgYWZmZWN0ZWRSZWNvcmRzID0ge307XG4gICAgICAgIC8vIGlmIHJlYXNvbiBpcyBlbnJvbGwgdGhlbiBjaGVjayBzZXJ2aWNlcy5wYXNzd29yZC5lbnJvbGwudG9rZW4gZmllbGQgZm9yIGFmZmVjdGVkIHJlY29yZHNcbiAgICAgICAgaWYoaXNFbnJvbGwpIHtcbiAgICAgICAgICBhZmZlY3RlZFJlY29yZHMgPSBNZXRlb3IudXNlcnMudXBkYXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfaWQ6IHVzZXIuX2lkLFxuICAgICAgICAgICAgICAnZW1haWxzLmFkZHJlc3MnOiBlbWFpbCxcbiAgICAgICAgICAgICAgJ3NlcnZpY2VzLnBhc3N3b3JkLmVucm9sbC50b2tlbic6IHRva2VuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyRzZXQ6IHsnc2VydmljZXMucGFzc3dvcmQuYmNyeXB0JzogaGFzaGVkLFxuICAgICAgICAgICAgICAgICAgICAnZW1haWxzLiQudmVyaWZpZWQnOiB0cnVlfSxcbiAgICAgICAgICAgICAgJHVuc2V0OiB7J3NlcnZpY2VzLnBhc3N3b3JkLmVucm9sbCc6IDEgfX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFmZmVjdGVkUmVjb3JkcyA9IE1ldGVvci51c2Vycy51cGRhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9pZDogdXNlci5faWQsXG4gICAgICAgICAgICAgICdlbWFpbHMuYWRkcmVzcyc6IGVtYWlsLFxuICAgICAgICAgICAgICAnc2VydmljZXMucGFzc3dvcmQucmVzZXQudG9rZW4nOiB0b2tlblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHskc2V0OiB7J3NlcnZpY2VzLnBhc3N3b3JkLmJjcnlwdCc6IGhhc2hlZCxcbiAgICAgICAgICAgICAgICAgICAgJ2VtYWlscy4kLnZlcmlmaWVkJzogdHJ1ZX0sXG4gICAgICAgICAgICAgICR1bnNldDogeydzZXJ2aWNlcy5wYXNzd29yZC5yZXNldCc6IDEgfX0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhZmZlY3RlZFJlY29yZHMgIT09IDEpXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZXJJZDogdXNlci5faWQsXG4gICAgICAgICAgICBlcnJvcjogbmV3IE1ldGVvci5FcnJvcig0MDMsIFwiSW52YWxpZCBlbWFpbFwiKVxuICAgICAgICAgIH07XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVzZXRUb09sZFRva2VuKCk7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cblxuICAgICAgLy8gUmVwbGFjZSBhbGwgdmFsaWQgbG9naW4gdG9rZW5zIHdpdGggbmV3IG9uZXMgKGNoYW5naW5nXG4gICAgICAvLyBwYXNzd29yZCBzaG91bGQgaW52YWxpZGF0ZSBleGlzdGluZyBzZXNzaW9ucykuXG4gICAgICBBY2NvdW50cy5fY2xlYXJBbGxMb2dpblRva2Vucyh1c2VyLl9pZCk7XG5cbiAgICAgIHJldHVybiB7dXNlcklkOiB1c2VyLl9pZH07XG4gICAgfVxuICApO1xufX0pO1xuXG4vLy9cbi8vLyBFTUFJTCBWRVJJRklDQVRJT05cbi8vL1xuXG5cbi8vIHNlbmQgdGhlIHVzZXIgYW4gZW1haWwgd2l0aCBhIGxpbmsgdGhhdCB3aGVuIG9wZW5lZCBtYXJrcyB0aGF0XG4vLyBhZGRyZXNzIGFzIHZlcmlmaWVkXG5cbi8qKlxuICogQHN1bW1hcnkgU2VuZCBhbiBlbWFpbCB3aXRoIGEgbGluayB0aGUgdXNlciBjYW4gdXNlIHZlcmlmeSB0aGVpciBlbWFpbCBhZGRyZXNzLlxuICogQGxvY3VzIFNlcnZlclxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJJZCBUaGUgaWQgb2YgdGhlIHVzZXIgdG8gc2VuZCBlbWFpbCB0by5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbZW1haWxdIE9wdGlvbmFsLiBXaGljaCBhZGRyZXNzIG9mIHRoZSB1c2VyJ3MgdG8gc2VuZCB0aGUgZW1haWwgdG8uIFRoaXMgYWRkcmVzcyBtdXN0IGJlIGluIHRoZSB1c2VyJ3MgYGVtYWlsc2AgbGlzdC4gRGVmYXVsdHMgdG8gdGhlIGZpcnN0IHVudmVyaWZpZWQgZW1haWwgaW4gdGhlIGxpc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW2V4dHJhVG9rZW5EYXRhXSBPcHRpb25hbCBhZGRpdGlvbmFsIGRhdGEgdG8gYmUgYWRkZWQgaW50byB0aGUgdG9rZW4gcmVjb3JkLlxuICogQHBhcmFtIHtPYmplY3R9IFtleHRyYVBhcmFtc10gT3B0aW9uYWwgYWRkaXRpb25hbCBwYXJhbXMgdG8gYmUgYWRkZWQgdG8gdGhlIHZlcmlmaWNhdGlvbiB1cmwuXG4gKlxuICogQHJldHVybnMge09iamVjdH0gT2JqZWN0IHdpdGgge2VtYWlsLCB1c2VyLCB0b2tlbiwgdXJsLCBvcHRpb25zfSB2YWx1ZXMuXG4gKiBAaW1wb3J0RnJvbVBhY2thZ2UgYWNjb3VudHMtYmFzZVxuICovXG5BY2NvdW50cy5zZW5kVmVyaWZpY2F0aW9uRW1haWwgPSAodXNlcklkLCBlbWFpbCwgZXh0cmFUb2tlbkRhdGEsIGV4dHJhUGFyYW1zKSA9PiB7XG4gIC8vIFhYWCBBbHNvIGdlbmVyYXRlIGEgbGluayB1c2luZyB3aGljaCBzb21lb25lIGNhbiBkZWxldGUgdGhpc1xuICAvLyBhY2NvdW50IGlmIHRoZXkgb3duIHNhaWQgYWRkcmVzcyBidXQgd2VyZW4ndCB0aG9zZSB3aG8gY3JlYXRlZFxuICAvLyB0aGlzIGFjY291bnQuXG5cbiAgY29uc3Qge2VtYWlsOiByZWFsRW1haWwsIHVzZXIsIHRva2VufSA9XG4gICAgQWNjb3VudHMuZ2VuZXJhdGVWZXJpZmljYXRpb25Ub2tlbih1c2VySWQsIGVtYWlsLCBleHRyYVRva2VuRGF0YSk7XG4gIGNvbnN0IHVybCA9IEFjY291bnRzLnVybHMudmVyaWZ5RW1haWwodG9rZW4sIGV4dHJhUGFyYW1zKTtcbiAgY29uc3Qgb3B0aW9ucyA9IEFjY291bnRzLmdlbmVyYXRlT3B0aW9uc0ZvckVtYWlsKHJlYWxFbWFpbCwgdXNlciwgdXJsLCAndmVyaWZ5RW1haWwnKTtcbiAgRW1haWwuc2VuZChvcHRpb25zKTtcbiAgaWYgKE1ldGVvci5pc0RldmVsb3BtZW50KSB7XG4gICAgY29uc29sZS5sb2coYFxcblZlcmlmaWNhdGlvbiBlbWFpbCBVUkw6ICR7dXJsfWApO1xuICB9XG4gIHJldHVybiB7ZW1haWw6IHJlYWxFbWFpbCwgdXNlciwgdG9rZW4sIHVybCwgb3B0aW9uc307XG59O1xuXG4vLyBUYWtlIHRva2VuIGZyb20gc2VuZFZlcmlmaWNhdGlvbkVtYWlsLCBtYXJrIHRoZSBlbWFpbCBhcyB2ZXJpZmllZCxcbi8vIGFuZCBsb2cgdGhlbSBpbi5cbk1ldGVvci5tZXRob2RzKHt2ZXJpZnlFbWFpbDogZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgY29uc3QgdG9rZW4gPSBhcmdzWzBdO1xuICByZXR1cm4gQWNjb3VudHMuX2xvZ2luTWV0aG9kKFxuICAgIHRoaXMsXG4gICAgXCJ2ZXJpZnlFbWFpbFwiLFxuICAgIGFyZ3MsXG4gICAgXCJwYXNzd29yZFwiLFxuICAgICgpID0+IHtcbiAgICAgIGNoZWNrKHRva2VuLCBTdHJpbmcpO1xuXG4gICAgICBjb25zdCB1c2VyID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUoXG4gICAgICAgIHsnc2VydmljZXMuZW1haWwudmVyaWZpY2F0aW9uVG9rZW5zLnRva2VuJzogdG9rZW59LFxuICAgICAgICB7ZmllbGRzOiB7XG4gICAgICAgICAgc2VydmljZXM6IDEsXG4gICAgICAgICAgZW1haWxzOiAxLFxuICAgICAgICB9fVxuICAgICAgKTtcbiAgICAgIGlmICghdXNlcilcbiAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig0MDMsIFwiVmVyaWZ5IGVtYWlsIGxpbmsgZXhwaXJlZFwiKTtcblxuICAgICAgICBjb25zdCB0b2tlblJlY29yZCA9IHVzZXIuc2VydmljZXMuZW1haWwudmVyaWZpY2F0aW9uVG9rZW5zLmZpbmQoXG4gICAgICAgICAgdCA9PiB0LnRva2VuID09IHRva2VuXG4gICAgICAgICk7XG4gICAgICBpZiAoIXRva2VuUmVjb3JkKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVzZXJJZDogdXNlci5faWQsXG4gICAgICAgICAgZXJyb3I6IG5ldyBNZXRlb3IuRXJyb3IoNDAzLCBcIlZlcmlmeSBlbWFpbCBsaW5rIGV4cGlyZWRcIilcbiAgICAgICAgfTtcblxuICAgICAgY29uc3QgZW1haWxzUmVjb3JkID0gdXNlci5lbWFpbHMuZmluZChcbiAgICAgICAgZSA9PiBlLmFkZHJlc3MgPT0gdG9rZW5SZWNvcmQuYWRkcmVzc1xuICAgICAgKTtcbiAgICAgIGlmICghZW1haWxzUmVjb3JkKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVzZXJJZDogdXNlci5faWQsXG4gICAgICAgICAgZXJyb3I6IG5ldyBNZXRlb3IuRXJyb3IoNDAzLCBcIlZlcmlmeSBlbWFpbCBsaW5rIGlzIGZvciB1bmtub3duIGFkZHJlc3NcIilcbiAgICAgICAgfTtcblxuICAgICAgLy8gQnkgaW5jbHVkaW5nIHRoZSBhZGRyZXNzIGluIHRoZSBxdWVyeSwgd2UgY2FuIHVzZSAnZW1haWxzLiQnIGluIHRoZVxuICAgICAgLy8gbW9kaWZpZXIgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBzcGVjaWZpYyBvYmplY3QgaW4gdGhlIGVtYWlsc1xuICAgICAgLy8gYXJyYXkuIFNlZVxuICAgICAgLy8gaHR0cDovL3d3dy5tb25nb2RiLm9yZy9kaXNwbGF5L0RPQ1MvVXBkYXRpbmcvI1VwZGF0aW5nLVRoZSUyNHBvc2l0aW9uYWxvcGVyYXRvcilcbiAgICAgIC8vIGh0dHA6Ly93d3cubW9uZ29kYi5vcmcvZGlzcGxheS9ET0NTL1VwZGF0aW5nI1VwZGF0aW5nLSUyNHB1bGxcbiAgICAgIE1ldGVvci51c2Vycy51cGRhdGUoXG4gICAgICAgIHtfaWQ6IHVzZXIuX2lkLFxuICAgICAgICAgJ2VtYWlscy5hZGRyZXNzJzogdG9rZW5SZWNvcmQuYWRkcmVzc30sXG4gICAgICAgIHskc2V0OiB7J2VtYWlscy4kLnZlcmlmaWVkJzogdHJ1ZX0sXG4gICAgICAgICAkcHVsbDogeydzZXJ2aWNlcy5lbWFpbC52ZXJpZmljYXRpb25Ub2tlbnMnOiB7YWRkcmVzczogdG9rZW5SZWNvcmQuYWRkcmVzc319fSk7XG5cbiAgICAgIHJldHVybiB7dXNlcklkOiB1c2VyLl9pZH07XG4gICAgfVxuICApO1xufX0pO1xuXG4vKipcbiAqIEBzdW1tYXJ5IEFkZCBhbiBlbWFpbCBhZGRyZXNzIGZvciBhIHVzZXIuIFVzZSB0aGlzIGluc3RlYWQgb2YgZGlyZWN0bHlcbiAqIHVwZGF0aW5nIHRoZSBkYXRhYmFzZS4gVGhlIG9wZXJhdGlvbiB3aWxsIGZhaWwgaWYgdGhlcmUgaXMgYSBkaWZmZXJlbnQgdXNlclxuICogd2l0aCBhbiBlbWFpbCBvbmx5IGRpZmZlcmluZyBpbiBjYXNlLiBJZiB0aGUgc3BlY2lmaWVkIHVzZXIgaGFzIGFuIGV4aXN0aW5nXG4gKiBlbWFpbCBvbmx5IGRpZmZlcmluZyBpbiBjYXNlIGhvd2V2ZXIsIHdlIHJlcGxhY2UgaXQuXG4gKiBAbG9jdXMgU2VydmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlcklkIFRoZSBJRCBvZiB0aGUgdXNlciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmV3RW1haWwgQSBuZXcgZW1haWwgYWRkcmVzcyBmb3IgdGhlIHVzZXIuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt2ZXJpZmllZF0gT3B0aW9uYWwgLSB3aGV0aGVyIHRoZSBuZXcgZW1haWwgYWRkcmVzcyBzaG91bGRcbiAqIGJlIG1hcmtlZCBhcyB2ZXJpZmllZC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gKiBAaW1wb3J0RnJvbVBhY2thZ2UgYWNjb3VudHMtYmFzZVxuICovXG5BY2NvdW50cy5hZGRFbWFpbCA9ICh1c2VySWQsIG5ld0VtYWlsLCB2ZXJpZmllZCkgPT4ge1xuICBjaGVjayh1c2VySWQsIE5vbkVtcHR5U3RyaW5nKTtcbiAgY2hlY2sobmV3RW1haWwsIE5vbkVtcHR5U3RyaW5nKTtcbiAgY2hlY2sodmVyaWZpZWQsIE1hdGNoLk9wdGlvbmFsKEJvb2xlYW4pKTtcblxuICBpZiAodmVyaWZpZWQgPT09IHZvaWQgMCkge1xuICAgIHZlcmlmaWVkID0gZmFsc2U7XG4gIH1cblxuICBjb25zdCB1c2VyID0gZ2V0VXNlckJ5SWQodXNlcklkLCB7ZmllbGRzOiB7ZW1haWxzOiAxfX0pO1xuICBpZiAoIXVzZXIpXG4gICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig0MDMsIFwiVXNlciBub3QgZm91bmRcIik7XG5cbiAgLy8gQWxsb3cgdXNlcnMgdG8gY2hhbmdlIHRoZWlyIG93biBlbWFpbCB0byBhIHZlcnNpb24gd2l0aCBhIGRpZmZlcmVudCBjYXNlXG5cbiAgLy8gV2UgZG9uJ3QgaGF2ZSB0byBjYWxsIGNoZWNrRm9yQ2FzZUluc2Vuc2l0aXZlRHVwbGljYXRlcyB0byBkbyBhIGNhc2VcbiAgLy8gaW5zZW5zaXRpdmUgY2hlY2sgYWNyb3NzIGFsbCBlbWFpbHMgaW4gdGhlIGRhdGFiYXNlIGhlcmUgYmVjYXVzZTogKDEpIGlmXG4gIC8vIHRoZXJlIGlzIG5vIGNhc2UtaW5zZW5zaXRpdmUgZHVwbGljYXRlIGJldHdlZW4gdGhpcyB1c2VyIGFuZCBvdGhlciB1c2VycyxcbiAgLy8gdGhlbiB3ZSBhcmUgT0sgYW5kICgyKSBpZiB0aGlzIHdvdWxkIGNyZWF0ZSBhIGNvbmZsaWN0IHdpdGggb3RoZXIgdXNlcnNcbiAgLy8gdGhlbiB0aGVyZSB3b3VsZCBhbHJlYWR5IGJlIGEgY2FzZS1pbnNlbnNpdGl2ZSBkdXBsaWNhdGUgYW5kIHdlIGNhbid0IGZpeFxuICAvLyB0aGF0IGluIHRoaXMgY29kZSBhbnl3YXkuXG4gIGNvbnN0IGNhc2VJbnNlbnNpdGl2ZVJlZ0V4cCA9XG4gICAgbmV3IFJlZ0V4cChgXiR7TWV0ZW9yLl9lc2NhcGVSZWdFeHAobmV3RW1haWwpfSRgLCAnaScpO1xuXG4gIGNvbnN0IGRpZFVwZGF0ZU93bkVtYWlsID0gKHVzZXIuZW1haWxzIHx8IFtdKS5yZWR1Y2UoXG4gICAgKHByZXYsIGVtYWlsKSA9PiB7XG4gICAgICBpZiAoY2FzZUluc2Vuc2l0aXZlUmVnRXhwLnRlc3QoZW1haWwuYWRkcmVzcykpIHtcbiAgICAgICAgTWV0ZW9yLnVzZXJzLnVwZGF0ZSh7XG4gICAgICAgICAgX2lkOiB1c2VyLl9pZCxcbiAgICAgICAgICAnZW1haWxzLmFkZHJlc3MnOiBlbWFpbC5hZGRyZXNzXG4gICAgICAgIH0sIHskc2V0OiB7XG4gICAgICAgICAgJ2VtYWlscy4kLmFkZHJlc3MnOiBuZXdFbWFpbCxcbiAgICAgICAgICAnZW1haWxzLiQudmVyaWZpZWQnOiB2ZXJpZmllZFxuICAgICAgICB9fSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xuXG4gIC8vIEluIHRoZSBvdGhlciB1cGRhdGVzIGJlbG93LCB3ZSBoYXZlIHRvIGRvIGFub3RoZXIgY2FsbCB0b1xuICAvLyBjaGVja0ZvckNhc2VJbnNlbnNpdGl2ZUR1cGxpY2F0ZXMgdG8gbWFrZSBzdXJlIHRoYXQgbm8gY29uZmxpY3RpbmcgdmFsdWVzXG4gIC8vIHdlcmUgYWRkZWQgdG8gdGhlIGRhdGFiYXNlIGluIHRoZSBtZWFudGltZS4gV2UgZG9uJ3QgaGF2ZSB0byBkbyB0aGlzIGZvclxuICAvLyB0aGUgY2FzZSB3aGVyZSB0aGUgdXNlciBpcyB1cGRhdGluZyB0aGVpciBlbWFpbCBhZGRyZXNzIHRvIG9uZSB0aGF0IGlzIHRoZVxuICAvLyBzYW1lIGFzIGJlZm9yZSwgYnV0IG9ubHkgZGlmZmVyZW50IGJlY2F1c2Ugb2YgY2FwaXRhbGl6YXRpb24uIFJlYWQgdGhlXG4gIC8vIGJpZyBjb21tZW50IGFib3ZlIHRvIHVuZGVyc3RhbmQgd2h5LlxuXG4gIGlmIChkaWRVcGRhdGVPd25FbWFpbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFBlcmZvcm0gYSBjYXNlIGluc2Vuc2l0aXZlIGNoZWNrIGZvciBkdXBsaWNhdGVzIGJlZm9yZSB1cGRhdGVcbiAgQWNjb3VudHMuX2NoZWNrRm9yQ2FzZUluc2Vuc2l0aXZlRHVwbGljYXRlcygnZW1haWxzLmFkZHJlc3MnLFxuICAgICdFbWFpbCcsIG5ld0VtYWlsLCB1c2VyLl9pZCk7XG5cbiAgTWV0ZW9yLnVzZXJzLnVwZGF0ZSh7XG4gICAgX2lkOiB1c2VyLl9pZFxuICB9LCB7XG4gICAgJGFkZFRvU2V0OiB7XG4gICAgICBlbWFpbHM6IHtcbiAgICAgICAgYWRkcmVzczogbmV3RW1haWwsXG4gICAgICAgIHZlcmlmaWVkOiB2ZXJpZmllZFxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gUGVyZm9ybSBhbm90aGVyIGNoZWNrIGFmdGVyIHVwZGF0ZSwgaW4gY2FzZSBhIG1hdGNoaW5nIHVzZXIgaGFzIGJlZW5cbiAgLy8gaW5zZXJ0ZWQgaW4gdGhlIG1lYW50aW1lXG4gIHRyeSB7XG4gICAgQWNjb3VudHMuX2NoZWNrRm9yQ2FzZUluc2Vuc2l0aXZlRHVwbGljYXRlcygnZW1haWxzLmFkZHJlc3MnLFxuICAgICAgJ0VtYWlsJywgbmV3RW1haWwsIHVzZXIuX2lkKTtcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICAvLyBVbmRvIHVwZGF0ZSBpZiB0aGUgY2hlY2sgZmFpbHNcbiAgICBNZXRlb3IudXNlcnMudXBkYXRlKHtfaWQ6IHVzZXIuX2lkfSxcbiAgICAgIHskcHVsbDoge2VtYWlsczoge2FkZHJlc3M6IG5ld0VtYWlsfX19KTtcbiAgICB0aHJvdyBleDtcbiAgfVxufVxuXG4vKipcbiAqIEBzdW1tYXJ5IFJlbW92ZSBhbiBlbWFpbCBhZGRyZXNzIGZvciBhIHVzZXIuIFVzZSB0aGlzIGluc3RlYWQgb2YgdXBkYXRpbmdcbiAqIHRoZSBkYXRhYmFzZSBkaXJlY3RseS5cbiAqIEBsb2N1cyBTZXJ2ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSB1c2VySWQgVGhlIElEIG9mIHRoZSB1c2VyIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBlbWFpbCBUaGUgZW1haWwgYWRkcmVzcyB0byByZW1vdmUuXG4gKiBAaW1wb3J0RnJvbVBhY2thZ2UgYWNjb3VudHMtYmFzZVxuICovXG5BY2NvdW50cy5yZW1vdmVFbWFpbCA9ICh1c2VySWQsIGVtYWlsKSA9PiB7XG4gIGNoZWNrKHVzZXJJZCwgTm9uRW1wdHlTdHJpbmcpO1xuICBjaGVjayhlbWFpbCwgTm9uRW1wdHlTdHJpbmcpO1xuXG4gIGNvbnN0IHVzZXIgPSBnZXRVc2VyQnlJZCh1c2VySWQsIHtmaWVsZHM6IHtfaWQ6IDF9fSk7XG4gIGlmICghdXNlcilcbiAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDQwMywgXCJVc2VyIG5vdCBmb3VuZFwiKTtcblxuICBNZXRlb3IudXNlcnMudXBkYXRlKHtfaWQ6IHVzZXIuX2lkfSxcbiAgICB7JHB1bGw6IHtlbWFpbHM6IHthZGRyZXNzOiBlbWFpbH19fSk7XG59XG5cbi8vL1xuLy8vIENSRUFUSU5HIFVTRVJTXG4vLy9cblxuLy8gU2hhcmVkIGNyZWF0ZVVzZXIgZnVuY3Rpb24gY2FsbGVkIGZyb20gdGhlIGNyZWF0ZVVzZXIgbWV0aG9kLCBib3RoXG4vLyBpZiBvcmlnaW5hdGVzIGluIGNsaWVudCBvciBzZXJ2ZXIgY29kZS4gQ2FsbHMgdXNlciBwcm92aWRlZCBob29rcyxcbi8vIGRvZXMgdGhlIGFjdHVhbCB1c2VyIGluc2VydGlvbi5cbi8vXG4vLyByZXR1cm5zIHRoZSB1c2VyIGlkXG5jb25zdCBjcmVhdGVVc2VyID0gb3B0aW9ucyA9PiB7XG4gIC8vIFVua25vd24ga2V5cyBhbGxvd2VkLCBiZWNhdXNlIGEgb25DcmVhdGVVc2VySG9vayBjYW4gdGFrZSBhcmJpdHJhcnlcbiAgLy8gb3B0aW9ucy5cbiAgY2hlY2sob3B0aW9ucywgTWF0Y2guT2JqZWN0SW5jbHVkaW5nKHtcbiAgICB1c2VybmFtZTogTWF0Y2guT3B0aW9uYWwoU3RyaW5nKSxcbiAgICBlbWFpbDogTWF0Y2guT3B0aW9uYWwoU3RyaW5nKSxcbiAgICBwYXNzd29yZDogTWF0Y2guT3B0aW9uYWwocGFzc3dvcmRWYWxpZGF0b3IpXG4gIH0pKTtcblxuICBjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IG9wdGlvbnM7XG4gIGlmICghdXNlcm5hbWUgJiYgIWVtYWlsKVxuICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoNDAwLCBcIk5lZWQgdG8gc2V0IGEgdXNlcm5hbWUgb3IgZW1haWxcIik7XG5cbiAgY29uc3QgdXNlciA9IHtzZXJ2aWNlczoge319O1xuICBpZiAocGFzc3dvcmQpIHtcbiAgICBjb25zdCBoYXNoZWQgPSBoYXNoUGFzc3dvcmQocGFzc3dvcmQpO1xuICAgIHVzZXIuc2VydmljZXMucGFzc3dvcmQgPSB7IGJjcnlwdDogaGFzaGVkIH07XG4gIH1cblxuICByZXR1cm4gQWNjb3VudHMuX2NyZWF0ZVVzZXJDaGVja2luZ0R1cGxpY2F0ZXMoeyB1c2VyLCBlbWFpbCwgdXNlcm5hbWUsIG9wdGlvbnMgfSlcbn07XG5cbi8vIG1ldGhvZCBmb3IgY3JlYXRlIHVzZXIuIFJlcXVlc3RzIGNvbWUgZnJvbSB0aGUgY2xpZW50LlxuTWV0ZW9yLm1ldGhvZHMoe2NyZWF0ZVVzZXI6IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSBhcmdzWzBdO1xuICByZXR1cm4gQWNjb3VudHMuX2xvZ2luTWV0aG9kKFxuICAgIHRoaXMsXG4gICAgXCJjcmVhdGVVc2VyXCIsXG4gICAgYXJncyxcbiAgICBcInBhc3N3b3JkXCIsXG4gICAgKCkgPT4ge1xuICAgICAgLy8gY3JlYXRlVXNlcigpIGFib3ZlIGRvZXMgbW9yZSBjaGVja2luZy5cbiAgICAgIGNoZWNrKG9wdGlvbnMsIE9iamVjdCk7XG4gICAgICBpZiAoQWNjb3VudHMuX29wdGlvbnMuZm9yYmlkQ2xpZW50QWNjb3VudENyZWF0aW9uKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yOiBuZXcgTWV0ZW9yLkVycm9yKDQwMywgXCJTaWdudXBzIGZvcmJpZGRlblwiKVxuICAgICAgICB9O1xuXG4gICAgICBjb25zdCB1c2VySWQgPSBBY2NvdW50cy5jcmVhdGVVc2VyVmVyaWZ5aW5nRW1haWwob3B0aW9ucyk7XG5cbiAgICAgIC8vIGNsaWVudCBnZXRzIGxvZ2dlZCBpbiBhcyB0aGUgbmV3IHVzZXIgYWZ0ZXJ3YXJkcy5cbiAgICAgIHJldHVybiB7dXNlcklkOiB1c2VySWR9O1xuICAgIH1cbiAgKTtcbn19KTtcblxuLyoqXG4gKiBAc3VtbWFyeSBDcmVhdGVzIGFuIHVzZXIgYW5kIHNlbmRzIGFuIGVtYWlsIGlmIGBvcHRpb25zLmVtYWlsYCBpcyBpbmZvcm1lZC5cbiAqIFRoZW4gaWYgdGhlIGBzZW5kVmVyaWZpY2F0aW9uRW1haWxgIG9wdGlvbiBmcm9tIHRoZSBgQWNjb3VudHNgIHBhY2thZ2UgaXNcbiAqIGVuYWJsZWQsIHlvdSdsbCBzZW5kIGEgdmVyaWZpY2F0aW9uIGVtYWlsIGlmIGBvcHRpb25zLnBhc3N3b3JkYCBpcyBpbmZvcm1lZCxcbiAqIG90aGVyd2lzZSB5b3UnbGwgc2VuZCBhbiBlbnJvbGxtZW50IGVtYWlsLlxuICogQGxvY3VzIFNlcnZlclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgb2JqZWN0IHRvIGJlIHBhc3NlZCBkb3duIHdoZW4gY3JlYXRpbmdcbiAqIHRoZSB1c2VyXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy51c2VybmFtZSBBIHVuaXF1ZSBuYW1lIGZvciB0aGlzIHVzZXIuXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5lbWFpbCBUaGUgdXNlcidzIGVtYWlsIGFkZHJlc3MuXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5wYXNzd29yZCBUaGUgdXNlcidzIHBhc3N3b3JkLiBUaGlzIGlzIF9fbm90X18gc2VudCBpbiBwbGFpbiB0ZXh0IG92ZXIgdGhlIHdpcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5wcm9maWxlIFRoZSB1c2VyJ3MgcHJvZmlsZSwgdHlwaWNhbGx5IGluY2x1ZGluZyB0aGUgYG5hbWVgIGZpZWxkLlxuICogQGltcG9ydEZyb21QYWNrYWdlIGFjY291bnRzLWJhc2VcbiAqICovXG5BY2NvdW50cy5jcmVhdGVVc2VyVmVyaWZ5aW5nRW1haWwgPSAob3B0aW9ucykgPT4ge1xuICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gIC8vIENyZWF0ZSB1c2VyLiByZXN1bHQgY29udGFpbnMgaWQgYW5kIHRva2VuLlxuICBjb25zdCB1c2VySWQgPSBjcmVhdGVVc2VyKG9wdGlvbnMpO1xuICAvLyBzYWZldHkgYmVsdC4gY3JlYXRlVXNlciBpcyBzdXBwb3NlZCB0byB0aHJvdyBvbiBlcnJvci4gc2VuZCA1MDAgZXJyb3JcbiAgLy8gaW5zdGVhZCBvZiBzZW5kaW5nIGEgdmVyaWZpY2F0aW9uIGVtYWlsIHdpdGggZW1wdHkgdXNlcmlkLlxuICBpZiAoISB1c2VySWQpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3JlYXRlVXNlciBmYWlsZWQgdG8gaW5zZXJ0IG5ldyB1c2VyXCIpO1xuXG4gIC8vIElmIGBBY2NvdW50cy5fb3B0aW9ucy5zZW5kVmVyaWZpY2F0aW9uRW1haWxgIGlzIHNldCwgcmVnaXN0ZXJcbiAgLy8gYSB0b2tlbiB0byB2ZXJpZnkgdGhlIHVzZXIncyBwcmltYXJ5IGVtYWlsLCBhbmQgc2VuZCBpdCB0b1xuICAvLyB0aGF0IGFkZHJlc3MuXG4gIGlmIChvcHRpb25zLmVtYWlsICYmIEFjY291bnRzLl9vcHRpb25zLnNlbmRWZXJpZmljYXRpb25FbWFpbCkge1xuICAgIGlmIChvcHRpb25zLnBhc3N3b3JkKSB7XG4gICAgICBBY2NvdW50cy5zZW5kVmVyaWZpY2F0aW9uRW1haWwodXNlcklkLCBvcHRpb25zLmVtYWlsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQWNjb3VudHMuc2VuZEVucm9sbG1lbnRFbWFpbCh1c2VySWQsIG9wdGlvbnMuZW1haWwpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1c2VySWQ7XG59O1xuXG4vLyBDcmVhdGUgdXNlciBkaXJlY3RseSBvbiB0aGUgc2VydmVyLlxuLy9cbi8vIFVubGlrZSB0aGUgY2xpZW50IHZlcnNpb24sIHRoaXMgZG9lcyBub3QgbG9nIHlvdSBpbiBhcyB0aGlzIHVzZXJcbi8vIGFmdGVyIGNyZWF0aW9uLlxuLy9cbi8vIHJldHVybnMgdXNlcklkIG9yIHRocm93cyBhbiBlcnJvciBpZiBpdCBjYW4ndCBjcmVhdGVcbi8vXG4vLyBYWFggYWRkIGFub3RoZXIgYXJndW1lbnQgKFwic2VydmVyIG9wdGlvbnNcIikgdGhhdCBnZXRzIHNlbnQgdG8gb25DcmVhdGVVc2VyLFxuLy8gd2hpY2ggaXMgYWx3YXlzIGVtcHR5IHdoZW4gY2FsbGVkIGZyb20gdGhlIGNyZWF0ZVVzZXIgbWV0aG9kPyBlZywgXCJhZG1pbjpcbi8vIHRydWVcIiwgd2hpY2ggd2Ugd2FudCB0byBwcmV2ZW50IHRoZSBjbGllbnQgZnJvbSBzZXR0aW5nLCBidXQgd2hpY2ggYSBjdXN0b21cbi8vIG1ldGhvZCBjYWxsaW5nIEFjY291bnRzLmNyZWF0ZVVzZXIgY291bGQgc2V0P1xuLy9cbkFjY291bnRzLmNyZWF0ZVVzZXIgPSAob3B0aW9ucywgY2FsbGJhY2spID0+IHtcbiAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuXG4gIC8vIFhYWCBhbGxvdyBhbiBvcHRpb25hbCBjYWxsYmFjaz9cbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQWNjb3VudHMuY3JlYXRlVXNlciB3aXRoIGNhbGxiYWNrIG5vdCBzdXBwb3J0ZWQgb24gdGhlIHNlcnZlciB5ZXQuXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVVzZXIob3B0aW9ucyk7XG59O1xuXG4vLy9cbi8vLyBQQVNTV09SRC1TUEVDSUZJQyBJTkRFWEVTIE9OIFVTRVJTXG4vLy9cbk1ldGVvci51c2Vycy5jcmVhdGVJbmRleCgnc2VydmljZXMuZW1haWwudmVyaWZpY2F0aW9uVG9rZW5zLnRva2VuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB1bmlxdWU6IHRydWUsIHNwYXJzZTogdHJ1ZSB9KTtcbk1ldGVvci51c2Vycy5jcmVhdGVJbmRleCgnc2VydmljZXMucGFzc3dvcmQucmVzZXQudG9rZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHVuaXF1ZTogdHJ1ZSwgc3BhcnNlOiB0cnVlIH0pO1xuTWV0ZW9yLnVzZXJzLmNyZWF0ZUluZGV4KCdzZXJ2aWNlcy5wYXNzd29yZC5lbnJvbGwudG9rZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHVuaXF1ZTogdHJ1ZSwgc3BhcnNlOiB0cnVlIH0pO1xuIl19
