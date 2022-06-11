function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Threads/withData.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["rid"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
module.export({
  withData: function () {
    return withData;
  }
});
var useDebouncedValue, useLocalStorage;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  },
  useLocalStorage: function (v) {
    useLocalStorage = v;
  }
}, 0);
var React, useCallback, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var useUserId, useUserSubscription;
module.link("../../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  },
  useUserSubscription: function (v) {
    useUserSubscription = v;
  }
}, 2);
var useRecordList;
module.link("../../../../hooks/lists/useRecordList", {
  useRecordList: function (v) {
    useRecordList = v;
  }
}, 3);
var AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 4);
var useUserRoom;
module.link("../../hooks/useUserRoom", {
  useUserRoom: function (v) {
    useUserRoom = v;
  }
}, 5);
var useTabBarClose;
module.link("../../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 6);
var useThreadsList;
module.link("./useThreadsList", {
  useThreadsList: function (v) {
    useThreadsList = v;
  }
}, 7);
var subscriptionFields = {
  tunread: true,
  tunreadUser: true,
  tunreadGroup: true
};
var roomFields = {
  t: 1,
  name: 1
};

function withData(Component) {
  var _ref2, _Component$displayNam;

  var WrappedComponent = function (_ref) {
    var _subscription$tunread;

    var rid = _ref.rid,
        props = _objectWithoutProperties(_ref, _excluded);

    var userId = useUserId();
    var onClose = useTabBarClose();
    var room = useUserRoom(rid, roomFields);
    var subscription = useUserSubscription(rid, subscriptionFields);

    var _useLocalStorage = useLocalStorage('thread-list-type', 'all'),
        _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
        type = _useLocalStorage2[0],
        setType = _useLocalStorage2[1];

    var _useState = useState(''),
        _useState2 = _slicedToArray(_useState, 2),
        text = _useState2[0],
        setText = _useState2[1];

    var debouncedText = useDebouncedValue(text, 400);
    var options = useDebouncedValue(useMemo(function () {
      if (type === 'all' || !subscription || !userId) {
        return {
          rid: rid,
          text: debouncedText,
          type: 'all'
        };
      }

      switch (type) {
        case 'following':
          return {
            rid: rid,
            text: debouncedText,
            type: type,
            uid: userId
          };

        case 'unread':
          return {
            rid: rid,
            text: debouncedText,
            type: type,
            tunread: subscription === null || subscription === void 0 ? void 0 : subscription.tunread
          };
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [rid, debouncedText, type, subscription === null || subscription === void 0 ? void 0 : (_subscription$tunread = subscription.tunread) === null || _subscription$tunread === void 0 ? void 0 : _subscription$tunread.sort().join(), userId]), 300);

    var _useThreadsList = useThreadsList(options, userId),
        threadsList = _useThreadsList.threadsList,
        loadMoreItems = _useThreadsList.loadMoreItems;

    var _useRecordList = useRecordList(threadsList),
        phase = _useRecordList.phase,
        error = _useRecordList.error,
        threads = _useRecordList.items,
        totalItemCount = _useRecordList.itemCount;

    var handleTextChange = useCallback(function (event) {
      setText(event.currentTarget.value);
    }, []);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      unread: subscription === null || subscription === void 0 ? void 0 : subscription.tunread,
      unreadUser: subscription === null || subscription === void 0 ? void 0 : subscription.tunreadUser,
      unreadGroup: subscription === null || subscription === void 0 ? void 0 : subscription.tunreadGroup,
      userId: userId,
      error: error,
      threads: threads,
      total: totalItemCount,
      loading: phase === AsyncStatePhase.LOADING,
      loadMoreItems: loadMoreItems,
      room: room,
      text: text,
      setText: handleTextChange,
      type: type,
      setType: setType,
      onClose: onClose
    }));
  };

  WrappedComponent.displayName = "withData(" + ((_ref2 = (_Component$displayNam = Component.displayName) !== null && _Component$displayNam !== void 0 ? _Component$displayNam : Component.name) !== null && _ref2 !== void 0 ? _ref2 : 'Component') + ")";
  return WrappedComponent;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Threads/cbb05bef2bfb8fc72a71f7c79ce5dd1fcdd5a6ee.map
