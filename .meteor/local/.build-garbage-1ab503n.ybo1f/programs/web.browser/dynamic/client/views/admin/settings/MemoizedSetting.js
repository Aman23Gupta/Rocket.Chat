function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/MemoizedSetting.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["type", "hint", "callout", "value", "editor", "onChangeValue", "onChangeEditor", "className", "invisible"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Callout, Field, Margins;
module.link("@rocket.chat/fuselage", {
  Callout(v) {
    Callout = v;
  },

  Field(v) {
    Field = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let ActionSettingInput;
module.link("./inputs/ActionSettingInput", {
  default(v) {
    ActionSettingInput = v;
  }

}, 2);
let AssetSettingInput;
module.link("./inputs/AssetSettingInput", {
  default(v) {
    AssetSettingInput = v;
  }

}, 3);
let BooleanSettingInput;
module.link("./inputs/BooleanSettingInput", {
  default(v) {
    BooleanSettingInput = v;
  }

}, 4);
let CodeSettingInput;
module.link("./inputs/CodeSettingInput", {
  default(v) {
    CodeSettingInput = v;
  }

}, 5);
let ColorSettingInput;
module.link("./inputs/ColorSettingInput", {
  default(v) {
    ColorSettingInput = v;
  }

}, 6);
let FontSettingInput;
module.link("./inputs/FontSettingInput", {
  default(v) {
    FontSettingInput = v;
  }

}, 7);
let GenericSettingInput;
module.link("./inputs/GenericSettingInput", {
  default(v) {
    GenericSettingInput = v;
  }

}, 8);
let IntSettingInput;
module.link("./inputs/IntSettingInput", {
  default(v) {
    IntSettingInput = v;
  }

}, 9);
let LanguageSettingInput;
module.link("./inputs/LanguageSettingInput", {
  default(v) {
    LanguageSettingInput = v;
  }

}, 10);
let MultiSelectSettingInput;
module.link("./inputs/MultiSelectSettingInput", {
  default(v) {
    MultiSelectSettingInput = v;
  }

}, 11);
let PasswordSettingInput;
module.link("./inputs/PasswordSettingInput", {
  default(v) {
    PasswordSettingInput = v;
  }

}, 12);
let RelativeUrlSettingInput;
module.link("./inputs/RelativeUrlSettingInput", {
  default(v) {
    RelativeUrlSettingInput = v;
  }

}, 13);
let RoomPickSettingInput;
module.link("./inputs/RoomPickSettingInput", {
  default(v) {
    RoomPickSettingInput = v;
  }

}, 14);
let SelectSettingInput;
module.link("./inputs/SelectSettingInput", {
  default(v) {
    SelectSettingInput = v;
  }

}, 15);
let SelectTimezoneSettingInput;
module.link("./inputs/SelectTimezoneSettingInput", {
  default(v) {
    SelectTimezoneSettingInput = v;
  }

}, 16);
let StringSettingInput;
module.link("./inputs/StringSettingInput", {
  default(v) {
    StringSettingInput = v;
  }

}, 17);

const MemoizedSetting = _ref => {
  let {
    type,
    hint,
    callout,
    value,
    editor,
    onChangeValue = () => {},
    onChangeEditor = () => {},
    className,
    invisible
  } = _ref,
      inputProps = _objectWithoutProperties(_ref, _excluded);

  if (invisible) {
    return null;
  }

  const InputComponent = {
    boolean: BooleanSettingInput,
    string: StringSettingInput,
    relativeUrl: RelativeUrlSettingInput,
    password: PasswordSettingInput,
    int: IntSettingInput,
    select: SelectSettingInput,
    multiSelect: MultiSelectSettingInput,
    language: LanguageSettingInput,
    color: ColorSettingInput,
    font: FontSettingInput,
    code: CodeSettingInput,
    action: ActionSettingInput,
    asset: AssetSettingInput,
    roomPick: RoomPickSettingInput,
    timezone: SelectTimezoneSettingInput
  }[type] || GenericSettingInput;
  return /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(InputComponent, _extends({
    value: value,
    editor: editor,
    onChangeValue: onChangeValue,
    onChangeEditor: onChangeEditor
  }, inputProps)), hint && /*#__PURE__*/React.createElement(Field.Hint, null, hint), callout && /*#__PURE__*/React.createElement(Margins, {
    block: "x16"
  }, /*#__PURE__*/React.createElement(Callout, {
    type: "warning"
  }, callout)));
};

module.exportDefault( /*#__PURE__*/memo(MemoizedSetting));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/966568633c2fbb34641330335d336c31aef4ca30.map
