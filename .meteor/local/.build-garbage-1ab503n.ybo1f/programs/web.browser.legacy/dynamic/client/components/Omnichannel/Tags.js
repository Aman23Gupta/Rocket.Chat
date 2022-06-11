function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/Tags.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Field, TextInput, Chip, Button;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Chip: function (v) {
    Chip = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 3);
var useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 4);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var AsyncStatePhase;
module.link("../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 6);
var useEndpointData;
module.link("../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 7);
var formsSubscription;
module.link("../../views/omnichannel/additionalForms", {
  formsSubscription: function (v) {
    formsSubscription = v;
  }
}, 8);
var FormSkeleton;
module.link("./Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 9);

var Tags = function (_ref) {
  var _ref$tags = _ref.tags,
      tags = _ref$tags === void 0 ? [] : _ref$tags,
      _ref$handler = _ref.handler,
      handler = _ref$handler === void 0 ? function () {} : _ref$handler,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? '' : _ref$error,
      _ref$tagRequired = _ref.tagRequired,
      tagRequired = _ref$tagRequired === void 0 ? false : _ref$tagRequired;

  var _useEndpointData = useEndpointData('livechat/tags.list'),
      _useEndpointData$valu = _useEndpointData.value,
      tagsResult = _useEndpointData$valu === void 0 ? [] : _useEndpointData$valu,
      stateTags = _useEndpointData.phase;

  var t = useTranslation();
  var forms = useSubscription(formsSubscription);
  var _forms$useCurrentChat = forms.useCurrentChatTags,
      useCurrentChatTags = _forms$useCurrentChat === void 0 ? function () {} : _forms$useCurrentChat;
  var Tags = useCurrentChatTags();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      tagValue = _useState2[0],
      handleTagValue = _useState2[1];

  var _useState3 = useState(tags),
      _useState4 = _slicedToArray(_useState3, 2),
      paginatedTagValue = _useState4[0],
      handlePaginatedTagValue = _useState4[1];

  var removeTag = function (tag) {
    var tagsFiltered = tags.filter(function (tagArray) {
      return tagArray !== tag;
    });
    handler(tagsFiltered);
  };

  var handleTagTextSubmit = useMutableCallback(function () {
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

    handler([].concat(_toConsumableArray(tags), [tagValue]));
    handleTagValue('');
  });

  if ([stateTags].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  var tagsList = tagsResult.tags;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field.Label, {
    required: tagRequired,
    mb: "x4"
  }, t('Tags')), Tags && tagsList && tagsList.length > 0 ? /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Tags, {
    value: paginatedTagValue,
    handler: function (tags) {
      handler(tags.map(function (tag) {
        return tag.label;
      }));
      handlePaginatedTagValue(tags);
    }
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    error: error,
    value: tagValue !== null && tagValue !== void 0 && tagValue.value ? tagValue.value : tagValue,
    onChange: function (event) {
      return handleTagValue(event.target.value);
    },
    flexGrow: 1,
    placeholder: t('Enter_a_tag')
  }), /*#__PURE__*/React.createElement(Button, {
    disabled: !tagValue,
    mis: "x8",
    title: t('add'),
    onClick: handleTagTextSubmit
  }, t('Add'))), /*#__PURE__*/React.createElement(Field.Row, {
    justifyContent: "flex-start"
  }, tags.map(function (tag, i) {
    return /*#__PURE__*/React.createElement(Chip, {
      key: i,
      onClick: function () {
        return removeTag(tag);
      },
      mie: "x8"
    }, tag !== null && tag !== void 0 && tag.value ? tag.value : tag);
  }))));
};

module.exportDefault(Tags);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Omnichannel/4b95ee960af39c1f3825ba6275204f1a73e69451.map
