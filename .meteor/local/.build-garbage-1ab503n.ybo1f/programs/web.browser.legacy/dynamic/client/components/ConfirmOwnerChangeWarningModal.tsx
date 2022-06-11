function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/ConfirmOwnerChangeWarningModal.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var GenericModal;
module.link("./GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 3);
var RawText;
module.link("./RawText", {
  "default": function (v) {
    RawText = v;
  }
}, 4);

var ConfirmOwnerChangeWarningModal = function (_ref) {
  var onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      _ref$contentTitle = _ref.contentTitle,
      contentTitle = _ref$contentTitle === void 0 ? '' : _ref$contentTitle,
      _ref$confirmLabel = _ref.confirmLabel,
      confirmLabel = _ref$confirmLabel === void 0 ? '' : _ref$confirmLabel,
      shouldChangeOwner = _ref.shouldChangeOwner,
      shouldBeRemoved = _ref.shouldBeRemoved;
  var t = useTranslation();
  var changeOwnerRooms = '';

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

  var removedRooms = '';

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
//# sourceMappingURL=/dynamic/client/components/d7b2b2b0ccb284caf939ef8104b0f4a737fea149.map
