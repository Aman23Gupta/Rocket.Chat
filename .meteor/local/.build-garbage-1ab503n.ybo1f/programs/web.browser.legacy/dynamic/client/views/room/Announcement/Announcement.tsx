function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Announcement/Announcement.tsx                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var MarkdownText;
module.link("../../../components/MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 2);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 3);
var AnnouncementComponent;
module.link("./AnnouncementComponent", {
  "default": function (v) {
    AnnouncementComponent = v;
  }
}, 4);
var AnnouncementModal;
module.link("./AnnouncementModal", {
  "default": function (v) {
    AnnouncementModal = v;
  }
}, 5);

var Announcement = function (_ref) {
  var announcement = _ref.announcement,
      announcementDetails = _ref.announcementDetails;
  var setModal = useSetModal();
  var closeModal = useMutableCallback(function () {
    return setModal(null);
  });

  var handleClick = function (e) {
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
    onClickOpen: function (e) {
      return handleClick(e);
    }
  }, /*#__PURE__*/React.createElement(MarkdownText, {
    variant: "inlineWithoutBreaks",
    content: announcement,
    withTruncatedText: true
  })) : null;
};

module.exportDefault(Announcement);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Announcement/fbf90adcbb7e181343122ab1cb69a3937acd2648.map
