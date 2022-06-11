function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/facebook/FacebookPageContainer.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Callout;
module.link("@rocket.chat/fuselage", {
  Callout(v) {
    Callout = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let PageSkeleton;
module.link("../../../components/PageSkeleton", {
  default(v) {
    PageSkeleton = v;
  }

}, 4);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
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
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 8);
let useMethodData;
module.link("../../../hooks/useMethodData", {
  useMethodData(v) {
    useMethodData = v;
  }

}, 9);
let FacebookPage;
module.link("./FacebookPage", {
  default(v) {
    FacebookPage = v;
  }

}, 10);
const initialStateArgs = [{
  action: 'initialState'
}];
const listPageArgs = [{
  action: 'list-pages'
}];

const FacebookPageContainer = () => {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const {
    value: initialStateData,
    phase: state,
    reload: reloadInitial
  } = useMethodData('livechat:facebook', initialStateArgs);
  const {
    value: pagesData,
    phase: listState,
    reload: reloadData
  } = useMethodData('livechat:facebook', listPageArgs);
  const {
    enabled,
    hasToken
  } = initialStateData || {
    enabled: false,
    hasToken: false
  };
  const {
    pages
  } = pagesData || {
    pages: []
  };
  const livechatFacebook = useMethod('livechat:facebook');
  const onToggle = useMutableCallback(async (id, isSubscribed, setSubscribed) => {
    setSubscribed(!isSubscribed);

    try {
      const action = isSubscribed ? 'unsubscribe' : 'subscribe';
      await livechatFacebook({
        action,
        page: id
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
      setSubscribed(isSubscribed);
    }
  });
  const onDisable = useMutableCallback(async () => {
    try {
      await livechatFacebook({
        action: 'disable'
      });
      dispatchToastMessage({
        type: 'success',
        message: t('Integration_disabled')
      });
      reloadInitial();
      reloadData();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });

  const openOauthWindow = (url, callback) => {
    const oauthWindow = window.open(url, 'facebook-integration-oauth', 'width=600,height=400');
    const checkInterval = setInterval(() => {
      if (oauthWindow !== null && oauthWindow !== void 0 && oauthWindow.closed) {
        clearInterval(checkInterval);
        callback();
      }
    }, 300);
  };

  const onEnable = useMutableCallback(async () => {
    try {
      const result = await livechatFacebook({
        action: 'enable'
      });

      if (result !== null && result !== void 0 && result.url) {
        openOauthWindow(result === null || result === void 0 ? void 0 : result.url, () => {
          onEnable();
        });
      } else {
        reloadInitial();
        reloadData();
      }
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });

  if (state === AsyncStatePhase.LOADING || listState === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(PageSkeleton, null);
  }

  if (state === AsyncStatePhase.REJECTED) {
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
      title: t('Edit_Custom_Field')
    }), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Callout, {
      type: "danger"
    }, t('Error'))));
  }

  if (enabled && hasToken && listState === AsyncStatePhase.REJECTED) {
    onEnable();
  }

  return /*#__PURE__*/React.createElement(FacebookPage, {
    pages: pages,
    enabled: enabled,
    hasToken: hasToken,
    onToggle: onToggle,
    onRefresh: reloadData,
    onDisable: onDisable,
    onEnable: onEnable
  });
};

module.exportDefault(FacebookPageContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/facebook/82a56f4b31e175c29655cb887b0e1e4681789629.map
