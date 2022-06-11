function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/tags/AutoCompleteTagsMultiple.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let PaginatedMultiSelectFiltered;
module.link("@rocket.chat/fuselage", {
  PaginatedMultiSelectFiltered(v) {
    PaginatedMultiSelectFiltered = v;
  }

}, 0);
let useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 1);
let React, memo, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useRecordList;
module.link("../../../../client/hooks/lists/useRecordList", {
  useRecordList(v) {
    useRecordList = v;
  }

}, 4);
let AsyncStatePhase;
module.link("../../../../client/hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 5);
let useTagsList;
module.link("../../hooks/useTagsList", {
  useTagsList(v) {
    useTagsList = v;
  }

}, 6);

const AutoCompleteTagMultiple = props => {
  const {
    value,
    onlyMyTags = false,
    onChange = () => {}
  } = props;
  const t = useTranslation();
  const [tagsFilter, setTagsFilter] = useState('');
  const debouncedTagsFilter = useDebouncedValue(tagsFilter, 500);
  const {
    itemsList: tagsList,
    loadMoreItems: loadMoreTags
  } = useTagsList(useMemo(() => ({
    filter: debouncedTagsFilter,
    onlyMyTags
  }), [debouncedTagsFilter, onlyMyTags]));
  const {
    phase: tagsPhase,
    items: tagsItems,
    itemCount: tagsTotal
  } = useRecordList(tagsList);
  const sortedByName = tagsItems.sort((a, b) => {
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
    endReached: tagsPhase === AsyncStatePhase.LOADING ? () => {} : start => loadMoreTags(start, Math.min(50, tagsTotal))
  });
};

module.exportDefault( /*#__PURE__*/memo(AutoCompleteTagMultiple));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/tags/0db0704ba84570c5c3cee1467d105b64cb2ff5d6.map
