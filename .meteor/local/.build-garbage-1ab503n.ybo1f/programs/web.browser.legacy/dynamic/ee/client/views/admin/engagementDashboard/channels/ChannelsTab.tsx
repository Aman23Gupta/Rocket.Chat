function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/channels/ChannelsTab.tsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Box, Icon, Margins, Pagination, Skeleton, Table, Tile;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Pagination: function (v) {
    Pagination = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  },
  Table: function (v) {
    Table = v;
  },
  Tile: function (v) {
    Tile = v;
  }
}, 0);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 1);
var React, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var Growth;
module.link("../../../../../../client/components/data/Growth", {
  "default": function (v) {
    Growth = v;
  }
}, 3);
var useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var Section;
module.link("../Section", {
  "default": function (v) {
    Section = v;
  }
}, 5);
var DownloadDataButton;
module.link("../data/DownloadDataButton", {
  "default": function (v) {
    DownloadDataButton = v;
  }
}, 6);
var PeriodSelector;
module.link("../data/PeriodSelector", {
  "default": function (v) {
    PeriodSelector = v;
  }
}, 7);
var usePeriodSelectorState;
module.link("../data/usePeriodSelectorState", {
  usePeriodSelectorState: function (v) {
    usePeriodSelectorState = v;
  }
}, 8);
var useChannelsList;
module.link("./useChannelsList", {
  useChannelsList: function (v) {
    useChannelsList = v;
  }
}, 9);

var ChannelsTab = function () {
  var _usePeriodSelectorSta = usePeriodSelectorState('last 7 days', 'last 30 days', 'last 90 days'),
      _usePeriodSelectorSta2 = _slicedToArray(_usePeriodSelectorSta, 2),
      period = _usePeriodSelectorSta2[0],
      periodSelectorProps = _usePeriodSelectorSta2[1];

  var t = useTranslation();

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = useState(25),
      _useState4 = _slicedToArray(_useState3, 2),
      itemsPerPage = _useState4[0],
      setItemsPerPage = _useState4[1];

  var _useChannelsList = useChannelsList({
    period: period,
    offset: current,
    count: itemsPerPage
  }),
      data = _useChannelsList.data;

  var channels = useMemo(function () {
    var _data$channels;

    if (!data) {
      return;
    }

    return data === null || data === void 0 ? void 0 : (_data$channels = data.channels) === null || _data$channels === void 0 ? void 0 : _data$channels.map(function (_ref) {
      var _ref$room = _ref.room,
          t = _ref$room.t,
          name = _ref$room.name,
          usernames = _ref$room.usernames,
          ts = _ref$room.ts,
          _updatedAt = _ref$room._updatedAt,
          messages = _ref.messages,
          diffFromLastWeek = _ref.diffFromLastWeek;
      return {
        t: t,
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
      attachmentName: "Channels_start_" + (data === null || data === void 0 ? void 0 : data.start) + "_end_" + (data === null || data === void 0 ? void 0 : data.end),
      headers: ['Room type', 'Name', 'Messages', 'Last Update Date', 'Creation Date'],
      dataAvailable: !!data,
      dataExtractor: function () {
        var _data$channels2;

        return data === null || data === void 0 ? void 0 : (_data$channels2 = data.channels) === null || _data$channels2 === void 0 ? void 0 : _data$channels2.map(function (_ref2) {
          var _ref2$room = _ref2.room,
              t = _ref2$room.t,
              name = _ref2$room.name,
              usernames = _ref2$room.usernames,
              ts = _ref2$room.ts,
              _updatedAt = _ref2$room._updatedAt,
              messages = _ref2.messages;
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
  }, t('No_data_found')), (!channels || channels.length) && /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(Table.Head, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, '#'), /*#__PURE__*/React.createElement(Table.Cell, null, t('Channel')), /*#__PURE__*/React.createElement(Table.Cell, null, t('Created')), /*#__PURE__*/React.createElement(Table.Cell, null, t('Last_active')), /*#__PURE__*/React.createElement(Table.Cell, null, t('Messages_sent')))), /*#__PURE__*/React.createElement(Table.Body, null, channels === null || channels === void 0 ? void 0 : channels.map(function (_ref3, i) {
    var t = _ref3.t,
        name = _ref3.name,
        createdAt = _ref3.createdAt,
        updatedAt = _ref3.updatedAt,
        messagesCount = _ref3.messagesCount,
        messagesVariation = _ref3.messagesVariation;
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
  }, function (_, i) {
    return /*#__PURE__*/React.createElement(Table.Row, {
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
    })));
  }))), /*#__PURE__*/React.createElement(Pagination, {
    current: current,
    itemsPerPage: itemsPerPage,
    itemsPerPageLabel: function () {
      return t('Items_per_page:');
    },
    showingResultsLabel: function (_ref4) {
      var count = _ref4.count,
          current = _ref4.current,
          itemsPerPage = _ref4.itemsPerPage;
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/channels/114d031243dabe858e75bc1b2f75c0f51ae205c4.map
