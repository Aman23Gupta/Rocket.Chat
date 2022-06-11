function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/edit/EditOutgoingWebhookWithData.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["integrationId"];

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
var useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 4);
var EditOutgoingWebhook;
module.link("./EditOutgoingWebhook", {
  "default": function (v) {
    EditOutgoingWebhook = v;
  }
}, 5);

function EditOutgoingWebhookWithData(_ref) {
  var integrationId = _ref.integrationId,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var params = useMemo(function () {
    return {
      integrationId: integrationId
    };
  }, [integrationId]);

  var _useEndpointData = useEndpointData('integrations.get', params),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error,
      reload = _useEndpointData.reload;

  var onChange = function () {
    reload();
  };

  if (state === AsyncStatePhase.LOADING) {
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

  if (error) {
    return /*#__PURE__*/React.createElement(Box, _extends({
      mbs: "x16"
    }, props), t('Oops_page_not_found'));
  }

  return /*#__PURE__*/React.createElement(EditOutgoingWebhook, _extends({
    data: data.integration,
    onChange: onChange
  }, props));
}

module.exportDefault(EditOutgoingWebhookWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/edit/6cbb7aceaffb938514f774d8264271eeded50ed8.map
