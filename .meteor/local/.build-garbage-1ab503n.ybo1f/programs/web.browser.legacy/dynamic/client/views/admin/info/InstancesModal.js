function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/InstancesModal.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Modal, ButtonGroup, Button, Accordion;
module.link("@rocket.chat/fuselage", {
  Modal: function (v) {
    Modal = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Accordion: function (v) {
    Accordion = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 3);
var DescriptionList;
module.link("./DescriptionList", {
  "default": function (v) {
    DescriptionList = v;
  }
}, 4);

var InstancesModal = function (_ref) {
  var _ref$instances = _ref.instances,
      instances = _ref$instances === void 0 ? [] : _ref$instances,
      onClose = _ref.onClose;
  var t = useTranslation();
  var formatDateAndTime = useFormatDateAndTime();
  return /*#__PURE__*/React.createElement(Modal, {
    width: "x600"
  }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Instances')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Accordion, null, instances.map(function (_ref2) {
    var address = _ref2.address,
        broadcastAuth = _ref2.broadcastAuth,
        currentStatus = _ref2.currentStatus,
        instanceRecord = _ref2.instanceRecord;
    return /*#__PURE__*/React.createElement(Accordion.Item, {
      title: address,
      key: address
    }, /*#__PURE__*/React.createElement(DescriptionList, null, /*#__PURE__*/React.createElement(DescriptionList.Entry, {
      label: t('Address')
    }, address), /*#__PURE__*/React.createElement(DescriptionList.Entry, {
      label: t('Auth')
    }, broadcastAuth ? 'true' : 'false'), /*#__PURE__*/React.createElement(DescriptionList.Entry, {
      label: /*#__PURE__*/React.createElement(React.Fragment, null, t('Current_Status'), " > ", t('Connected'))
    }, currentStatus.connected ? 'true' : 'false'), /*#__PURE__*/React.createElement(DescriptionList.Entry, {
      label: /*#__PURE__*/React.createElement(React.Fragment, null, t('Current_Status'), " > ", t('Retry_Count'))
    }, currentStatus.retryCount), /*#__PURE__*/React.createElement(DescriptionList.Entry, {
      label: /*#__PURE__*/React.createElement(React.Fragment, null, t('Current_Status'), " > ", t('Status'))
    }, currentStatus.status), /*#__PURE__*/React.createElement(DescriptionList.Entry, {
      label: /*#__PURE__*/React.createElement(React.Fragment, null, t('Instance_Record'), " > ", t('ID'))
    }, instanceRecord._id), /*#__PURE__*/React.createElement(DescriptionList.Entry, {
      label: /*#__PURE__*/React.createElement(React.Fragment, null, t('Instance_Record'), " > ", t('PID'))
    }, instanceRecord.pid), /*#__PURE__*/React.createElement(DescriptionList.Entry, {
      label: /*#__PURE__*/React.createElement(React.Fragment, null, t('Instance_Record'), " > ", t('Created_at'))
    }, formatDateAndTime(instanceRecord._createdAt)), /*#__PURE__*/React.createElement(DescriptionList.Entry, {
      label: /*#__PURE__*/React.createElement(React.Fragment, null, t('Instance_Record'), " > ", t('Updated_at'))
    }, formatDateAndTime(instanceRecord._updatedAt))));
  }))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onClose
  }, t('Close')))));
};

module.exportDefault(InstancesModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/8ca626b65271949d9f059dec38b36f5fe9d044c8.map
