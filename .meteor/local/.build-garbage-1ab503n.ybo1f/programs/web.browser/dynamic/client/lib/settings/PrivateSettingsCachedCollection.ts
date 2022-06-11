function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/settings/PrivateSettingsCachedCollection.ts                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["_id"];

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
module.export({
  PrivateSettingsCachedCollection: () => PrivateSettingsCachedCollection
});
let Notifications;
module.link("../../../app/notifications/client", {
  Notifications(v) {
    Notifications = v;
  }

}, 0);
let CachedCollection;
module.link("../../../app/ui-cached-collection/client", {
  CachedCollection(v) {
    CachedCollection = v;
  }

}, 1);

class PrivateSettingsCachedCollection extends CachedCollection {
  constructor() {
    super({
      name: 'private-settings',
      eventType: 'onLogged'
    });
  }

  async setupListener() {
    Notifications.onLogged(this.eventName, async (t, _ref) => {
      let {
        _id
      } = _ref,
          record = _objectWithoutProperties(_ref, _excluded);

      this.log('record received', t, _objectSpread({
        _id
      }, record));
      this.collection.upsert({
        _id
      }, record);
      this.sync();
    });
  }

  static get() {
    if (!PrivateSettingsCachedCollection.instance) {
      PrivateSettingsCachedCollection.instance = new PrivateSettingsCachedCollection();
    }

    return PrivateSettingsCachedCollection.instance;
  }

}

PrivateSettingsCachedCollection.instance = void 0;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/settings/32a245f9a37ede72f831c7e9f65ecc24b31f0ca0.map
