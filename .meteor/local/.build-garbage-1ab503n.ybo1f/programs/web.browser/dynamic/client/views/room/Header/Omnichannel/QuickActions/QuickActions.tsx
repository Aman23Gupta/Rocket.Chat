function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/Omnichannel/QuickActions/QuickActions.tsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ButtonGroup;
module.link("@rocket.chat/fuselage", {
  ButtonGroup(v) {
    ButtonGroup = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let Header;
module.link("../../../../../components/Header", {
  default(v) {
    Header = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useQuickActions;
module.link("./hooks/useQuickActions", {
  useQuickActions(v) {
    useQuickActions = v;
  }

}, 4);

const QuickActions = _ref => {
  let {
    room,
    className
  } = _ref;
  const t = useTranslation();
  const {
    visibleActions,
    actionDefault
  } = useQuickActions(room);
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    mi: "x4",
    medium: true
  }, visibleActions.map((_ref2, index) => {
    let {
      id,
      color,
      icon,
      title,
      action = actionDefault
    } = _ref2;
    const props = {
      id,
      icon,
      color,
      'title': t(title),
      className,
      index,
      'primary': false,
      'data-quick-actions': index,
      action,
      'key': id
    };
    return /*#__PURE__*/React.createElement(Header.ToolBoxAction, props);
  }));
};

module.exportDefault( /*#__PURE__*/memo(QuickActions));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/Omnichannel/QuickActions/8822e5b91ea1a94700b97d15acd2037e145efa67.map
