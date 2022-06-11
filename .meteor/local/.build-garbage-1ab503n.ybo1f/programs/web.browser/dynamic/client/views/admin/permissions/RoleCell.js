function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/RoleCell.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Table, Margins, Box, CheckBox, Throbber;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  },

  Margins(v) {
    Margins = v;
  },

  Box(v) {
    Box = v;
  },

  CheckBox(v) {
    CheckBox = v;
  },

  Throbber(v) {
    Throbber = v;
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
let AuthorizationUtils;
module.link("../../../../app/authorization/lib", {
  AuthorizationUtils(v) {
    AuthorizationUtils = v;
  }

}, 3);

const RoleCell = _ref => {
  let {
    grantedRoles = [],
    _id,
    name,
    description,
    onChange,
    lineHovered,
    permissionId
  } = _ref;
  const [granted, setGranted] = useState(() => !!grantedRoles.includes(_id));
  const [loading, setLoading] = useState(false);
  const isRestrictedForRole = AuthorizationUtils.isPermissionRestrictedForRole(permissionId, _id);
  const handleChange = useMutableCallback(async () => {
    setLoading(true);
    const result = await onChange(_id, granted);
    setGranted(result);
    setLoading(false);
  });
  const isDisabled = !!loading || !!isRestrictedForRole;
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
//# sourceMappingURL=/dynamic/client/views/admin/permissions/d85d30db2905f7160cfc67d6cc14d9a5ee08bc87.map
