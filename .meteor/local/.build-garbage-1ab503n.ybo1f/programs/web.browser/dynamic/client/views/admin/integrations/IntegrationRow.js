function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/IntegrationRow.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Table;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 2);
const style = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};

function IntegrationRow(_ref) {
  let {
    name,
    _id,
    type,
    username,
    _createdAt,
    _createdBy: {
      username: createdBy
    },
    channel = [],
    onClick,
    isBig
  } = _ref;
  const formatDateAndTime = useFormatDateAndTime();
  const handler = useMemo(() => onClick(_id, type), [onClick, _id, type]);
  return /*#__PURE__*/React.createElement(Table.Row, {
    key: _id,
    onKeyDown: handler,
    onClick: handler,
    tabIndex: 0,
    role: "link",
    action: true
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    style: style,
    color: "default",
    fontScale: "p2m"
  }, name), /*#__PURE__*/React.createElement(Table.Cell, {
    style: style
  }, channel.join(', ')), /*#__PURE__*/React.createElement(Table.Cell, {
    style: style
  }, createdBy), isBig && /*#__PURE__*/React.createElement(Table.Cell, {
    style: style
  }, formatDateAndTime(_createdAt)), /*#__PURE__*/React.createElement(Table.Cell, {
    style: style
  }, username));
}

module.exportDefault(IntegrationRow);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/ef9cf626ba63e476a9c5678314fbe0aa4edcdd8f.map
