function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/PrepareChannels.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let CheckBox, Table, Tag, Pagination;
module.link("@rocket.chat/fuselage", {
  CheckBox(v) {
    CheckBox = v;
  },

  Table(v) {
    Table = v;
  },

  Tag(v) {
    Tag = v;
  },

  Pagination(v) {
    Pagination = v;
  }

}, 0);
let React, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const PrepareChannels = _ref => {
  let {
    channels,
    channelsCount,
    setChannels
  } = _ref;
  const t = useTranslation();
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const showingResultsLabel = useCallback(_ref2 => {
    let {
      count,
      current,
      itemsPerPage
    } = _ref2;
    return t('Showing_results_of', current + 1, Math.min(current + itemsPerPage, count), count);
  }, [t]);
  const itemsPerPageLabel = useCallback(() => t('Items_per_page:'), [t]);

  if (!channels.length) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(Table.Head, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, {
    width: "x36"
  }, /*#__PURE__*/React.createElement(CheckBox, {
    checked: channelsCount > 0,
    indeterminate: channelsCount > 0 && channelsCount !== channels.length,
    onChange: () => {
      setChannels(channels => {
        const hasCheckedArchivedChannels = channels.some(_ref3 => {
          let {
            is_archived,
            do_import
          } = _ref3;
          return is_archived && do_import;
        });
        const isChecking = channelsCount === 0;

        if (isChecking) {
          return channels.map(channel => _objectSpread(_objectSpread({}, channel), {}, {
            do_import: true
          }));
        }

        if (hasCheckedArchivedChannels) {
          return channels.map(channel => channel.is_archived ? _objectSpread(_objectSpread({}, channel), {}, {
            do_import: false
          }) : channel);
        }

        return channels.map(channel => _objectSpread(_objectSpread({}, channel), {}, {
          do_import: false
        }));
      });
    }
  })), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th"
  }, t('Name')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    align: "end"
  }))), /*#__PURE__*/React.createElement(Table.Body, null, channels.slice(current, current + itemsPerPage).map(channel => /*#__PURE__*/React.createElement(Table.Row, {
    key: channel.channel_id
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    width: "x36"
  }, /*#__PURE__*/React.createElement(CheckBox, {
    checked: channel.do_import,
    onChange: event => {
      const {
        checked
      } = event.currentTarget;
      setChannels(channels => channels.map(_channel => _channel === channel ? _objectSpread(_objectSpread({}, _channel), {}, {
        do_import: checked
      }) : _channel));
    }
  })), /*#__PURE__*/React.createElement(Table.Cell, null, channel.name), /*#__PURE__*/React.createElement(Table.Cell, {
    align: "end"
  }, channel.is_archived && /*#__PURE__*/React.createElement(Tag, {
    variant: "danger"
  }, t('Importer_Archived'))))))), /*#__PURE__*/React.createElement(Pagination, {
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
//# sourceMappingURL=/dynamic/client/views/admin/import/821532298067328a7e69857a12bb38d38c18bce2.map
