function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/ParentRoomWithEndpointData.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var React, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var Header;
module.link("../../../components/Header", {
  "default": function (v) {
    Header = v;
  }
}, 1);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 2);
var AsyncStatePhase, useAsyncState;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  },
  useAsyncState: function (v) {
    useAsyncState = v;
  }
}, 3);
var ParentRoom;
module.link("./ParentRoom", {
  "default": function (v) {
    ParentRoom = v;
  }
}, 4);

var ParentRoomWithEndpointData = function (_ref) {
  var rid = _ref.rid;

  var _useAsyncState = useAsyncState(),
      resolve = _useAsyncState.resolve,
      reject = _useAsyncState.reject,
      reset = _useAsyncState.reset,
      phase = _useAsyncState.phase,
      value = _useAsyncState.value;

  var getData = useEndpoint('GET', 'rooms.info');
  useEffect(function () {
    (function () {
      function _callee() {
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  reset();
                  getData({
                    roomId: rid
                  }).then(resolve).catch(function (error) {
                    reject(error);
                  });

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, null, Promise);
      }

      return _callee;
    })()();
  }, [reset, getData, rid, resolve, reject]);

  if (AsyncStatePhase.LOADING === phase) {
    return /*#__PURE__*/React.createElement(Header.Tag.Skeleton, null);
  }

  if (AsyncStatePhase.ERROR === phase || !(value !== null && value !== void 0 && value.room)) {
    return null;
  }

  return /*#__PURE__*/React.createElement(ParentRoom, {
    room: value.room
  });
};

module.exportDefault(ParentRoomWithEndpointData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/ceda77aeb4c789080d002fef61fc2bb3e26a056b.map
