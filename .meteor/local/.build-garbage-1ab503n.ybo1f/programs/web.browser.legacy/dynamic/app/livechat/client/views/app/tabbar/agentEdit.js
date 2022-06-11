function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/agentEdit.js                                                                   //
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
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 2);
var getCustomFormTemplate;
module.link("../customTemplates/register", {
  getCustomFormTemplate: function (v) {
    getCustomFormTemplate = v;
  }
}, 3);
module.link("./agentEdit.html");
var hasPermission;
module.link("../../../../../authorization", {
  hasPermission: function (v) {
    hasPermission = v;
  }
}, 4);
var t, APIClient;
module.link("../../../../../utils/client", {
  t: function (v) {
    t = v;
  },
  APIClient: function (v) {
    APIClient = v;
  }
}, 5);
var handleError;
module.link("../../../../../../client/lib/utils/handleError", {
  handleError: function (v) {
    handleError = v;
  }
}, 6);
var dispatchToastMessage;
module.link("../../../../../../client/lib/toast", {
  dispatchToastMessage: function (v) {
    dispatchToastMessage = v;
  }
}, 7);
Template.agentEdit.helpers({
  canEditDepartment: function () {
    return hasPermission('add-livechat-department-agents');
  },
  agent: function () {
    return Template.instance().agent.get();
  },
  availableDepartments: function () {
    return Template.instance().availableDepartments.get();
  },
  hasAvailableDepartments: function () {
    if (!hasPermission('add-livechat-department-agents')) {
      return;
    }

    var availableDepartments = _toConsumableArray(Template.instance().availableDepartments.get());

    return availableDepartments.length > 0;
  },
  agentDepartments: function () {
    var deptIds = Template.instance().agentDepartments.get();
    var departments = Template.instance().departments.get();
    return departments.filter(function (_ref) {
      var _id = _ref._id;
      return deptIds.includes(_id);
    });
  },
  hasAgentDepartments: function () {
    var agentDepartments = _toConsumableArray(Template.instance().agentDepartments.get());

    return agentDepartments.length > 0;
  },
  customFieldsTemplate: function () {
    return getCustomFormTemplate('livechatAgentEditForm');
  },
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
Template.agentEdit.events({
  'click .cancel': function (e) {
    e.stopPropagation();
    e.preventDefault();
    return this.back && this.back();
  },
  'submit #agent-form': function (e, instance) {
    var _this = this;

    e.preventDefault();

    var _id = $(e.currentTarget).data('id');

    var agentData = {};
    instance.$('.customFormField').each(function (i, el) {
      var elField = instance.$(el);
      var name = elField.attr('name');
      agentData[name] = elField.val();
    });
    var agentDepartments = instance.agentDepartments.get();
    Meteor.call('livechat:saveAgentInfo', _id, agentData, agentDepartments, function (error) {
      if (error) {
        return handleError(error);
      }

      dispatchToastMessage({
        type: 'success',
        message: t('Saved')
      });
      return _this.back && _this.back(_id);
    });
  },
  'click .remove-department': function (e, instance) {
    e.stopPropagation();
    e.preventDefault();

    if (!hasPermission('add-livechat-department-agents')) {
      return;
    }

    var id = e.currentTarget.dataset.id;
    var agentDepartments = instance.agentDepartments.get();
    instance.agentDepartments.set(agentDepartments.filter(function (el) {
      return el !== id;
    }));
  },
  'click #addDepartment': function (e, instance) {
    e.stopPropagation();
    e.preventDefault();

    if ($('#departmentSelect').find(':selected').is(':disabled')) {
      return;
    }

    var agentDepartments = _toConsumableArray(instance.agentDepartments.get());

    var deptVal = $('#departmentSelect').val();

    if (deptVal === '' || agentDepartments.indexOf(deptVal) > -1) {
      return;
    }

    agentDepartments.push(deptVal);
    instance.agentDepartments.set(agentDepartments);
    $('#departmentSelect').val('placeholder');
  }
});
Template.agentEdit.onCreated(function () {
  function _callee2() {
    var _this2 = this;

    var _await$APIClient$v1$g, departments;

    return _regeneratorRuntime.async(function () {
      function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.agent = new ReactiveVar();
              this.ready = new ReactiveVar(false);
              this.agentDepartments = new ReactiveVar([]);
              this.departments = new ReactiveVar([]);
              this.availableDepartments = new ReactiveVar([]);
              this.back = Template.currentData().back;
              _context2.next = 8;
              return _regeneratorRuntime.awrap(APIClient.v1.get('livechat/department?sort={"name": 1}'));

            case 8:
              _await$APIClient$v1$g = _context2.sent;
              departments = _await$APIClient$v1$g.departments;
              this.departments.set(departments);
              this.availableDepartments.set(departments.filter(function (_ref2) {
                var enabled = _ref2.enabled;
                return enabled;
              }));
              this.autorun(function () {
                function _callee() {
                  var _Template$currentData, agentId, _await$APIClient$v1$g2, user, _await$APIClient$v1$g3, departments;

                  return _regeneratorRuntime.async(function () {
                    function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _this2.ready.set(false);

                            _Template$currentData = Template.currentData(), agentId = _Template$currentData.agentId;

                            if (agentId) {
                              _context.next = 4;
                              break;
                            }

                            return _context.abrupt("return");

                          case 4:
                            _context.next = 6;
                            return _regeneratorRuntime.awrap(APIClient.v1.get("livechat/users/agent/" + agentId));

                          case 6:
                            _await$APIClient$v1$g2 = _context.sent;
                            user = _await$APIClient$v1$g2.user;
                            _context.next = 10;
                            return _regeneratorRuntime.awrap(APIClient.v1.get("livechat/agents/" + agentId + "/departments"));

                          case 10:
                            _await$APIClient$v1$g3 = _context.sent;
                            departments = _await$APIClient$v1$g3.departments;

                            _this2.agent.set(user);

                            _this2.agentDepartments.set((departments || []).map(function (department) {
                              return department.departmentId;
                            }));

                            _this2.ready.set(true);

                          case 15:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }

                    return _callee$;
                  }(), null, null, null, Promise);
                }

                return _callee;
              }());

            case 13:
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
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/a603f793260cb5714d75848998059e41d8fec370.map
