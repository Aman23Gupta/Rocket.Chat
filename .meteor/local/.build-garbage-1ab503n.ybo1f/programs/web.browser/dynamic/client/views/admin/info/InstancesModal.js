function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/InstancesModal.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Modal, ButtonGroup, Button, Accordion;
module.link("@rocket.chat/fuselage", {
  Modal(v) {
    Modal = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Accordion(v) {
    Accordion = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 3);
let DescriptionList;
module.link("./DescriptionList", {
  default(v) {
    DescriptionList = v;
  }

}, 4);

const InstancesModal = _ref => {
  let {
    instances = [],
    onClose
  } = _ref;
  const t = useTranslation();
  const formatDateAndTime = useFormatDateAndTime();
  return /*#__PURE__*/React.createElement(Modal, {
    width: "x600"
  }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Instances')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Accordion, null, instances.map(_ref2 => {
    let {
      address,
      broadcastAuth,
      currentStatus,
      instanceRecord
    } = _ref2;
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
//# sourceMappingURL=/dynamic/client/views/admin/info/892432b2196dcd539fb0c5276956acb13e0a7dc2.map
