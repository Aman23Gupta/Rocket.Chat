function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/analytics/Overview.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Box, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Skeleton(v) {
    Skeleton = v;
  }

}, 0);
let React, useEffect, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let CounterItem;
module.link("../realTimeMonitoring/counter/CounterItem", {
  default(v) {
    CounterItem = v;
  }

}, 4);
let CounterRow;
module.link("../realTimeMonitoring/counter/CounterRow", {
  default(v) {
    CounterRow = v;
  }

}, 5);
const initialData = Array.from({
  length: 3
}).map(() => ({
  title: '',
  value: ''
}));
const conversationsInitialData = [initialData, initialData];
const productivityInitialData = [initialData];

const Overview = _ref => {
  let {
    type,
    dateRange,
    departmentId
  } = _ref;
  const t = useTranslation();
  const {
    start,
    end
  } = dateRange;
  const params = useMemo(() => _objectSpread({
    analyticsOptions: {
      name: type
    },
    daterange: {
      from: start,
      to: end
    }
  }, departmentId && {
    departmentId
  }), [departmentId, end, start, type]);
  const loadData = useMethod('livechat:getAnalyticsOverviewData');
  const [displayData, setDisplayData] = useState(conversationsInitialData);
  useEffect(() => {
    setDisplayData(type === 'Conversations' ? conversationsInitialData : productivityInitialData);
  }, [type]);
  useEffect(() => {
    async function fetchData() {
      if (!start || !end) {
        return;
      }

      const value = await loadData(params);

      if (!value) {
        return;
      }

      if (value.length > 3) {
        return setDisplayData([value.slice(0, 3), value.slice(3)]);
      }

      setDisplayData([value]);
    }

    fetchData();
  }, [start, end, loadData, params]);
  return /*#__PURE__*/React.createElement(Box, {
    pb: "x28",
    flexDirection: "column"
  }, displayData.map(function () {
    let items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let i = arguments.length > 1 ? arguments[1] : undefined;
    return /*#__PURE__*/React.createElement(CounterRow, {
      key: i,
      border: "0",
      pb: "none"
    }, items.map((_ref2, i) => {
      let {
        title,
        value
      } = _ref2;
      return /*#__PURE__*/React.createElement(CounterItem, {
        flexShrink: 1,
        pb: "x8",
        flexBasis: "100%",
        key: i,
        title: title ? t(title) : /*#__PURE__*/React.createElement(Skeleton, {
          width: "x60"
        }),
        count: value
      });
    }));
  }));
};

module.exportDefault(Overview);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/analytics/db79aafe965d866a8fffddb0222eb57200bac705.map
