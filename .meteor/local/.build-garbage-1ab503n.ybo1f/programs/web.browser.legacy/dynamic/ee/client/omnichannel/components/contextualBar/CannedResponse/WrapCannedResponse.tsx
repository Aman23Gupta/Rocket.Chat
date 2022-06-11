function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/contextualBar/CannedResponse/WrapCannedResponse.tsx                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var usePermission;
module.link("../../../../../../client/contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 1);
var useSetModal;
module.link("../../../../../../client/contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 2);
var CreateCannedResponse;
module.link("../../CannedResponse/modals", {
  "default": function (v) {
    CreateCannedResponse = v;
  }
}, 3);
var CannedResponse;
module.link("./CannedResponse", {
  "default": function (v) {
    CannedResponse = v;
  }
}, 4);

var WrapCannedResponse = function (_ref) {
  var _ref$cannedItem = _ref.cannedItem,
      _id = _ref$cannedItem._id,
      departmentName = _ref$cannedItem.departmentName,
      departmentId = _ref$cannedItem.departmentId,
      shortcut = _ref$cannedItem.shortcut,
      tags = _ref$cannedItem.tags,
      scope = _ref$cannedItem.scope,
      text = _ref$cannedItem.text,
      onClickBack = _ref.onClickBack,
      onClickUse = _ref.onClickUse,
      reload = _ref.reload;
  var setModal = useSetModal();

  var onClickEdit = function () {
    setModal( /*#__PURE__*/React.createElement(CreateCannedResponse, {
      data: {
        _id: _id,
        departmentId: departmentId,
        shortcut: shortcut,
        tags: tags,
        scope: scope,
        text: text
      },
      reloadCannedList: reload
    }));
  };

  var hasManagerPermission = usePermission('view-all-canned-responses');
  var hasMonitorPermission = usePermission('save-department-canned-responses');
  var canEdit = hasManagerPermission || hasMonitorPermission && scope !== 'global' || scope === 'user';
  return /*#__PURE__*/React.createElement(CannedResponse, {
    canEdit: canEdit,
    data: {
      departmentName: departmentName,
      shortcut: shortcut,
      tags: tags,
      scope: scope,
      text: text
    },
    onClickBack: onClickBack,
    onClickEdit: onClickEdit,
    onClickUse: function (e) {
      onClickUse(e, text);
    }
  });
};

module.exportDefault( /*#__PURE__*/memo(WrapCannedResponse));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/contextualBar/CannedResponse/1dd877ab16a73fa2b6e1beec50254c7ca254fd0d.map
