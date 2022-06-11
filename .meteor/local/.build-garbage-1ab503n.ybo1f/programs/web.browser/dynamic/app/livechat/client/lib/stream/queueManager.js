function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/lib/stream/queueManager.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  initializeLivechatInquiryStream: () => initializeLivechatInquiryStream
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let APIClient;
module.link("../../../../utils/client", {
  APIClient(v) {
    APIClient = v;
  }

}, 1);
let LivechatInquiry;
module.link("../../collections/LivechatInquiry", {
  LivechatInquiry(v) {
    LivechatInquiry = v;
  }

}, 2);
let inquiryDataStream;
module.link("./inquiry", {
  inquiryDataStream(v) {
    inquiryDataStream = v;
  }

}, 3);
let callWithErrorHandling;
module.link("../../../../../client/lib/utils/callWithErrorHandling", {
  callWithErrorHandling(v) {
    callWithErrorHandling = v;
  }

}, 4);
let getUserPreference;
module.link("../../../../utils", {
  getUserPreference(v) {
    getUserPreference = v;
  }

}, 5);
let CustomSounds;
module.link("../../../../custom-sounds/client/lib/CustomSounds", {
  CustomSounds(v) {
    CustomSounds = v;
  }

}, 6);
const departments = new Set();

const newInquirySound = () => {
  const userId = Meteor.userId();
  const audioVolume = getUserPreference(userId, 'notificationsSoundVolume');
  const newRoomNotification = getUserPreference(userId, 'newRoomNotification');

  if (newRoomNotification !== 'none') {
    CustomSounds.play(newRoomNotification, {
      volume: Number((audioVolume / 100).toPrecision(2))
    });
  }
};

const events = {
  added: inquiry => {
    delete inquiry.type;
    departments.has(inquiry.department) && LivechatInquiry.insert(_objectSpread(_objectSpread({}, inquiry), {}, {
      alert: true,
      _updatedAt: new Date(inquiry._updatedAt)
    }));
    newInquirySound();
  },
  changed: inquiry => {
    if (inquiry.status !== 'queued' || inquiry.department && !departments.has(inquiry.department)) {
      return LivechatInquiry.remove(inquiry._id);
    }

    delete inquiry.type;
    const saveResult = LivechatInquiry.upsert({
      _id: inquiry._id
    }, _objectSpread(_objectSpread({}, inquiry), {}, {
      alert: true,
      _updatedAt: new Date(inquiry._updatedAt)
    }));

    if (saveResult !== null && saveResult !== void 0 && saveResult.insertedId) {
      newInquirySound();
    }
  },
  removed: inquiry => LivechatInquiry.remove(inquiry._id)
};

const updateCollection = inquiry => {
  events[inquiry.type](inquiry);
};

const getInquiriesFromAPI = async () => {
  const {
    inquiries
  } = await APIClient.v1.get('livechat/inquiries.queued?sort={"ts": 1}');
  return inquiries;
};

const removeListenerOfDepartment = departmentId => {
  inquiryDataStream.removeListener("department/".concat(departmentId), updateCollection);
  departments.delete(departmentId);
};

const appendListenerToDepartment = departmentId => {
  departments.add(departmentId);
  inquiryDataStream.on("department/".concat(departmentId), updateCollection);
  return () => removeListenerOfDepartment(departmentId);
};

const addListenerForeachDepartment = async function () {
  let departments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  const cleanupFunctions = departments.map(department => appendListenerToDepartment(department));
  return () => cleanupFunctions.forEach(cleanup => cleanup());
};

const updateInquiries = async function () {
  let inquiries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return inquiries.forEach(inquiry => LivechatInquiry.upsert({
    _id: inquiry._id
  }, _objectSpread(_objectSpread({}, inquiry), {}, {
    _updatedAt: new Date(inquiry._updatedAt)
  })));
};

const getAgentsDepartments = async userId => {
  const {
    departments
  } = await APIClient.v1.get("livechat/agents/".concat(userId, "/departments?enabledDepartmentsOnly=true"));
  return departments;
};

const removeGlobalListener = () => inquiryDataStream.removeListener('public', updateCollection);

const addGlobalListener = () => {
  inquiryDataStream.on('public', updateCollection);
  return removeGlobalListener;
};

const subscribe = async userId => {
  const config = await callWithErrorHandling('livechat:getRoutingConfig');

  if (config && config.autoAssignAgent) {
    return;
  }

  const agentDepartments = (await getAgentsDepartments(userId)).map(department => department.departmentId);
  const cleanUp = agentDepartments.length ? await addListenerForeachDepartment(agentDepartments) : addGlobalListener();
  updateInquiries(await getInquiriesFromAPI());
  return () => {
    LivechatInquiry.remove({});
    removeGlobalListener();
    cleanUp && cleanUp();
    departments.clear();
  };
};

const initializeLivechatInquiryStream = (() => {
  let cleanUp;
  return async function () {
    cleanUp && cleanUp();
    cleanUp = await subscribe(...arguments);
  };
})();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/lib/stream/3026424ebd019eb79b41f0fff66605650881031a.map
