function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/hooks/useMessageDeletionIsAllowed.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useMessageDeletionIsAllowed: function () {
    return useMessageDeletionIsAllowed;
  }
});
var useCallback;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);
var usePermission;
module.link("../../../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 1);
var useSetting;
module.link("../../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 2);
var getDifference, MINUTES;
module.link("../lib/getDifference", {
  getDifference: function (v) {
    getDifference = v;
  },
  MINUTES: function (v) {
    MINUTES = v;
  }
}, 3);

var useMessageDeletionIsAllowed = function (rid, uid) {
  var canForceDelete = usePermission('force-delete-message', rid);
  var deletionIsEnabled = useSetting('Message_AllowDeleting');
  var userHasPermissonToDeleteAny = usePermission('delete-message', rid);
  var userHasPermissonToDeleteOwn = usePermission('delete-own-message');
  var blockDeleteInMinutes = useSetting('Message_AllowDeleting_BlockDeleteInMinutes');

  var isDeletionAllowed = function () {
    if (canForceDelete) {
      return function () {
        return true;
      };
    }

    if (!deletionIsEnabled) {
      return function () {
        return false;
      };
    }

    if (!userHasPermissonToDeleteAny && !userHasPermissonToDeleteOwn) {
      return function () {
        return false;
      };
    }

    var checkTimeframe = blockDeleteInMinutes !== 0 ? function (_ref) {
      var ts = _ref.ts;

      if (!ts) {
        return false;
      }

      var currentTsDiff = getDifference(new Date(), new Date(ts), MINUTES);
      return currentTsDiff < blockDeleteInMinutes;
    } : function () {
      return true;
    };

    if (userHasPermissonToDeleteAny) {
      return checkTimeframe;
    }

    var isOwn = function (_ref2) {
      var owner = _ref2.uid;
      return owner === uid;
    };

    return function (msg) {
      return isOwn(msg) && checkTimeframe(msg);
    };
  }(); // eslint-disable-next-line react-hooks/exhaustive-deps


  return useCallback(isDeletionAllowed, [canForceDelete, deletionIsEnabled, userHasPermissonToDeleteAny, userHasPermissonToDeleteOwn, blockDeleteInMinutes]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/hooks/3dce64d76ab80c6277c1953885993c9c33f03947.map
