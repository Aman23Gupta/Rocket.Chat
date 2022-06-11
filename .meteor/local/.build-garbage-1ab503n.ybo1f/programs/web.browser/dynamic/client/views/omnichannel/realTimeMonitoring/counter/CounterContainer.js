function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/counter/CounterContainer.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["data", "state", "initialData"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Skeleton;
module.link("@rocket.chat/fuselage", {
  Skeleton(v) {
    Skeleton = v;
  }

}, 0);
let React, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 3);
let CounterItem;
module.link("./CounterItem", {
  default(v) {
    CounterItem = v;
  }

}, 4);
let CounterRow;
module.link("./CounterRow", {
  default(v) {
    CounterRow = v;
  }

}, 5);

const CounterContainer = _ref => {
  let {
    data,
    state,
    initialData
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const [displayData, setDisplayData] = useState(initialData);
  const {
    totalizers
  } = data || {
    totalizers: initialData
  };
  useEffect(() => {
    if (state === AsyncStatePhase.RESOLVED) {
      setDisplayData(totalizers);
    }
  }, [state, t, totalizers]);
  return /*#__PURE__*/React.createElement(CounterRow, props, displayData.map((_ref2, i) => {
    let {
      title,
      value
    } = _ref2;
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/counter/a17ec0d848352b829313bb6fcb230cfbd89aa933.map
