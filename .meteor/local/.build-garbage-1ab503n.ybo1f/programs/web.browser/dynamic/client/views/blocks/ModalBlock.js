function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/blocks/ModalBlock.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  modalParser: () => modalParser
});
let Modal, AnimatedVisibility, ButtonGroup, Button, Box;
module.link("@rocket.chat/fuselage", {
  Modal(v) {
    Modal = v;
  },

  AnimatedVisibility(v) {
    AnimatedVisibility = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Box(v) {
    Box = v;
  }

}, 0);
let useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId(v) {
    useUniqueId = v;
  }

}, 1);
let UiKitComponent, UiKitModal, modalParser;
module.link("@rocket.chat/fuselage-ui-kit", {
  UiKitComponent(v) {
    UiKitComponent = v;
  },

  UiKitModal(v) {
    UiKitModal = v;
  },

  modalParser(v) {
    modalParser = v;
  }

}, 2);
let React, useCallback, useEffect, useMemo, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 3);
let getURL;
module.link("../../../app/utils/lib/getURL", {
  getURL(v) {
    getURL = v;
  }

}, 4);
module.link("./textParsers");
const focusableElementsString = "\n\ta[href]:not([tabindex=\"-1\"]),\n\tarea[href]:not([tabindex=\"-1\"]),\n\tinput:not([disabled]):not([tabindex=\"-1\"]),\n\tselect:not([disabled]):not([tabindex=\"-1\"]),\n\ttextarea:not([disabled]):not([tabindex=\"-1\"]),\n\tbutton:not([disabled]):not([tabindex=\"-1\"]),\n\tiframe,\n\tobject,\n\tembed,\n\t[tabindex]:not([tabindex=\"-1\"]),\n\t[contenteditable]";
const focusableElementsStringInvalid = "\n\ta[href]:not([tabindex=\"-1\"]):invalid,\n\tarea[href]:not([tabindex=\"-1\"]):invalid,\n\tinput:not([disabled]):not([tabindex=\"-1\"]):invalid,\n\tselect:not([disabled]):not([tabindex=\"-1\"]):invalid,\n\ttextarea:not([disabled]):not([tabindex=\"-1\"]):invalid,\n\tbutton:not([disabled]):not([tabindex=\"-1\"]):invalid,\n\tiframe:invalid,\n\tobject:invalid,\n\tembed:invalid,\n\t[tabindex]:not([tabindex=\"-1\"]):invalid,\n\t[contenteditable]:invalid";

function ModalBlock(_ref) {
  let {
    view,
    errors,
    appId,
    onSubmit,
    onClose,
    onCancel
  } = _ref;
  const id = "modal_id_".concat(useUniqueId());
  const ref = useRef(); // Auto focus

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (errors && Object.keys(errors).length) {
      const element = ref.current.querySelector(focusableElementsStringInvalid);
      element && element.focus();
    } else {
      const element = ref.current.querySelector(focusableElementsString);
      element && element.focus();
    }
  }, [errors]); // save focus to restore after close

  const previousFocus = useMemo(() => document.activeElement, []); // restore the focus after the component unmount

  useEffect(() => () => previousFocus && previousFocus.focus(), [previousFocus]); // Handle Tab, Shift + Tab, Enter and Escape

  const handleKeyDown = useCallback(event => {
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
      const elements = Array.from(ref.current.querySelectorAll(focusableElementsString));
      const [first] = elements;
      const last = elements.pop();

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

  useEffect(() => {
    const element = document.querySelector('.rc-modal-wrapper');
    const container = element.querySelector('.rcx-modal__content');

    const close = e => {
      if (e.target !== element) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      onClose();
      return false;
    };

    const ignoreIfnotContains = e => {
      if (!container.contains(e.target)) {
        return;
      }

      return handleKeyDown(e);
    };

    document.addEventListener('keydown', ignoreIfnotContains);
    element.addEventListener('click', close);
    return () => {
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
    url: getURL("/api/apps/".concat(appId, "/icon"))
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
//# sourceMappingURL=/dynamic/client/views/blocks/be6777dd0b065f0c738aa43e75a17c4f08eeb051.map
