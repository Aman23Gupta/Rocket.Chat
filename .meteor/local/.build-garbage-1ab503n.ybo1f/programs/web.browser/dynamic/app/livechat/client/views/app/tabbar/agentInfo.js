function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/agentInfo.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
let Session;
module.link("meteor/session", {
  Session(v) {
    Session = v;
  }

}, 2);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 3);
let TAPi18n;
module.link("meteor/rocketchat:tap-i18n", {
  TAPi18n(v) {
    TAPi18n = v;
  }

}, 4);

let _;

module.link("underscore", {
  default(v) {
    _ = v;
  }

}, 5);
let s;
module.link("underscore.string", {
  default(v) {
    s = v;
  }

}, 6);
let getCustomFormTemplate;
module.link("../customTemplates/register", {
  getCustomFormTemplate(v) {
    getCustomFormTemplate = v;
  }

}, 7);
module.link("./agentInfo.html");
let modal;
module.link("../../../../../ui-utils", {
  modal(v) {
    modal = v;
  }

}, 8);
let t, APIClient;
module.link("../../../../../utils/client", {
  t(v) {
    t = v;
  },

  APIClient(v) {
    APIClient = v;
  }

}, 9);
let hasPermission;
module.link("../../../../../authorization", {
  hasPermission(v) {
    hasPermission = v;
  }

}, 10);
let handleError;
module.link("../../../../../../client/lib/utils/handleError", {
  handleError(v) {
    handleError = v;
  }

}, 11);

const customFieldsTemplate = () => getCustomFormTemplate('livechatAgentInfoForm');

Template.agentInfo.helpers({
  canEdit() {
    const availableDepartments = [...Template.instance().availableDepartments.get()];
    const hasCustomFields = customFieldsTemplate() !== null;
    return availableDepartments.length > 0 && hasPermission('add-livechat-department-agents') || hasCustomFields;
  },

  uid() {
    return Template.instance().agent.get()._id;
  },

  name() {
    const agent = Template.instance().agent.get();
    return agent && agent.name ? agent.name : TAPi18n.__('Unnamed');
  },

  username() {
    const agent = Template.instance().agent.get();
    return agent && agent.username;
  },

  agentStatus() {
    const agent = Template.instance().agent.get();
    const userStatus = Session.get("user_".concat(agent.username, "_status"));
    return userStatus || TAPi18n.__('offline');
  },

  agentStatusText() {
    const agent = Template.instance().agent.get();

    if (agent && s.trim(agent.statusText)) {
      return agent.statusText;
    }

    const agentStatus = Session.get("user_".concat(agent.username, "_status"));
    return agentStatus || TAPi18n.__('offline');
  },

  email() {
    const agent = Template.instance().agent.get();
    return agent && agent.emails && agent.emails[0] && agent.emails[0].address;
  },

  agent() {
    return Template.instance().agent.get();
  },

  hasEmails() {
    const agent = Template.instance().agent.get();
    return agent && _.isArray(agent.emails);
  },

  editingAgent() {
    return Template.instance().action.get() === 'edit';
  },

  agentToEdit() {
    const instance = Template.instance();
    const agent = instance.agent.get();
    return {
      agentId: agent && agent._id,

      back(agentId) {
        instance.action.set();
        instance.agentEdited.set(agentId);
      }

    };
  },

  agentDepartments() {
    const deptIds = Template.instance().agentDepartments.get();
    const departments = Template.instance().departments.get();
    return departments.filter(_ref => {
      let {
        _id
      } = _ref;
      return deptIds.includes(_id);
    });
  },

  customFieldsTemplate,

  agentDataContext() {
    // To make the dynamic template reactive we need to pass a ReactiveVar through the data property
    // because only the dynamic template data will be reloaded
    return Template.instance().agent;
  },

  isReady() {
    const instance = Template.instance();
    return instance.ready && instance.ready.get();
  }

});
Template.agentInfo.events({
  'click .delete-agent'(e, instance) {
    e.preventDefault();
    modal.open({
      title: t('Are_you_sure'),
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: t('Yes'),
      cancelButtonText: t('Cancel'),
      closeOnConfirm: false,
      html: false
    }, () => {
      Meteor.call('livechat:removeAgent', this.username, error => {
        if (error) {
          return handleError(error);
        }

        const {
          tabBar,
          onRemoveAgent
        } = instance;
        tabBar.close();
        onRemoveAgent && onRemoveAgent();
        modal.open({
          title: t('Removed'),
          text: t('Agent_removed'),
          type: 'success',
          timer: 1000,
          showConfirmButton: false
        });
      });
    });
  },

  'click .edit-agent'(e, instance) {
    e.preventDefault();
    instance.action.set('edit');
  }

});
Template.agentInfo.onCreated(async function () {
  this.agent = new ReactiveVar();
  this.ready = new ReactiveVar(false);
  this.agentEdited = new ReactiveVar();
  this.departments = new ReactiveVar([]);
  this.availableDepartments = new ReactiveVar([]);
  this.agentDepartments = new ReactiveVar([]);
  this.action = new ReactiveVar();
  this.tabBar = Template.currentData().tabBar;
  this.onRemoveAgent = Template.currentData().onRemoveAgent;
  const {
    departments
  } = await APIClient.v1.get('livechat/department?sort={"name": 1}');
  this.departments.set(departments);
  this.availableDepartments.set(departments.filter(_ref2 => {
    let {
      enabled
    } = _ref2;
    return enabled;
  }));

  const loadAgentData = async agentId => {
    this.ready.set(false);
    const {
      user
    } = await APIClient.v1.get("livechat/users/agent/".concat(agentId));
    const {
      departments
    } = await APIClient.v1.get("livechat/agents/".concat(agentId, "/departments"));
    this.agent.set(user);
    this.agentDepartments.set((departments || []).map(department => department.departmentId));
    this.ready.set(true);
  };

  this.autorun(() => {
    const {
      agentId
    } = Template.currentData();

    if (agentId) {
      loadAgentData(agentId);
    }
  });
  this.autorun(() => {
    const agentEdited = this.agentEdited.get();

    if (agentEdited) {
      loadAgentData(agentEdited);
      this.agentEdited.set();
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/b4421fd592d8d66f0ede3694f4f666fa32e02a34.map
