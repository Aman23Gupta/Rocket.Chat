function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/lists/useRecordList.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
module.export({
  useRecordList: function () {
    return useRecordList;
  }
});
var useEffect, useState;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 0);

var useRecordList = function (recordList) {
  var _useState = useState(function () {
    return {
      phase: recordList.phase,
      items: recordList.items,
      itemCount: recordList.itemCount,
      error: undefined
    };
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  useEffect(function () {
    var disconnectMutatingEvent = recordList.on('mutating', function () {
      setState(function () {
        return {
          phase: recordList.phase,
          items: recordList.items,
          itemCount: recordList.itemCount,
          error: undefined
        };
      });
    });
    var disconnectMutatedEvent = recordList.on('mutated', function () {
      setState(function (prevState) {
        return {
          phase: recordList.phase,
          items: recordList.items,
          itemCount: recordList.itemCount,
          error: prevState.error
        };
      });
    });
    var disconnectClearedEvent = recordList.on('cleared', function () {
      setState(function () {
        return {
          phase: recordList.phase,
          items: recordList.items,
          itemCount: recordList.itemCount,
          error: undefined
        };
      });
    });
    var disconnectErroredEvent = recordList.on('errored', function (error) {
      setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: error
        });
      });
    });
    return function () {
      disconnectMutatingEvent();
      disconnectMutatedEvent();
      disconnectClearedEvent();
      disconnectErroredEvent();
    };
  }, [recordList]);
  return state;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/lists/34476d80d413123e758fb4ab3da1000c2e46961d.map
