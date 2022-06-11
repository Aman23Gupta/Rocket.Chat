function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/overviews/ChatsOverview.js                                              //
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
const initialData = [{
  title: '',
  value: 0
}, {
  title: '',
  value: '0%'
}, {
  title: '',
  value: '00:00:00'
}];

const ChatsOverview = _ref => {
  let {
    params,
    reloadRef
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    value: data,
    phase: state,
    reload
  } = useEndpointData('livechat/analytics/dashboards/chats-totalizers', params);
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/overviews/b3f61ede3112228e90865b151aa4a5f1f4b097c1.map
