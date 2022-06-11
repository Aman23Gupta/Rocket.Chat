function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/channels/ChannelsTab.tsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Icon, Margins, Pagination, Skeleton, Table, Tile;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  Margins(v) {
    Margins = v;
  },

  Pagination(v) {
    Pagination = v;
  },

  Skeleton(v) {
    Skeleton = v;
  },

  Table(v) {
    Table = v;
  },

  Tile(v) {
    Tile = v;
  }

}, 0);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 1);
let React, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let Growth;
module.link("../../../../../../client/components/data/Growth", {
  default(v) {
    Growth = v;
  }

}, 3);
let useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let Section;
module.link("../Section", {
  default(v) {
    Section = v;
  }

}, 5);
let DownloadDataButton;
module.link("../data/DownloadDataButton", {
  default(v) {
    DownloadDataButton = v;
  }

}, 6);
let PeriodSelector;
module.link("../data/PeriodSelector", {
  default(v) {
    PeriodSelector = v;
  }

}, 7);
let usePeriodSelectorState;
module.link("../data/usePeriodSelectorState", {
  usePeriodSelectorState(v) {
    usePeriodSelectorState = v;
  }

}, 8);
let useChannelsList;
module.link("./useChannelsList", {
  useChannelsList(v) {
    useChannelsList = v;
  }

}, 9);

const ChannelsTab = () => {
  const [period, periodSelectorProps] = usePeriodSelectorState('last 7 days', 'last 30 days', 'last 90 days');
  const t = useTranslation();
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const {
    data
  } = useChannelsList({
    period,
    offset: current,
    count: itemsPerPage
  });
  const channels = useMemo(() => {
    var _data$channels;

    if (!data) {
      return;
    }

    return data === null || data === void 0 ? void 0 : (_data$channels = data.channels) === null || _data$channels === void 0 ? void 0 : _data$channels.map(_ref => {
      let {
        room: {
          t,
          name,
          usernames,
          ts,
          _updatedAt
        },
        messages,
        diffFromLastWeek
      } = _ref;
      return {
        t,
        name: name || (usernames === null || usernames === void 0 ? void 0 : usernames.join(' × ')),
        createdAt: ts,
        updatedAt: _updatedAt,
        messagesCount: messages,
        messagesVariation: diffFromLastWeek
      };
    });
  }, [data]);
  return /*#__PURE__*/React.createElement(Section, {
    filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PeriodSelector, periodSelectorProps), /*#__PURE__*/React.createElement(DownloadDataButton, {
      attachmentName: "Channels_start_".concat(data === null || data === void 0 ? void 0 : data.start, "_end_").concat(data === null || data === void 0 ? void 0 : data.end),
      headers: ['Room type', 'Name', 'Messages', 'Last Update Date', 'Creation Date'],
      dataAvailable: !!data,
      dataExtractor: () => {
        var _data$channels2;

        return data === null || data === void 0 ? void 0 : (_data$channels2 = data.channels) === null || _data$channels2 === void 0 ? void 0 : _data$channels2.map(_ref2 => {
          let {
            room: {
              t,
              name,
              usernames,
              ts,
              _updatedAt
            },
            messages
          } = _ref2;
          return [t, name || (usernames === null || usernames === void 0 ? void 0 : usernames.join(' × ')), messages, _updatedAt, ts];
        });
      }
    }))
  }, /*#__PURE__*/React.createElement(Box, null, channels && !channels.length && /*#__PURE__*/React.createElement(Tile, {
    fontScale: "p1",
    color: "info",
    style: {
      textAlign: 'center'
    }
  }, t('No_data_found')), (!channels || channels.length) && /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(Table.Head, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, '#'), /*#__PURE__*/React.createElement(Table.Cell, null, t('Channel')), /*#__PURE__*/React.createElement(Table.Cell, null, t('Created')), /*#__PURE__*/React.createElement(Table.Cell, null, t('Last_active')), /*#__PURE__*/React.createElement(Table.Cell, null, t('Messages_sent')))), /*#__PURE__*/React.createElement(Table.Body, null, channels === null || channels === void 0 ? void 0 : channels.map((_ref3, i) => {
    let {
      t,
      name,
      createdAt,
      updatedAt,
      messagesCount,
      messagesVariation
    } = _ref3;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: i
    }, /*#__PURE__*/React.createElement(Table.Cell, null, i + 1, "."), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Margins, {
      inlineEnd: "x4"
    }, t === 'd' && /*#__PURE__*/React.createElement(Icon, {
      name: "at"
    }) || t === 'c' && /*#__PURE__*/React.createElement(Icon, {
      name: "lock"
    }) || t === 'p' && /*#__PURE__*/React.createElement(Icon, {
      name: "hashtag"
    })), name), /*#__PURE__*/React.createElement(Table.Cell, null, moment(createdAt).format('L')), /*#__PURE__*/React.createElement(Table.Cell, null, moment(updatedAt).format('L')), /*#__PURE__*/React.createElement(Table.Cell, null, messagesCount, " ", /*#__PURE__*/React.createElement(Growth, null, messagesVariation)));
  }), !channels && Array.from({
    length: 5
  }, (_, i) => /*#__PURE__*/React.createElement(Table.Row, {
    key: i
  }, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%"
  })), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%"
  })), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%"
  })), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%"
  })), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%"
  })))))), /*#__PURE__*/React.createElement(Pagination, {
    current: current,
    itemsPerPage: itemsPerPage,
    itemsPerPageLabel: () => t('Items_per_page:'),
    showingResultsLabel: _ref4 => {
      let {
        count,
        current,
        itemsPerPage
      } = _ref4;
      return t('Showing_results_of', current + 1, Math.min(current + itemsPerPage, count), count);
    },
    count: (data === null || data === void 0 ? void 0 : data.total) || 0,
    onSetItemsPerPage: setItemsPerPage,
    onSetCurrent: setCurrent
  })));
};

module.exportDefault(ChannelsTab);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/channels/61dcb5ffa6d32530dda870b52180f6306516e68e.map
