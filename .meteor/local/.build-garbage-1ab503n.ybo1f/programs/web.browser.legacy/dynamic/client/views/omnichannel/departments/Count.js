function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/Count.js                                                                       //
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

function Count(_ref) {
  var agentId = _ref.agentId,
      setAgentList = _ref.setAgentList,
      agentList = _ref.agentList;
  var t = useTranslation();

  var _useState = useState(agentList.find(function (agent) {
    return agent.agentId === agentId;
  }).count || 0),
      _useState2 = _slicedToArray(_useState, 2),
      agentCount = _useState2[0],
      setAgentCount = _useState2[1];

  var handleCount = useMutableCallback(function () {
    function _callee(e) {
      var countValue;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                countValue = Number(e.currentTarget.value);
                setAgentCount(countValue);
                setAgentList(agentList.map(function (agent) {
                  if (agent.agentId === agentId) {
                    agent.count = countValue;
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
    key: agentId + "-count",
    title: t('Count'),
    value: agentCount,
    onChange: handleCount
  }));
}

module.exportDefault(Count);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/e64ae97bf4510589f214d70d4282989155791243.map
