function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/EditUserWithData.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["uid"];

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
var Box, Callout;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var FormSkeleton;
module.link("../../../components/Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 4);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 5);
var EditUser;
module.link("./EditUser", {
  "default": function (v) {
    EditUser = v;
  }
}, 6);

function EditUserWithData(_ref) {
  var uid = _ref.uid,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var _useEndpointData = useEndpointData('roles.list', ''),
      roleData = _useEndpointData.value,
      roleState = _useEndpointData.phase,
      roleError = _useEndpointData.error;

  var _useEndpointData2 = useEndpointData('users.info', useMemo(function () {
    return {
      userId: uid
    };
  }, [uid])),
      data = _useEndpointData2.value,
      state = _useEndpointData2.phase,
      error = _useEndpointData2.error;

  if ([state, roleState].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(Box, {
      p: "x24"
    }, /*#__PURE__*/React.createElement(FormSkeleton, null));
  }

  if (error || roleError) {
    return /*#__PURE__*/React.createElement(Callout, {
      m: "x16",
      type: "danger"
    }, t('User_not_found'));
  }

  return /*#__PURE__*/React.createElement(EditUser, _extends({
    data: data.user,
    roles: roleData.roles
  }, props));
}

module.exportDefault(EditUserWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/3b456b199e47c9a5e4b326d83ded2ec750953985.map
