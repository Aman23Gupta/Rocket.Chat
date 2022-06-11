function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/lib/stream/queueManager.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);
module.export({
  initializeLivechatInquiryStream: function () {
    return initializeLivechatInquiryStream;
  }
});
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var APIClient;
module.link("../../../../utils/client", {
  APIClient: function (v) {
    APIClient = v;
  }
}, 1);
var LivechatInquiry;
module.link("../../collections/LivechatInquiry", {
  LivechatInquiry: function (v) {
    LivechatInquiry = v;
  }
}, 2);
var inquiryDataStream;
module.link("./inquiry", {
  inquiryDataStream: function (v) {
    inquiryDataStream = v;
  }
}, 3);
var callWithErrorHandling;
module.link("../../../../../client/lib/utils/callWithErrorHandling", {
  callWithErrorHandling: function (v) {
    callWithErrorHandling = v;
  }
}, 4);
var getUserPreference;
module.link("../../../../utils", {
  getUserPreference: function (v) {
    getUserPreference = v;
  }
}, 5);
var CustomSounds;
module.link("../../../../custom-sounds/client/lib/CustomSounds", {
  CustomSounds: function (v) {
    CustomSounds = v;
  }
}, 6);
var departments = new Set();

var newInquirySound = function () {
  var userId = Meteor.userId();
  var audioVolume = getUserPreference(userId, 'notificationsSoundVolume');
  var newRoomNotification = getUserPreference(userId, 'newRoomNotification');

  if (newRoomNotification !== 'none') {
    CustomSounds.play(newRoomNotification, {
      volume: Number((audioVolume / 100).toPrecision(2))
    });
  }
};

var events = {
  added: function (inquiry) {
    delete inquiry.type;
    departments.has(inquiry.department) && LivechatInquiry.insert(_objectSpread(_objectSpread({}, inquiry), {}, {
      alert: true,
      _updatedAt: new Date(inquiry._updatedAt)
    }));
    newInquirySound();
  },
  changed: function (inquiry) {
    if (inquiry.status !== 'queued' || inquiry.department && !departments.has(inquiry.department)) {
      return LivechatInquiry.remove(inquiry._id);
    }

    delete inquiry.type;
    var saveResult = LivechatInquiry.upsert({
      _id: inquiry._id
    }, _objectSpread(_objectSpread({}, inquiry), {}, {
      alert: true,
      _updatedAt: new Date(inquiry._updatedAt)
    }));

    if (saveResult !== null && saveResult !== void 0 && saveResult.insertedId) {
      newInquirySound();
    }
  },
  removed: function (inquiry) {
    return LivechatInquiry.remove(inquiry._id);
  }
};

var updateCollection = function (inquiry) {
  events[inquiry.type](inquiry);
};

var getInquiriesFromAPI = function () {
  function _callee() {
    var _await$APIClient$v1$g, inquiries;

    return _regeneratorRuntime.async(function () {
      function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _regeneratorRuntime.awrap(APIClient.v1.get('livechat/inquiries.queued?sort={"ts": 1}'));

            case 2:
              _await$APIClient$v1$g = _context.sent;
              inquiries = _await$APIClient$v1$g.inquiries;
              return _context.abrupt("return", inquiries);

            case 5:
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

var removeListenerOfDepartment = function (departmentId) {
  inquiryDataStream.removeListener("department/" + departmentId, updateCollection);
  departments.delete(departmentId);
};

var appendListenerToDepartment = function (departmentId) {
  departments.add(departmentId);
  inquiryDataStream.on("department/" + departmentId, updateCollection);
  return function () {
    return removeListenerOfDepartment(departmentId);
  };
};

var addListenerForeachDepartment = function () {
  function _callee2() {
    var departments,
        cleanupFunctions,
        _args2 = arguments;
    return _regeneratorRuntime.async(function () {
      function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              departments = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : [];
              cleanupFunctions = departments.map(function (department) {
                return appendListenerToDepartment(department);
              });
              return _context2.abrupt("return", function () {
                return cleanupFunctions.forEach(function (cleanup) {
                  return cleanup();
                });
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }

      return _callee2$;
    }(), null, null, null, Promise);
  }

  return _callee2;
}();

var updateInquiries = function () {
  function _callee3() {
    var inquiries,
        _args3 = arguments;
    return _regeneratorRuntime.async(function () {
      function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              inquiries = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
              return _context3.abrupt("return", inquiries.forEach(function (inquiry) {
                return LivechatInquiry.upsert({
                  _id: inquiry._id
                }, _objectSpread(_objectSpread({}, inquiry), {}, {
                  _updatedAt: new Date(inquiry._updatedAt)
                }));
              }));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }

      return _callee3$;
    }(), null, null, null, Promise);
  }

  return _callee3;
}();

var getAgentsDepartments = function () {
  function _callee4(userId) {
    var _await$APIClient$v1$g2, departments;

    return _regeneratorRuntime.async(function () {
      function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _regeneratorRuntime.awrap(APIClient.v1.get("livechat/agents/" + userId + "/departments?enabledDepartmentsOnly=true"));

            case 2:
              _await$APIClient$v1$g2 = _context4.sent;
              departments = _await$APIClient$v1$g2.departments;
              return _context4.abrupt("return", departments);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }

      return _callee4$;
    }(), null, null, null, Promise);
  }

  return _callee4;
}();

var removeGlobalListener = function () {
  return inquiryDataStream.removeListener('public', updateCollection);
};

var addGlobalListener = function () {
  inquiryDataStream.on('public', updateCollection);
  return removeGlobalListener;
};

var subscribe = function () {
  function _callee5(userId) {
    var config, agentDepartments, cleanUp;
    return _regeneratorRuntime.async(function () {
      function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _regeneratorRuntime.awrap(callWithErrorHandling('livechat:getRoutingConfig'));

            case 2:
              config = _context5.sent;

              if (!(config && config.autoAssignAgent)) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return");

            case 5:
              _context5.next = 7;
              return _regeneratorRuntime.awrap(getAgentsDepartments(userId));

            case 7:
              agentDepartments = _context5.sent.map(function (department) {
                return department.departmentId;
              });

              if (!agentDepartments.length) {
                _context5.next = 14;
                break;
              }

              _context5.next = 11;
              return _regeneratorRuntime.awrap(addListenerForeachDepartment(agentDepartments));

            case 11:
              _context5.t0 = _context5.sent;
              _context5.next = 15;
              break;

            case 14:
              _context5.t0 = addGlobalListener();

            case 15:
              cleanUp = _context5.t0;
              _context5.t1 = updateInquiries;
              _context5.next = 19;
              return _regeneratorRuntime.awrap(getInquiriesFromAPI());

            case 19:
              _context5.t2 = _context5.sent;
              (0, _context5.t1)(_context5.t2);
              return _context5.abrupt("return", function () {
                LivechatInquiry.remove({});
                removeGlobalListener();
                cleanUp && cleanUp();
                departments.clear();
              });

            case 22:
            case "end":
              return _context5.stop();
          }
        }
      }

      return _callee5$;
    }(), null, null, null, Promise);
  }

  return _callee5;
}();

var initializeLivechatInquiryStream = function () {
  var cleanUp;
  return function () {
    function _callee6() {
      var _args6 = arguments;
      return _regeneratorRuntime.async(function () {
        function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                cleanUp && cleanUp();
                _context6.next = 3;
                return _regeneratorRuntime.awrap(subscribe.apply(void 0, _args6));

              case 3:
                cleanUp = _context6.sent;

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }

        return _callee6$;
      }(), null, null, null, Promise);
    }

    return _callee6;
  }();
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/lib/stream/6af0f2635152319f86ccccd2181d225578f3405d.map
