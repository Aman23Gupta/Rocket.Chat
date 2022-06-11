function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/ConfirmOwnerChangeWarningModal.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let GenericModal;
module.link("./GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 3);
let RawText;
module.link("./RawText", {
  default(v) {
    RawText = v;
  }

}, 4);

const ConfirmOwnerChangeWarningModal = _ref => {
  let {
    onConfirm,
    onCancel,
    contentTitle = '',
    confirmLabel = '',
    shouldChangeOwner,
    shouldBeRemoved
  } = _ref;
  const t = useTranslation();
  let changeOwnerRooms = '';

  if (shouldChangeOwner.length > 0) {
    if (shouldChangeOwner.length === 1) {
      changeOwnerRooms = t('A_new_owner_will_be_assigned_automatically_to_the__roomName__room', {
        roomName: shouldChangeOwner.pop()
      });
    } else if (shouldChangeOwner.length <= 5) {
      changeOwnerRooms = t('A_new_owner_will_be_assigned_automatically_to_those__count__rooms__rooms__', {
        count: shouldChangeOwner.length,
        rooms: shouldChangeOwner.join(', ')
      });
    } else {
      changeOwnerRooms = t('A_new_owner_will_be_assigned_automatically_to__count__rooms', {
        count: shouldChangeOwner.length
      });
    }
  }

  let removedRooms = '';

  if (shouldBeRemoved.length > 0) {
    if (shouldBeRemoved.length === 1) {
      removedRooms = t('The_empty_room__roomName__will_be_removed_automatically', {
        roomName: shouldBeRemoved.pop()
      });
    } else if (shouldBeRemoved.length <= 5) {
      removedRooms = t('__count__empty_rooms_will_be_removed_automatically__rooms__', {
        count: shouldBeRemoved.length,
        rooms: shouldBeRemoved.join(', ')
      });
    } else {
      removedRooms = t('__count__empty_rooms_will_be_removed_automatically', {
        count: shouldBeRemoved.length
      });
    }
  }

  return /*#__PURE__*/React.createElement(GenericModal, {
    variant: "danger",
    onClose: onCancel,
    onCancel: onCancel,
    confirmText: confirmLabel,
    onConfirm: onConfirm
  }, contentTitle, changeOwnerRooms && /*#__PURE__*/React.createElement(Box, {
    marginBlock: "x16"
  }, /*#__PURE__*/React.createElement(RawText, null, changeOwnerRooms)), removedRooms && /*#__PURE__*/React.createElement(Box, {
    marginBlock: "x16"
  }, /*#__PURE__*/React.createElement(RawText, null, removedRooms)));
};

module.exportDefault(ConfirmOwnerChangeWarningModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/770aca0f0ad419f7d4011b5ad11d009358c9fe46.map
