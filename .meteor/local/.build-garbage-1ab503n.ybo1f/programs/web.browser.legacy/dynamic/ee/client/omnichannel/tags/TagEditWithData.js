function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/tags/TagEditWithData.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Callout;
module.link("@rocket.chat/fuselage", {
  Callout: function (v) {
    Callout = v;
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
var FormSkeleton;
module.link("../../../../client/components/Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 2);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var AsyncStatePhase;
module.link("../../../../client/hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 4);
var useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 5);
var TagEdit;
module.link("./TagEdit", {
  "default": function (v) {
    TagEdit = v;
  }
}, 6);
var TagEditWithDepartmentData;
module.link("./TagEditWithDepartmentData", {
  "default": function (v) {
    TagEditWithDepartmentData = v;
  }
}, 7);

function TagEditWithData(_ref) {
  var tagId = _ref.tagId,
      reload = _ref.reload;
  var query = useMemo(function () {
    return {
      tagId: tagId
    };
  }, [tagId]);

  var _useEndpointData = useEndpointData('livechat/tags.getOne', query),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error;

  var t = useTranslation();

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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/tags/0d874e7276ccff683e19d99b9dcb2749b49285a7.map
