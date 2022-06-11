function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/visitorForward.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar(v) {
    ReactiveVar = v;
  }

}, 1);
let FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter(v) {
    FlowRouter = v;
  }

}, 2);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
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
module.link("./visitorForward.html");
let APIClient;
module.link("../../../../../utils/client", {
  APIClient(v) {
    APIClient = v;
  }

}, 6);
let dispatchToastMessage;
module.link("../../../../../../client/lib/toast", {
  dispatchToastMessage(v) {
    dispatchToastMessage = v;
  }

}, 7);
Template.visitorForward.helpers({
  visitor() {
    return Template.instance().visitor.get();
  },

  agentName() {
    return this.name || this.username;
  },

  onSelectAgents() {
    return Template.instance().onSelectAgents;
  },

  agentModifier() {
    return function (filter) {
      let text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      const f = filter.get();
      return "@".concat(f.length === 0 ? text : text.replace(new RegExp(filter.get()), part => "<strong>".concat(part, "</strong>")));
    };
  },

  agentConditions() {
    const room = Template.instance().room.get();
    const {
      servedBy: {
        _id: agentId
      } = {}
    } = room || {};

    const _id = agentId && {
      $ne: agentId
    };

    return {
      _id,
      status: {
        $ne: 'offline'
      },
      statusLivechat: 'available'
    };
  },

  selectedAgents() {
    return Template.instance().selectedAgents.get();
  },

  onClickTagAgent() {
    return Template.instance().onClickTagAgent;
  },

  departmentModifier() {
    return function (filter) {
      let text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      const f = filter.get();
      return "".concat(f.length === 0 ? text : text.replace(new RegExp(filter.get(), 'i'), part => "<strong>".concat(part, "</strong>")));
    };
  },

  onClickTagDepartment() {
    return Template.instance().onClickTagDepartment;
  },

  selectedDepartments() {
    return Template.instance().selectedDepartments.get();
  },

  onSelectDepartments() {
    return Template.instance().onSelectDepartments;
  },

  departmentConditions() {
    const departmentForwardRestrictions = Template.instance().departmentForwardRestrictions.get();
    return _objectSpread({
      enabled: true,
      numAgents: {
        $gt: 0
      }
    }, departmentForwardRestrictions);
  }

});
Template.visitorForward.onCreated(async function () {
  this.visitor = new ReactiveVar();
  this.room = new ReactiveVar();
  this.departments = new ReactiveVar([]);
  this.selectedAgents = new ReactiveVar([]);
  this.selectedDepartments = new ReactiveVar([]);
  this.departmentForwardRestrictions = new ReactiveVar({});

  this.onSelectDepartments = _ref => {
    let {
      item: department
    } = _ref;
    department.text = department.name;
    this.selectedDepartments.set([department]);
    this.selectedAgents.set([]);
  };

  this.onClickTagDepartment = () => {
    this.selectedDepartments.set([]);
  };

  this.onSelectAgents = _ref2 => {
    let {
      item: agent
    } = _ref2;
    this.selectedAgents.set([agent]);
    this.selectedDepartments.set([]);
  };

  this.onClickTagAgent = _ref3 => {
    let {
      username
    } = _ref3;
    this.selectedAgents.set(this.selectedAgents.get().filter(user => user.username !== username));
  };

  this.autorun(() => {
    this.visitor.set(Meteor.users.findOne({
      _id: Template.currentData().visitorId
    }));
  });
  this.autorun(() => {
    this.room.set(ChatRoom.findOne({
      _id: Template.currentData().roomId
    }));
    const {
      departmentId
    } = this.room.get();

    if (departmentId) {
      Meteor.call('livechat:getDepartmentForwardRestrictions', departmentId, (err, result) => {
        this.departmentForwardRestrictions.set(result);
      });
    }
  });
  const {
    departments
  } = await APIClient.v1.get('livechat/department');
  this.departments.set(departments);
});
Template.visitorForward.events({
  'submit form'(event, instance) {
    event.preventDefault();
    const transferData = {
      roomId: instance.room.get()._id,
      comment: event.target.comment.value,
      clientAction: true
    };
    const [user] = instance.selectedAgents.get();

    if (user) {
      transferData.userId = user._id;
    } else if (instance.selectedDepartments.get()) {
      const [department] = instance.selectedDepartments.get();
      transferData.departmentId = department && department._id;
    }

    if (!transferData.userId && !transferData.departmentId) {
      return;
    }

    Meteor.call('livechat:transfer', transferData, (error, result) => {
      if (error) {
        dispatchToastMessage({
          type: 'error',
          message: t(error.error)
        });
      } else if (result) {
        this.save();
        dispatchToastMessage({
          type: 'success',
          message: t('Transferred')
        });
        FlowRouter.go('/');
      } else {
        dispatchToastMessage({
          type: 'warning',
          message: t('No_available_agents_to_transfer')
        });
      }
    });
  },

  'click .cancel'(event) {
    event.preventDefault();
    this.cancel();
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/baab6d5503bf3546d5a5b9fa8c8e2d0f6f294c05.map
