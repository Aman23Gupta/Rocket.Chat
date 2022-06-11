function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/Row.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var TeamsChannelItem;
module.link("./TeamsChannelItem", {
  "default": function (v) {
    TeamsChannelItem = v;
  }
}, 1);

function Row(_ref) {
  var room = _ref.room,
      onClickView = _ref.onClickView,
      reload = _ref.reload;

  if (!room) {
    return /*#__PURE__*/React.createElement(TeamsChannelItem.Skeleton, null);
  }

  return /*#__PURE__*/React.createElement(TeamsChannelItem, {
    room: room,
    onClickView: function () {
      return onClickView(room);
    },
    reload: reload
  });
}

module.exportDefault( /*#__PURE__*/memo(Row));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/48cc7df96b70833764285b19e02c5bdd79bcfbc6.map
