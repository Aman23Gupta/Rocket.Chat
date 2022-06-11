function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/Result.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let useStableArray;
module.link("@rocket.chat/fuselage-hooks", {
  useStableArray(v) {
    useStableArray = v;
  }

}, 1);
let Blaze;
module.link("meteor/blaze", {
  Blaze(v) {
    Blaze = v;
  }

}, 2);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 3);
let React, useEffect, useState, useRef, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  },

  useRef(v) {
    useRef = v;
  },

  memo(v) {
    memo = v;
  }

}, 4);
module.link("../../app/auditing/client/templates/audit/audit.html");
const Result = /*#__PURE__*/memo(_ref => {
  let {
    setDataRef
  } = _ref;
  const ref = useRef();
  const [data, setData] = useState({});
  const {
    msg,
    type,
    startDate,
    endDate,
    visitor,
    agent,
    users = [],
    rid
  } = data;
  const stableUsers = useStableArray(users);
  setDataRef.current = setData;
  useEffect(() => {
    const view = Blaze.renderWithData(Template.audit, {
      msg,
      type,
      startDate,
      endDate,
      visitor,
      agent,
      users: stableUsers,
      rid
    }, ref.current);
    return () => Blaze.remove(view);
  }, [agent, endDate, msg, rid, startDate, type, stableUsers, visitor]);
  return /*#__PURE__*/React.createElement(Box, {
    ref: ref
  });
});
module.exportDefault(Result);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/18bea25601927a6ed38ef419f5941c2c9a0919f4.map
