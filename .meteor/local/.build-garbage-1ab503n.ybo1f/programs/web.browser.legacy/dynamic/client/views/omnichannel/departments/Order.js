function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/Order.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Box, NumberInput;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  NumberInput: function (v) {
    NumberInput = v;
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
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

function Order(_ref) {
  var agentId = _ref.agentId,
      setAgentList = _ref.setAgentList,
      agentList = _ref.agentList;
  var t = useTranslation();

  var _useState = useState(agentList.find(function (agent) {
    return agent.agentId === agentId;
  }).order || 0),
      _useState2 = _slicedToArray(_useState, 2),
      agentOrder = _useState2[0],
      setAgentOrder = _useState2[1];

  var handleOrder = useMutableCallback(function () {
    function _callee(e) {
      var orderValue;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                orderValue = Number(e.currentTarget.value);
                setAgentOrder(orderValue);
                setAgentList(agentList.map(function (agent) {
                  if (agent.agentId === agentId) {
                    agent.order = orderValue;
                  }

                  return agent;
                }));

              case 3:
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
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex"
  }, /*#__PURE__*/React.createElement(NumberInput, {
    flexShrink: 1,
    key: agentId + "-order",
    title: t('Order'),
    value: agentOrder,
    onChange: handleOrder
  }));
}

module.exportDefault(Order);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/b431029211fcff86007c8224a2a0aa749f1dff36.map
