function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/AddAgent.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["agentList", "setAgentsAdded", "setAgentList"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 3);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 4);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 5);
var Box, Button;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var AutoCompleteAgent;
module.link("../../../components/AutoCompleteAgent", {
  "default": function (v) {
    AutoCompleteAgent = v;
  }
}, 3);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useEndpointAction;
module.link("../../../hooks/useEndpointAction", {
  useEndpointAction: function (v) {
    useEndpointAction = v;
  }
}, 6);

function AddAgent(_ref) {
  var agentList = _ref.agentList,
      setAgentsAdded = _ref.setAgentsAdded,
      setAgentList = _ref.setAgentList,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      userId = _useState2[0],
      setUserId = _useState2[1];

  var getAgent = useEndpointAction('GET', "livechat/users/agent/" + userId);
  var dispatchToastMessage = useToastMessageDispatch();
  var handleAgent = useMutableCallback(function (e) {
    return setUserId(e);
  });
  var handleSave = useMutableCallback(function () {
    function _callee() {
      var _await$getAgent, user;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (userId) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return _regeneratorRuntime.awrap(getAgent());

              case 4:
                _await$getAgent = _context.sent;
                user = _await$getAgent.user;

                if (agentList.filter(function (e) {
                  return e.agentId === user._id;
                }).length === 0) {
                  setAgentList([_objectSpread(_objectSpread({}, user), {}, {
                    agentId: user._id
                  })].concat(_toConsumableArray(agentList)));
                  setUserId();
                  setAgentsAdded(function (agents) {
                    return [].concat(_toConsumableArray(agents), [{
                      agentId: user._id
                    }]);
                  });
                } else {
                  dispatchToastMessage({
                    type: 'error',
                    message: t('This_agent_was_already_selected')
                  });
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }());
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    alignItems: "center"
  }, props), /*#__PURE__*/React.createElement(AutoCompleteAgent, {
    empty: true,
    value: userId,
    onChange: handleAgent
  }), /*#__PURE__*/React.createElement(Button, {
    disabled: !userId,
    onClick: handleSave,
    mis: "x8",
    primary: true
  }, t('Add')));
}

module.exportDefault(AddAgent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/d58945f6acffddcc319f4fe470c716a373e00705.map
