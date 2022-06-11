function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/PermissionRow.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["permission", "t", "roleList", "onGrant", "onRemove"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 3);
var Table;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
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
var CONSTANTS;
module.link("../../../../app/authorization/lib", {
  CONSTANTS: function (v) {
    CONSTANTS = v;
  }
}, 3);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 4);
var RoleCell;
module.link("./RoleCell", {
  "default": function (v) {
    RoleCell = v;
  }
}, 5);

var useChangeRole = function (_ref) {
  var onGrant = _ref.onGrant,
      onRemove = _ref.onRemove,
      permissionId = _ref.permissionId;
  var dispatchToastMessage = useToastMessageDispatch();
  return useMutableCallback(function () {
    function _callee(roleId, granted) {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!granted) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return _regeneratorRuntime.awrap(onRemove(permissionId, roleId));

              case 4:
                _context.next = 8;
                break;

              case 6:
                _context.next = 8;
                return _regeneratorRuntime.awrap(onGrant(permissionId, roleId));

              case 8:
                return _context.abrupt("return", !granted);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 14:
                return _context.abrupt("return", granted);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 11]], Promise);
    }

    return _callee;
  }());
};

var getName = function (t, permission) {
  if (permission.level === CONSTANTS.SETTINGS_LEVEL) {
    var path = '';

    if (permission.group) {
      path = t(permission.group) + " > ";
    }

    if (permission.section) {
      path = "" + path + t(permission.section) + " > ";
    }

    return "" + path + t(permission.settingId);
  }

  return t(permission._id);
};

var PermissionRow = function (_ref2) {
  var permission = _ref2.permission,
      t = _ref2.t,
      roleList = _ref2.roleList,
      onGrant = _ref2.onGrant,
      onRemove = _ref2.onRemove,
      props = _objectWithoutProperties(_ref2, _excluded);

  var _id = permission._id,
      roles = permission.roles;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hovered = _useState2[0],
      setHovered = _useState2[1];

  var onMouseEnter = useMutableCallback(function () {
    return setHovered(true);
  });
  var onMouseLeave = useMutableCallback(function () {
    return setHovered(false);
  });
  var changeRole = useChangeRole({
    onGrant: onGrant,
    onRemove: onRemove,
    permissionId: _id
  });
  return /*#__PURE__*/React.createElement(Table.Row, _extends({
    key: _id,
    role: "link",
    action: true,
    tabIndex: 0,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, props), /*#__PURE__*/React.createElement(Table.Cell, {
    maxWidth: "x300",
    withTruncatedText: true,
    title: t(_id + "_description")
  }, getName(t, permission)), roleList.map(function (_ref3) {
    var _id = _ref3._id,
        name = _ref3.name,
        description = _ref3.description;
    return /*#__PURE__*/React.createElement(RoleCell, {
      key: _id,
      _id: _id,
      name: name,
      description: description,
      grantedRoles: roles,
      onChange: changeRole,
      lineHovered: hovered,
      permissionId: _id
    });
  }));
};

module.exportDefault( /*#__PURE__*/memo(PermissionRow));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/c2ca20983a2efbe4322cac4819b6f5d0bae8517d.map
