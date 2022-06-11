function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/visitorNavigation.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar(v) {
    ReactiveVar = v;
  }

}, 0);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 1);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 2);

let _;

module.link("underscore", {
  default(v) {
    _ = v;
  }

}, 3);
let ChatRoom;
module.link("../../../../../models", {
  ChatRoom(v) {
    ChatRoom = v;
  }

}, 4);
let t;
module.link("../../../../../utils", {
  t(v) {
    t = v;
  }

}, 5);
module.link("./visitorNavigation.html");
let APIClient;
module.link("../../../../../utils/client", {
  APIClient(v) {
    APIClient = v;
  }

}, 6);
const ITEMS_COUNT = 50;
Template.visitorNavigation.helpers({
  loadingNavigation() {
    return Template.instance().isLoading.get();
  },

  pages() {
    const room = ChatRoom.findOne({
      _id: this.rid
    }, {
      fields: {
        'v.token': 1
      }
    });

    if (room) {
      return Template.instance().pages.get();
    }
  },

  onTableScroll() {
    const instance = Template.instance();
    return function (currentTarget) {
      if (currentTarget.offsetHeight + currentTarget.scrollTop >= currentTarget.scrollHeight - 100) {
        return instance.limit.set(instance.limit.get() + 50);
      }
    };
  },

  pageTitle() {
    return this.navigation.page.title || t('Empty_title');
  },

  accessDateTime() {
    return moment(this.ts).format('L LTS');
  }

});
Template.visitorNavigation.events({
  'scroll .visitor-scroll': _.throttle(function (e, instance) {
    if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {
      const pages = instance.pages.get();

      if (instance.total.get() <= pages.length) {
        return;
      }

      return instance.offset.set(instance.offset.get() + ITEMS_COUNT);
    }
  }, 200)
});
Template.visitorNavigation.onCreated(async function () {
  const currentData = Template.currentData();
  this.isLoading = new ReactiveVar(true);
  this.pages = new ReactiveVar([]);
  this.offset = new ReactiveVar(0);
  this.ready = new ReactiveVar(true);
  this.total = new ReactiveVar(0);
  this.autorun(async () => {
    this.isLoading.set(true);
    const offset = this.offset.get();

    if (currentData && currentData.rid) {
      const {
        pages,
        total
      } = await APIClient.v1.get("livechat/visitors.pagesVisited/".concat(currentData.rid, "?count=").concat(ITEMS_COUNT, "&offset=").concat(offset));
      this.isLoading.set(false);
      this.total.set(total);
      this.pages.set(this.pages.get().concat(pages));
    }

    this.isLoading.set(false);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/cb5f6eab8adf9e01db8be9b137d963f9c30c3845.map
