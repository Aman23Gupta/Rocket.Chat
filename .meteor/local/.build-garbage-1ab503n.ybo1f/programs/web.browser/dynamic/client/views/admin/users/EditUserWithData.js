function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/EditUserWithData.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["uid"];

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
let Box, Callout;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Callout(v) {
    Callout = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let FormSkeleton;
module.link("../../../components/Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 4);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 5);
let EditUser;
module.link("./EditUser", {
  default(v) {
    EditUser = v;
  }

}, 6);

function EditUserWithData(_ref) {
  let {
    uid
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const {
    value: roleData,
    phase: roleState,
    error: roleError
  } = useEndpointData('roles.list', '');
  const {
    value: data,
    phase: state,
    error
  } = useEndpointData('users.info', useMemo(() => ({
    userId: uid
  }), [uid]));

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
//# sourceMappingURL=/dynamic/client/views/admin/users/542ae12328b4eb6fe827450090d0aa0366fdf9b8.map
