function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/MarkdownTextEditor/index.tsx                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Divider, PositionAnimated, Tile;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Divider(v) {
    Divider = v;
  },

  PositionAnimated(v) {
    PositionAnimated = v;
  },

  Tile(v) {
    Tile = v;
  }

}, 0);
let React, memo, useCallback, useRef, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useRef(v) {
    useRef = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let EmojiPicker;
module.link("../../../../../../app/emoji/client", {
  EmojiPicker(v) {
    EmojiPicker = v;
  }

}, 2);
let Backdrop;
module.link("../../../../../../client/components/Backdrop", {
  Backdrop(v) {
    Backdrop = v;
  }

}, 3);
let useUserPreference;
module.link("../../../../../../client/contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  }

}, 4);
let TextEditor;
module.link("../TextEditor", {
  default(v) {
    TextEditor = v;
  }

}, 5);
let InsertPlaceholderDropdown;
module.link("./InsertPlaceholderDropdown", {
  default(v) {
    InsertPlaceholderDropdown = v;
  }

}, 6);

const MarkdownTextEditor = _ref => {
  let {
    onChange,
    value
  } = _ref;
  const useEmojisPreference = useUserPreference('useEmojis');
  const textAreaRef = useRef(null);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const useMarkdownSyntax = char => useCallback(() => {
    if (textAreaRef !== null && textAreaRef !== void 0 && textAreaRef.current) {
      const text = textAreaRef.current.value;
      const startPos = textAreaRef.current.selectionStart;
      const endPos = textAreaRef.current.selectionEnd;

      if (char === '[]()') {
        if (startPos !== endPos) {
          textAreaRef.current.value = "".concat(text.slice(0, startPos), "[").concat(text.slice(startPos, endPos), "]()").concat(text.slice(endPos));
        }
      } else {
        textAreaRef.current.value = "".concat(text.slice(0, startPos)).concat(char).concat(text.slice(startPos, endPos)).concat(char).concat(text.slice(endPos));
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

  const onClickEmoji = emoji => {
    if (textAreaRef !== null && textAreaRef !== void 0 && textAreaRef.current) {
      const text = textAreaRef.current.value;
      const startPos = textAreaRef.current.selectionStart;
      const emojiValue = ":".concat(emoji, ": ");
      textAreaRef.current.value = text.slice(0, startPos) + emojiValue + text.slice(startPos);
      textAreaRef.current.focus();
      textAreaRef.current.setSelectionRange(startPos + emojiValue.length, startPos + emojiValue.length);
      onChange(textAreaRef.current.value);
    }
  };

  const openEmojiPicker = () => {
    if (!useEmojisPreference) {
      return;
    }

    if (EmojiPicker.isOpened()) {
      EmojiPicker.close();
      return;
    }

    EmojiPicker.open(textAreaRef.current, emoji => {
      onClickEmoji(emoji);
    });
  };

  const openPlaceholderSelect = () => {
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
    onClick: () => {
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/MarkdownTextEditor/b0b9acbd6f840fa8273d2e65b6b565a8977a7057.map
