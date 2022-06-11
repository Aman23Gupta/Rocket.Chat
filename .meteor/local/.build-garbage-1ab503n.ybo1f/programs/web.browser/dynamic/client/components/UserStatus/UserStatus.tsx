function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatus/UserStatus.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["small", "status", "statusText"];

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
let StatusBullet;
module.link("@rocket.chat/fuselage", {
  StatusBullet(v) {
    StatusBullet = v;
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
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const UserStatus = _ref => {
  let {
    small,
    status,
    statusText
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const size = small ? 'small' : 'large';
  const t = useTranslation();

  switch (status) {
    case 'online':
      return /*#__PURE__*/React.createElement(StatusBullet, _extends({
        size: size,
        status: status,
        title: statusText || t('Online')
      }, props));

    case 'busy':
      return /*#__PURE__*/React.createElement(StatusBullet, _extends({
        size: size,
        status: status,
        title: statusText || t('Busy')
      }, props));

    case 'away':
      return /*#__PURE__*/React.createElement(StatusBullet, _extends({
        size: size,
        status: status,
        title: statusText || t('Away')
      }, props));

    case 'offline':
      return /*#__PURE__*/React.createElement(StatusBullet, _extends({
        size: size,
        status: status,
        title: statusText || t('Offline')
      }, props));

    default:
      return /*#__PURE__*/React.createElement(StatusBullet, _extends({
        size: size,
        title: t('Loading')
      }, props));
  }
};

module.exportDefault( /*#__PURE__*/memo(UserStatus));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserStatus/df4cf51f45affd5a157bc19e857d987b19c587b8.map
