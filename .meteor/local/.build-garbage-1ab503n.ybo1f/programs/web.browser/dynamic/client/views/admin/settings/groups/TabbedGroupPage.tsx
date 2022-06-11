function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/groups/TabbedGroupPage.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["_id"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Tabs;
module.link("@rocket.chat/fuselage", {
  Tabs(v) {
    Tabs = v;
  }

}, 0);
let React, memo, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useEditableSettingsGroupSections, useEditableSettingsGroupTabs;
module.link("../../../../contexts/EditableSettingsContext", {
  useEditableSettingsGroupSections(v) {
    useEditableSettingsGroupSections = v;
  },

  useEditableSettingsGroupTabs(v) {
    useEditableSettingsGroupTabs = v;
  }

}, 2);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let GroupPage;
module.link("../GroupPage", {
  default(v) {
    GroupPage = v;
  }

}, 4);
let Section;
module.link("../Section", {
  default(v) {
    Section = v;
  }

}, 5);
let GenericGroupPage;
module.link("./GenericGroupPage", {
  default(v) {
    GenericGroupPage = v;
  }

}, 6);

function TabbedGroupPage(_ref) {
  let {
    _id
  } = _ref,
      group = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const tabs = useEditableSettingsGroupTabs(_id);
  const [tab, setTab] = useState(tabs[0]);
  const handleTabClick = useMemo(() => tab => () => setTab(tab), [setTab]);
  const sections = useEditableSettingsGroupSections(_id, tab);
  const solo = sections.length === 1;

  if (!tabs.length || tabs.length === 1 && !tabs[0]) {
    return /*#__PURE__*/React.createElement(GenericGroupPage, _extends({
      _id: _id
    }, group));
  }

  if (!tab && tabs[0]) {
    setTab(tabs[0]);
  }

  const tabsComponent = /*#__PURE__*/React.createElement(Tabs, null, tabs.map(tabName => /*#__PURE__*/React.createElement(Tabs.Item, {
    key: tabName || '',
    selected: tab === tabName,
    onClick: handleTabClick(tabName)
  }, tabName ? t(tabName) : t(_id))));
  return /*#__PURE__*/React.createElement(GroupPage, _extends({
    _id: _id
  }, group, {
    tabs: tabsComponent
  }), sections.map(sectionName => /*#__PURE__*/React.createElement(Section, {
    key: sectionName || '',
    groupId: _id,
    sectionName: sectionName,
    tabName: tab,
    solo: solo
  })));
}

module.exportDefault( /*#__PURE__*/memo(TabbedGroupPage));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/groups/f58e12ea3f21a3f9ab46fe3996d7518c26f6c97c.map
