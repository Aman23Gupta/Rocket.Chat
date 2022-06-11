function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/tokens/AccountTokensTable.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, useMemo, useCallback, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 2);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 3);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var useUserId;
module.link("../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 7);
var useResizeInlineBreakpoint;
module.link("../../../hooks/useResizeInlineBreakpoint", {
  useResizeInlineBreakpoint: function (v) {
    useResizeInlineBreakpoint = v;
  }
}, 8);
var AccountTokensRow;
module.link("./AccountTokensRow", {
  "default": function (v) {
    AccountTokensRow = v;
  }
}, 9);
var InfoModal;
module.link("./InfoModal", {
  "default": function (v) {
    InfoModal = v;
  }
}, 10);

var AccountTokensTable = function (_ref) {
  var data = _ref.data,
      reload = _ref.reload;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var setModal = useSetModal();
  var userId = useUserId();
  var regenerateToken = useMethod('personalAccessTokens:regenerateToken');
  var removeToken = useMethod('personalAccessTokens:removeToken');

  var _useResizeInlineBreak = useResizeInlineBreakpoint([600], 200),
      _useResizeInlineBreak2 = _slicedToArray(_useResizeInlineBreak, 2),
      ref = _useResizeInlineBreak2[0],
      isMedium = _useResizeInlineBreak2[1];

  var _useState = useState({
    current: 0,
    itemsPerPage: 25
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var tokensTotal = data && data.success ? data.tokens.length : 0;
  var current = params.current,
      itemsPerPage = params.itemsPerPage;
  var tokens = useMemo(function () {
    if (!data) {
      return null;
    }

    if (!data.success) {
      return [];
    }

    var sliceStart = current > tokensTotal ? tokensTotal - itemsPerPage : current;
    return data.tokens.slice(sliceStart, sliceStart + itemsPerPage);
  }, [current, data, itemsPerPage, tokensTotal]);
  var closeModal = useCallback(function () {
    return setModal(null);
  }, [setModal]);
  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'name'
    }, t('API_Personal_Access_Token_Name')), isMedium && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'createdAt'
    }, t('Created_at')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'lastTokenPart'
    }, t('Last_token_part')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: '2fa'
    }, t('Two Factor Authentication')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'actions'
    })].filter(Boolean);
  }, [isMedium, t]);
  var onRegenerate = useCallback(function (name) {
    var onConfirm = function () {
      function _callee() {
        var token;
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  setModal(null);
                  _context.next = 4;
                  return _regeneratorRuntime.awrap(regenerateToken({
                    tokenName: name
                  }));

                case 4:
                  token = _context.sent;
                  setModal( /*#__PURE__*/React.createElement(InfoModal, {
                    title: t('API_Personal_Access_Token_Generated'),
                    content: /*#__PURE__*/React.createElement(Box, {
                      dangerouslySetInnerHTML: {
                        __html: t('API_Personal_Access_Token_Generated_Text_Token_s_UserId_s', {
                          token: token,
                          userId: userId
                        })
                      }
                    }),
                    confirmText: t('ok'),
                    onConfirm: closeModal
                  }));
                  reload();
                  _context.next = 13;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](0);
                  setModal(null);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context.t0
                  });

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[0, 9]], Promise);
      }

      return _callee;
    }();

    setModal( /*#__PURE__*/React.createElement(InfoModal, {
      title: t('Are_you_sure'),
      content: t('API_Personal_Access_Tokens_Regenerate_Modal'),
      confirmText: t('API_Personal_Access_Tokens_Regenerate_It'),
      onConfirm: onConfirm,
      cancelText: t('Cancel'),
      onClose: closeModal
    }));
  }, [closeModal, dispatchToastMessage, regenerateToken, reload, setModal, t, userId]);
  var onRemove = useCallback(function (name) {
    var onConfirm = function () {
      function _callee2() {
        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _regeneratorRuntime.awrap(removeToken({
                    tokenName: name
                  }));

                case 3:
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Removed')
                  });
                  reload();
                  closeModal();
                  _context2.next = 11;
                  break;

                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context2.t0
                  });

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, [[0, 8]], Promise);
      }

      return _callee2;
    }();

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
  }, useCallback(function (props) {
    return /*#__PURE__*/React.createElement(AccountTokensRow, _extends({
      onRegenerate: onRegenerate,
      onRemove: onRemove,
      isMedium: isMedium
    }, props));
  }, [isMedium, onRegenerate, onRemove]));
};

module.exportDefault(AccountTokensTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/tokens/218ba04f67b64897df36bc42f647d1742c7c5fd4.map
