function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/groups/OAuthGroupPage.js                                                                //
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
let s;
module.link("underscore.string", {
  default(v) {
    s = v;
  }

}, 2);
let useEditableSettingsGroupSections;
module.link("../../../../contexts/EditableSettingsContext", {
  useEditableSettingsGroupSections(v) {
    useEditableSettingsGroupSections = v;
  }

}, 3);
let useModal;
module.link("../../../../contexts/ModalContext", {
  useModal(v) {
    useModal = v;
  }

}, 4);
let useAbsoluteUrl, useMethod;
module.link("../../../../contexts/ServerContext", {
  useAbsoluteUrl(v) {
    useAbsoluteUrl = v;
  },

  useMethod(v) {
    useMethod = v;
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
let GroupPage;
module.link("../GroupPage", {
  default(v) {
    GroupPage = v;
  }

}, 8);
let Section;
module.link("../Section", {
  default(v) {
    Section = v;
  }

}, 9);

function OAuthGroupPage(_ref) {
  let {
    _id
  } = _ref,
      group = _objectWithoutProperties(_ref, _excluded);

  const sections = useEditableSettingsGroupSections(_id);
  const solo = sections.length === 1;
  const t = useTranslation();

  const sectionIsCustomOAuth = sectionName => sectionName && /^Custom OAuth:\s.+/.test(sectionName);

  const getAbsoluteUrl = useAbsoluteUrl();

  const callbackURL = sectionName => {
    const id = s.strRight(sectionName, 'Custom OAuth: ').toLowerCase();
    return getAbsoluteUrl("_oauth/".concat(id));
  };

  const dispatchToastMessage = useToastMessageDispatch();
  const refreshOAuthService = useMethod('refreshOAuthService');
  const addOAuthService = useMethod('addOAuthService');
  const removeOAuthService = useMethod('removeOAuthService');
  const modal = useModal();

  const handleRefreshOAuthServicesButtonClick = async () => {
    dispatchToastMessage({
      type: 'info',
      message: t('Refreshing')
    });

    try {
      await refreshOAuthService();
      dispatchToastMessage({
        type: 'success',
        message: t('Done')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  };

  const handleAddCustomOAuthButtonClick = () => {
    modal.open({
      title: t('Add_custom_oauth'),
      text: t('Give_a_unique_name_for_the_custom_oauth'),
      type: 'input',
      showCancelButton: true,
      closeOnConfirm: true,
      inputPlaceholder: t('Custom_oauth_unique_name')
    }, async inputValue => {
      if (inputValue === false) {
        return false;
      }

      if (inputValue === '') {
        modal.showInputError(t('Name_cant_be_empty'));
        return false;
      }

      try {
        await addOAuthService(inputValue);
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }
    });
  };

  return /*#__PURE__*/React.createElement(GroupPage, _extends({
    _id: _id
  }, group, {
    headerButtons: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: handleRefreshOAuthServicesButtonClick
    }, t('Refresh_oauth_services')), /*#__PURE__*/React.createElement(Button, {
      onClick: handleAddCustomOAuthButtonClick
    }, t('Add_custom_oauth')))
  }), sections.map(sectionName => {
    if (sectionIsCustomOAuth(sectionName)) {
      const id = s.strRight(sectionName, 'Custom OAuth: ').toLowerCase();

      const handleRemoveCustomOAuthButtonClick = () => {
        modal.open({
          title: t('Are_you_sure'),
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: t('Yes_delete_it'),
          cancelButtonText: t('Cancel'),
          closeOnConfirm: true
        }, async () => {
          try {
            await removeOAuthService(id);
          } catch (error) {
            dispatchToastMessage({
              type: 'error',
              message: error
            });
          }
        });
      };

      return /*#__PURE__*/React.createElement(Section, {
        key: sectionName,
        groupId: _id,
        help: /*#__PURE__*/React.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: t('Custom_oauth_helper', callbackURL(sectionName))
          }
        }),
        sectionName: sectionName,
        solo: solo
      }, /*#__PURE__*/React.createElement("div", {
        className: "submit"
      }, /*#__PURE__*/React.createElement(Button, {
        danger: true,
        onClick: handleRemoveCustomOAuthButtonClick
      }, t('Remove_custom_oauth'))));
    }

    return /*#__PURE__*/React.createElement(Section, {
      key: sectionName,
      groupId: _id,
      sectionName: sectionName,
      solo: solo
    });
  }));
}

module.exportDefault( /*#__PURE__*/memo(OAuthGroupPage));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/groups/3ca137cda1d784dcacb38a16c80f93d039d68ef4.map
