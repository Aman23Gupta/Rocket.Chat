function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/BusinessHoursPage.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Button, ButtonGroup, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, lazy, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  lazy: function (v) {
    lazy = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);

var BusinessHoursPage = function () {
  var t = useTranslation();
  var router = useRoute('omnichannel-businessHours');
  var Table = useMemo(function () {
    return /*#__PURE__*/lazy(function () {
      return module.dynamicImport('../../../../ee/client/omnichannel/BusinessHoursTableContainer');
    });
  }, []);
  var handleNew = useMutableCallback(function () {
    router.push({
      context: 'new'
    });
  });
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Business_Hours')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleNew
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t('New')))), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(Table, null)));
};

module.exportDefault(BusinessHoursPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/00107ed657f49c95349731fa5662efb32b9010d6.map
