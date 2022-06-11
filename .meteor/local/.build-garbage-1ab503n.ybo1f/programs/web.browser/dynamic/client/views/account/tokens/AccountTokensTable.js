function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/tokens/AccountTokensTable.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React, useMemo, useCallback, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 2);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 3);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let useUserId;
module.link("../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 7);
let useResizeInlineBreakpoint;
module.link("../../../hooks/useResizeInlineBreakpoint", {
  useResizeInlineBreakpoint(v) {
    useResizeInlineBreakpoint = v;
  }

}, 8);
let AccountTokensRow;
module.link("./AccountTokensRow", {
  default(v) {
    AccountTokensRow = v;
  }

}, 9);
let InfoModal;
module.link("./InfoModal", {
  default(v) {
    InfoModal = v;
  }

}, 10);

const AccountTokensTable = _ref => {
  let {
    data,
    reload
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const setModal = useSetModal();
  const userId = useUserId();
  const regenerateToken = useMethod('personalAccessTokens:regenerateToken');
  const removeToken = useMethod('personalAccessTokens:removeToken');
  const [ref, isMedium] = useResizeInlineBreakpoint([600], 200);
  const [params, setParams] = useState({
    current: 0,
    itemsPerPage: 25
  });
  const tokensTotal = data && data.success ? data.tokens.length : 0;
  const {
    current,
    itemsPerPage
  } = params;
  const tokens = useMemo(() => {
    if (!data) {
      return null;
    }

    if (!data.success) {
      return [];
    }

    const sliceStart = current > tokensTotal ? tokensTotal - itemsPerPage : current;
    return data.tokens.slice(sliceStart, sliceStart + itemsPerPage);
  }, [current, data, itemsPerPage, tokensTotal]);
  const closeModal = useCallback(() => setModal(null), [setModal]);
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'name'
  }, t('API_Personal_Access_Token_Name')), isMedium && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'createdAt'
  }, t('Created_at')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'lastTokenPart'
  }, t('Last_token_part')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: '2fa'
  }, t('Two Factor Authentication')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'actions'
  })].filter(Boolean), [isMedium, t]);
  const onRegenerate = useCallback(name => {
    const onConfirm = async () => {
      try {
        setModal(null);
        const token = await regenerateToken({
          tokenName: name
        });
        setModal( /*#__PURE__*/React.createElement(InfoModal, {
          title: t('API_Personal_Access_Token_Generated'),
          content: /*#__PURE__*/React.createElement(Box, {
            dangerouslySetInnerHTML: {
              __html: t('API_Personal_Access_Token_Generated_Text_Token_s_UserId_s', {
                token,
                userId
              })
            }
          }),
          confirmText: t('ok'),
          onConfirm: closeModal
        }));
        reload();
      } catch (e) {
        setModal(null);
        dispatchToastMessage({
          type: 'error',
          message: e
        });
      }
    };

    setModal( /*#__PURE__*/React.createElement(InfoModal, {
      title: t('Are_you_sure'),
      content: t('API_Personal_Access_Tokens_Regenerate_Modal'),
      confirmText: t('API_Personal_Access_Tokens_Regenerate_It'),
      onConfirm: onConfirm,
      cancelText: t('Cancel'),
      onClose: closeModal
    }));
  }, [closeModal, dispatchToastMessage, regenerateToken, reload, setModal, t, userId]);
  const onRemove = useCallback(name => {
    const onConfirm = async () => {
      try {
        await removeToken({
          tokenName: name
        });
        dispatchToastMessage({
          type: 'success',
          message: t('Removed')
        });
        reload();
        closeModal();
      } catch (e) {
        dispatchToastMessage({
          type: 'error',
          message: e
        });
      }
    };

    setModal( /*#__PURE__*/React.createElement(InfoModal, {
      title: t('Are_you_sure'),
      content: t('API_Personal_Access_Tokens_Remove_Modal'),
      confirmText: t('Yes'),
      onConfirm: onConfirm,
      cancelText: t('Cancel'),
      onClose: closeModal
    }));
  }, [closeModal, dispatchToastMessage, reload, removeToken, setModal, t]);
  return /*#__PURE__*/React.createElement(GenericTable, {
    ref: ref,
    header: header,
    results: tokens,
    total: tokensTotal,
    setParams: setParams,
    params: params
  }, useCallback(props => /*#__PURE__*/React.createElement(AccountTokensRow, _extends({
    onRegenerate: onRegenerate,
    onRemove: onRemove,
    isMedium: isMedium
  }, props)), [isMedium, onRegenerate, onRemove]));
};

module.exportDefault(AccountTokensTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/tokens/cdc6bd52aca8406bd8ae76ef0c32b5a09e5b8b81.map
