function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/TriggersRow.js                                                                    //
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
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
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
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 5);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 6);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 7);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var TriggersRow = /*#__PURE__*/memo(function () {
  function TriggersRow(props) {
    var _id = props._id,
        name = props.name,
        description = props.description,
        enabled = props.enabled,
        onDelete = props.onDelete;
    var dispatchToastMessage = useToastMessageDispatch();
    var t = useTranslation();
    var setModal = useSetModal();
    var bhRoute = useRoute('omnichannel-triggers');
    var deleteTrigger = useMethod('livechat:removeTrigger');
    var handleClick = useMutableCallback(function () {
      bhRoute.push({
        context: 'edit',
        id: _id
      });
    });
    var handleKeyDown = useMutableCallback(function (e) {
      if (!['Enter', 'Space'].includes(e.nativeEvent.code)) {
        return;
      }

      handleClick();
    });
    var handleDelete = useMutableCallback(function (e) {
      e.stopPropagation();

      var onDeleteTrigger = function () {
        function _callee() {
          return _regeneratorRuntime.async(function () {
            function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return _regeneratorRuntime.awrap(deleteTrigger(_id));

                  case 3:
                    dispatchToastMessage({
                      type: 'success',
                      message: t('Trigger_removed')
                    });
                    onDelete();
                    _context.next = 10;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    dispatchToastMessage({
                      type: 'error',
                      message: _context.t0
                    });

                  case 10:
                    setModal();

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }

            return _callee$;
          }(), null, null, [[0, 7]], Promise);
        }

        return _callee;
      }();

      setModal( /*#__PURE__*/React.createElement(GenericModal, {
        variant: "danger",
        onConfirm: onDeleteTrigger,
        onCancel: function () {
          return setModal();
        },
        confirmText: t('Delete')
      }));
    });
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      role: "link",
      action: true,
      tabIndex: 0,
      onClick: handleClick,
      onKeyDown: handleKeyDown
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, name), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, description), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, enabled ? t('Yes') : t('No')), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, /*#__PURE__*/React.createElement(Button, {
      small: true,
      ghost: true,
      title: t('Remove'),
      onClick: handleDelete
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: "x16"
    }))));
  }

  return TriggersRow;
}());
module.exportDefault(TriggersRow);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/8d894b1c4e0376ffb70de0fe8a9da36eeca7f66e.map
