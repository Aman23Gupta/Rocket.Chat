function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/threads/ThreadSkeleton.tsx                                                                        //
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
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);

const ThreadSkeleton = _ref => {
  let {
    expanded,
    onClose
  } = _ref;
  const style = useMemo(() => document.dir === 'rtl' ? {
    left: 0,
    borderTopRightRadius: 4
  } : {
    right: 0,
    borderTopLeftRadius: 4
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, expanded && /*#__PURE__*/React.createElement(Modal.Backdrop, {
    onClick: onClose
  }), /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    position: expanded ? 'static' : 'relative'
  }, /*#__PURE__*/React.createElement(VerticalBar.Skeleton, {
    className: "rcx-thread-view",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: 'full',
    maxWidth: 855,
    overflow: "hidden",
    zIndex: 100,
    insetBlock: 0 // insetInlineEnd={0}
    // borderStartStartRadius={4}
    ,
    style: style // workaround due to a RTL bug in Fuselage

  })));
};

module.exportDefault(ThreadSkeleton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/threads/ce6b079247682e5602150b2a32d5b55d69bd9c4f.map
