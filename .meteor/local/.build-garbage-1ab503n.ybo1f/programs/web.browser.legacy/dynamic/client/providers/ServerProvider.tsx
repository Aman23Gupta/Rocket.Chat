function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/ServerProvider.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var info, APIClient;
module.link("../../app/utils/client", {
  Info: function (v) {
    info = v;
  },
  APIClient: function (v) {
    APIClient = v;
  }
}, 2);
var ServerContext;
module.link("../contexts/ServerContext", {
  ServerContext: function (v) {
    ServerContext = v;
  }
}, 3);

var absoluteUrl = function (path) {
  return Meteor.absoluteUrl(path);
};

var callMethod = function (methodName) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return new Promise(function (resolve, reject) {
    var _Meteor;

    (_Meteor = Meteor).call.apply(_Meteor, [methodName].concat(args, [function (error, result) {
      if (error) {
        reject(error);
        return;
      }

      resolve(result);
    }]));
  });
};

var callEndpoint = function (method, path, params) {
  var api = path[0] === '/' ? APIClient : APIClient.v1;
  var endpointPath = path[0] === '/' ? path.slice(1) : path;

  switch (method) {
    case 'GET':
      return api.get(endpointPath, params);

    case 'POST':
      return api.post(endpointPath, {}, params);

    case 'DELETE':
      return api.delete(endpointPath, params);

    default:
      throw new Error('Invalid HTTP method');
  }
};

var uploadToEndpoint = function (endpoint, params, formData) {
  if (endpoint[0] === '/') {
    return APIClient.upload(endpoint.slice(1), params, formData).promise;
  }

  return APIClient.v1.upload(endpoint, params, formData).promise;
};

var getStream = function (streamName) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var streamer = Meteor.StreamerCentral.instances[streamName] ? Meteor.StreamerCentral.instances[streamName] : new Meteor.Streamer(streamName, options);
  return function (eventName, callback) {
    streamer.on(eventName, callback);
    return function () {
      streamer.removeListener(eventName, callback);
    };
  };
};

var contextValue = {
  info: info,
  absoluteUrl: absoluteUrl,
  callMethod: callMethod,
  callEndpoint: callEndpoint,
  uploadToEndpoint: uploadToEndpoint,
  getStream: getStream
};

var ServerProvider = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(ServerContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(ServerProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/6b92e00c11f866641566a3fa3f08a34f55299346.map
