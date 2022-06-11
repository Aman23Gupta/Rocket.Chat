function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/threads/ThreadView.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Modal, Box;
module.link("@rocket.chat/fuselage", {
  Modal: function (v) {
    Modal = v;
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, useCallback, useMemo, forwardRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  }
}, 1);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useLayoutContextualBarExpanded;
module.link("../../../providers/LayoutProvider", {
  useLayoutContextualBarExpanded: function (v) {
    useLayoutContextualBarExpanded = v;
  }
}, 4);
var ThreadView = /*#__PURE__*/forwardRef(function () {
  function ThreadView(_ref, ref) {
    var title = _ref.title,
        expanded = _ref.expanded,
        following = _ref.following,
        onToggleExpand = _ref.onToggleExpand,
        onToggleFollow = _ref.onToggleFollow,
        onClose = _ref.onClose,
        onClickBack = _ref.onClickBack;
    var hasExpand = useLayoutContextualBarExpanded();
    var style = useMemo(function () {
      return document.dir === 'rtl' ? {
        left: 0,
        borderTopRightRadius: 4
      } : {
        right: 0,
        borderTopLeftRadius: 4
      };
    }, []);
    var t = useTranslation();
    var expandLabel = expanded ? t('Collapse') : t('Expand');
    var expandIcon = expanded ? 'arrow-collapse' : 'arrow-expand';
    var handleExpandActionClick = useCallback(function () {
      onToggleExpand(expanded);
    }, [expanded, onToggleExpand]);
    var followLabel = following ? t('Following') : t('Not_Following');
    var followIcon = following ? 'bell' : 'bell-off';
    var handleFollowActionClick = useCallback(function () {
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
  }

  return ThreadView;
}());
module.exportDefault(ThreadView);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/threads/4f2b6a6a597ba2012577c5b1a961e92d904b6d2e.map
