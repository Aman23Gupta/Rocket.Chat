function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/AuditPage.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, useRef, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useForm;
module.link("../../../client/hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 3);
var AuditPageBase;
module.link("./AuditPageBase", {
  AuditPageBase: function (v) {
    AuditPageBase = v;
  }
}, 4);
var initialValues = {
  msg: '',
  type: '',
  dateRange: {
    start: '',
    end: ''
  },
  visitor: '',
  agent: 'all',
  rid: '',
  users: []
};

var AuditPage = function () {
  var t = useTranslation();

  var _useForm = useForm(initialValues),
      values = _useForm.values,
      handlers = _useForm.handlers;

  var setData = useRef(function () {});

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var msg = values.msg,
      type = values.type,
      _values$dateRange = values.dateRange,
      startDate = _values$dateRange.start,
      endDate = _values$dateRange.end,
      visitor = values.visitor,
      agent = values.agent,
      users = values.users,
      rid = values.rid;
  var handleMsg = handlers.handleMsg,
      handleType = handlers.handleType,
      handleVisitor = handlers.handleVisitor,
      handleAgent = handlers.handleAgent,
      handleUsers = handlers.handleUsers,
      handleRid = handlers.handleRid,
      handleDateRange = handlers.handleDateRange;
  var onChangeUsers = useMutableCallback(function (value, action) {
    if (!action) {
      if (users.includes(value)) {
        return;
      }

      return handleUsers([].concat(_toConsumableArray(users), [value]));
    }

    handleUsers(users.filter(function (current) {
      return current !== value;
    }));
  });
  var apply = useMutableCallback(function () {
    if (!rid && type === '') {
      return setErrors({
        rid: t('The_field_is_required', t('Channel_name'))
      });
    }

    if (users.length < 2 && type === 'd') {
      return setErrors({
        users: t('Select_at_least_two_users')
      });
    }

    if (type === 'l') {
      var _errors = {};

      if (agent === '') {
        _errors.agent = t('The_field_is_required', t('Agent'));
      }

      if (visitor === '') {
        _errors.visitor = t('The_field_is_required', t('Visitor'));
      }

      if (_errors.visitor || _errors.agent) {
        return setErrors(_errors);
      }
    }

    setErrors({});
    setData.current({
      msg: msg,
      type: type,
      startDate: new Date(startDate),
      endDate: new Date(endDate + "T23:59:00"),
      visitor: visitor,
      agent: agent,
      users: users,
      rid: rid
    });
  });
  return /*#__PURE__*/React.createElement(AuditPageBase, {
    type: type,
    handleType: handleType,
    msg: msg,
    handleMsg: handleMsg,
    handleDateRange: handleDateRange,
    errors: errors,
    rid: rid,
    handleRid: handleRid,
    users: users,
    handleUsers: handleUsers,
    onChangeUsers: onChangeUsers,
    visitor: visitor,
    handleVisitor: handleVisitor,
    agent: agent,
    handleAgent: handleAgent,
    apply: apply,
    setData: setData
  });
};

module.exportDefault(AuditPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/cb71247e4d3b122a7216feb8c942c55dbde5c225.map
