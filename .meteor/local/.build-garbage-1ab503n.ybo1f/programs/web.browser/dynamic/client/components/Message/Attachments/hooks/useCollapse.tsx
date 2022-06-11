function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/hooks/useCollapse.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useCollapse: () => useCollapse
});
let useToggle;
module.link("@rocket.chat/fuselage-hooks", {
  useToggle(v) {
    useToggle = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let Attachment;
module.link("../Attachment", {
  default(v) {
    Attachment = v;
  }

}, 2);
let useAttachmentIsCollapsedByDefault;
module.link("../context/AttachmentContext", {
  useAttachmentIsCollapsedByDefault(v) {
    useAttachmentIsCollapsedByDefault = v;
  }

}, 3);

const useCollapse = attachmentCollapsed => {
  const collpaseByDefault = useAttachmentIsCollapsedByDefault();
  const [collapsed, toogleCollapsed] = useToggle(collpaseByDefault || attachmentCollapsed);
  return [collapsed, /*#__PURE__*/React.createElement(Attachment.Collapse, {
    collapsed: collapsed,
    onClick: toogleCollapsed
  })];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/hooks/3ecf7e9a70404d6031ade46290a3930c6b74a49a.map
