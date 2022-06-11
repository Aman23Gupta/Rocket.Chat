function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/customFields/RemoveCustomFieldButton.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var Table, Icon, Button;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var GenericModal;
module.link("../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 3);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 4);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);

function RemoveCustomFieldButton(_ref) {
  var _id = _ref._id,
      reload = _ref.reload;
  var removeCustomField = useMethod('livechat:removeCustomField');
  var setModal = useSetModal();
  var dispatchToastMessage = useToastMessageDispatch();
  var t = useTranslation();
  var handleRemoveClick = useMutableCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(removeCustomField(_id));

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 8:
                reload();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 5]], Promise);
    }

    return _callee;
  }());
  var handleDelete = useMutableCallback(function (e) {
    e.stopPropagation();

    var onDeleteAgent = function () {
      function _callee2() {
        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _regeneratorRuntime.awrap(handleRemoveClick());

                case 3:
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Custom_Field_Removed')
                  });
                  _context2.next = 9;
                  break;

                case 6:
                  _context2.prev = 6;
                  _context2.t0 = _context2["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context2.t0
                  });

                case 9:
                  setModal();

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, [[0, 6]], Promise);
      }

      return _callee2;
    }();

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onDeleteAgent,
      onCancel: function () {
        return setModal();
      },
      confirmText: t('Delete')
    }));
  });
  return /*#__PURE__*/React.createElement(Table.Cell, {
    fontScale: "p2",
    color: "hint",
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    ghost: true,
    title: t('Remove'),
    onClick: handleDelete
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: "x16"
  })));
}

module.exportDefault(RemoveCustomFieldButton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/customFields/984f620fdd187b0e9f25890ba75b58aacc885579.map
