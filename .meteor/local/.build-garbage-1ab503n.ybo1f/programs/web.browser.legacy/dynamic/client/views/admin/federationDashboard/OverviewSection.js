function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/federationDashboard/OverviewSection.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var CounterSet;
module.link("../../../components/data/CounterSet", {
  "default": function (v) {
    CounterSet = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 4);
var usePolledMethodData;
module.link("../../../hooks/usePolledMethodData", {
  usePolledMethodData: function (v) {
    usePolledMethodData = v;
  }
}, 5);

function OverviewSection() {
  var _overviewData$data$, _overviewData$data$2, _overviewData$data$3;

  var t = useTranslation();

  var _usePolledMethodData = usePolledMethodData('federation:getOverviewData', useMemo(function () {
    return [];
  }, []), 10000),
      overviewData = _usePolledMethodData.value,
      overviewStatus = _usePolledMethodData.phase;

  var eventCount = overviewStatus === AsyncStatePhase.LOADING && /*#__PURE__*/React.createElement(Skeleton, {
    variant: "text"
  }) || overviewStatus === AsyncStatePhase.REJECTED && /*#__PURE__*/React.createElement(Box, {
    color: "danger"
  }, "Error") || (overviewData === null || overviewData === void 0 ? void 0 : (_overviewData$data$ = overviewData.data[0]) === null || _overviewData$data$ === void 0 ? void 0 : _overviewData$data$.value);
  var userCount = overviewStatus === AsyncStatePhase.LOADING && /*#__PURE__*/React.createElement(Skeleton, {
    variant: "text"
  }) || overviewStatus === AsyncStatePhase.REJECTED && /*#__PURE__*/React.createElement(Box, {
    color: "danger"
  }, "Error") || (overviewData === null || overviewData === void 0 ? void 0 : (_overviewData$data$2 = overviewData.data[1]) === null || _overviewData$data$2 === void 0 ? void 0 : _overviewData$data$2.value);
  var serverCount = overviewStatus === AsyncStatePhase.LOADING && /*#__PURE__*/React.createElement(Skeleton, {
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
//# sourceMappingURL=/dynamic/client/views/admin/federationDashboard/dcd327ddbf66cee8e9f1ed8186221d4d1975d563.map
