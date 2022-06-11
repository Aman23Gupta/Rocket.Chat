function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/federationDashboard/OverviewSection.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Skeleton(v) {
    Skeleton = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let CounterSet;
module.link("../../../components/data/CounterSet", {
  default(v) {
    CounterSet = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 4);
let usePolledMethodData;
module.link("../../../hooks/usePolledMethodData", {
  usePolledMethodData(v) {
    usePolledMethodData = v;
  }

}, 5);

function OverviewSection() {
  var _overviewData$data$, _overviewData$data$2, _overviewData$data$3;

  const t = useTranslation();
  const {
    value: overviewData,
    phase: overviewStatus
  } = usePolledMethodData('federation:getOverviewData', useMemo(() => [], []), 10000);
  const eventCount = overviewStatus === AsyncStatePhase.LOADING && /*#__PURE__*/React.createElement(Skeleton, {
    variant: "text"
  }) || overviewStatus === AsyncStatePhase.REJECTED && /*#__PURE__*/React.createElement(Box, {
    color: "danger"
  }, "Error") || (overviewData === null || overviewData === void 0 ? void 0 : (_overviewData$data$ = overviewData.data[0]) === null || _overviewData$data$ === void 0 ? void 0 : _overviewData$data$.value);
  const userCount = overviewStatus === AsyncStatePhase.LOADING && /*#__PURE__*/React.createElement(Skeleton, {
    variant: "text"
  }) || overviewStatus === AsyncStatePhase.REJECTED && /*#__PURE__*/React.createElement(Box, {
    color: "danger"
  }, "Error") || (overviewData === null || overviewData === void 0 ? void 0 : (_overviewData$data$2 = overviewData.data[1]) === null || _overviewData$data$2 === void 0 ? void 0 : _overviewData$data$2.value);
  const serverCount = overviewStatus === AsyncStatePhase.LOADING && /*#__PURE__*/React.createElement(Skeleton, {
    variant: "text"
  }) || overviewStatus === AsyncStatePhase.REJECTED && /*#__PURE__*/React.createElement(Box, {
    color: "danger"
  }, "Error") || (overviewData === null || overviewData === void 0 ? void 0 : (_overviewData$data$3 = overviewData.data[2]) === null || _overviewData$data$3 === void 0 ? void 0 : _overviewData$data$3.value);
  return /*#__PURE__*/React.createElement(CounterSet, {
    counters: [{
      count: eventCount,
      description: t('Number_of_events')
    }, {
      count: userCount,
      description: t('Number_of_federated_users')
    }, {
      count: serverCount,
      description: t('Number_of_federated_servers')
    }]
  });
}

module.exportDefault(OverviewSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/federationDashboard/c5afda6b781a122fca8c9c8b26e362486d27e463.map
