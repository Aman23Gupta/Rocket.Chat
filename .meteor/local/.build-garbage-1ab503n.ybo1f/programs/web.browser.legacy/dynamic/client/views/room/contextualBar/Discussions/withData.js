function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Discussions/withData.js                                                             //
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
var useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
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
var useDiscussionsList;
module.link("./useDiscussionsList", {
  useDiscussionsList: function (v) {
    useDiscussionsList = v;
  }
}, 7);
var subscriptionFields = {
  tunread: 1,
  tunreadUser: 1,
  tunreadGroup: 1
};
var roomFields = {
  t: 1,
  name: 1
};

function withData(Component) {
  var _ref2, _Component$displayNam;

  var WrappedComponent = function (_ref) {
    var rid = _ref.rid,
        props = _objectWithoutProperties(_ref, _excluded);

    var room = useUserRoom(rid, roomFields);
    var subscription = useUserSubscription(rid, subscriptionFields);
    var userId = useUserId();
    var onClose = useTabBarClose();

    var _useState = useState(''),
        _useState2 = _slicedToArray(_useState, 2),
        text = _useState2[0],
        setText = _useState2[1];

    var debouncedText = useDebouncedValue(text, 400);
    var options = useMemo(function () {
      return {
        rid: rid,
        text: debouncedText
      };
    }, [rid, debouncedText]);

    var _useDiscussionsList = useDiscussionsList(options, userId),
        discussionsList = _useDiscussionsList.discussionsList,
        initialItemCount = _useDiscussionsList.initialItemCount,
        loadMoreItems = _useDiscussionsList.loadMoreItems;

    var _useRecordList = useRecordList(discussionsList),
        phase = _useRecordList.phase,
        error = _useRecordList.error,
        discussions = _useRecordList.items,
        totalItemCount = _useRecordList.itemCount;

    var handleTextChange = useCallback(function (e) {
      setText(e.currentTarget.value);
    }, []);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      onClose: onClose,
      unread: subscription === null || subscription === void 0 ? void 0 : subscription.tunread,
      unreadUser: subscription === null || subscription === void 0 ? void 0 : subscription.tunreadUser,
      unreadGroup: subscription === null || subscription === void 0 ? void 0 : subscription.tunreadGroup,
      userId: userId,
      error: error,
      discussions: discussions,
      total: totalItemCount,
      initial: initialItemCount,
      loading: phase === AsyncStatePhase.LOADING,
      loadMoreItems: loadMoreItems,
      room: room,
      text: text,
      setText: handleTextChange
    }));
  };

  WrappedComponent.displayName = "withData(" + ((_ref2 = (_Component$displayNam = Component.displayName) !== null && _Component$displayNam !== void 0 ? _Component$displayNam : Component.name) !== null && _ref2 !== void 0 ? _ref2 : 'Component') + ")";
  return WrappedComponent;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Discussions/18a8bb45ee85783c1e7da82e1b087be04380da72.map
