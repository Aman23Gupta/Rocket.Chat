function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/Row.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let FileItem;
module.link("./components/FileItem", {
  default(v) {
    FileItem = v;
  }

}, 1);

const Row = _ref => {
  let {
    item,
    data,
    index
  } = _ref;
  const {
    onClickDelete,
    isDeletionAllowed
  } = data;
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/3287ee57a61b9862b19110f861befa8f2f1dc589.map
