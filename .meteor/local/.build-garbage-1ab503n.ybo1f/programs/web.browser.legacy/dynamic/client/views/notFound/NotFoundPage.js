function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/notFound/NotFoundPage.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Button, ButtonGroup, Flex, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Flex: function (v) {
    Flex = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useRoute;
module.link("../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 2);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

function NotFoundPage() {
  var t = useTranslation();
  var homeRoute = useRoute('home');

  var handleGoToPreviousPageClick = function () {
    window.history.back();
  };

  var handleGoHomeClick = function () {
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
//# sourceMappingURL=/dynamic/client/views/notFound/f3e6f668690e8dc8e9aec57f7ee5c657bb5860c6.map
