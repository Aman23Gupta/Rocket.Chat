function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/groups/TabbedGroupPage.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_id"];

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
var Tabs;
module.link("@rocket.chat/fuselage", {
  Tabs: function (v) {
    Tabs = v;
  }
}, 0);
var React, memo, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useEditableSettingsGroupSections, useEditableSettingsGroupTabs;
module.link("../../../../contexts/EditableSettingsContext", {
  useEditableSettingsGroupSections: function (v) {
    useEditableSettingsGroupSections = v;
  },
  useEditableSettingsGroupTabs: function (v) {
    useEditableSettingsGroupTabs = v;
  }
}, 2);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var GroupPage;
module.link("../GroupPage", {
  "default": function (v) {
    GroupPage = v;
  }
}, 4);
var Section;
module.link("../Section", {
  "default": function (v) {
    Section = v;
  }
}, 5);
var GenericGroupPage;
module.link("./GenericGroupPage", {
  "default": function (v) {
    GenericGroupPage = v;
  }
}, 6);

function TabbedGroupPage(_ref) {
  var _id = _ref._id,
      group = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var tabs = useEditableSettingsGroupTabs(_id);

  var _useState = useState(tabs[0]),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var handleTabClick = useMemo(function () {
    return function (tab) {
      return function () {
        return setTab(tab);
      };
    };
  }, [setTab]);
  var sections = useEditableSettingsGroupSections(_id, tab);
  var solo = sections.length === 1;

  if (!tabs.length || tabs.length === 1 && !tabs[0]) {
    return /*#__PURE__*/React.createElement(GenericGroupPage, _extends({
      _id: _id
    }, group));
  }

  if (!tab && tabs[0]) {
    setTab(tabs[0]);
  }

  var tabsComponent = /*#__PURE__*/React.createElement(Tabs, null, tabs.map(function (tabName) {
    return /*#__PURE__*/React.createElement(Tabs.Item, {
      key: tabName || '',
      selected: tab === tabName,
      onClick: handleTabClick(tabName)
    }, tabName ? t(tabName) : t(_id));
  }));
  return /*#__PURE__*/React.createElement(GroupPage, _extends({
    _id: _id
  }, group, {
    tabs: tabsComponent
  }), sections.map(function (sectionName) {
    return /*#__PURE__*/React.createElement(Section, {
      key: sectionName || '',
      groupId: _id,
      sectionName: sectionName,
      tabName: tab,
      solo: solo
    });
  }));
}

module.exportDefault( /*#__PURE__*/memo(TabbedGroupPage));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/groups/e88010772cab6f6b64ee31a30626e8a6fe3b1329.map
