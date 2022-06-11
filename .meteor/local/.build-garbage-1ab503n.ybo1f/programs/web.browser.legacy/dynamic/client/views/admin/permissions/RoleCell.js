function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/RoleCell.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Table, Margins, Box, CheckBox, Throbber;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Box: function (v) {
    Box = v;
  },
  CheckBox: function (v) {
    CheckBox = v;
  },
  Throbber: function (v) {
    Throbber = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 2);
var AuthorizationUtils;
module.link("../../../../app/authorization/lib", {
  AuthorizationUtils: function (v) {
    AuthorizationUtils = v;
  }
}, 3);

var RoleCell = function (_ref) {
  var _ref$grantedRoles = _ref.grantedRoles,
      grantedRoles = _ref$grantedRoles === void 0 ? [] : _ref$grantedRoles,
      _id = _ref._id,
      name = _ref.name,
      description = _ref.description,
      onChange = _ref.onChange,
      lineHovered = _ref.lineHovered,
      permissionId = _ref.permissionId;

  var _useState = useState(function () {
    return !!grantedRoles.includes(_id);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      granted = _useState2[0],
      setGranted = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var isRestrictedForRole = AuthorizationUtils.isPermissionRestrictedForRole(permissionId, _id);
  var handleChange = useMutableCallback(function () {
    function _callee() {
      var result;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoading(true);
                _context.next = 3;
                return _regeneratorRuntime.awrap(onChange(_id, granted));

              case 3:
                result = _context.sent;
                setGranted(result);
                setLoading(false);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }());
  var isDisabled = !!loading || !!isRestrictedForRole;
  return /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x2"
  }, /*#__PURE__*/React.createElement(CheckBox, {
    checked: granted,
    onChange: handleChange,
    disabled: isDisabled
  }), !loading && /*#__PURE__*/React.createElement(Box, {
    display: "inline",
    color: "hint",
    invisible: !lineHovered
  }, description || name), loading && /*#__PURE__*/React.createElement(Throbber, {
    size: "x12",
    display: "inline-block"
  })));
};

module.exportDefault( /*#__PURE__*/memo(RoleCell));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/fe2771c4e6045d8138f279672f15890c18ad65ef.map
