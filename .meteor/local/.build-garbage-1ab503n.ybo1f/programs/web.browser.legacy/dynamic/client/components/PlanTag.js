function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/PlanTag.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Box, Tag;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Tag: function (v) {
    Tag = v;
  }
}, 0);
var useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely: function (v) {
    useSafely = v;
  }
}, 1);
var React, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useMethod;
module.link("../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 3);

function PlanTag() {
  var _useSafely = useSafely(useState([])),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      plans = _useSafely2[0],
      setPlans = _useSafely2[1];

  var getTags = useMethod('license:getTags');
  useEffect(function () {
    var developmentTag = process.env.NODE_ENV === 'development' ? {
      name: 'development',
      color: '#095ad2'
    } : null;

    var fetchTags = function () {
      function _callee() {
        var tags;
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _regeneratorRuntime.awrap(getTags());

                case 2:
                  tags = _context.sent;
                  setPlans([developmentTag].concat(_toConsumableArray(tags)).filter(Boolean).map(function (plan) {
                    return {
                      plan: plan.name,
                      background: plan.color
                    };
                  }));

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, null, Promise);
      }

      return _callee;
    }();

    fetchTags();
  }, [getTags, setPlans]);
  return plans.map(function (_ref) {
    var plan = _ref.plan,
        background = _ref.background;
    return /*#__PURE__*/React.createElement(Box, {
      marginInline: "x4",
      display: "inline-block",
      verticalAlign: "middle",
      key: plan
    }, /*#__PURE__*/React.createElement(Tag, {
      style: {
        color: '#fff',
        backgroundColor: background,
        textTransform: 'capitalize'
      }
    }, plan));
  });
}

module.exportDefault(PlanTag);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/7b8924b19708d5d5a4a8b07a395804eec7f60733.map
