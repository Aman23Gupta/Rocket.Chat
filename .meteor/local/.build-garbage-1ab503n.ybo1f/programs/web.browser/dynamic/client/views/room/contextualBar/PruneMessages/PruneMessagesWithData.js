function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/PruneMessages/PruneMessagesWithData.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 1);
let React, useCallback, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let GenericModal;
module.link("../../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 3);
let useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 4);
let useEndpoint;
module.link("../../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useUserRoom;
module.link("../../../../contexts/UserContext", {
  useUserRoom(v) {
    useUserRoom = v;
  }

}, 8);
let useForm;
module.link("../../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 9);
let PruneMessages;
module.link("./PruneMessages", {
  default(v) {
    PruneMessages = v;
  }

}, 10);

const getTimeZoneOffset = function () {
  const offset = new Date().getTimezoneOffset();
  const absOffset = Math.abs(offset);
  return "".concat(offset < 0 ? '+' : '-').concat("00".concat(Math.floor(absOffset / 60)).slice(-2), ":").concat("00".concat(absOffset % 60).slice(-2));
};

const initialValues = {
  newerDate: '',
  newerTime: '',
  olderDate: '',
  olderTime: '',
  users: [],
  inclusive: false,
  pinned: false,
  discussion: false,
  threads: false,
  attached: false
};

const PruneMessagesWithData = _ref => {
  let {
    rid,
    tabBar
  } = _ref;
  const t = useTranslation();
  const room = useUserRoom(rid);
  room.type = room.t;
  room.rid = rid;
  const {
    name,
    usernames
  } = room;
  const setModal = useSetModal();
  const onClickClose = useMutableCallback(() => tabBar && tabBar.close());
  const closeModal = useCallback(() => setModal(null), [setModal]);
  const dispatchToastMessage = useToastMessageDispatch();
  const pruneMessages = useEndpoint('POST', 'rooms.cleanHistory');
  const [fromDate, setFromDate] = useState(new Date('0001-01-01T00:00:00Z'));
  const [toDate, setToDate] = useState(new Date('9999-12-31T23:59:59Z'));
  const [callOutText, setCallOutText] = useState();
  const [validateText, setValidateText] = useState();
  const [counter, setCounter] = useState(0);
  const {
    values,
    handlers,
    reset
  } = useForm(initialValues);
  const {
    newerDate,
    newerTime,
    olderDate,
    olderTime,
    users,
    inclusive,
    pinned,
    discussion,
    threads,
    attached
  } = values;
  const {
    handleNewerDate,
    handleNewerTime,
    handleOlderDate,
    handleOlderTime,
    handleUsers,
    handleInclusive,
    handlePinned,
    handleDiscussion,
    handleThreads,
    handleAttached
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
  const handlePrune = useMutableCallback(async () => {
    const limit = 2000;

    try {
      if (counter === limit) {
        return;
      }

      const {
        count
      } = await pruneMessages({
        roomId: rid,
        latest: toDate,
        oldest: fromDate,
        inclusive,
        limit,
        excludePinned: pinned,
        filesOnly: attached,
        ignoreDiscussion: discussion,
        ignoreThreads: threads,
        users
      });
      setCounter(count);

      if (count < 1) {
        throw new Error(t('No_messages_found_to_prune'));
      }

      dispatchToastMessage({
        type: 'success',
        message: "".concat(count, " ").concat(t('messages_pruned'))
      });
      closeModal();
      reset();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
      closeModal();
    }
  });

  const handleModal = () => {
    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onClose: closeModal,
      onCancel: closeModal,
      onConfirm: handlePrune,
      confirmText: t('Yes_prune_them')
    }, t('Prune_Modal')));
  };

  useEffect(() => {
    if (newerDate) {
      setFromDate(new Date("".concat(newerDate, "T").concat(newerTime || '00:00', ":00").concat(getTimeZoneOffset())));
    }

    if (olderDate) {
      setToDate(new Date("".concat(olderDate, "T").concat(olderTime || '24:00', ":00").concat(getTimeZoneOffset())));
    }
  }, [newerDate, newerTime, olderDate, olderTime]);
  useEffect(() => {
    const exceptPinned = pinned ? " ".concat(t('except_pinned', {})) : '';
    const ifFrom = users.length ? " ".concat(t('if_they_are_from', {
      postProcess: 'sprintf',
      sprintf: [users.map(element => element).join(', ')]
    })) : '';
    const filesOrMessages = t(attached ? 'files' : 'messages', {});

    if (newerDate && olderDate) {
      setCallOutText(t('Prune_Warning_between', {
        postProcess: 'sprintf',
        sprintf: [filesOrMessages, name, moment(fromDate).format('L LT'), moment(toDate).format('L LT')]
      }) + exceptPinned + ifFrom);
    } else if (newerDate) {
      setCallOutText(t('Prune_Warning_after', {
        postProcess: 'sprintf',
        sprintf: [filesOrMessages, name, moment(fromDate).format('L LT')]
      }) + exceptPinned + ifFrom);
    } else if (olderDate) {
      setCallOutText(t('Prune_Warning_before', {
        postProcess: 'sprintf',
        sprintf: [filesOrMessages, name, moment(toDate).format('L LT')]
      }) + exceptPinned + ifFrom);
    } else {
      setCallOutText(t('Prune_Warning_all', {
        postProcess: 'sprintf',
        sprintf: [filesOrMessages, name || (usernames === null || usernames === void 0 ? void 0 : usernames.join(' x '))]
      }) + exceptPinned + ifFrom);
    }

    if (fromDate > toDate) {
      return setValidateText(t('Newer_than_may_not_exceed_Older_than', {
        postProcess: 'sprintf',
        sprintf: []
      }));
    }

    if (isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
      return setValidateText(t('error-invalid-date', {
        postProcess: 'sprintf',
        sprintf: []
      }));
    }

    setValidateText();
  }, [newerDate, olderDate, fromDate, toDate, attached, name, t, pinned, users, usernames]);
  return /*#__PURE__*/React.createElement(PruneMessages, {
    callOutText: callOutText,
    validateText: validateText,
    newerDateTime: {
      date: newerDate,
      time: newerTime
    },
    handleNewerDateTime: {
      date: handleNewerDate,
      time: handleNewerTime
    },
    olderDateTime: {
      date: olderDate,
      time: olderTime
    },
    handleOlderDateTime: {
      date: handleOlderDate,
      time: handleOlderTime
    },
    users: users,
    inclusive: inclusive,
    pinned: pinned,
    discussion: discussion,
    threads: threads,
    attached: attached,
    handleInclusive: handleInclusive,
    handlePinned: handlePinned,
    handleDiscussion: handleDiscussion,
    handleThreads: handleThreads,
    handleAttached: handleAttached,
    onClickClose: onClickClose,
    onClickPrune: handleModal,
    onChangeUsers: onChangeUsers
  });
};

module.exportDefault(PruneMessagesWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/PruneMessages/8fa3b3c3afee37c7b455f804b20c8ea4149d4e5b.map
