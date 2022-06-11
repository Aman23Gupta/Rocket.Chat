function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/blocks/ModalBlock.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  modalParser: function () {
    return modalParser;
  }
});
var Modal, AnimatedVisibility, ButtonGroup, Button, Box;
module.link("@rocket.chat/fuselage", {
  Modal: function (v) {
    Modal = v;
  },
  AnimatedVisibility: function (v) {
    AnimatedVisibility = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId: function (v) {
    useUniqueId = v;
  }
}, 1);
var UiKitComponent, UiKitModal, modalParser;
module.link("@rocket.chat/fuselage-ui-kit", {
  UiKitComponent: function (v) {
    UiKitComponent = v;
  },
  UiKitModal: function (v) {
    UiKitModal = v;
  },
  modalParser: function (v) {
    modalParser = v;
  }
}, 2);
var React, useCallback, useEffect, useMemo, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 3);
var getURL;
module.link("../../../app/utils/lib/getURL", {
  getURL: function (v) {
    getURL = v;
  }
}, 4);
module.link("./textParsers");
var focusableElementsString = "\n\ta[href]:not([tabindex=\"-1\"]),\n\tarea[href]:not([tabindex=\"-1\"]),\n\tinput:not([disabled]):not([tabindex=\"-1\"]),\n\tselect:not([disabled]):not([tabindex=\"-1\"]),\n\ttextarea:not([disabled]):not([tabindex=\"-1\"]),\n\tbutton:not([disabled]):not([tabindex=\"-1\"]),\n\tiframe,\n\tobject,\n\tembed,\n\t[tabindex]:not([tabindex=\"-1\"]),\n\t[contenteditable]";
var focusableElementsStringInvalid = "\n\ta[href]:not([tabindex=\"-1\"]):invalid,\n\tarea[href]:not([tabindex=\"-1\"]):invalid,\n\tinput:not([disabled]):not([tabindex=\"-1\"]):invalid,\n\tselect:not([disabled]):not([tabindex=\"-1\"]):invalid,\n\ttextarea:not([disabled]):not([tabindex=\"-1\"]):invalid,\n\tbutton:not([disabled]):not([tabindex=\"-1\"]):invalid,\n\tiframe:invalid,\n\tobject:invalid,\n\tembed:invalid,\n\t[tabindex]:not([tabindex=\"-1\"]):invalid,\n\t[contenteditable]:invalid";

function ModalBlock(_ref) {
  var view = _ref.view,
      errors = _ref.errors,
      appId = _ref.appId,
      onSubmit = _ref.onSubmit,
      onClose = _ref.onClose,
      onCancel = _ref.onCancel;
  var id = "modal_id_" + useUniqueId();
  var ref = useRef(); // Auto focus

  useEffect(function () {
    if (!ref.current) {
      return;
    }

    if (errors && Object.keys(errors).length) {
      var element = ref.current.querySelector(focusableElementsStringInvalid);
      element && element.focus();
    } else {
      var _element = ref.current.querySelector(focusableElementsString);

      _element && _element.focus();
    }
  }, [errors]); // save focus to restore after close

  var previousFocus = useMemo(function () {
    return document.activeElement;
  }, []); // restore the focus after the component unmount

  useEffect(function () {
    return function () {
      return previousFocus && previousFocus.focus();
    };
  }, [previousFocus]); // Handle Tab, Shift + Tab, Enter and Escape

  var handleKeyDown = useCallback(function (event) {
    if (event.keyCode === 13) {
      var _event$target;

      // ENTER
      if ((event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.nodeName) !== 'TEXTAREA') {
        return onSubmit(event);
      }
    }

    if (event.keyCode === 27) {
      // ESC
      event.stopPropagation();
      event.preventDefault();
      onClose();
      return false;
    }

    if (event.keyCode === 9) {
      // TAB
      var elements = Array.from(ref.current.querySelectorAll(focusableElementsString));

      var _elements = _slicedToArray(elements, 1),
          first = _elements[0];

      var last = elements.pop();

      if (!ref.current.contains(document.activeElement)) {
        return first.focus();
      }

      if (event.shiftKey) {
        if (!first || first === document.activeElement) {
          last.focus();
          event.stopPropagation();
          event.preventDefault();
        }

        return;
      }

      if (!last || last === document.activeElement) {
        first.focus();
        event.stopPropagation();
        event.preventDefault();
      }
    }
  }, [onClose, onSubmit]); // Clean the events

  useEffect(function () {
    var element = document.querySelector('.rc-modal-wrapper');
    var container = element.querySelector('.rcx-modal__content');

    var close = function (e) {
      if (e.target !== element) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      onClose();
      return false;
    };

    var ignoreIfnotContains = function (e) {
      if (!container.contains(e.target)) {
        return;
      }

      return handleKeyDown(e);
    };

    document.addEventListener('keydown', ignoreIfnotContains);
    element.addEventListener('click', close);
    return function () {
      document.removeEventListener('keydown', ignoreIfnotContains);
      element.removeEventListener('click', close);
    };
  }, [handleKeyDown, onClose]);
  return /*#__PURE__*/React.createElement(AnimatedVisibility, {
    visibility: AnimatedVisibility.UNHIDING
  }, /*#__PURE__*/React.createElement(Modal, {
    open: true,
    id: id,
    ref: ref
  }, /*#__PURE__*/React.createElement(Modal.Header, null, view.showIcon ? /*#__PURE__*/React.createElement(Modal.Thumb, {
    url: getURL("/api/apps/" + appId + "/icon")
  }) : null, /*#__PURE__*/React.createElement(Modal.Title, null, modalParser.text(view.title)), /*#__PURE__*/React.createElement(Modal.Close, {
    tabIndex: -1,
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Box, {
    is: "form",
    method: "post",
    action: "#",
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement(UiKitComponent, {
    render: UiKitModal,
    blocks: view.blocks
  }))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, view.close && /*#__PURE__*/React.createElement(Button, {
    onClick: onCancel
  }, modalParser.text(view.close.text)), view.submit && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onSubmit
  }, modalParser.text(view.submit.text))))));
}

module.exportDefault(ModalBlock);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/blocks/66ed830b564479e6db96883dbb9983b04c31b50e.map
