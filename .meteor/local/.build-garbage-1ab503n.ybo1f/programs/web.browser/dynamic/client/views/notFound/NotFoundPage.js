function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/notFound/NotFoundPage.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, ButtonGroup, Flex, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Flex(v) {
    Flex = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useRoute;
module.link("../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 2);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

function NotFoundPage() {
  const t = useTranslation();
  const homeRoute = useRoute('home');

  const handleGoToPreviousPageClick = () => {
    window.history.back();
  };

  const handleGoHomeClick = () => {
    homeRoute.push();
  };

  return /*#__PURE__*/React.createElement(Flex.Container, {
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "section",
    width: "full",
    minHeight: "sh",
    textAlign: "center",
    backgroundColor: "neutral-800",
    style: {
      backgroundImage: "url('/images/404.svg')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Margins, {
    all: "x12"
  }, /*#__PURE__*/React.createElement(Box, {
    fontWeight: "p2m",
    fontSize: "x64",
    color: "alternative"
  }, "404"), /*#__PURE__*/React.createElement(Box, {
    role: "heading",
    "aria-level": "1",
    fontScale: "h2",
    color: "alternative"
  }, t('Oops_page_not_found')), /*#__PURE__*/React.createElement(Box, {
    role: "status",
    "aria-label": "Sorry_page_you_requested_does_not_exist_or_was_deleted",
    fontScale: "p2",
    color: "alternative"
  }, t('Sorry_page_you_requested_does_not_exist_or_was_deleted'))), /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "center",
    margin: "x64"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    primary: true,
    onClick: handleGoToPreviousPageClick
  }, t('Return_to_previous_page')), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    primary: true,
    onClick: handleGoHomeClick
  }, t('Return_to_home')))))));
}

module.exportDefault(NotFoundPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/notFound/e1224f695fe07a1315a476ac2499fc5cdd5aed03.map
