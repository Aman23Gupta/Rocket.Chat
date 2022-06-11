function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/InviteUsers/WrappedInviteUsers.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, useState, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);
let useEndpoint;
module.link("../../../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useFormatDateAndTime;
module.link("../../../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 4);
let useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 5);
let EditInvite;
module.link("../EditInvite", {
  default(v) {
    EditInvite = v;
  }

}, 6);
let InviteUsers;
module.link("./InviteUsers", {
  default(v) {
    InviteUsers = v;
  }

}, 7);

const WrappedInviteUsers = _ref => {
  let {
    rid,
    tabBar,
    onClickBack
  } = _ref;
  const [editing, setEditing] = useState(false);
  const format = useFormatDateAndTime();
  const t = useTranslation();
  const onClickClose = useTabBarClose();
  const handleEdit = useMutableCallback(() => setEditing(true));
  const onClickBackEditing = useMutableCallback(() => setEditing(false));
  const findOrCreateInvite = useEndpoint('POST', 'findOrCreateInvite');
  const [{
    days = 1,
    maxUses = 0
  }, setDayAndMaxUses] = useState({});
  const setParams = useMutableCallback(args => {
    setDayAndMaxUses(args);
    setEditing(false);
  });
  const [state, setState] = useState();
  const linkExpirationText = useMutableCallback(data => {
    if (!data) {
      return '';
    }

    if (data.expires) {
      const expiration = new Date(data.expires);

      if (data.maxUses) {
        const usesLeft = data.maxUses - data.uses;
        return t('Your_invite_link_will_expire_on__date__or_after__usesLeft__uses', {
          date: format(expiration),
          usesLeft
        });
      }

      return t('Your_invite_link_will_expire_on__date__', {
        date: format(expiration)
      });
    }

    if (data.maxUses) {
      const usesLeft = data.maxUses - data.uses;
      return t('Your_invite_link_will_expire_after__usesLeft__uses', {
        usesLeft
      });
    }

    return t('Your_invite_link_will_never_expire');
  });
  useEffect(() => {
    if (editing) {
      return;
    }

    (async () => {
      try {
        const data = await findOrCreateInvite({
          rid,
          days,
          maxUses
        });
        setState({
          url: data.url,
          caption: linkExpirationText(data)
        });
      } catch (error) {
        setState({
          error
        });
      }
    })();
  }, [findOrCreateInvite, editing, linkExpirationText, rid, days, maxUses]);

  if (editing) {
    return /*#__PURE__*/React.createElement(EditInvite, {
      onClickBack: onClickBackEditing,
      linkText: state === null || state === void 0 ? void 0 : state.url,
      captionText: state === null || state === void 0 ? void 0 : state.caption,
      rid,
      tabBar,
      error: state === null || state === void 0 ? void 0 : state.error,
      setParams,
      days,
      maxUses
    });
  }

  return /*#__PURE__*/React.createElement(InviteUsers, {
    error: state === null || state === void 0 ? void 0 : state.error,
    onClickClose: onClickClose,
    onClickBack: onClickBack,
    onClickEdit: handleEdit,
    linkText: state === null || state === void 0 ? void 0 : state.url,
    captionText: state === null || state === void 0 ? void 0 : state.caption
  });
};

module.exportDefault(WrappedInviteUsers);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/InviteUsers/ceab42540bef6afec18f165e64a0bc7198825543.map
