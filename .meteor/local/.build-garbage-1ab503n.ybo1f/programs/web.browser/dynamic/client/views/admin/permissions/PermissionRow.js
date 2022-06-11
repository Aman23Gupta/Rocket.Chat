function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/PermissionRow.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["permission", "t", "roleList", "onGrant", "onRemove"];

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
let Table;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  memo(v) {
    memo = v;
  }

}, 2);
let CONSTANTS;
module.link("../../../../app/authorization/lib", {
  CONSTANTS(v) {
    CONSTANTS = v;
  }

}, 3);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 4);
let RoleCell;
module.link("./RoleCell", {
  default(v) {
    RoleCell = v;
  }

}, 5);

const useChangeRole = _ref => {
  let {
    onGrant,
    onRemove,
    permissionId
  } = _ref;
  const dispatchToastMessage = useToastMessageDispatch();
  return useMutableCallback(async (roleId, granted) => {
    try {
      if (granted) {
        await onRemove(permissionId, roleId);
      } else {
        await onGrant(permissionId, roleId);
      }

      return !granted;
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }

    return granted;
  });
};

const getName = (t, permission) => {
  if (permission.level === CONSTANTS.SETTINGS_LEVEL) {
    let path = '';

    if (permission.group) {
      path = "".concat(t(permission.group), " > ");
    }

    if (permission.section) {
      path = "".concat(path).concat(t(permission.section), " > ");
    }

    return "".concat(path).concat(t(permission.settingId));
  }

  return t(permission._id);
};

const PermissionRow = _ref2 => {
  let {
    permission,
    t,
    roleList,
    onGrant,
    onRemove
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded);

  const {
    _id,
    roles
  } = permission;
  const [hovered, setHovered] = useState(false);
  const onMouseEnter = useMutableCallback(() => setHovered(true));
  const onMouseLeave = useMutableCallback(() => setHovered(false));
  const changeRole = useChangeRole({
    onGrant,
    onRemove,
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
    title: t("".concat(_id, "_description"))
  }, getName(t, permission)), roleList.map(_ref3 => {
    let {
      _id,
      name,
      description
    } = _ref3;
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
//# sourceMappingURL=/dynamic/client/views/admin/permissions/9463283d52daaf932e37b6bbd7575aa97cf633b0.map
