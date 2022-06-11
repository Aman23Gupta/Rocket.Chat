function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/invites/InvitesPage.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let useMediaQuery;
module.link("@rocket.chat/fuselage-hooks", {
  useMediaQuery(v) {
    useMediaQuery = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let GenericModal;
module.link("../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 2);
let GenericTable, GenericTableBody, GenericTableHeader, GenericTableHeaderCell, GenericTableLoadingTable;
module.link("../../../components/GenericTable", {
  GenericTable(v) {
    GenericTable = v;
  },

  GenericTableBody(v) {
    GenericTableBody = v;
  },

  GenericTableHeader(v) {
    GenericTableHeader = v;
  },

  GenericTableHeaderCell(v) {
    GenericTableHeaderCell = v;
  },

  GenericTableLoadingTable(v) {
    GenericTableLoadingTable = v;
  }

}, 3);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 4);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 8);
let AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 9);
let InviteRow;
module.link("./InviteRow", {
  default(v) {
    InviteRow = v;
  }

}, 10);

const InvitesPage = () => {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const setModal = useSetModal();
  const {
    phase,
    value,
    reload
  } = useEndpointData('listInvites');

  const onRemove = removeInvite => {
    const confirmRemove = async () => {
      try {
        await removeInvite();
        dispatchToastMessage({
          type: 'success',
          message: t('Invite_removed')
        });
        reload();
      } catch (error) {
        if (typeof error === 'string' || error instanceof Error) {
          dispatchToastMessage({
            type: 'error',
            message: error
          });
        }
      } finally {
        setModal();
      }
    };

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      title: t('Are_you_sure'),
      children: t('Are_you_sure_you_want_to_delete_this_record'),
      variant: "danger",
      confirmText: t('Yes'),
      cancelText: t('No'),
      onClose: () => setModal(),
      onCancel: () => setModal(),
      onConfirm: confirmRemove
    }));
  };

  const notSmall = useMediaQuery('(min-width: 768px)');
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
  }), phase === AsyncStatePhase.RESOLVED && Array.isArray(value) && value.map(invite => /*#__PURE__*/React.createElement(InviteRow, _extends({
    key: invite._id
  }, invite, {
    onRemove: onRemove
  })))))));
};

module.exportDefault(InvitesPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/invites/c8f905fa3b4fe747d0ccf8ba078a6b2f790677c1.map
