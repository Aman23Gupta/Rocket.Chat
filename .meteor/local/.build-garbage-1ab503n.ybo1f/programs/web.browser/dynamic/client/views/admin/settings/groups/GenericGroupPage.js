function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/groups/GenericGroupPage.js                                                              //
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
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let useEditableSettingsGroupSections;
module.link("../../../../contexts/EditableSettingsContext", {
  useEditableSettingsGroupSections(v) {
    useEditableSettingsGroupSections = v;
  }

}, 1);
let GroupPage;
module.link("../GroupPage", {
  default(v) {
    GroupPage = v;
  }

}, 2);
let Section;
module.link("../Section", {
  default(v) {
    Section = v;
  }

}, 3);

function GenericGroupPage(_ref) {
  let {
    _id
  } = _ref,
      group = _objectWithoutProperties(_ref, _excluded);

  const sections = useEditableSettingsGroupSections(_id);
  const solo = sections.length === 1;
  return /*#__PURE__*/React.createElement(GroupPage, _extends({
    _id: _id
  }, group), sections.map(sectionName => /*#__PURE__*/React.createElement(Section, {
    key: sectionName || '',
    groupId: _id,
    sectionName: sectionName,
    solo: solo
  })));
}

module.exportDefault( /*#__PURE__*/memo(GenericGroupPage));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/groups/89069046acc9a67c8c2c6844ef5ef3bb5ef2e2c5.map
