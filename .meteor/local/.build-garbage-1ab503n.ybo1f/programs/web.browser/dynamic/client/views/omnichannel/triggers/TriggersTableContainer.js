function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/TriggersTableContainer.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Callout;
module.link("@rocket.chat/fuselage", {
  Callout(v) {
    Callout = v;
  }

}, 0);
let React, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 3);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 4);
let TriggersTable;
module.link("./TriggersTable", {
  default(v) {
    TriggersTable = v;
  }

}, 5);

const TriggersTableContainer = _ref => {
  let {
    reloadRef
  } = _ref;
  const t = useTranslation();
  const [params, setParams] = useState(() => ({
    current: 0,
    itemsPerPage: 25
  }));
  const {
    current,
    itemsPerPage
  } = params;
  const {
    value: data,
    phase: state,
    reload
  } = useEndpointData('livechat/triggers', useMemo(() => ({
    offset: current,
    count: itemsPerPage
  }), [current, itemsPerPage]));
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/09dba2f77ba09452e6fb9d4b157c5dbea239da32.map
