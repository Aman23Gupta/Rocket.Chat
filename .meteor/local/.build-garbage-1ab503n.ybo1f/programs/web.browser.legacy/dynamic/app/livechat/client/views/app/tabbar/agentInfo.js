function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/agentInfo.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 1);
var Session;
module.link("meteor/session", {
  Session: function (v) {
    Session = v;
  }
}, 2);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 3);
var TAPi18n;
module.link("meteor/rocketchat:tap-i18n", {
  TAPi18n: function (v) {
    TAPi18n = v;
  }
}, 4);

var _;

module.link("underscore", {
  "default": function (v) {
    _ = v;
  }
}, 5);
var s;
module.link("underscore.string", {
  "default": function (v) {
    s = v;
  }
}, 6);
var getCustomFormTemplate;
module.link("../customTemplates/register", {
  getCustomFormTemplate: function (v) {
    getCustomFormTemplate = v;
  }
}, 7);
module.link("./agentInfo.html");
var modal;
module.link("../../../../../ui-utils", {
  modal: function (v) {
    modal = v;
  }
}, 8);
var t, APIClient;
module.link("../../../../../utils/client", {
  t: function (v) {
    t = v;
  },
  APIClient: function (v) {
    APIClient = v;
  }
}, 9);
var hasPermission;
module.link("../../../../../authorization", {
  hasPermission: function (v) {
    hasPermission = v;
  }
}, 10);
var handleError;
module.link("../../../../../../client/lib/utils/handleError", {
  handleError: function (v) {
    handleError = v;
  }
}, 11);

var customFieldsTemplate = function () {
  return getCustomFormTemplate('livechatAgentInfoForm');
};

Template.agentInfo.helpers({
  canEdit: function () {
    var availableDepartments = _toConsumableArray(Template.instance().availableDepartments.get());

    var hasCustomFields = customFieldsTemplate() !== null;
    return availableDepartments.length > 0 && hasPermission('add-livechat-department-agents') || hasCustomFields;
  },
  uid: function () {
    return Template.instance().agent.get()._id;
  },
  name: function () {
    var agent = Template.instance().agent.get();
    return agent && agent.name ? agent.name : TAPi18n.__('Unnamed');
  },
  username: function () {
    var agent = Template.instance().agent.get();
    return agent && agent.username;
  },
  agentStatus: function () {
    var agent = Template.instance().agent.get();
    var userStatus = Session.get("user_" + agent.username + "_status");
    return userStatus || TAPi18n.__('offline');
  },
  agentStatusText: function () {
    var agent = Template.instance().agent.get();

    if (agent && s.trim(agent.statusText)) {
      return agent.statusText;
    }

    var agentStatus = Session.get("user_" + agent.username + "_status");
    return agentStatus || TAPi18n.__('offline');
  },
  email: function () {
    var agent = Template.instance().agent.get();
    return agent && agent.emails && agent.emails[0] && agent.emails[0].address;
  },
  agent: function () {
    return Template.instance().agent.get();
  },
  hasEmails: function () {
    var agent = Template.instance().agent.get();
    return agent && _.isArray(agent.emails);
  },
  editingAgent: function () {
    return Template.instance().action.get() === 'edit';
  },
  agentToEdit: function () {
    var instance = Template.instance();
    var agent = instance.agent.get();
    return {
      agentId: agent && agent._id,
      back: function (agentId) {
        instance.action.set();
        instance.agentEdited.set(agentId);
      }
    };
  },
  agentDepartments: function () {
    var deptIds = Template.instance().agentDepartments.get();
    var departments = Template.instance().departments.get();
    return departments.filter(function (_ref) {
      var _id = _ref._id;
      return deptIds.includes(_id);
    });
  },
  customFieldsTemplate: customFieldsTemplate,
  agentDataContext: function () {
    // To make the dynamic template reactive we need to pass a ReactiveVar through the data property
    // because only the dynamic template data will be reloaded
    return Template.instance().agent;
  },
  isReady: function () {
    var instance = Template.instance();
    return instance.ready && instance.ready.get();
  }
});
Template.agentInfo.events({
  'click .delete-agent': function (e, instance) {
    var _this = this;

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
    }, function () {
      Meteor.call('livechat:removeAgent', _this.username, function (error) {
        if (error) {
          return handleError(error);
        }

        var tabBar = instance.tabBar,
            onRemoveAgent = instance.onRemoveAgent;
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
  'click .edit-agent': function (e, instance) {
    e.preventDefault();
    instance.action.set('edit');
  }
});
Template.agentInfo.onCreated(function () {
  function _callee2() {
    var _this2 = this;

    var _await$APIClient$v1$g, departments, loadAgentData;

    return _regeneratorRuntime.async(function () {
      function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.agent = new ReactiveVar();
              this.ready = new ReactiveVar(false);
              this.agentEdited = new ReactiveVar();
              this.departments = new ReactiveVar([]);
              this.availableDepartments = new ReactiveVar([]);
              this.agentDepartments = new ReactiveVar([]);
              this.action = new ReactiveVar();
              this.tabBar = Template.currentData().tabBar;
              this.onRemoveAgent = Template.currentData().onRemoveAgent;
              _context2.next = 11;
              return _regeneratorRuntime.awrap(APIClient.v1.get('livechat/department?sort={"name": 1}'));

            case 11:
              _await$APIClient$v1$g = _context2.sent;
              departments = _await$APIClient$v1$g.departments;
              this.departments.set(departments);
              this.availableDepartments.set(departments.filter(function (_ref2) {
                var enabled = _ref2.enabled;
                return enabled;
              }));

              loadAgentData = function () {
                function _callee(agentId) {
                  var _await$APIClient$v1$g2, user, _await$APIClient$v1$g3, departments;

                  return _regeneratorRuntime.async(function () {
                    function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _this2.ready.set(false);

                            _context.next = 3;
                            return _regeneratorRuntime.awrap(APIClient.v1.get("livechat/users/agent/" + agentId));

                          case 3:
                            _await$APIClient$v1$g2 = _context.sent;
                            user = _await$APIClient$v1$g2.user;
                            _context.next = 7;
                            return _regeneratorRuntime.awrap(APIClient.v1.get("livechat/agents/" + agentId + "/departments"));

                          case 7:
                            _await$APIClient$v1$g3 = _context.sent;
                            departments = _await$APIClient$v1$g3.departments;

                            _this2.agent.set(user);

                            _this2.agentDepartments.set((departments || []).map(function (department) {
                              return department.departmentId;
                            }));

                            _this2.ready.set(true);

                          case 12:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }

                    return _callee$;
                  }(), null, null, null, Promise);
                }

                return _callee;
              }();

              this.autorun(function () {
                var _Template$currentData = Template.currentData(),
                    agentId = _Template$currentData.agentId;

                if (agentId) {
                  loadAgentData(agentId);
                }
              });
              this.autorun(function () {
                var agentEdited = _this2.agentEdited.get();

                if (agentEdited) {
                  loadAgentData(agentEdited);

                  _this2.agentEdited.set();
                }
              });

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }

      return _callee2$;
    }(), null, this, null, Promise);
  }

  return _callee2;
}());
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/355916a2681a0aa014741e3b4c39d79dae807604.map
