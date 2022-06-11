function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/lists/useRecordList.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  useRecordList: () => useRecordList
});
let useEffect, useState;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);

const useRecordList = recordList => {
  const [state, setState] = useState(() => ({
    phase: recordList.phase,
    items: recordList.items,
    itemCount: recordList.itemCount,
    error: undefined
  }));
  useEffect(() => {
    const disconnectMutatingEvent = recordList.on('mutating', () => {
      setState(() => ({
        phase: recordList.phase,
        items: recordList.items,
        itemCount: recordList.itemCount,
        error: undefined
      }));
    });
    const disconnectMutatedEvent = recordList.on('mutated', () => {
      setState(prevState => ({
        phase: recordList.phase,
        items: recordList.items,
        itemCount: recordList.itemCount,
        error: prevState.error
      }));
    });
    const disconnectClearedEvent = recordList.on('cleared', () => {
      setState(() => ({
        phase: recordList.phase,
        items: recordList.items,
        itemCount: recordList.itemCount,
        error: undefined
      }));
    });
    const disconnectErroredEvent = recordList.on('errored', error => {
      setState(state => _objectSpread(_objectSpread({}, state), {}, {
        error
      }));
    });
    return () => {
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
//# sourceMappingURL=/dynamic/client/hooks/lists/363535fc21590f888f8ccc7ecc2e0de860383d46.map
