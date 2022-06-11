function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/overviews/ProductivityOverview.js                                       //
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
const defaultValue = {
  title: '',
  value: '00:00:00'
};
const initialData = [defaultValue, defaultValue, defaultValue, defaultValue];

const ProductivityOverview = _ref => {
  let {
    params,
    reloadRef
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    value: data,
    phase: state,
    reload
  } = useEndpointData('livechat/analytics/dashboards/productivity-totalizers', params);
  reloadRef.current.productivityOverview = reload;
  return /*#__PURE__*/React.createElement(CounterContainer, _extends({
    state: state,
    data: data,
    initialData: initialData
  }, props));
};

module.exportDefault(ProductivityOverview);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/overviews/045d1db1826e4ddb6d911ae968135202290820c9.map
