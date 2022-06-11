function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/overviews/ChatsOverview.js                                              //
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
var initialData = [{
  title: '',
  value: 0
}, {
  title: '',
  value: '0%'
}, {
  title: '',
  value: '00:00:00'
}];

var ChatsOverview = function (_ref) {
  var params = _ref.params,
      reloadRef = _ref.reloadRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useEndpointData = useEndpointData('livechat/analytics/dashboards/chats-totalizers', params),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      reload = _useEndpointData.reload;

  reloadRef.current.chatsOverview = reload;
  return /*#__PURE__*/React.createElement(CounterContainer, _extends({
    state: state,
    data: data,
    initialData: initialData
  }, props));
};

module.exportDefault(ChatsOverview);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/overviews/1f75babc4f2b8818512d6a964a2791ffc7a03b6f.map
