function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/counter/CounterContainer.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["data", "state", "initialData"];

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Skeleton;
module.link("@rocket.chat/fuselage", {
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 0);
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
}, 1);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 3);
var CounterItem;
module.link("./CounterItem", {
  "default": function (v) {
    CounterItem = v;
  }
}, 4);
var CounterRow;
module.link("./CounterRow", {
  "default": function (v) {
    CounterRow = v;
  }
}, 5);

var CounterContainer = function (_ref) {
  var data = _ref.data,
      state = _ref.state,
      initialData = _ref.initialData,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var _useState = useState(initialData),
      _useState2 = _slicedToArray(_useState, 2),
      displayData = _useState2[0],
      setDisplayData = _useState2[1];

  var _ref2 = data || {
    totalizers: initialData
  },
      totalizers = _ref2.totalizers;

  useEffect(function () {
    if (state === AsyncStatePhase.RESOLVED) {
      setDisplayData(totalizers);
    }
  }, [state, t, totalizers]);
  return /*#__PURE__*/React.createElement(CounterRow, props, displayData.map(function (_ref3, i) {
    var title = _ref3.title,
        value = _ref3.value;
    return /*#__PURE__*/React.createElement(CounterItem, {
      key: i,
      title: title ? t(title) : /*#__PURE__*/React.createElement(Skeleton, {
        width: "x60"
      }),
      count: value
    });
  }));
};

module.exportDefault(CounterContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/counter/52ba3c850beb73f039b5fb831d6c2d3d0503ec9f.map
