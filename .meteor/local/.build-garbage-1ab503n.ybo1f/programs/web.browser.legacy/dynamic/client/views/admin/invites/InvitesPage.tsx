function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/invites/InvitesPage.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 1);
var useMediaQuery;
module.link("@rocket.chat/fuselage-hooks", {
  useMediaQuery: function (v) {
    useMediaQuery = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var GenericModal;
module.link("../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 2);
var GenericTable, GenericTableBody, GenericTableHeader, GenericTableHeaderCell, GenericTableLoadingTable;
module.link("../../../components/GenericTable", {
  GenericTable: function (v) {
    GenericTable = v;
  },
  GenericTableBody: function (v) {
    GenericTableBody = v;
  },
  GenericTableHeader: function (v) {
    GenericTableHeader = v;
  },
  GenericTableHeaderCell: function (v) {
    GenericTableHeaderCell = v;
  },
  GenericTableLoadingTable: function (v) {
    GenericTableLoadingTable = v;
  }
}, 3);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 4);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 8);
var AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 9);
var InviteRow;
module.link("./InviteRow", {
  "default": function (v) {
    InviteRow = v;
  }
}, 10);

var InvitesPage = function () {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var setModal = useSetModal();

  var _useEndpointData = useEndpointData('listInvites'),
      phase = _useEndpointData.phase,
      value = _useEndpointData.value,
      reload = _useEndpointData.reload;

  var onRemove = function (removeInvite) {
    var confirmRemove = function () {
      function _callee() {
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _regeneratorRuntime.awrap(removeInvite());

                case 3:
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Invite_removed')
                  });
                  reload();
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);

                  if (typeof _context.t0 === 'string' || _context.t0 instanceof Error) {
                    dispatchToastMessage({
                      type: 'error',
                      message: _context.t0
                    });
                  }

                case 10:
                  _context.prev = 10;
                  setModal();
                  return _context.finish(10);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[0, 7, 10, 13]], Promise);
      }

      return _callee;
    }();

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      title: t('Are_you_sure'),
      children: t('Are_you_sure_you_want_to_delete_this_record'),
      variant: "danger",
      confirmText: t('Yes'),
      cancelText: t('No'),
      onClose: function () {
        return setModal();
      },
      onCancel: function () {
        return setModal();
      },
      onConfirm: confirmRemove
    }));
  };

  var notSmall = useMediaQuery('(min-width: 768px)');
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Invites')
  }), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(GenericTable, null, /*#__PURE__*/React.createElement(GenericTableHeader, null, /*#__PURE__*/React.createElement(GenericTableHeaderCell, {
    w: notSmall ? '20%' : '80%'
  }, t('Token')), notSmall && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTableHeaderCell, {
    w: "35%"
  }, t('Created_at')), /*#__PURE__*/React.createElement(GenericTableHeaderCell, {
    w: "20%"
  }, t('Expiration')), /*#__PURE__*/React.createElement(GenericTableHeaderCell, {
    w: "10%"
  }, t('Uses')), /*#__PURE__*/React.createElement(GenericTableHeaderCell, {
    w: "10%"
  }, t('Uses_left'))), /*#__PURE__*/React.createElement(GenericTableHeaderCell, null)), /*#__PURE__*/React.createElement(GenericTableBody, null, phase === AsyncStatePhase.LOADING && /*#__PURE__*/React.createElement(GenericTableLoadingTable, {
    headerCells: notSmall ? 4 : 1
  }), phase === AsyncStatePhase.RESOLVED && Array.isArray(value) && value.map(function (invite) {
    return /*#__PURE__*/React.createElement(InviteRow, _extends({
      key: invite._id
    }, invite, {
      onRemove: onRemove
    }));
  })))));
};

module.exportDefault(InvitesPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/invites/23a6fd6321f26c72a6ec625f19fc6d0127040164.map
