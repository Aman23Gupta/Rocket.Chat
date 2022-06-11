function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/tags/AutoCompleteTagsMultiple.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var PaginatedMultiSelectFiltered;
module.link("@rocket.chat/fuselage", {
  PaginatedMultiSelectFiltered: function (v) {
    PaginatedMultiSelectFiltered = v;
  }
}, 0);
var useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  }
}, 1);
var React, memo, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useRecordList;
module.link("../../../../client/hooks/lists/useRecordList", {
  useRecordList: function (v) {
    useRecordList = v;
  }
}, 4);
var AsyncStatePhase;
module.link("../../../../client/hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 5);
var useTagsList;
module.link("../../hooks/useTagsList", {
  useTagsList: function (v) {
    useTagsList = v;
  }
}, 6);

var AutoCompleteTagMultiple = function (props) {
  var value = props.value,
      _props$onlyMyTags = props.onlyMyTags,
      onlyMyTags = _props$onlyMyTags === void 0 ? false : _props$onlyMyTags,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var t = useTranslation();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      tagsFilter = _useState2[0],
      setTagsFilter = _useState2[1];

  var debouncedTagsFilter = useDebouncedValue(tagsFilter, 500);

  var _useTagsList = useTagsList(useMemo(function () {
    return {
      filter: debouncedTagsFilter,
      onlyMyTags: onlyMyTags
    };
  }, [debouncedTagsFilter, onlyMyTags])),
      tagsList = _useTagsList.itemsList,
      loadMoreTags = _useTagsList.loadMoreItems;

  var _useRecordList = useRecordList(tagsList),
      tagsPhase = _useRecordList.phase,
      tagsItems = _useRecordList.items,
      tagsTotal = _useRecordList.itemCount;

  var sortedByName = tagsItems.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }

    if (a.name < b.name) {
      return -1;
    }

    return 0;
  });
  return /*#__PURE__*/React.createElement(PaginatedMultiSelectFiltered, {
    withTitle: true,
    value: value,
    onChange: onChange,
    filter: tagsFilter,
    setFilter: setTagsFilter,
    options: sortedByName,
    width: "100%",
    flexShrink: 0,
    flexGrow: 0,
    placeholder: t('Select_an_option'),
    endReached: tagsPhase === AsyncStatePhase.LOADING ? function () {} : function (start) {
      return loadMoreTags(start, Math.min(50, tagsTotal));
    }
  });
};

module.exportDefault( /*#__PURE__*/memo(AutoCompleteTagMultiple));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/tags/c3932a0ec9cc8d69f97c017ed5ed331ccaabc133.map
