function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Info/index.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var EditRoomInfoWithData;
module.link("./EditRoomInfo", {
  "default": function (v) {
    EditRoomInfoWithData = v;
  }
}, 2);
var RoomInfoWithData;
module.link("./RoomInfo", {
  "default": function (v) {
    RoomInfoWithData = v;
  }
}, 3);

var RoomInfo = function (_ref) {
  var rid = _ref.rid,
      onClickBack = _ref.onClickBack,
      onEnterRoom = _ref.onEnterRoom,
      resetState = _ref.resetState;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      editing = _useState2[0],
      setEditing = _useState2[1];

  var backToView = useMutableCallback(function () {
    return setEditing(false);
  });
  return editing ? /*#__PURE__*/React.createElement(EditRoomInfoWithData, {
    onClickBack: backToView,
    rid: rid
  }) : /*#__PURE__*/React.createElement(RoomInfoWithData, {
    onClickBack: onClickBack,
    openEditing: setEditing,
    rid: rid,
    onEnterRoom: onEnterRoom,
    resetState: resetState
  });
};

module.exportDefault(RoomInfo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Info/e729891faea6d96451f9b70967014f218f15001f.map
