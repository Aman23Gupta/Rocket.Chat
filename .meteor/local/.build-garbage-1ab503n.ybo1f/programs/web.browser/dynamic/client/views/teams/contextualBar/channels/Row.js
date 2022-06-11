function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/Row.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let TeamsChannelItem;
module.link("./TeamsChannelItem", {
  default(v) {
    TeamsChannelItem = v;
  }

}, 1);

function Row(_ref) {
  let {
    room,
    onClickView,
    reload
  } = _ref;

  if (!room) {
    return /*#__PURE__*/React.createElement(TeamsChannelItem.Skeleton, null);
  }

  return /*#__PURE__*/React.createElement(TeamsChannelItem, {
    room: room,
    onClickView: () => onClickView(room),
    reload: reload
  });
}

module.exportDefault( /*#__PURE__*/memo(Row));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/0ae371de2be8bc44aff8db44fd119ad6c6dc1642.map
