function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/groups/AssetsGroupPage.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["_id"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Button;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let useEditableSettingsGroupSections;
module.link("../../../../contexts/EditableSettingsContext", {
  useEditableSettingsGroupSections(v) {
    useEditableSettingsGroupSections = v;
  }

}, 2);
let useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 3);
let useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 4);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let GroupPage;
module.link("../GroupPage", {
  default(v) {
    GroupPage = v;
  }

}, 6);
let Section;
module.link("../Section", {
  default(v) {
    Section = v;
  }

}, 7);

function AssetsGroupPage(_ref) {
  let {
    _id
  } = _ref,
      group = _objectWithoutProperties(_ref, _excluded);

  const sections = useEditableSettingsGroupSections(_id);
  const solo = sections.length === 1;
  const t = useTranslation();
  const refreshClients = useMethod('refreshClients');
  const dispatchToastMessage = useToastMessageDispatch();

  const handleApplyAndRefreshAllClientsButtonClick = async () => {
    try {
      await refreshClients();
      dispatchToastMessage({
        type: 'success',
        message: t('Clients_will_refresh_in_a_few_seconds')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  };

  return /*#__PURE__*/React.createElement(GroupPage, _extends({
    _id: _id
  }, group, {
    headerButtons: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: handleApplyAndRefreshAllClientsButtonClick
    }, t('Apply_and_refresh_all_clients')))
  }), sections.map(sectionName => /*#__PURE__*/React.createElement(Section, {
    key: sectionName,
    groupId: _id,
    hasReset: false,
    sectionName: sectionName,
    solo: solo
  })));
}

module.exportDefault( /*#__PURE__*/memo(AssetsGroupPage));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/groups/964865d936209260bb5625f849bf3cac649f15ad.map
