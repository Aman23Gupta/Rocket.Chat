function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/hooks/useMessageDeletionIsAllowed.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useMessageDeletionIsAllowed: () => useMessageDeletionIsAllowed
});
let useCallback;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  }

}, 0);
let usePermission;
module.link("../../../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 1);
let useSetting;
module.link("../../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 2);
let getDifference, MINUTES;
module.link("../lib/getDifference", {
  getDifference(v) {
    getDifference = v;
  },

  MINUTES(v) {
    MINUTES = v;
  }

}, 3);

const useMessageDeletionIsAllowed = (rid, uid) => {
  const canForceDelete = usePermission('force-delete-message', rid);
  const deletionIsEnabled = useSetting('Message_AllowDeleting');
  const userHasPermissonToDeleteAny = usePermission('delete-message', rid);
  const userHasPermissonToDeleteOwn = usePermission('delete-own-message');
  const blockDeleteInMinutes = useSetting('Message_AllowDeleting_BlockDeleteInMinutes');

  const isDeletionAllowed = (() => {
    if (canForceDelete) {
      return () => true;
    }

    if (!deletionIsEnabled) {
      return () => false;
    }

    if (!userHasPermissonToDeleteAny && !userHasPermissonToDeleteOwn) {
      return () => false;
    }

    const checkTimeframe = blockDeleteInMinutes !== 0 ? _ref => {
      let {
        ts
      } = _ref;

      if (!ts) {
        return false;
      }

      const currentTsDiff = getDifference(new Date(), new Date(ts), MINUTES);
      return currentTsDiff < blockDeleteInMinutes;
    } : () => true;

    if (userHasPermissonToDeleteAny) {
      return checkTimeframe;
    }

    const isOwn = _ref2 => {
      let {
        uid: owner
      } = _ref2;
      return owner === uid;
    };

    return msg => isOwn(msg) && checkTimeframe(msg);
  })(); // eslint-disable-next-line react-hooks/exhaustive-deps


  return useCallback(isDeletionAllowed, [canForceDelete, deletionIsEnabled, userHasPermissonToDeleteAny, userHasPermissonToDeleteOwn, blockDeleteInMinutes]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/hooks/3f7dec0a44aaea3247813279b750a5c9bcccd100.map
