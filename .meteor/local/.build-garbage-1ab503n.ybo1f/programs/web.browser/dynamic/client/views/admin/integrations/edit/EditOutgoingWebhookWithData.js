function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/edit/EditOutgoingWebhookWithData.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["integrationId"];

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
let useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 4);
let EditOutgoingWebhook;
module.link("./EditOutgoingWebhook", {
  default(v) {
    EditOutgoingWebhook = v;
  }

}, 5);

function EditOutgoingWebhookWithData(_ref) {
  let {
    integrationId
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const params = useMemo(() => ({
    integrationId
  }), [integrationId]);
  const {
    value: data,
    phase: state,
    error,
    reload
  } = useEndpointData('integrations.get', params);

  const onChange = () => {
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
//# sourceMappingURL=/dynamic/client/views/admin/integrations/edit/5184ade95e0254f8e01bcef91dbc13e1b316a84f.map
