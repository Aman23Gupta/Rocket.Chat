function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/contextualBar/CannedResponse/WrapCannedResponse.tsx                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let usePermission;
module.link("../../../../../../client/contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 1);
let useSetModal;
module.link("../../../../../../client/contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 2);
let CreateCannedResponse;
module.link("../../CannedResponse/modals", {
  default(v) {
    CreateCannedResponse = v;
  }

}, 3);
let CannedResponse;
module.link("./CannedResponse", {
  default(v) {
    CannedResponse = v;
  }

}, 4);

const WrapCannedResponse = _ref => {
  let {
    cannedItem: {
      _id,
      departmentName,
      departmentId,
      shortcut,
      tags,
      scope,
      text
    },
    onClickBack,
    onClickUse,
    reload
  } = _ref;
  const setModal = useSetModal();

  const onClickEdit = () => {
    setModal( /*#__PURE__*/React.createElement(CreateCannedResponse, {
      data: {
        _id,
        departmentId,
        shortcut,
        tags,
        scope,
        text
      },
      reloadCannedList: reload
    }));
  };

  const hasManagerPermission = usePermission('view-all-canned-responses');
  const hasMonitorPermission = usePermission('save-department-canned-responses');
  const canEdit = hasManagerPermission || hasMonitorPermission && scope !== 'global' || scope === 'user';
  return /*#__PURE__*/React.createElement(CannedResponse, {
    canEdit: canEdit,
    data: {
      departmentName,
      shortcut,
      tags,
      scope,
      text
    },
    onClickBack: onClickBack,
    onClickEdit: onClickEdit,
    onClickUse: e => {
      onClickUse(e, text);
    }
  });
};

module.exportDefault( /*#__PURE__*/memo(WrapCannedResponse));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/contextualBar/CannedResponse/fed6b724df29b1b1bad36a8a1241a9943bbe8770.map
