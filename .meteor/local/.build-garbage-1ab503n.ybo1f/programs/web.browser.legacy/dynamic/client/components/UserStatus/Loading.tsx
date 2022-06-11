function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatus/Loading.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var UserStatus;
module.link("./UserStatus", {
  "default": function (v) {
    UserStatus = v;
  }
}, 1);

var Loading = function (props) {
  return /*#__PURE__*/React.createElement(UserStatus, props);
};

module.exportDefault(Loading);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserStatus/401c392a5e71b58858b68215392a847f587626cd.map
