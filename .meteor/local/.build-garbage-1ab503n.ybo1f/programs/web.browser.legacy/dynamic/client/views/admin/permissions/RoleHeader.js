function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/RoleHeader.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _excluded = ["router", "_id", "name", "description"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Margins, Box, Icon;
module.link("@rocket.chat/fuselage", {
  Margins: function (v) {
    Margins = v;
  },
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 1);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 2);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 3);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 4);

var RoleHeader = function (_ref) {
  var router = _ref.router,
      _id = _ref._id,
      name = _ref.name,
      description = _ref.description,
      props = _objectWithoutProperties(_ref, _excluded);

  var onClick = useMutableCallback(function () {
    router.push({
      context: 'edit',
      _id: _id
    });
  });
  return /*#__PURE__*/React.createElement(GenericTable.HeaderCell, _extends({
    clickable: true,
    pi: "x4",
    p: "x8"
  }, props), /*#__PURE__*/React.createElement(Box, {
    className: css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t"]))),
    pb: "x8",
    pi: "x12",
    mi: "neg-x2",
    borderStyle: "solid",
    borderWidth: "x2",
    borderRadius: "x2",
    borderColor: "neutral-300",
    onClick: onClick
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x2"
  }, /*#__PURE__*/React.createElement("span", null, description || name), /*#__PURE__*/React.createElement(Icon, {
    name: "edit",
    size: "x16"
  }))));
};

module.exportDefault( /*#__PURE__*/memo(RoleHeader));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/069d5c01e279613d7b10cb08d8793548744ed587.map
