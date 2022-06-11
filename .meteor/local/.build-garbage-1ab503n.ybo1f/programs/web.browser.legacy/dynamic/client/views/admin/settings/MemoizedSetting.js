function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/MemoizedSetting.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["type", "hint", "callout", "value", "editor", "onChangeValue", "onChangeEditor", "className", "invisible"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Callout, Field, Margins;
module.link("@rocket.chat/fuselage", {
  Callout: function (v) {
    Callout = v;
  },
  Field: function (v) {
    Field = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var ActionSettingInput;
module.link("./inputs/ActionSettingInput", {
  "default": function (v) {
    ActionSettingInput = v;
  }
}, 2);
var AssetSettingInput;
module.link("./inputs/AssetSettingInput", {
  "default": function (v) {
    AssetSettingInput = v;
  }
}, 3);
var BooleanSettingInput;
module.link("./inputs/BooleanSettingInput", {
  "default": function (v) {
    BooleanSettingInput = v;
  }
}, 4);
var CodeSettingInput;
module.link("./inputs/CodeSettingInput", {
  "default": function (v) {
    CodeSettingInput = v;
  }
}, 5);
var ColorSettingInput;
module.link("./inputs/ColorSettingInput", {
  "default": function (v) {
    ColorSettingInput = v;
  }
}, 6);
var FontSettingInput;
module.link("./inputs/FontSettingInput", {
  "default": function (v) {
    FontSettingInput = v;
  }
}, 7);
var GenericSettingInput;
module.link("./inputs/GenericSettingInput", {
  "default": function (v) {
    GenericSettingInput = v;
  }
}, 8);
var IntSettingInput;
module.link("./inputs/IntSettingInput", {
  "default": function (v) {
    IntSettingInput = v;
  }
}, 9);
var LanguageSettingInput;
module.link("./inputs/LanguageSettingInput", {
  "default": function (v) {
    LanguageSettingInput = v;
  }
}, 10);
var MultiSelectSettingInput;
module.link("./inputs/MultiSelectSettingInput", {
  "default": function (v) {
    MultiSelectSettingInput = v;
  }
}, 11);
var PasswordSettingInput;
module.link("./inputs/PasswordSettingInput", {
  "default": function (v) {
    PasswordSettingInput = v;
  }
}, 12);
var RelativeUrlSettingInput;
module.link("./inputs/RelativeUrlSettingInput", {
  "default": function (v) {
    RelativeUrlSettingInput = v;
  }
}, 13);
var RoomPickSettingInput;
module.link("./inputs/RoomPickSettingInput", {
  "default": function (v) {
    RoomPickSettingInput = v;
  }
}, 14);
var SelectSettingInput;
module.link("./inputs/SelectSettingInput", {
  "default": function (v) {
    SelectSettingInput = v;
  }
}, 15);
var SelectTimezoneSettingInput;
module.link("./inputs/SelectTimezoneSettingInput", {
  "default": function (v) {
    SelectTimezoneSettingInput = v;
  }
}, 16);
var StringSettingInput;
module.link("./inputs/StringSettingInput", {
  "default": function (v) {
    StringSettingInput = v;
  }
}, 17);

var MemoizedSetting = function (_ref) {
  var type = _ref.type,
      hint = _ref.hint,
      callout = _ref.callout,
      value = _ref.value,
      editor = _ref.editor,
      _ref$onChangeValue = _ref.onChangeValue,
      onChangeValue = _ref$onChangeValue === void 0 ? function () {} : _ref$onChangeValue,
      _ref$onChangeEditor = _ref.onChangeEditor,
      onChangeEditor = _ref$onChangeEditor === void 0 ? function () {} : _ref$onChangeEditor,
      className = _ref.className,
      invisible = _ref.invisible,
      inputProps = _objectWithoutProperties(_ref, _excluded);

  if (invisible) {
    return null;
  }

  var InputComponent = {
    "boolean": BooleanSettingInput,
    string: StringSettingInput,
    relativeUrl: RelativeUrlSettingInput,
    password: PasswordSettingInput,
    "int": IntSettingInput,
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
//# sourceMappingURL=/dynamic/client/views/admin/settings/3cff100a3aae27f2b03780864ea55c9aaab8fe14.map
