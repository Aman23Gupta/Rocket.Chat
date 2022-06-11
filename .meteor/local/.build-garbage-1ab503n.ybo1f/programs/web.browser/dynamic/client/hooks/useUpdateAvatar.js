function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useUpdateAvatar.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  useUpdateAvatar: () => useUpdateAvatar
});
let useMemo, useCallback;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 0);
let useMethod;
module.link("../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 1);
let useToastMessageDispatch;
module.link("../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 2);
let useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useEndpointAction;
module.link("./useEndpointAction", {
  useEndpointAction(v) {
    useEndpointAction = v;
  }

}, 4);
let useEndpointUpload;
module.link("./useEndpointUpload", {
  useEndpointUpload(v) {
    useEndpointUpload = v;
  }

}, 5);

const useUpdateAvatar = (avatarObj, userId) => {
  const t = useTranslation();
  const avatarUrl = avatarObj === null || avatarObj === void 0 ? void 0 : avatarObj.avatarUrl;
  const successText = t('Avatar_changed_successfully');
  const setAvatarFromService = useMethod('setAvatarFromService');
  const dispatchToastMessage = useToastMessageDispatch();
  const saveAvatarQuery = useMemo(() => _objectSpread({
    userId
  }, avatarUrl && {
    avatarUrl
  }), [avatarUrl, userId]);
  const resetAvatarQuery = useMemo(() => ({
    userId
  }), [userId]);
  const saveAvatarAction = useEndpointUpload('users.setAvatar', saveAvatarQuery, successText);
  const saveAvatarUrlAction = useEndpointAction('POST', 'users.setAvatar', saveAvatarQuery, successText);
  const resetAvatarAction = useEndpointAction('POST', 'users.resetAvatar', resetAvatarQuery, successText);
  const updateAvatar = useCallback(async () => {
    if (avatarObj === 'reset') {
      return resetAvatarAction();
    }

    if (avatarObj.avatarUrl) {
      return saveAvatarUrlAction();
    }

    if (avatarObj.service) {
      const {
        blob,
        contentType,
        service
      } = avatarObj;

      try {
        await setAvatarFromService(blob, contentType, service);
        dispatchToastMessage({
          type: 'success',
          message: successText
        });
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      return;
    }

    if (avatarObj instanceof FormData) {
      avatarObj.set('userId', userId);
      return saveAvatarAction(avatarObj);
    }
  }, [avatarObj, dispatchToastMessage, resetAvatarAction, saveAvatarAction, saveAvatarUrlAction, setAvatarFromService, successText, userId]);
  return updateAvatar;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/931d3ffa8831c6a6f6a2ba3913aa2e1463b4f3e6.map
