function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/threads/ThreadSkeleton.tsx                                                                        //
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
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);

var ThreadSkeleton = function (_ref) {
  var expanded = _ref.expanded,
      onClose = _ref.onClose;
  var style = useMemo(function () {
    return document.dir === 'rtl' ? {
      left: 0,
      borderTopRightRadius: 4
    } : {
      right: 0,
      borderTopLeftRadius: 4
    };
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
//# sourceMappingURL=/dynamic/client/views/room/threads/fdb88306ee8bc1ca0011863d6164eadeadaecb53.map
