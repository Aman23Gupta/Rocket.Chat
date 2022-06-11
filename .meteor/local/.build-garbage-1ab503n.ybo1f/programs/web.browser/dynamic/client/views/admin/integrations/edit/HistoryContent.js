function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/edit/HistoryContent.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["data", "state", "onChange"];

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
let Skeleton, Box, Accordion;
module.link("@rocket.chat/fuselage", {
  Skeleton(v) {
    Skeleton = v;
  },

  Box(v) {
    Box = v;
  },

  Accordion(v) {
    Accordion = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
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
let HistoryItem;
module.link("./HistoryItem", {
  default(v) {
    HistoryItem = v;
  }

}, 4);

function HistoryContent(_ref) {
  let {
    data,
    state,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();

  if (!data || state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(Box, _extends({
      w: "full",
      pb: "x24"
    }, props), /*#__PURE__*/React.createElement(Skeleton, {
      mbe: "x4"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      mbe: "x8"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      mbe: "x4"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      mbe: "x8"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      mbe: "x4"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      mbe: "x8"
    }));
  }

  if (data.length < 1) {
    return /*#__PURE__*/React.createElement(Box, _extends({
      mbs: "x16"
    }, props), t('Integration_Outgoing_WebHook_No_History'));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Accordion, {
    w: "full",
    maxWidth: "x600",
    alignSelf: "center",
    key: "content"
  }, data.map(current => /*#__PURE__*/React.createElement(HistoryItem, {
    data: current,
    key: current._id
  }))));
}

module.exportDefault(HistoryContent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/edit/02a841340530e22550a588df6b42e8048f8907cf.map
