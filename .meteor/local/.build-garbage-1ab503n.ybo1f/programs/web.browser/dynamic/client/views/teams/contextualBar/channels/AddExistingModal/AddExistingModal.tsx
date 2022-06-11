function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/AddExistingModal/AddExistingModal.tsx                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ButtonGroup, Button, Field, Modal;
module.link("@rocket.chat/fuselage", {
  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Field(v) {
    Field = v;
  },

  Modal(v) {
    Modal = v;
  }

}, 0);
let React, memo, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let useEndpoint;
module.link("../../../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 2);
let useToastMessageDispatch;
module.link("../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 3);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useForm;
module.link("../../../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 5);
let RoomsInput;
module.link("./RoomsInput", {
  default(v) {
    RoomsInput = v;
  }

}, 6);

const useAddExistingModalState = (onClose, teamId, reload) => {
  const t = useTranslation();
  const addRoomEndpoint = useEndpoint('POST', 'teams.addRooms');
  const dispatchToastMessage = useToastMessageDispatch();
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm({
    rooms: []
  });
  const {
    rooms
  } = values;
  const {
    handleRooms
  } = handlers;
  const onChange = useCallback((value, action) => {
    if (!action) {
      if (rooms.some(current => current._id === value._id)) {
        return;
      }

      return handleRooms([...rooms, value]);
    }

    handleRooms(rooms.filter(current => current._id !== value._id));
  }, [handleRooms, rooms]);
  const onAdd = useCallback(async () => {
    try {
      await addRoomEndpoint({
        rooms: rooms.map(room => room._id),
        teamId
      });
      dispatchToastMessage({
        type: 'success',
        message: t('Channels_added')
      });
      onClose();
      reload();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [addRoomEndpoint, rooms, teamId, onClose, dispatchToastMessage, t, reload]);
  return {
    onAdd,
    rooms,
    onChange,
    hasUnsavedChanges
  };
};

const AddExistingModal = _ref => {
  let {
    onClose,
    teamId,
    reload
  } = _ref;
  const t = useTranslation();
  const {
    rooms,
    onAdd,
    onChange,
    hasUnsavedChanges
  } = useAddExistingModalState(onClose, teamId, reload);
  const isAddButtonEnabled = hasUnsavedChanges;
  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Team_Add_existing_channels')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Field, {
    mbe: "x24"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Channels')), /*#__PURE__*/React.createElement(RoomsInput, {
    value: rooms,
    onChange: onChange
  }))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    disabled: !isAddButtonEnabled,
    onClick: onAdd,
    primary: true
  }, t('Add')))));
};

module.exportDefault( /*#__PURE__*/memo(AddExistingModal));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/AddExistingModal/efc869df7c145943eab0df02a587cbdfe816a480.map
