function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/analytics/AgentOverview.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Table;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  }

}, 0);
let React, useMemo, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
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
const style = {
  width: '100%'
};

const AgentOverview = _ref => {
  var _displayData$head, _displayData$data;

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
    chartOptions: {
      name: type
    },
    daterange: {
      from: start,
      to: end
    }
  }, departmentId && {
    departmentId
  }), [departmentId, end, start, type]);
  const [displayData, setDisplayData] = useState({
    head: [],
    data: []
  });
  const loadData = useMethod('livechat:getAgentOverviewData');
  useEffect(() => {
    async function fetchData() {
      if (!start || !end) {
        return;
      }

      const value = await loadData(params);
      setDisplayData(value);
    }

    fetchData();
  }, [start, end, loadData, params]);
  return /*#__PURE__*/React.createElement(Table, {
    style: style,
    fixed: true
  }, /*#__PURE__*/React.createElement(Table.Head, null, /*#__PURE__*/React.createElement(Table.Row, null, (_displayData$head = displayData.head) === null || _displayData$head === void 0 ? void 0 : _displayData$head.map((_ref2, i) => {
    let {
      name
    } = _ref2;
    return /*#__PURE__*/React.createElement(Table.Cell, {
      key: i
    }, t(name));
  }))), /*#__PURE__*/React.createElement(Table.Body, null, (_displayData$data = displayData.data) === null || _displayData$data === void 0 ? void 0 : _displayData$data.map((_ref3, i) => {
    let {
      name,
      value
    } = _ref3;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: i
    }, /*#__PURE__*/React.createElement(Table.Cell, null, name), /*#__PURE__*/React.createElement(Table.Cell, null, value));
  })));
};

module.exportDefault(AgentOverview);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/analytics/14f06ca6954038cbc7dec00b6252702045f29871.map
