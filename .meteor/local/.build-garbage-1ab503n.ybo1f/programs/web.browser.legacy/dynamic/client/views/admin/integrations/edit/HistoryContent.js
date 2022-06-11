function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/edit/HistoryContent.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["data", "state", "onChange"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Skeleton, Box, Accordion;
module.link("@rocket.chat/fuselage", {
  Skeleton: function (v) {
    Skeleton = v;
  },
  Box: function (v) {
    Box = v;
  },
  Accordion: function (v) {
    Accordion = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 3);
var HistoryItem;
module.link("./HistoryItem", {
  "default": function (v) {
    HistoryItem = v;
  }
}, 4);

function HistoryContent(_ref) {
  var data = _ref.data,
      state = _ref.state,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

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
  }, data.map(function (current) {
    return /*#__PURE__*/React.createElement(HistoryItem, {
      data: current,
      key: current._id
    });
  })));
}

module.exportDefault(HistoryContent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/edit/7dc63ba4b640960ab94761c135d7cf3cd0e4401b.map
