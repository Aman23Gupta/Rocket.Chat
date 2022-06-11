function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/KeyboardShortcuts/KeyboardShortcuts.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var VerticalBar;
module.link("../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 1);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var ShortcutSection;
module.link("./ShortcutSection", {
  "default": function (v) {
    ShortcutSection = v;
  }
}, 3);

var KeyboardShortcuts = function (_ref) {
  var handleClose = _ref.handleClose;
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "keyboard"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Keyboard_Shortcuts_Title')), handleClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: handleClose
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, /*#__PURE__*/React.createElement(ShortcutSection, {
    title: t('Keyboard_Shortcuts_Open_Channel_Slash_User_Search'),
    command: t('Keyboard_Shortcuts_Keys_1')
  }), /*#__PURE__*/React.createElement(ShortcutSection, {
    title: t('Keyboard_Shortcuts_Mark_all_as_read'),
    command: t('Keyboard_Shortcuts_Keys_8')
  }), /*#__PURE__*/React.createElement(ShortcutSection, {
    title: t('Keyboard_Shortcuts_Edit_Previous_Message'),
    command: t('Keyboard_Shortcuts_Keys_2')
  }), /*#__PURE__*/React.createElement(ShortcutSection, {
    title: t('Keyboard_Shortcuts_Move_To_Beginning_Of_Message'),
    command: t('Keyboard_Shortcuts_Keys_3')
  }), /*#__PURE__*/React.createElement(ShortcutSection, {
    title: t('Keyboard_Shortcuts_Move_To_Beginning_Of_Message'),
    command: t('Keyboard_Shortcuts_Keys_4')
  }), /*#__PURE__*/React.createElement(ShortcutSection, {
    title: t('Keyboard_Shortcuts_Move_To_End_Of_Message'),
    command: t('Keyboard_Shortcuts_Keys_5')
  }), /*#__PURE__*/React.createElement(ShortcutSection, {
    title: t('Keyboard_Shortcuts_Move_To_End_Of_Message'),
    command: t('Keyboard_Shortcuts_Keys_6')
  }), /*#__PURE__*/React.createElement(ShortcutSection, {
    title: t('Keyboard_Shortcuts_New_Line_In_Message'),
    command: t('Keyboard_Shortcuts_Keys_7')
  })));
};

module.exportDefault(KeyboardShortcuts);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/KeyboardShortcuts/3ffcfeac432ca157b846fd02ccbe71d0f70ca81d.map
