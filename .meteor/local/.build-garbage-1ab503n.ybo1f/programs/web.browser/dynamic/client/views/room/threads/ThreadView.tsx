function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/threads/ThreadView.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Modal, Box;
module.link("@rocket.chat/fuselage", {
  Modal(v) {
    Modal = v;
  },

  Box(v) {
    Box = v;
  }

}, 0);
let React, useCallback, useMemo, forwardRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  forwardRef(v) {
    forwardRef = v;
  }

}, 1);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useLayoutContextualBarExpanded;
module.link("../../../providers/LayoutProvider", {
  useLayoutContextualBarExpanded(v) {
    useLayoutContextualBarExpanded = v;
  }

}, 4);
const ThreadView = /*#__PURE__*/forwardRef(function ThreadView(_ref, ref) {
  let {
    title,
    expanded,
    following,
    onToggleExpand,
    onToggleFollow,
    onClose,
    onClickBack
  } = _ref;
  const hasExpand = useLayoutContextualBarExpanded();
  const style = useMemo(() => document.dir === 'rtl' ? {
    left: 0,
    borderTopRightRadius: 4
  } : {
    right: 0,
    borderTopLeftRadius: 4
  }, []);
  const t = useTranslation();
  const expandLabel = expanded ? t('Collapse') : t('Expand');
  const expandIcon = expanded ? 'arrow-collapse' : 'arrow-expand';
  const handleExpandActionClick = useCallback(() => {
    onToggleExpand(expanded);
  }, [expanded, onToggleExpand]);
  const followLabel = following ? t('Following') : t('Not_Following');
  const followIcon = following ? 'bell' : 'bell-off';
  const handleFollowActionClick = useCallback(() => {
    onToggleFollow(following);
  }, [following, onToggleFollow]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, hasExpand && expanded && /*#__PURE__*/React.createElement(Modal.Backdrop, {
    onClick: onClose
  }), /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    position: expanded ? 'static' : 'relative'
  }, /*#__PURE__*/React.createElement(VerticalBar, {
    className: "rcx-thread-view",
    position: hasExpand && expanded ? 'fixed' : 'absolute',
    display: "flex",
    flexDirection: "column",
    width: 'full',
    maxWidth: hasExpand && expanded ? 855 : undefined,
    overflow: "hidden",
    zIndex: 100,
    insetBlock: 0,
    style: style // workaround due to a RTL bug in Fuselage

  }, /*#__PURE__*/React.createElement(VerticalBar.Header, null, onClickBack && /*#__PURE__*/React.createElement(VerticalBar.Action, {
    onClick: onClickBack,
    title: t('Back_to_threads'),
    name: "arrow-back"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, {
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), hasExpand && /*#__PURE__*/React.createElement(VerticalBar.Action, {
    title: expandLabel,
    name: expandIcon,
    onClick: handleExpandActionClick
  }), /*#__PURE__*/React.createElement(VerticalBar.Actions, null, /*#__PURE__*/React.createElement(VerticalBar.Action, {
    title: followLabel,
    name: followIcon,
    onClick: handleFollowActionClick
  }), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClose
  }))), /*#__PURE__*/React.createElement(VerticalBar.Content, {
    ref: ref,
    flexShrink: 1,
    flexGrow: 1,
    paddingInline: 0
  }))));
});
module.exportDefault(ThreadView);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/threads/0cc2d9b62f642a53e59c075146e0c088adba0b86.map
