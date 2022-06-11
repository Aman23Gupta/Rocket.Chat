function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/actions/CreateRoom.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Box, Sidebar, Dropdown;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Sidebar(v) {
    Sidebar = v;
  },

  Dropdown(v) {
    Dropdown = v;
  }

}, 0);
let React, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 1);
let createPortal;
module.link("react-dom", {
  createPortal(v) {
    createPortal = v;
  }

}, 2);
let useAtLeastOnePermission;
module.link("../../../contexts/AuthorizationContext", {
  useAtLeastOnePermission(v) {
    useAtLeastOnePermission = v;
  }

}, 3);
let useDropdownVisibility;
module.link("../hooks/useDropdownVisibility", {
  useDropdownVisibility(v) {
    useDropdownVisibility = v;
  }

}, 4);
let CreateRoomList;
module.link("./CreateRoomList", {
  default(v) {
    CreateRoomList = v;
  }

}, 5);
const CREATE_ROOM_PERMISSIONS = ['create-c', 'create-p', 'create-d', 'start-discussion', 'start-discussion-other-user'];

const CreateRoom = props => {
  const reference = useRef(null);
  const target = useRef(null);
  const {
    isVisible,
    toggle
  } = useDropdownVisibility({
    reference,
    target
  });
  const showCreate = useAtLeastOnePermission(CREATE_ROOM_PERMISSIONS);
  return /*#__PURE__*/React.createElement(React.Fragment, null, showCreate && /*#__PURE__*/React.createElement(Box, {
    ref: reference
  }, /*#__PURE__*/React.createElement(Sidebar.TopBar.Action, _extends({}, props, {
    icon: "edit-rounded",
    onClick: toggle
  }))), isVisible && /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(Dropdown, {
    reference: reference,
    ref: target
  }, /*#__PURE__*/React.createElement(CreateRoomList, {
    closeList: () => toggle(false)
  })), document.body));
};

module.exportDefault(CreateRoom);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/actions/cd87dfeae45fffd204d469235c2c4d1f1af5bbf6.map
