function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/monitors/MonitorsRow.js                                                                       //
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
module.link("../../../../client/components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 3);
var useSetModal;
module.link("../../../../client/contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 4);
var useMethod;
module.link("../../../../client/contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);

function MonitorsRow(props) {
  var _emails$find;

  var _id = props._id,
      name = props.name,
      username = props.username,
      emails = props.emails,
      onDelete = props.onDelete;
  var setModal = useSetModal();
  var dispatchToastMessage = useToastMessageDispatch();
  var t = useTranslation();
  var removeMonitor = useMethod('livechat:removeMonitor');
  var handleRemove = useMutableCallback(function () {
    var onDeleteMonitor = function () {
      function _callee() {
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _regeneratorRuntime.awrap(removeMonitor(username));

                case 3:
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Monitor_removed')
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
      onConfirm: onDeleteMonitor,
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
    tabIndex: 0
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, name), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, username), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, emails === null || emails === void 0 ? void 0 : (_emails$find = emails.find(function (_ref) {
    var address = _ref.address;
    return !!address;
  })) === null || _emails$find === void 0 ? void 0 : _emails$find.address), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    ghost: true,
    title: t('Remove'),
    onClick: handleRemove
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: "x16"
  }))));
}

module.exportDefault( /*#__PURE__*/memo(MonitorsRow));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/monitors/73e4d58b11baace7fa962c159f7dab4cb91388d6.map
