function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/Row.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var FileItem;
module.link("./components/FileItem", {
  "default": function (v) {
    FileItem = v;
  }
}, 1);

var Row = function (_ref) {
  var item = _ref.item,
      data = _ref.data,
      index = _ref.index;
  var onClickDelete = data.onClickDelete,
      isDeletionAllowed = data.isDeletionAllowed;
  return item && /*#__PURE__*/React.createElement(FileItem, {
    index: index,
    fileData: item,
    onClickDelete: onClickDelete,
    isDeletionAllowed: isDeletionAllowed
  });
};

module.exportDefault( /*#__PURE__*/memo(Row));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/9cc7e03d505321d5bac04e554ac1c1af0f83f716.map
