function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/PlanTag.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Tag;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Tag(v) {
    Tag = v;
  }

}, 0);
let useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely(v) {
    useSafely = v;
  }

}, 1);
let React, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useMethod;
module.link("../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 3);

function PlanTag() {
  const [plans, setPlans] = useSafely(useState([]));
  const getTags = useMethod('license:getTags');
  useEffect(() => {
    const developmentTag = process.env.NODE_ENV === 'development' ? {
      name: 'development',
      color: '#095ad2'
    } : null;

    const fetchTags = async () => {
      const tags = await getTags();
      setPlans([developmentTag, ...tags].filter(Boolean).map(plan => ({
        plan: plan.name,
        background: plan.color
      })));
    };

    fetchTags();
  }, [getTags, setPlans]);
  return plans.map(_ref => {
    let {
      plan,
      background
    } = _ref;
    return /*#__PURE__*/React.createElement(Box, {
      marginInline: "x4",
      display: "inline-block",
      verticalAlign: "middle",
      key: plan
    }, /*#__PURE__*/React.createElement(Tag, {
      style: {
        color: '#fff',
        backgroundColor: background,
        textTransform: 'capitalize'
      }
    }, plan));
  });
}

module.exportDefault(PlanTag);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/885091cdde87ace60c91305174adbffcfc979356.map
