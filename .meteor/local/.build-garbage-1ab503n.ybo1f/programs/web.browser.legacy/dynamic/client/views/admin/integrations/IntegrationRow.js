function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/IntegrationRow.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Table;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 2);
var style = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};

function IntegrationRow(_ref) {
  var name = _ref.name,
      _id = _ref._id,
      type = _ref.type,
      username = _ref.username,
      _createdAt = _ref._createdAt,
      createdBy = _ref._createdBy.username,
      _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? [] : _ref$channel,
      onClick = _ref.onClick,
      isBig = _ref.isBig;
  var formatDateAndTime = useFormatDateAndTime();
  var handler = useMemo(function () {
    return onClick(_id, type);
  }, [onClick, _id, type]);
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
//# sourceMappingURL=/dynamic/client/views/admin/integrations/92b6c52856949e89a0735a470965f6aaa445f23d.map
