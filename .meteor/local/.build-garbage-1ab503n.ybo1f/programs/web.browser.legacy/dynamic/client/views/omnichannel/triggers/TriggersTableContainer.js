function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/TriggersTableContainer.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Callout;
module.link("@rocket.chat/fuselage", {
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var React, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 3);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 4);
var TriggersTable;
module.link("./TriggersTable", {
  "default": function (v) {
    TriggersTable = v;
  }
}, 5);

var TriggersTableContainer = function (_ref) {
  var reloadRef = _ref.reloadRef;
  var t = useTranslation();

  var _useState = useState(function () {
    return {
      current: 0,
      itemsPerPage: 25
    };
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var current = params.current,
      itemsPerPage = params.itemsPerPage;

  var _useEndpointData = useEndpointData('livechat/triggers', useMemo(function () {
    return {
      offset: current,
      count: itemsPerPage
    };
  }, [current, itemsPerPage])),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      reload = _useEndpointData.reload;

  reloadRef.current = reload;

  if (state === AsyncStatePhase.REJECTED) {
    return /*#__PURE__*/React.createElement(Callout, null, t('Error'), ": error");
  }

  return /*#__PURE__*/React.createElement(TriggersTable, {
    triggers: data === null || data === void 0 ? void 0 : data.triggers,
    totalTriggers: data === null || data === void 0 ? void 0 : data.total,
    params: params,
    onChangeParams: setParams,
    onDelete: reload
  });
};

module.exportDefault(TriggersTableContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/ae6991131878bb1e5863695d372bf5065e178bdd.map
