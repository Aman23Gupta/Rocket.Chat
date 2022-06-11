function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/monitors/MonitorsRow.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Table, Icon, Button;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  },

  Icon(v) {
    Icon = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 2);
let GenericModal;
module.link("../../../../client/components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 3);
let useSetModal;
module.link("../../../../client/contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 4);
let useMethod;
module.link("../../../../client/contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);

function MonitorsRow(props) {
  var _emails$find;

  const {
    _id,
    name,
    username,
    emails,
    onDelete
  } = props;
  const setModal = useSetModal();
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();
  const removeMonitor = useMethod('livechat:removeMonitor');
  const handleRemove = useMutableCallback(() => {
    const onDeleteMonitor = async () => {
      try {
        await removeMonitor(username);
        dispatchToastMessage({
          type: 'success',
          message: t('Monitor_removed')
        });
        onDelete();
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      setModal();
    };

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onDeleteMonitor,
      onCancel: () => setModal(),
      confirmText: t('Delete')
    }));
  });
  return /*#__PURE__*/React.createElement(Table.Row, {
    key: _id,
    role: "link",
    action: true,
    tabIndex: 0
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, name), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, username), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, emails === null || emails === void 0 ? void 0 : (_emails$find = emails.find(_ref => {
    let {
      address
    } = _ref;
    return !!address;
  })) === null || _emails$find === void 0 ? void 0 : _emails$find.address), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    ghost: true,
    title: t('Remove'),
    onClick: handleRemove
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: "x16"
  }))));
}

module.exportDefault( /*#__PURE__*/memo(MonitorsRow));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/monitors/688032c9f2b2cd2cd12b695013407ee6ce356c91.map
