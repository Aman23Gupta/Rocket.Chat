function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/KeyboardShortcuts/KeyboardShortcuts.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let VerticalBar;
module.link("../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 1);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let ShortcutSection;
module.link("./ShortcutSection", {
  default(v) {
    ShortcutSection = v;
  }

}, 3);

const KeyboardShortcuts = _ref => {
  let {
    handleClose
  } = _ref;
  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/KeyboardShortcuts/486ae18b804adafdc2467c71bca286e384652ee3.map
