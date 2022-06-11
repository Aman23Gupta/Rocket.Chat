function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/agentEdit.js                                                                   //
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
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 2);
let getCustomFormTemplate;
module.link("../customTemplates/register", {
  getCustomFormTemplate(v) {
    getCustomFormTemplate = v;
  }

}, 3);
module.link("./agentEdit.html");
let hasPermission;
module.link("../../../../../authorization", {
  hasPermission(v) {
    hasPermission = v;
  }

}, 4);
let t, APIClient;
module.link("../../../../../utils/client", {
  t(v) {
    t = v;
  },

  APIClient(v) {
    APIClient = v;
  }

}, 5);
let handleError;
module.link("../../../../../../client/lib/utils/handleError", {
  handleError(v) {
    handleError = v;
  }

}, 6);
let dispatchToastMessage;
module.link("../../../../../../client/lib/toast", {
  dispatchToastMessage(v) {
    dispatchToastMessage = v;
  }

}, 7);
Template.agentEdit.helpers({
  canEditDepartment() {
    return hasPermission('add-livechat-department-agents');
  },

  agent() {
    return Template.instance().agent.get();
  },

  availableDepartments() {
    return Template.instance().availableDepartments.get();
  },

  hasAvailableDepartments() {
    if (!hasPermission('add-livechat-department-agents')) {
      return;
    }

    const availableDepartments = [...Template.instance().availableDepartments.get()];
    return availableDepartments.length > 0;
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

  hasAgentDepartments() {
    const agentDepartments = [...Template.instance().agentDepartments.get()];
    return agentDepartments.length > 0;
  },

  customFieldsTemplate() {
    return getCustomFormTemplate('livechatAgentEditForm');
  },

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
Template.agentEdit.events({
  'click .cancel'(e) {
    e.stopPropagation();
    e.preventDefault();
    return this.back && this.back();
  },

  'submit #agent-form'(e, instance) {
    e.preventDefault();

    const _id = $(e.currentTarget).data('id');

    const agentData = {};
    instance.$('.customFormField').each((i, el) => {
      const elField = instance.$(el);
      const name = elField.attr('name');
      agentData[name] = elField.val();
    });
    const agentDepartments = instance.agentDepartments.get();
    Meteor.call('livechat:saveAgentInfo', _id, agentData, agentDepartments, error => {
      if (error) {
        return handleError(error);
      }

      dispatchToastMessage({
        type: 'success',
        message: t('Saved')
      });
      return this.back && this.back(_id);
    });
  },

  'click .remove-department'(e, instance) {
    e.stopPropagation();
    e.preventDefault();

    if (!hasPermission('add-livechat-department-agents')) {
      return;
    }

    const {
      currentTarget: {
        dataset: {
          id
        }
      }
    } = e;
    const agentDepartments = instance.agentDepartments.get();
    instance.agentDepartments.set(agentDepartments.filter(el => el !== id));
  },

  'click #addDepartment'(e, instance) {
    e.stopPropagation();
    e.preventDefault();

    if ($('#departmentSelect').find(':selected').is(':disabled')) {
      return;
    }

    const agentDepartments = [...instance.agentDepartments.get()];
    const deptVal = $('#departmentSelect').val();

    if (deptVal === '' || agentDepartments.indexOf(deptVal) > -1) {
      return;
    }

    agentDepartments.push(deptVal);
    instance.agentDepartments.set(agentDepartments);
    $('#departmentSelect').val('placeholder');
  }

});
Template.agentEdit.onCreated(async function () {
  this.agent = new ReactiveVar();
  this.ready = new ReactiveVar(false);
  this.agentDepartments = new ReactiveVar([]);
  this.departments = new ReactiveVar([]);
  this.availableDepartments = new ReactiveVar([]);
  this.back = Template.currentData().back;
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
  this.autorun(async () => {
    this.ready.set(false);
    const {
      agentId
    } = Template.currentData();

    if (!agentId) {
      return;
    }

    const {
      user
    } = await APIClient.v1.get("livechat/users/agent/".concat(agentId));
    const {
      departments
    } = await APIClient.v1.get("livechat/agents/".concat(agentId, "/departments"));
    this.agent.set(user);
    this.agentDepartments.set((departments || []).map(department => department.departmentId));
    this.ready.set(true);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/00bf930243728dfec416917fb024c7734bc066bd.map
