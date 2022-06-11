function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/visitorEdit.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_id", "scope", "label"];

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

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
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
var t;
module.link("../../../../../utils", {
  t: function (v) {
    t = v;
  }
}, 3);
var hasAtLeastOnePermission, hasPermission, hasRole;
module.link("../../../../../authorization/client", {
  hasAtLeastOnePermission: function (v) {
    hasAtLeastOnePermission = v;
  },
  hasPermission: function (v) {
    hasPermission = v;
  },
  hasRole: function (v) {
    hasRole = v;
  }
}, 4);
module.link("./visitorEdit.html");
var APIClient;
module.link("../../../../../utils/client", {
  APIClient: function (v) {
    APIClient = v;
  }
}, 5);
var getCustomFormTemplate;
module.link("../customTemplates/register", {
  getCustomFormTemplate: function (v) {
    getCustomFormTemplate = v;
  }
}, 6);
var dispatchToastMessage;
module.link("../../../../../../client/lib/toast", {
  dispatchToastMessage: function (v) {
    dispatchToastMessage = v;
  }
}, 7);
var CUSTOM_FIELDS_COUNT = 100;

var getCustomFieldsByScope = function () {
  var customFields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var filter = arguments.length > 2 ? arguments[2] : undefined;
  var disabled = arguments.length > 3 ? arguments[3] : undefined;
  return customFields.filter(function (_ref) {
    var visibility = _ref.visibility,
        scope = _ref.scope;
    return visibility !== 'hidden' && scope === filter;
  }).map(function (_ref2) {
    var name = _ref2._id,
        scope = _ref2.scope,
        label = _ref2.label,
        extraData = _objectWithoutProperties(_ref2, _excluded);

    var value = data[name] ? data[name] : '';
    return _objectSpread({
      name: name,
      label: label,
      scope: scope,
      value: value,
      disabled: disabled
    }, extraData);
  });
};

var isCustomFieldDisabled = function () {
  return !hasPermission('edit-livechat-room-customfields');
};

Template.visitorEdit.helpers({
  visitor: function () {
    return Template.instance().visitor.get();
  },
  canViewCustomFields: function () {
    return hasAtLeastOnePermission(['view-livechat-room-customfields', 'edit-livechat-room-customfields']);
  },
  visitorCustomFields: function () {
    var customFields = Template.instance().customFields.get();

    if (!customFields || customFields.length === 0) {
      return [];
    }

    var visitor = Template.instance().visitor.get();

    var _ref3 = visitor || {},
        _ref3$livechatData = _ref3.livechatData,
        livechatData = _ref3$livechatData === void 0 ? {} : _ref3$livechatData;

    return getCustomFieldsByScope(customFields, livechatData, 'visitor', isCustomFieldDisabled());
  },
  room: function () {
    return Template.instance().room.get();
  },
  roomCustomFields: function () {
    var customFields = Template.instance().customFields.get();

    if (!customFields || customFields.length === 0) {
      return [];
    }

    var room = Template.instance().room.get();

    var _ref4 = room || {},
        _ref4$livechatData = _ref4.livechatData,
        livechatData = _ref4$livechatData === void 0 ? {} : _ref4$livechatData;

    return getCustomFieldsByScope(customFields, livechatData, 'room', isCustomFieldDisabled());
  },
  email: function () {
    var visitor = Template.instance().visitor.get();

    if (visitor.visitorEmails && visitor.visitorEmails.length > 0) {
      return visitor.visitorEmails[0].address;
    }
  },
  phone: function () {
    var visitor = Template.instance().visitor.get();

    if (visitor.phone && visitor.phone.length > 0) {
      return visitor.phone[0].phoneNumber;
    }
  },
  tags: function () {
    return Template.instance().tags.get();
  },
  availableUserTags: function () {
    return Template.instance().availableUserTags.get();
  },
  hasAvailableTags: function () {
    var tags = Template.instance().availableTags.get();
    return tags && tags.length > 0;
  },
  canRemoveTag: function (availableUserTags, tag) {
    return hasRole(Meteor.userId(), ['admin', 'livechat-manager']) || Array.isArray(availableUserTags) && (availableUserTags.length === 0 || availableUserTags.indexOf(tag) > -1);
  },
  isSmsIntegration: function () {
    var room = Template.instance().room.get();
    return !!(room && room.sms);
  },
  customFieldsTemplate: function () {
    return getCustomFormTemplate('livechatVisitorEditForm');
  }
});
Template.visitorEdit.onCreated(function () {
  function _callee3() {
    var _this = this;

    var rid, uid, _await$APIClient$v1$g4, departments, agentDepartments;

    return _regeneratorRuntime.async(function () {
      function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.visitor = new ReactiveVar();
              this.room = new ReactiveVar();
              this.tags = new ReactiveVar([]);
              this.availableTags = new ReactiveVar([]);
              this.agentDepartments = new ReactiveVar([]);
              this.availableUserTags = new ReactiveVar([]);
              this.customFields = new ReactiveVar([]);
              this.autorun(function () {
                function _callee() {
                  var _Template$currentData, visitorId, _await$APIClient$v1$g, visitor;

                  return _regeneratorRuntime.async(function () {
                    function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _Template$currentData = Template.currentData(), visitorId = _Template$currentData.visitorId;

                            if (!visitorId) {
                              _context.next = 7;
                              break;
                            }

                            _context.next = 4;
                            return _regeneratorRuntime.awrap(APIClient.v1.get("livechat/visitors.info?visitorId=" + visitorId));

                          case 4:
                            _await$APIClient$v1$g = _context.sent;
                            visitor = _await$APIClient$v1$g.visitor;

                            _this.visitor.set(visitor);

                          case 7:
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
              rid = Template.currentData().roomId;
              this.autorun(function () {
                function _callee2() {
                  var _await$APIClient$v1$g2, room, _await$APIClient$v1$g3, customFields;

                  return _regeneratorRuntime.async(function () {
                    function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _regeneratorRuntime.awrap(APIClient.v1.get("rooms.info?roomId=" + rid));

                          case 2:
                            _await$APIClient$v1$g2 = _context2.sent;
                            room = _await$APIClient$v1$g2.room;
                            _context2.next = 6;
                            return _regeneratorRuntime.awrap(APIClient.v1.get("livechat/custom-fields?count=" + CUSTOM_FIELDS_COUNT));

                          case 6:
                            _await$APIClient$v1$g3 = _context2.sent;
                            customFields = _await$APIClient$v1$g3.customFields;

                            _this.room.set(room);

                            _this.tags.set(room && room.tags || []);

                            _this.customFields.set(customFields || []);

                          case 11:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }

                    return _callee2$;
                  }(), null, null, null, Promise);
                }

                return _callee2;
              }());
              uid = Meteor.userId();
              _context3.next = 13;
              return _regeneratorRuntime.awrap(APIClient.v1.get("livechat/agents/" + uid + "/departments"));

            case 13:
              _await$APIClient$v1$g4 = _context3.sent;
              departments = _await$APIClient$v1$g4.departments;
              agentDepartments = departments.map(function (dept) {
                return dept.departmentId;
              });
              this.agentDepartments.set(agentDepartments);
              Meteor.call('livechat:getTagsList', function (err, tagsList) {
                _this.availableTags.set(tagsList);

                var agentDepartments = _this.agentDepartments.get();

                var isAdmin = hasRole(uid, ['admin', 'livechat-manager']);
                var tags = _this.availableTags.get() || [];
                var availableTags = tags.filter(function (_ref5) {
                  var departments = _ref5.departments;
                  return isAdmin || departments.length === 0 || departments.some(function (i) {
                    return agentDepartments.indexOf(i) > -1;
                  });
                }).map(function (_ref6) {
                  var name = _ref6.name;
                  return name;
                });

                _this.availableUserTags.set(availableTags);
              });

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }

      return _callee3$;
    }(), null, this, null, Promise);
  }

  return _callee3;
}());
Template.visitorEdit.events({
  'submit form': function (event, instance) {
    var _this2 = this;

    event.preventDefault();
    var userData = {
      _id: instance.visitor.get()._id
    };
    var room = instance.room.get();
    var _id = room._id,
        sms = room.sms;
    var roomData = {
      _id: _id
    };
    userData.name = event.currentTarget.elements.name.value;
    userData.email = event.currentTarget.elements.email.value;
    userData.phone = event.currentTarget.elements.phone.value;
    userData.livechatData = {};
    $('[data-visitorLivechatData=true]').each(function () {
      userData.livechatData[this.name] = $(this).val() || '';
    });
    roomData.topic = event.currentTarget.elements.topic.value;
    roomData.tags = instance.tags.get();
    roomData.livechatData = {};
    $('[data-roomLivechatData=true]').each(function () {
      roomData.livechatData[this.name] = $(this).val() || '';
    });

    if (sms) {
      delete userData.phone;
    }

    instance.$('.customFormField').each(function (i, el) {
      var elField = instance.$(el);
      var name = elField.attr('name');
      roomData[name] = elField.val();
    });
    Meteor.call('livechat:saveInfo', userData, roomData, function (err) {
      if (err) {
        dispatchToastMessage({
          type: 'error',
          message: t(err.error)
        });
      } else {
        dispatchToastMessage({
          type: 'success',
          message: t('Saved')
        });

        _this2.save();
      }
    });
  },
  'click .remove-tag': function (e, t) {
    var tag = this.valueOf();
    var availableTags = t.availableTags.get();
    var hasAvailableTags = availableTags && availableTags.length > 0;
    var availableUserTags = t.availableUserTags.get();

    if (!hasRole(Meteor.userId(), ['admin', 'livechat-manager']) && hasAvailableTags && (!availableUserTags || availableUserTags.indexOf(tag) === -1)) {
      return;
    }

    e.stopPropagation();
    e.preventDefault();
    var tags = t.tags.get();
    tags = tags.filter(function (el) {
      return el !== tag;
    });
    t.tags.set(tags);
  },
  'click #addTag': function (e, instance) {
    e.stopPropagation();
    e.preventDefault();

    if ($('#tagSelect').find(':selected').is(':disabled')) {
      return;
    }

    var tags = _toConsumableArray(instance.tags.get());

    var tagVal = $('#tagSelect').val();

    if (tagVal === '' || tags.indexOf(tagVal) > -1) {
      return;
    }

    tags.push(tagVal);
    instance.tags.set(tags);
    $('#tagSelect').val('placeholder');
  },
  'keydown #tagInput': function (e, instance) {
    if (e.which === 13) {
      e.stopPropagation();
      e.preventDefault();

      var tags = _toConsumableArray(instance.tags.get());

      var tagVal = $('#tagInput').val();

      if (tagVal === '' || tags.indexOf(tagVal) > -1) {
        return;
      }

      tags.push(tagVal);
      instance.tags.set(tags);
      $('#tagInput').val('');
    }
  },
  'click .cancel': function () {
    this.cancel();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/e6121c287816eeae60d242ac365af9f19abe3433.map
