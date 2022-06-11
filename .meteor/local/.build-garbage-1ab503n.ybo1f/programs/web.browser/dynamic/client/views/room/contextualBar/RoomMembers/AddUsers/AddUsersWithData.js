function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/AddUsers/AddUsersWithData.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useMethod;
module.link("../../../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
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
let useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 6);
let AddUsers;
module.link("./AddUsers", {
  default(v) {
    AddUsers = v;
  }

}, 7);

const AddUsersWithData = _ref => {
  let {
    rid,
    onClickBack,
    reload
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const onClickClose = useTabBarClose();
  const saveAction = useMethod('addUsersToRoom');
  const {
    values,
    handlers
  } = useForm({
    users: []
  });
  const {
    users
  } = values;
  const {
    handleUsers
  } = handlers;
  const onChangeUsers = useMutableCallback((value, action) => {
    if (!action) {
      if (users.includes(value)) {
        return;
      }

      return handleUsers([...users, value]);
    }

    handleUsers(users.filter(current => current !== value));
  });
  const handleSave = useMutableCallback(async () => {
    try {
      await saveAction({
        rid,
        users
      });
      dispatchToastMessage({
        type: 'success',
        message: t('Users_added')
      });
      onClickBack();
      reload();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  return /*#__PURE__*/React.createElement(AddUsers, {
    onClickClose: onClickClose,
    onClickBack: onClickBack,
    onClickSave: handleSave,
    value: users,
    onChange: onChangeUsers
  });
};

module.exportDefault(AddUsersWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/AddUsers/448380e498fe7ebeb63e3519c7438df6d9fdd99a.map
