function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/GroupPageSkeleton.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Accordion, Box, Button, ButtonGroup, Skeleton;
module.link("@rocket.chat/fuselage", {
  Accordion(v) {
    Accordion = v;
  },

  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Skeleton(v) {
    Skeleton = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let Section;
module.link("./Section", {
  default(v) {
    Section = v;
  }

}, 4);

function GroupPageSkeleton() {
  const t = useTranslation();
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
    style: useMemo(() => ({
      margin: '0 auto',
      width: '100%',
      maxWidth: '590px'
    }), [])
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
//# sourceMappingURL=/dynamic/client/views/admin/settings/138d8c4c8ce9263696f36b4d4908af3a3d856d75.map
