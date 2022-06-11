function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/AuditPage.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, useRef, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useForm;
module.link("../../../client/hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 3);
let AuditPageBase;
module.link("./AuditPageBase", {
  AuditPageBase(v) {
    AuditPageBase = v;
  }

}, 4);
const initialValues = {
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

const AuditPage = () => {
  const t = useTranslation();
  const {
    values,
    handlers
  } = useForm(initialValues);
  const setData = useRef(() => {});
  const [errors, setErrors] = useState({});
  const {
    msg,
    type,
    dateRange: {
      start: startDate,
      end: endDate
    },
    visitor,
    agent,
    users,
    rid
  } = values;
  const {
    handleMsg,
    handleType,
    handleVisitor,
    handleAgent,
    handleUsers,
    handleRid,
    handleDateRange
  } = handlers;
  const onChangeUsers = useMutableCallback((value, action) => {
    if (!action) {
      if (users.includes(value)) {
        return;
      }

      return handleUsers([...users, value]);
    }

    handleUsers(users.filter(current => current !== value));
  });
  const apply = useMutableCallback(() => {
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
      const errors = {};

      if (agent === '') {
        errors.agent = t('The_field_is_required', t('Agent'));
      }

      if (visitor === '') {
        errors.visitor = t('The_field_is_required', t('Visitor'));
      }

      if (errors.visitor || errors.agent) {
        return setErrors(errors);
      }
    }

    setErrors({});
    setData.current({
      msg,
      type,
      startDate: new Date(startDate),
      endDate: new Date("".concat(endDate, "T23:59:00")),
      visitor,
      agent,
      users,
      rid
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
//# sourceMappingURL=/dynamic/ee/client/audit/6d08416757dd6462c4bcb8a0c0e25649776dc065.map
