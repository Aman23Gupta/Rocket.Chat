function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/overviews/AgentsOverview.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["params", "reloadRef"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 1);
var CounterContainer;
module.link("../counter/CounterContainer", {
  "default": function (v) {
    CounterContainer = v;
  }
}, 2);
var overviewInitalValue = {
  title: '',
  value: '-'
};
var initialData = [overviewInitalValue, overviewInitalValue, overviewInitalValue];

var AgentsOverview = function (_ref) {
  var params = _ref.params,
      reloadRef = _ref.reloadRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useEndpointData = useEndpointData('livechat/analytics/dashboards/agents-productivity-totalizers', params),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      reload = _useEndpointData.reload;

  reloadRef.current.agentsOverview = reload;
  return /*#__PURE__*/React.createElement(CounterContainer, _extends({
    state: state,
    data: data,
    initialData: initialData
  }, props));
};

module.exportDefault(AgentsOverview);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/overviews/3954b56554b223beab0c17acbd9c5cb7b9ccd299.map
