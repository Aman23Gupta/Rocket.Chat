function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/Result.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var useStableArray;
module.link("@rocket.chat/fuselage-hooks", {
  useStableArray: function (v) {
    useStableArray = v;
  }
}, 1);
var Blaze;
module.link("meteor/blaze", {
  Blaze: function (v) {
    Blaze = v;
  }
}, 2);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 3);
var React, useEffect, useState, useRef, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 4);
module.link("../../app/auditing/client/templates/audit/audit.html");
var Result = /*#__PURE__*/memo(function (_ref) {
  var setDataRef = _ref.setDataRef;
  var ref = useRef();

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var msg = data.msg,
      type = data.type,
      startDate = data.startDate,
      endDate = data.endDate,
      visitor = data.visitor,
      agent = data.agent,
      _data$users = data.users,
      users = _data$users === void 0 ? [] : _data$users,
      rid = data.rid;
  var stableUsers = useStableArray(users);
  setDataRef.current = setData;
  useEffect(function () {
    var view = Blaze.renderWithData(Template.audit, {
      msg: msg,
      type: type,
      startDate: startDate,
      endDate: endDate,
      visitor: visitor,
      agent: agent,
      users: stableUsers,
      rid: rid
    }, ref.current);
    return function () {
      return Blaze.remove(view);
    };
  }, [agent, endDate, msg, rid, startDate, type, stableUsers, visitor]);
  return /*#__PURE__*/React.createElement(Box, {
    ref: ref
  });
});
module.exportDefault(Result);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/365d72486146c3b2936f989a0b00d0b7b3a7317b.map
