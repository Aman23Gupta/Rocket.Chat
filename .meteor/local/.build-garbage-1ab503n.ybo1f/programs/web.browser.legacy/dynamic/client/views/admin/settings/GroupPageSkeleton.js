function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/GroupPageSkeleton.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Accordion, Box, Button, ButtonGroup, Skeleton;
module.link("@rocket.chat/fuselage", {
  Accordion: function (v) {
    Accordion = v;
  },
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var Section;
module.link("./Section", {
  "default": function (v) {
    Section = v;
  }
}, 4);

function GroupPageSkeleton() {
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: /*#__PURE__*/React.createElement(Skeleton, {
      style: {
        width: '20rem'
      }
    })
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    children: t('Save_changes'),
    disabled: true,
    primary: true
  }))), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(Box, {
    style: useMemo(function () {
      return {
        margin: '0 auto',
        width: '100%',
        maxWidth: '590px'
      };
    }, [])
  }, /*#__PURE__*/React.createElement(Box, {
    is: "p",
    color: "hint",
    fontScale: "p2"
  }, /*#__PURE__*/React.createElement(Skeleton, null), /*#__PURE__*/React.createElement(Skeleton, null), /*#__PURE__*/React.createElement(Skeleton, {
    width: "75%"
  })), /*#__PURE__*/React.createElement(Accordion, {
    className: "page-settings"
  }, /*#__PURE__*/React.createElement(Section.Skeleton, null)))));
}

module.exportDefault(GroupPageSkeleton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/c7c05ce5030f7316f47abaf5095cee406a929667.map
