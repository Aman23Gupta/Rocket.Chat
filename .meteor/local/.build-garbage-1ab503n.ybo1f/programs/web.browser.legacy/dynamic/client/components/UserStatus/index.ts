function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatus/index.ts                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  USER_STATUS_TEXT_MAX_LENGTH: function () {
    return USER_STATUS_TEXT_MAX_LENGTH;
  },
  colors: function () {
    return colors;
  }
});
module.link("./UserStatus", {
  "default": "UserStatus"
}, 0);
module.link("./Busy", {
  "default": "Busy"
}, 1);
module.link("./Away", {
  "default": "Away"
}, 2);
module.link("./Online", {
  "default": "Online"
}, 3);
module.link("./Offline", {
  "default": "Offline"
}, 4);
module.link("./Loading", {
  "default": "Loading"
}, 5);
module.link("./ReactiveUserStatus", {
  "default": "ReactiveUserStatus"
}, 6);
var USER_STATUS_TEXT_MAX_LENGTH = 120;
var colors = {
  busy: 'danger-500',
  away: 'warning-600',
  online: 'success-500',
  offline: 'neutral-600'
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserStatus/6417a79e3bce444716ead0589159ac3560dab694.map
