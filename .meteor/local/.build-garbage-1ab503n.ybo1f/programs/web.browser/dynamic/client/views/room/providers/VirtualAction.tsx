function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/providers/VirtualAction.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useLayoutEffect, memo;
module.link("react", {
  useLayoutEffect(v) {
    useLayoutEffect = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
const groupsDict = {
  l: 'live',
  d: 'direct',
  p: 'group',
  c: 'channel'
};

const getGroup = room => {
  const group = groupsDict[room.t];

  if (room.teamMain) {
    return 'team';
  }

  if (group === groupsDict.d && room.uids.length > 2) {
    return 'direct_multiple';
  }

  return group;
};

const VirtualAction = _ref => {
  let {
    handleChange,
    room,
    action,
    id
  } = _ref;
  const config = typeof action === 'function' ? action({
    room
  }) : action;
  const group = getGroup(room);
  const visible = config && (!config.groups || groupsDict[room.t] && config.groups.includes(group));
  useLayoutEffect(() => {
    handleChange(list => {
      visible && config ? list.get(id) !== config && list.set(id, config) : list.delete(id);
    });
    return () => {
      handleChange(list => list.delete(id));
    };
  }, [config, visible, handleChange, id]);
  return null;
};

module.exportDefault( /*#__PURE__*/memo(VirtualAction));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/providers/aeda1c2494b3d6ed6294f94aed1994bc1a573120.map
