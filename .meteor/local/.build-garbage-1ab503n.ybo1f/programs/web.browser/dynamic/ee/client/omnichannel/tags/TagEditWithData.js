function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/tags/TagEditWithData.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Callout;
module.link("@rocket.chat/fuselage", {
  Callout(v) {
    Callout = v;
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
let FormSkeleton;
module.link("../../../../client/components/Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 2);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let AsyncStatePhase;
module.link("../../../../client/hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 4);
let useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 5);
let TagEdit;
module.link("./TagEdit", {
  default(v) {
    TagEdit = v;
  }

}, 6);
let TagEditWithDepartmentData;
module.link("./TagEditWithDepartmentData", {
  default(v) {
    TagEditWithDepartmentData = v;
  }

}, 7);

function TagEditWithData(_ref) {
  let {
    tagId,
    reload
  } = _ref;
  const query = useMemo(() => ({
    tagId
  }), [tagId]);
  const {
    value: data,
    phase: state,
    error
  } = useEndpointData('livechat/tags.getOne', query);
  const t = useTranslation();

  if ([state].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error) {
    return /*#__PURE__*/React.createElement(Callout, {
      m: "x16",
      type: "danger"
    }, t('Not_Available'));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, data && data.departments && data.departments.length > 0 ? /*#__PURE__*/React.createElement(TagEditWithDepartmentData, {
    tagId: tagId,
    data: data,
    reload: reload
  }) : /*#__PURE__*/React.createElement(TagEdit, {
    tagId: tagId,
    data: data,
    reload: reload
  }));
}

module.exportDefault(TagEditWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/tags/0855d7bdcf6ee763222ceaf9cec7e805971ae43a.map
