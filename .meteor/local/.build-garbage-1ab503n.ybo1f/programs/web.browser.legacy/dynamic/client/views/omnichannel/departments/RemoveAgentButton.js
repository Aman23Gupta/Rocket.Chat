function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/RemoveAgentButton.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);
var Icon, Button;
module.link("@rocket.chat/fuselage", {
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
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);

function RemoveAgentButton(_ref) {
  var agentId = _ref.agentId,
      setAgentList = _ref.setAgentList,
      agentList = _ref.agentList,
      setAgentsRemoved = _ref.setAgentsRemoved;
  var setModal = useSetModal();
  var dispatchToastMessage = useToastMessageDispatch();
  var t = useTranslation();
  var handleDelete = useMutableCallback(function (e) {
    e.stopPropagation();

    var onDeleteAgent = function () {
      function _callee() {
        var newList;
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  newList = agentList.filter(function (listItem) {
                    return listItem.agentId !== agentId;
                  });
                  setAgentList(newList);
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Agent_removed')
                  });
                  setModal();
                  setAgentsRemoved(function (agents) {
                    return [].concat(_toConsumableArray(agents), [{
                      agentId: agentId
                    }]);
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, null, Promise);
      }

      return _callee;
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
  return /*#__PURE__*/React.createElement(Button, {
    small: true,
    ghost: true,
    title: t('Remove'),
    onClick: handleDelete
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: "x16"
  }));
}

module.exportDefault(RemoveAgentButton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/270694cea7dada7dbbf429fc4425c4a38ded4894.map
