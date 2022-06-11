function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/groups/GenericGroupPage.js                                                              //
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

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var useEditableSettingsGroupSections;
module.link("../../../../contexts/EditableSettingsContext", {
  useEditableSettingsGroupSections: function (v) {
    useEditableSettingsGroupSections = v;
  }
}, 1);
var GroupPage;
module.link("../GroupPage", {
  "default": function (v) {
    GroupPage = v;
  }
}, 2);
var Section;
module.link("../Section", {
  "default": function (v) {
    Section = v;
  }
}, 3);

function GenericGroupPage(_ref) {
  var _id = _ref._id,
      group = _objectWithoutProperties(_ref, _excluded);

  var sections = useEditableSettingsGroupSections(_id);
  var solo = sections.length === 1;
  return /*#__PURE__*/React.createElement(GroupPage, _extends({
    _id: _id
  }, group), sections.map(function (sectionName) {
    return /*#__PURE__*/React.createElement(Section, {
      key: sectionName || '',
      groupId: _id,
      sectionName: sectionName,
      solo: solo
    });
  }));
}

module.exportDefault( /*#__PURE__*/memo(GenericGroupPage));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/groups/330985bf608ee2fb700bacb749bb8122e4cbb06a.map
