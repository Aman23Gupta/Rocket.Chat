function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Announcement/Announcement.tsx                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let MarkdownText;
module.link("../../../components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 2);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 3);
let AnnouncementComponent;
module.link("./AnnouncementComponent", {
  default(v) {
    AnnouncementComponent = v;
  }

}, 4);
let AnnouncementModal;
module.link("./AnnouncementModal", {
  default(v) {
    AnnouncementModal = v;
  }

}, 5);

const Announcement = _ref => {
  let {
    announcement,
    announcementDetails
  } = _ref;
  const setModal = useSetModal();
  const closeModal = useMutableCallback(() => setModal(null));

  const handleClick = e => {
    var _window, _window$getSelection;

    if (e.target.href) {
      return;
    }

    if (((_window = window) === null || _window === void 0 ? void 0 : (_window$getSelection = _window.getSelection()) === null || _window$getSelection === void 0 ? void 0 : _window$getSelection.toString()) !== '') {
      return;
    }

    announcementDetails ? announcementDetails() : setModal( /*#__PURE__*/React.createElement(AnnouncementModal, {
      onClose: closeModal
    }, announcement));
  };

  return announcement ? /*#__PURE__*/React.createElement(AnnouncementComponent, {
    onClickOpen: e => handleClick(e)
  }, /*#__PURE__*/React.createElement(MarkdownText, {
    variant: "inlineWithoutBreaks",
    content: announcement,
    withTruncatedText: true
  })) : null;
};

module.exportDefault(Announcement);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Announcement/9bad319250036e695ba56deaebf2d3758b383fe1.map
