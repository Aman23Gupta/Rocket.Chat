function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/messages/MessagesPerChannelSection.tsx                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var ResponsivePie;
module.link("@nivo/pie", {
  ResponsivePie: function (v) {
    ResponsivePie = v;
  }
}, 0);
var Box, Flex, Icon, Margins, Skeleton, Table, Tile;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Flex: function (v) {
    Flex = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Margins: function (v) {
    Margins = v;
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
}, 1);
var colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  "default": function (v) {
    colors = v;
  }
}, 2);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
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
var LegendSymbol;
module.link("../data/LegendSymbol", {
  "default": function (v) {
    LegendSymbol = v;
  }
}, 7);
var PeriodSelector;
module.link("../data/PeriodSelector", {
  "default": function (v) {
    PeriodSelector = v;
  }
}, 8);
var usePeriodSelectorState;
module.link("../data/usePeriodSelectorState", {
  usePeriodSelectorState: function (v) {
    usePeriodSelectorState = v;
  }
}, 9);
var useMessageOrigins;
module.link("./useMessageOrigins", {
  useMessageOrigins: function (v) {
    useMessageOrigins = v;
  }
}, 10);
var useTopFivePopularChannels;
module.link("./useTopFivePopularChannels", {
  useTopFivePopularChannels: function (v) {
    useTopFivePopularChannels = v;
  }
}, 11);

var MessagesPerChannelSection = function () {
  var _usePeriodSelectorSta = usePeriodSelectorState('last 7 days', 'last 30 days', 'last 90 days'),
      _usePeriodSelectorSta2 = _slicedToArray(_usePeriodSelectorSta, 2),
      period = _usePeriodSelectorSta2[0],
      periodSelectorProps = _usePeriodSelectorSta2[1];

  var t = useTranslation();

  var _useMessageOrigins = useMessageOrigins({
    period: period
  }),
      messageOriginsData = _useMessageOrigins.data;

  var _useTopFivePopularCha = useTopFivePopularChannels({
    period: period
  }),
      topFivePopularChannelsData = _useTopFivePopularCha.data;

  var pie = useMemo(function () {
    var _messageOriginsData$o;

    return messageOriginsData === null || messageOriginsData === void 0 ? void 0 : (_messageOriginsData$o = messageOriginsData.origins) === null || _messageOriginsData$o === void 0 ? void 0 : _messageOriginsData$o.reduce(function (obj, _ref) {
      var _objectSpread2;

      var messages = _ref.messages,
          t = _ref.t;
      return _objectSpread(_objectSpread({}, obj), {}, (_objectSpread2 = {}, _objectSpread2[t] = messages, _objectSpread2));
    }, {});
  }, [messageOriginsData]);
  var table = useMemo(function () {
    var _topFivePopularChanne;

    return topFivePopularChannelsData === null || topFivePopularChannelsData === void 0 ? void 0 : (_topFivePopularChanne = topFivePopularChannelsData.channels) === null || _topFivePopularChanne === void 0 ? void 0 : _topFivePopularChanne.reduce(function (entries, _ref2, i) {
      var t = _ref2.t,
          messages = _ref2.messages,
          name = _ref2.name,
          usernames = _ref2.usernames;
      return [].concat(_toConsumableArray(entries), [{
        i: i,
        t: t,
        name: name || (usernames === null || usernames === void 0 ? void 0 : usernames.join(' × ')),
        messages: messages
      }]);
    }, []);
  }, [topFivePopularChannelsData]);
  return /*#__PURE__*/React.createElement(Section, {
    title: t('Where_are_the_messages_being_sent?'),
    filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PeriodSelector, periodSelectorProps), /*#__PURE__*/React.createElement(DownloadDataButton, {
      attachmentName: "MessagesPerChannelSection_start_" + (messageOriginsData === null || messageOriginsData === void 0 ? void 0 : messageOriginsData.start) + "_end_" + (messageOriginsData === null || messageOriginsData === void 0 ? void 0 : messageOriginsData.end),
      headers: ['Room Type', 'Messages'],
      dataAvailable: !!messageOriginsData,
      dataExtractor: function () {
        return messageOriginsData === null || messageOriginsData === void 0 ? void 0 : messageOriginsData.origins.map(function (_ref3) {
          var t = _ref3.t,
              messages = _ref3.messages;
          return [t, messages];
        });
      }
    }))
  }, /*#__PURE__*/React.createElement(Flex.Container, null, /*#__PURE__*/React.createElement(Margins, {
    inline: "neg-x12"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Margins, {
    inline: "x12"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    grow: 1,
    shrink: 0,
    basis: "0"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Flex.Container, {
    alignItems: "center",
    wrap: "no-wrap"
  }, pie ? /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Flex.Item, {
    grow: 1,
    shrink: 1
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x24"
  }, /*#__PURE__*/React.createElement(Box, {
    style: {
      position: 'relative',
      height: 300
    }
  }, /*#__PURE__*/React.createElement(Box, {
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(ResponsivePie, {
    data: [{
      id: 'd',
      label: t('Direct_Messages'),
      value: pie.d,
      color: colors.y500
    }, {
      id: 'c',
      label: t('Private_Channels'),
      value: pie.c,
      color: colors.g500
    }, {
      id: 'p',
      label: t('Public_Channels'),
      value: pie.p,
      color: colors.b500
    }],
    innerRadius: 0.6,
    colors: [colors.y500, colors.g500, colors.b500] // @ts-ignore
    ,
    enableRadialLabels: false,
    enableSlicesLabels: false,
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
    theme: {
      // TODO: Get it from theme
      axis: {
        ticks: {
          text: {
            fill: '#9EA2A8',
            fontFamily: 'Inter, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Meiryo UI", Arial, sans-serif',
            fontSize: 10,
            fontStyle: 'normal',
            fontWeight: 600,
            letterSpacing: '0.2px',
            lineHeight: '12px'
          }
        }
      },
      tooltip: {
        container: {
          backgroundColor: '#1F2329',
          boxShadow: '0px 0px 12px rgba(47, 52, 61, 0.12), 0px 0px 2px rgba(47, 52, 61, 0.08)',
          borderRadius: 2
        }
      }
    } // @ts-ignore
    ,
    tooltip: function (_ref4) {
      var value = _ref4.value;
      return /*#__PURE__*/React.createElement(Box, {
        fontScale: "p1m",
        color: "alternative"
      }, t('Value_messages', {
        value: value
      }));
    }
  }))))), /*#__PURE__*/React.createElement(Flex.Item, {
    basis: "auto"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "neg-x4"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Margins, {
    block: "x4"
  }, /*#__PURE__*/React.createElement(Box, {
    color: "info",
    fontScale: "p1"
  }, /*#__PURE__*/React.createElement(LegendSymbol, {
    color: colors.y500
  }), t('Private_Chats')), /*#__PURE__*/React.createElement(Box, {
    color: "info",
    fontScale: "p1"
  }, /*#__PURE__*/React.createElement(LegendSymbol, {
    color: colors.g500
  }), t('Private_Channels')), /*#__PURE__*/React.createElement(Box, {
    color: "info",
    fontScale: "p1"
  }, /*#__PURE__*/React.createElement(LegendSymbol, {
    color: colors.b500
  }), t('Public_Channels'))))))) : /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: 300
  })))), /*#__PURE__*/React.createElement(Flex.Item, {
    grow: 1,
    shrink: 0,
    basis: "0"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Margins, {
    blockEnd: "x16"
  }, table ? /*#__PURE__*/React.createElement(Box, {
    fontScale: "p1"
  }, t('Most_popular_channels_top_5')) : /*#__PURE__*/React.createElement(Skeleton, {
    width: "50%"
  })), table && !table.length && /*#__PURE__*/React.createElement(Tile, {
    fontScale: "p1",
    color: "info",
    style: {
      textAlign: 'center'
    }
  }, t('Not_enough_data')), (!table || !!table.length) && /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(Table.Head, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, '#'), /*#__PURE__*/React.createElement(Table.Cell, null, t('Channel')), /*#__PURE__*/React.createElement(Table.Cell, {
    align: "end"
  }, t('Number_of_messages')))), /*#__PURE__*/React.createElement(Table.Body, null, table === null || table === void 0 ? void 0 : table.map(function (_ref5) {
    var i = _ref5.i,
        t = _ref5.t,
        name = _ref5.name,
        messages = _ref5.messages;
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
    })), name), /*#__PURE__*/React.createElement(Table.Cell, {
      align: "end"
    }, messages));
  }), !table && Array.from({
    length: 5
  }, function (_, i) {
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: i
    }, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    })), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    })), /*#__PURE__*/React.createElement(Table.Cell, {
      align: "end"
    }, /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    })));
  }))))))))));
};

module.exportDefault(MessagesPerChannelSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/messages/ca881e62a8c00c4abfd8c34db4d2f0756917982e.map
