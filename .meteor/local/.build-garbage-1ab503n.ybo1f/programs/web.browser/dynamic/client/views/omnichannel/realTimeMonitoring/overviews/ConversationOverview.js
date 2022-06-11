function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/overviews/ConversationOverview.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["params", "reloadRef"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 1);
let CounterContainer;
module.link("../counter/CounterContainer", {
  default(v) {
    CounterContainer = v;
  }

}, 2);
const overviewInitalValue = {
  title: '',
  value: 0
};
const initialData = [overviewInitalValue, overviewInitalValue, overviewInitalValue, overviewInitalValue];

const ConversationOverview = _ref => {
  let {
    params,
    reloadRef
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    value: data,
    phase: state,
    reload
  } = useEndpointData('livechat/analytics/dashboards/conversation-totalizers', params);
  reloadRef.current.conversationOverview = reload;
  return /*#__PURE__*/React.createElement(CounterContainer, _extends({
    state: state,
    data: data,
    initialData: initialData
  }, props));
};

module.exportDefault(ConversationOverview);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/overviews/9041122f326a66883c0fa0cac77c9a837215d516.map
