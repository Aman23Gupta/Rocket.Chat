function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/actions/CreateRoom.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Box, Sidebar, Dropdown;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Sidebar: function (v) {
    Sidebar = v;
  },
  Dropdown: function (v) {
    Dropdown = v;
  }
}, 0);
var React, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 1);
var createPortal;
module.link("react-dom", {
  createPortal: function (v) {
    createPortal = v;
  }
}, 2);
var useAtLeastOnePermission;
module.link("../../../contexts/AuthorizationContext", {
  useAtLeastOnePermission: function (v) {
    useAtLeastOnePermission = v;
  }
}, 3);
var useDropdownVisibility;
module.link("../hooks/useDropdownVisibility", {
  useDropdownVisibility: function (v) {
    useDropdownVisibility = v;
  }
}, 4);
var CreateRoomList;
module.link("./CreateRoomList", {
  "default": function (v) {
    CreateRoomList = v;
  }
}, 5);
var CREATE_ROOM_PERMISSIONS = ['create-c', 'create-p', 'create-d', 'start-discussion', 'start-discussion-other-user'];

var CreateRoom = function (props) {
  var reference = useRef(null);
  var target = useRef(null);

  var _useDropdownVisibilit = useDropdownVisibility({
    reference: reference,
    target: target
  }),
      isVisible = _useDropdownVisibilit.isVisible,
      toggle = _useDropdownVisibilit.toggle;

  var showCreate = useAtLeastOnePermission(CREATE_ROOM_PERMISSIONS);
  return /*#__PURE__*/React.createElement(React.Fragment, null, showCreate && /*#__PURE__*/React.createElement(Box, {
    ref: reference
  }, /*#__PURE__*/React.createElement(Sidebar.TopBar.Action, _extends({}, props, {
    icon: "edit-rounded",
    onClick: toggle
  }))), isVisible && /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(Dropdown, {
    reference: reference,
    ref: target
  }, /*#__PURE__*/React.createElement(CreateRoomList, {
    closeList: function () {
      return toggle(false);
    }
  })), document.body));
};

module.exportDefault(CreateRoom);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/actions/498fcab8d75584e4c81eb9447591312cc1c476cf.map
