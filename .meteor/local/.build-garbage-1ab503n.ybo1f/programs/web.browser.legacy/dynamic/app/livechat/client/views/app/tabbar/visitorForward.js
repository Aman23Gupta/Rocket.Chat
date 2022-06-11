function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/visitorForward.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);
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
var FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter: function (v) {
    FlowRouter = v;
  }
}, 2);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 3);
var ChatRoom;
module.link("../../../../../models", {
  ChatRoom: function (v) {
    ChatRoom = v;
  }
}, 4);
var t;
module.link("../../../../../utils", {
  t: function (v) {
    t = v;
  }
}, 5);
module.link("./visitorForward.html");
var APIClient;
module.link("../../../../../utils/client", {
  APIClient: function (v) {
    APIClient = v;
  }
}, 6);
var dispatchToastMessage;
module.link("../../../../../../client/lib/toast", {
  dispatchToastMessage: function (v) {
    dispatchToastMessage = v;
  }
}, 7);
Template.visitorForward.helpers({
  visitor: function () {
    return Template.instance().visitor.get();
  },
  agentName: function () {
    return this.name || this.username;
  },
  onSelectAgents: function () {
    return Template.instance().onSelectAgents;
  },
  agentModifier: function () {
    return function (filter) {
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var f = filter.get();
      return "@" + (f.length === 0 ? text : text.replace(new RegExp(filter.get()), function (part) {
        return "<strong>" + part + "</strong>";
      }));
    };
  },
  agentConditions: function () {
    var room = Template.instance().room.get();

    var _ref = room || {},
        _ref$servedBy = _ref.servedBy;

    _ref$servedBy = _ref$servedBy === void 0 ? {} : _ref$servedBy;
    var agentId = _ref$servedBy._id;

    var _id = agentId && {
      $ne: agentId
    };

    return {
      _id: _id,
      status: {
        $ne: 'offline'
      },
      statusLivechat: 'available'
    };
  },
  selectedAgents: function () {
    return Template.instance().selectedAgents.get();
  },
  onClickTagAgent: function () {
    return Template.instance().onClickTagAgent;
  },
  departmentModifier: function () {
    return function (filter) {
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var f = filter.get();
      return "" + (f.length === 0 ? text : text.replace(new RegExp(filter.get(), 'i'), function (part) {
        return "<strong>" + part + "</strong>";
      }));
    };
  },
  onClickTagDepartment: function () {
    return Template.instance().onClickTagDepartment;
  },
  selectedDepartments: function () {
    return Template.instance().selectedDepartments.get();
  },
  onSelectDepartments: function () {
    return Template.instance().onSelectDepartments;
  },
  departmentConditions: function () {
    var departmentForwardRestrictions = Template.instance().departmentForwardRestrictions.get();
    return _objectSpread({
      enabled: true,
      numAgents: {
        $gt: 0
      }
    }, departmentForwardRestrictions);
  }
});
Template.visitorForward.onCreated(function () {
  function _callee() {
    var _this = this;

    var _await$APIClient$v1$g, departments;

    return _regeneratorRuntime.async(function () {
      function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.visitor = new ReactiveVar();
              this.room = new ReactiveVar();
              this.departments = new ReactiveVar([]);
              this.selectedAgents = new ReactiveVar([]);
              this.selectedDepartments = new ReactiveVar([]);
              this.departmentForwardRestrictions = new ReactiveVar({});

              this.onSelectDepartments = function (_ref2) {
                var department = _ref2.item;
                department.text = department.name;

                _this.selectedDepartments.set([department]);

                _this.selectedAgents.set([]);
              };

              this.onClickTagDepartment = function () {
                _this.selectedDepartments.set([]);
              };

              this.onSelectAgents = function (_ref3) {
                var agent = _ref3.item;

                _this.selectedAgents.set([agent]);

                _this.selectedDepartments.set([]);
              };

              this.onClickTagAgent = function (_ref4) {
                var username = _ref4.username;

                _this.selectedAgents.set(_this.selectedAgents.get().filter(function (user) {
                  return user.username !== username;
                }));
              };

              this.autorun(function () {
                _this.visitor.set(Meteor.users.findOne({
                  _id: Template.currentData().visitorId
                }));
              });
              this.autorun(function () {
                _this.room.set(ChatRoom.findOne({
                  _id: Template.currentData().roomId
                }));

                var _this$room$get = _this.room.get(),
                    departmentId = _this$room$get.departmentId;

                if (departmentId) {
                  Meteor.call('livechat:getDepartmentForwardRestrictions', departmentId, function (err, result) {
                    _this.departmentForwardRestrictions.set(result);
                  });
                }
              });
              _context.next = 14;
              return _regeneratorRuntime.awrap(APIClient.v1.get('livechat/department'));

            case 14:
              _await$APIClient$v1$g = _context.sent;
              departments = _await$APIClient$v1$g.departments;
              this.departments.set(departments);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }

      return _callee$;
    }(), null, this, null, Promise);
  }

  return _callee;
}());
Template.visitorForward.events({
  'submit form': function (event, instance) {
    var _this2 = this;

    event.preventDefault();
    var transferData = {
      roomId: instance.room.get()._id,
      comment: event.target.comment.value,
      clientAction: true
    };

    var _instance$selectedAge = instance.selectedAgents.get(),
        _instance$selectedAge2 = _slicedToArray(_instance$selectedAge, 1),
        user = _instance$selectedAge2[0];

    if (user) {
      transferData.userId = user._id;
    } else if (instance.selectedDepartments.get()) {
      var _instance$selectedDep = instance.selectedDepartments.get(),
          _instance$selectedDep2 = _slicedToArray(_instance$selectedDep, 1),
          department = _instance$selectedDep2[0];

      transferData.departmentId = department && department._id;
    }

    if (!transferData.userId && !transferData.departmentId) {
      return;
    }

    Meteor.call('livechat:transfer', transferData, function (error, result) {
      if (error) {
        dispatchToastMessage({
          type: 'error',
          message: t(error.error)
        });
      } else if (result) {
        _this2.save();

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
  'click .cancel': function (event) {
    event.preventDefault();
    this.cancel();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/a8f9ad0596e28f11636ff135bc48cddda800630b.map
