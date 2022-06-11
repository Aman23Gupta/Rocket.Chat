function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/providers/VirtualAction.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var useLayoutEffect, memo;
module.link("react", {
  useLayoutEffect: function (v) {
    useLayoutEffect = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var groupsDict = {
  l: 'live',
  d: 'direct',
  p: 'group',
  c: 'channel'
};

var getGroup = function (room) {
  var group = groupsDict[room.t];

  if (room.teamMain) {
    return 'team';
  }

  if (group === groupsDict.d && room.uids.length > 2) {
    return 'direct_multiple';
  }

  return group;
};

var VirtualAction = function (_ref) {
  var handleChange = _ref.handleChange,
      room = _ref.room,
      action = _ref.action,
      id = _ref.id;
  var config = typeof action === 'function' ? action({
    room: room
  }) : action;
  var group = getGroup(room);
  var visible = config && (!config.groups || groupsDict[room.t] && config.groups.includes(group));
  useLayoutEffect(function () {
    handleChange(function (list) {
      visible && config ? list.get(id) !== config && list.set(id, config) : list.delete(id);
    });
    return function () {
      handleChange(function (list) {
        return list.delete(id);
      });
    };
  }, [config, visible, handleChange, id]);
  return null;
};

module.exportDefault( /*#__PURE__*/memo(VirtualAction));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/providers/d524ef926f95fab08810ea345dd420e44f145ff8.map
