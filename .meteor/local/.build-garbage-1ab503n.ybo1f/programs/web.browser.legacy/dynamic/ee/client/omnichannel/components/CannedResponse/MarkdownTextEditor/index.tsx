function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/MarkdownTextEditor/index.tsx                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Box, Divider, PositionAnimated, Tile;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Divider: function (v) {
    Divider = v;
  },
  PositionAnimated: function (v) {
    PositionAnimated = v;
  },
  Tile: function (v) {
    Tile = v;
  }
}, 0);
var React, memo, useCallback, useRef, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var EmojiPicker;
module.link("../../../../../../app/emoji/client", {
  EmojiPicker: function (v) {
    EmojiPicker = v;
  }
}, 2);
var Backdrop;
module.link("../../../../../../client/components/Backdrop", {
  Backdrop: function (v) {
    Backdrop = v;
  }
}, 3);
var useUserPreference;
module.link("../../../../../../client/contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  }
}, 4);
var TextEditor;
module.link("../TextEditor", {
  "default": function (v) {
    TextEditor = v;
  }
}, 5);
var InsertPlaceholderDropdown;
module.link("./InsertPlaceholderDropdown", {
  "default": function (v) {
    InsertPlaceholderDropdown = v;
  }
}, 6);

var MarkdownTextEditor = function (_ref) {
  var onChange = _ref.onChange,
      value = _ref.value;
  var useEmojisPreference = useUserPreference('useEmojis');
  var textAreaRef = useRef(null);
  var ref = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var useMarkdownSyntax = function (char) {
    return useCallback(function () {
      if (textAreaRef !== null && textAreaRef !== void 0 && textAreaRef.current) {
        var text = textAreaRef.current.value;
        var startPos = textAreaRef.current.selectionStart;
        var endPos = textAreaRef.current.selectionEnd;

        if (char === '[]()') {
          if (startPos !== endPos) {
            textAreaRef.current.value = text.slice(0, startPos) + "[" + text.slice(startPos, endPos) + "]()" + text.slice(endPos);
          }
        } else {
          textAreaRef.current.value = "" + text.slice(0, startPos) + char + text.slice(startPos, endPos) + char + text.slice(endPos);
        }

        textAreaRef.current.focus();

        if (char === '[]()') {
          if (startPos === endPos) {
            textAreaRef.current.setSelectionRange(startPos, endPos);
          } else {
            textAreaRef.current.setSelectionRange(endPos + 3, endPos + 3);
          }
        } else {
          textAreaRef.current.setSelectionRange(startPos + 1, endPos + 1);
        }

        onChange(textAreaRef.current.value);
      }
    }, [char]);
  };

  var onClickEmoji = function (emoji) {
    if (textAreaRef !== null && textAreaRef !== void 0 && textAreaRef.current) {
      var text = textAreaRef.current.value;
      var startPos = textAreaRef.current.selectionStart;
      var emojiValue = ":" + emoji + ": ";
      textAreaRef.current.value = text.slice(0, startPos) + emojiValue + text.slice(startPos);
      textAreaRef.current.focus();
      textAreaRef.current.setSelectionRange(startPos + emojiValue.length, startPos + emojiValue.length);
      onChange(textAreaRef.current.value);
    }
  };

  var openEmojiPicker = function () {
    if (!useEmojisPreference) {
      return;
    }

    if (EmojiPicker.isOpened()) {
      EmojiPicker.close();
      return;
    }

    EmojiPicker.open(textAreaRef.current, function (emoji) {
      onClickEmoji(emoji);
    });
  };

  var openPlaceholderSelect = function () {
    (textAreaRef === null || textAreaRef === void 0 ? void 0 : textAreaRef.current) && textAreaRef.current.focus();
    setVisible(!visible);
  };

  return /*#__PURE__*/React.createElement(TextEditor, null, /*#__PURE__*/React.createElement(TextEditor.Toolbox, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(TextEditor.Toolbox.IconButton, {
    name: "bold",
    action: useMarkdownSyntax('*')
  }), /*#__PURE__*/React.createElement(TextEditor.Toolbox.IconButton, {
    name: "italic",
    action: useMarkdownSyntax('_')
  }), /*#__PURE__*/React.createElement(TextEditor.Toolbox.IconButton, {
    name: "strike",
    action: useMarkdownSyntax('~')
  }), /*#__PURE__*/React.createElement(TextEditor.Toolbox.IconButton, {
    name: "link",
    action: useMarkdownSyntax('[]()')
  }), /*#__PURE__*/React.createElement(TextEditor.Toolbox.IconButton, {
    name: "emoji",
    action: openEmojiPicker
  })), /*#__PURE__*/React.createElement(TextEditor.Toolbox.TextButton, {
    text: "Insert_Placeholder",
    action: openPlaceholderSelect,
    ref: ref
  }), /*#__PURE__*/React.createElement(Backdrop, {
    display: visible ? 'block' : 'none',
    onClick: function () {
      (textAreaRef === null || textAreaRef === void 0 ? void 0 : textAreaRef.current) && textAreaRef.current.focus();
      setVisible(false);
    }
  }), /*#__PURE__*/React.createElement(PositionAnimated, {
    visible: visible ? 'visible' : 'hidden',
    anchor: ref
  }, /*#__PURE__*/React.createElement(Tile, {
    elevation: "1",
    w: "224px"
  }, /*#__PURE__*/React.createElement(InsertPlaceholderDropdown, {
    onChange: onChange,
    textAreaRef: textAreaRef,
    setVisible: setVisible
  })))), /*#__PURE__*/React.createElement(Divider, {
    w: "full",
    mbe: "16px"
  }), /*#__PURE__*/React.createElement(TextEditor.Textarea, {
    value: value,
    onChange: onChange,
    rows: 10,
    ref: textAreaRef
  }));
};

module.exportDefault( /*#__PURE__*/memo(MarkdownTextEditor));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/MarkdownTextEditor/4f63de4580e3fa9c6e7a4b37864aa5eda4c386aa.map
