function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/mailer/MailerUnsubscriptionPage.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["resolve", "reject"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Box, Callout, Throbber;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Callout(v) {
    Callout = v;
  },

  Throbber(v) {
    Throbber = v;
  }

}, 0);
let React, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);
let useRouteParameter;
module.link("../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 2);
let useAbsoluteUrl, useMethod;
module.link("../../contexts/ServerContext", {
  useAbsoluteUrl(v) {
    useAbsoluteUrl = v;
  },

  useMethod(v) {
    useMethod = v;
  }

}, 3);
let useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 4);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let AsyncStatePhase, useAsyncState;
module.link("../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  },

  useAsyncState(v) {
    useAsyncState = v;
  }

}, 6);

const useMailerUnsubscriptionState = () => {
  const _useAsyncState = useAsyncState(),
        {
    resolve,
    reject
  } = _useAsyncState,
        unsubscribedState = _objectWithoutProperties(_useAsyncState, _excluded);

  const unsubscribe = useMethod('Mailer:unsubscribe');

  const _id = useRouteParameter('_id');

  const createdAt = useRouteParameter('createdAt');
  const dispatchToastMessage = useToastMessageDispatch();
  useEffect(() => {
    const doUnsubscribe = async (_id, createdAt) => {
      try {
        await unsubscribe(_id, createdAt);
        resolve(true);
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
        reject(error);
      }
    };

    if (!_id || !createdAt) {
      return;
    }

    doUnsubscribe(_id, createdAt);
  }, [resolve, reject, unsubscribe, _id, createdAt, dispatchToastMessage]);
  return unsubscribedState;
};

const MailerUnsubscriptionPage = () => {
  const {
    phase,
    error
  } = useMailerUnsubscriptionState();
  const t = useTranslation();
  const absoluteUrl = useAbsoluteUrl();
  return /*#__PURE__*/React.createElement("section", {
    className: "rc-old full-page color-tertiary-font-color"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: absoluteUrl('/')
  }, /*#__PURE__*/React.createElement("img", {
    src: absoluteUrl('/images/logo/logo.svg')
  }))), /*#__PURE__*/React.createElement(Box, {
    color: "default",
    marginInline: "auto",
    marginBlock: 16,
    maxWidth: 800
  }, phase === AsyncStatePhase.LOADING && /*#__PURE__*/React.createElement(Throbber, {
    disabled: true
  }) || phase === AsyncStatePhase.REJECTED && /*#__PURE__*/React.createElement(Callout, {
    type: "danger",
    title: error === null || error === void 0 ? void 0 : error.message
  }) || phase === AsyncStatePhase.RESOLVED && /*#__PURE__*/React.createElement(Callout, {
    type: "success",
    title: t('You_have_successfully_unsubscribed')
  }))));
};

module.exportDefault(MailerUnsubscriptionPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/mailer/063c19e488255922c78539a8e0b438bbda888dab.map
