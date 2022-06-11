function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/Tags.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field, TextInput, Chip, Button;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Chip(v) {
    Chip = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 3);
let useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 4);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let AsyncStatePhase;
module.link("../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 6);
let useEndpointData;
module.link("../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 7);
let formsSubscription;
module.link("../../views/omnichannel/additionalForms", {
  formsSubscription(v) {
    formsSubscription = v;
  }

}, 8);
let FormSkeleton;
module.link("./Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 9);

const Tags = _ref => {
  let {
    tags = [],
    handler = () => {},
    error = '',
    tagRequired = false
  } = _ref;
  const {
    value: tagsResult = [],
    phase: stateTags
  } = useEndpointData('livechat/tags.list');
  const t = useTranslation();
  const forms = useSubscription(formsSubscription);
  const {
    useCurrentChatTags = () => {}
  } = forms;
  const Tags = useCurrentChatTags();
  const dispatchToastMessage = useToastMessageDispatch();
  const [tagValue, handleTagValue] = useState('');
  const [paginatedTagValue, handlePaginatedTagValue] = useState(tags);

  const removeTag = tag => {
    const tagsFiltered = tags.filter(tagArray => tagArray !== tag);
    handler(tagsFiltered);
  };

  const handleTagTextSubmit = useMutableCallback(() => {
    if (!tagValue || tagValue.trim() === '') {
      dispatchToastMessage({
        type: 'error',
        message: t('Enter_a_tag')
      });
      handleTagValue('');
      return;
    }

    if (tags.includes(tagValue)) {
      dispatchToastMessage({
        type: 'error',
        message: t('Tag_already_exists')
      });
      return;
    }

    handler([...tags, tagValue]);
    handleTagValue('');
  });

  if ([stateTags].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  const {
    tags: tagsList
  } = tagsResult;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field.Label, {
    required: tagRequired,
    mb: "x4"
  }, t('Tags')), Tags && tagsList && tagsList.length > 0 ? /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Tags, {
    value: paginatedTagValue,
    handler: tags => {
      handler(tags.map(tag => tag.label));
      handlePaginatedTagValue(tags);
    }
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    error: error,
    value: tagValue !== null && tagValue !== void 0 && tagValue.value ? tagValue.value : tagValue,
    onChange: event => handleTagValue(event.target.value),
    flexGrow: 1,
    placeholder: t('Enter_a_tag')
  }), /*#__PURE__*/React.createElement(Button, {
    disabled: !tagValue,
    mis: "x8",
    title: t('add'),
    onClick: handleTagTextSubmit
  }, t('Add'))), /*#__PURE__*/React.createElement(Field.Row, {
    justifyContent: "flex-start"
  }, tags.map((tag, i) => /*#__PURE__*/React.createElement(Chip, {
    key: i,
    onClick: () => removeTag(tag),
    mie: "x8"
  }, tag !== null && tag !== void 0 && tag.value ? tag.value : tag)))));
};

module.exportDefault(Tags);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Omnichannel/8c4655a178a417840262665f3ddede6728aca042.map
