function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/ServerProvider.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let info, APIClient;
module.link("../../app/utils/client", {
  Info(v) {
    info = v;
  },

  APIClient(v) {
    APIClient = v;
  }

}, 2);
let ServerContext;
module.link("../contexts/ServerContext", {
  ServerContext(v) {
    ServerContext = v;
  }

}, 3);

const absoluteUrl = path => Meteor.absoluteUrl(path);

const callMethod = function (methodName) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return new Promise((resolve, reject) => {
    Meteor.call(methodName, ...args, (error, result) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(result);
    });
  });
};

const callEndpoint = (method, path, params) => {
  const api = path[0] === '/' ? APIClient : APIClient.v1;
  const endpointPath = path[0] === '/' ? path.slice(1) : path;

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

const uploadToEndpoint = (endpoint, params, formData) => {
  if (endpoint[0] === '/') {
    return APIClient.upload(endpoint.slice(1), params, formData).promise;
  }

  return APIClient.v1.upload(endpoint, params, formData).promise;
};

const getStream = function (streamName) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const streamer = Meteor.StreamerCentral.instances[streamName] ? Meteor.StreamerCentral.instances[streamName] : new Meteor.Streamer(streamName, options);
  return (eventName, callback) => {
    streamer.on(eventName, callback);
    return () => {
      streamer.removeListener(eventName, callback);
    };
  };
};

const contextValue = {
  info,
  absoluteUrl,
  callMethod,
  callEndpoint,
  uploadToEndpoint,
  getStream
};

const ServerProvider = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(ServerContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(ServerProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/c04ac25bc5eae74557a217e491b57aade28f4e8b.map
