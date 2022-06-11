function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/PrepareChannels.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var CheckBox, Table, Tag, Pagination;
module.link("@rocket.chat/fuselage", {
  CheckBox: function (v) {
    CheckBox = v;
  },
  Table: function (v) {
    Table = v;
  },
  Tag: function (v) {
    Tag = v;
  },
  Pagination: function (v) {
    Pagination = v;
  }
}, 0);
var React, useState, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var PrepareChannels = function (_ref) {
  var channels = _ref.channels,
      channelsCount = _ref.channelsCount,
      setChannels = _ref.setChannels;
  var t = useTranslation();

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = useState(25),
      _useState4 = _slicedToArray(_useState3, 2),
      itemsPerPage = _useState4[0],
      setItemsPerPage = _useState4[1];

  var showingResultsLabel = useCallback(function (_ref2) {
    var count = _ref2.count,
        current = _ref2.current,
        itemsPerPage = _ref2.itemsPerPage;
    return t('Showing_results_of', current + 1, Math.min(current + itemsPerPage, count), count);
  }, [t]);
  var itemsPerPageLabel = useCallback(function () {
    return t('Items_per_page:');
  }, [t]);

  if (!channels.length) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(Table.Head, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, {
    width: "x36"
  }, /*#__PURE__*/React.createElement(CheckBox, {
    checked: channelsCount > 0,
    indeterminate: channelsCount > 0 && channelsCount !== channels.length,
    onChange: function () {
      setChannels(function (channels) {
        var hasCheckedArchivedChannels = channels.some(function (_ref3) {
          var is_archived = _ref3.is_archived,
              do_import = _ref3.do_import;
          return is_archived && do_import;
        });
        var isChecking = channelsCount === 0;

        if (isChecking) {
          return channels.map(function (channel) {
            return _objectSpread(_objectSpread({}, channel), {}, {
              do_import: true
            });
          });
        }

        if (hasCheckedArchivedChannels) {
          return channels.map(function (channel) {
            return channel.is_archived ? _objectSpread(_objectSpread({}, channel), {}, {
              do_import: false
            }) : channel;
          });
        }

        return channels.map(function (channel) {
          return _objectSpread(_objectSpread({}, channel), {}, {
            do_import: false
          });
        });
      });
    }
  })), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th"
  }, t('Name')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    align: "end"
  }))), /*#__PURE__*/React.createElement(Table.Body, null, channels.slice(current, current + itemsPerPage).map(function (channel) {
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: channel.channel_id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      width: "x36"
    }, /*#__PURE__*/React.createElement(CheckBox, {
      checked: channel.do_import,
      onChange: function (event) {
        var checked = event.currentTarget.checked;
        setChannels(function (channels) {
          return channels.map(function (_channel) {
            return _channel === channel ? _objectSpread(_objectSpread({}, _channel), {}, {
              do_import: checked
            }) : _channel;
          });
        });
      }
    })), /*#__PURE__*/React.createElement(Table.Cell, null, channel.name), /*#__PURE__*/React.createElement(Table.Cell, {
      align: "end"
    }, channel.is_archived && /*#__PURE__*/React.createElement(Tag, {
      variant: "danger"
    }, t('Importer_Archived'))));
  }))), /*#__PURE__*/React.createElement(Pagination, {
    current: current,
    itemsPerPage: itemsPerPage,
    itemsPerPageLabel: itemsPerPageLabel,
    showingResultsLabel: showingResultsLabel,
    count: channels.length || 0,
    onSetItemsPerPage: setItemsPerPage,
    onSetCurrent: setCurrent
  }));
};

module.exportDefault(PrepareChannels);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/import/7287cb8ce7093afa0484e1c965fd9dc89facb962.map
