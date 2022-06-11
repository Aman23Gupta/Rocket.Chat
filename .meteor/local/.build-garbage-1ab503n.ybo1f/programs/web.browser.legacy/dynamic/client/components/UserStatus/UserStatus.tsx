function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatus/UserStatus.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["small", "status", "statusText"];

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
var StatusBullet;
module.link("@rocket.chat/fuselage", {
  StatusBullet: function (v) {
    StatusBullet = v;
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
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var UserStatus = function (_ref) {
  var small = _ref.small,
      status = _ref.status,
      statusText = _ref.statusText,
      props = _objectWithoutProperties(_ref, _excluded);

  var size = small ? 'small' : 'large';
  var t = useTranslation();

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
//# sourceMappingURL=/dynamic/client/components/UserStatus/577e5cfd6b47594349740423f4106d577b55f80c.map
