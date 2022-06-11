function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/Omnichannel/QuickActions/QuickActions.tsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ButtonGroup;
module.link("@rocket.chat/fuselage", {
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var Header;
module.link("../../../../../components/Header", {
  "default": function (v) {
    Header = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useQuickActions;
module.link("./hooks/useQuickActions", {
  useQuickActions: function (v) {
    useQuickActions = v;
  }
}, 4);

var QuickActions = function (_ref) {
  var room = _ref.room,
      className = _ref.className;
  var t = useTranslation();

  var _useQuickActions = useQuickActions(room),
      visibleActions = _useQuickActions.visibleActions,
      actionDefault = _useQuickActions.actionDefault;

  return /*#__PURE__*/React.createElement(ButtonGroup, {
    mi: "x4",
    medium: true
  }, visibleActions.map(function (_ref2, index) {
    var id = _ref2.id,
        color = _ref2.color,
        icon = _ref2.icon,
        title = _ref2.title,
        _ref2$action = _ref2.action,
        action = _ref2$action === void 0 ? actionDefault : _ref2$action;
    var props = {
      id: id,
      icon: icon,
      color: color,
      'title': t(title),
      className: className,
      index: index,
      'primary': false,
      'data-quick-actions': index,
      action: action,
      'key': id
    };
    return /*#__PURE__*/React.createElement(Header.ToolBoxAction, props);
  }));
};

module.exportDefault( /*#__PURE__*/memo(QuickActions));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/Omnichannel/QuickActions/e1e658fc4a34d932a27b028a7c176a80d091b245.map
