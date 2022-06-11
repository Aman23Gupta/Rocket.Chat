function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/messages/MessagesPerChannelSection.tsx                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let ResponsivePie;
module.link("@nivo/pie", {
  ResponsivePie(v) {
    ResponsivePie = v;
  }

}, 0);
let Box, Flex, Icon, Margins, Skeleton, Table, Tile;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Flex(v) {
    Flex = v;
  },

  Icon(v) {
    Icon = v;
  },

  Margins(v) {
    Margins = v;
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

}, 1);
let colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  default(v) {
    colors = v;
  }

}, 2);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
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
let LegendSymbol;
module.link("../data/LegendSymbol", {
  default(v) {
    LegendSymbol = v;
  }

}, 7);
let PeriodSelector;
module.link("../data/PeriodSelector", {
  default(v) {
    PeriodSelector = v;
  }

}, 8);
let usePeriodSelectorState;
module.link("../data/usePeriodSelectorState", {
  usePeriodSelectorState(v) {
    usePeriodSelectorState = v;
  }

}, 9);
let useMessageOrigins;
module.link("./useMessageOrigins", {
  useMessageOrigins(v) {
    useMessageOrigins = v;
  }

}, 10);
let useTopFivePopularChannels;
module.link("./useTopFivePopularChannels", {
  useTopFivePopularChannels(v) {
    useTopFivePopularChannels = v;
  }

}, 11);

const MessagesPerChannelSection = () => {
  const [period, periodSelectorProps] = usePeriodSelectorState('last 7 days', 'last 30 days', 'last 90 days');
  const t = useTranslation();
  const {
    data: messageOriginsData
  } = useMessageOrigins({
    period
  });
  const {
    data: topFivePopularChannelsData
  } = useTopFivePopularChannels({
    period
  });
  const pie = useMemo(() => {
    var _messageOriginsData$o;

    return messageOriginsData === null || messageOriginsData === void 0 ? void 0 : (_messageOriginsData$o = messageOriginsData.origins) === null || _messageOriginsData$o === void 0 ? void 0 : _messageOriginsData$o.reduce((obj, _ref) => {
      let {
        messages,
        t
      } = _ref;
      return _objectSpread(_objectSpread({}, obj), {}, {
        [t]: messages
      });
    }, {});
  }, [messageOriginsData]);
  const table = useMemo(() => {
    var _topFivePopularChanne;

    return topFivePopularChannelsData === null || topFivePopularChannelsData === void 0 ? void 0 : (_topFivePopularChanne = topFivePopularChannelsData.channels) === null || _topFivePopularChanne === void 0 ? void 0 : _topFivePopularChanne.reduce((entries, _ref2, i) => {
      let {
        t,
        messages,
        name,
        usernames
      } = _ref2;
      return [...entries, {
        i,
        t,
        name: name || (usernames === null || usernames === void 0 ? void 0 : usernames.join(' × ')),
        messages
      }];
    }, []);
  }, [topFivePopularChannelsData]);
  return /*#__PURE__*/React.createElement(Section, {
    title: t('Where_are_the_messages_being_sent?'),
    filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PeriodSelector, periodSelectorProps), /*#__PURE__*/React.createElement(DownloadDataButton, {
      attachmentName: "MessagesPerChannelSection_start_".concat(messageOriginsData === null || messageOriginsData === void 0 ? void 0 : messageOriginsData.start, "_end_").concat(messageOriginsData === null || messageOriginsData === void 0 ? void 0 : messageOriginsData.end),
      headers: ['Room Type', 'Messages'],
      dataAvailable: !!messageOriginsData,
      dataExtractor: () => messageOriginsData === null || messageOriginsData === void 0 ? void 0 : messageOriginsData.origins.map(_ref3 => {
        let {
          t,
          messages
        } = _ref3;
        return [t, messages];
      })
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
    tooltip: _ref4 => {
      let {
        value
      } = _ref4;
      return /*#__PURE__*/React.createElement(Box, {
        fontScale: "p1m",
        color: "alternative"
      }, t('Value_messages', {
        value
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
  }, t('Number_of_messages')))), /*#__PURE__*/React.createElement(Table.Body, null, table === null || table === void 0 ? void 0 : table.map(_ref5 => {
    let {
      i,
      t,
      name,
      messages
    } = _ref5;
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
  }, (_, i) => /*#__PURE__*/React.createElement(Table.Row, {
    key: i
  }, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%"
  })), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%"
  })), /*#__PURE__*/React.createElement(Table.Cell, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%"
  })))))))))))));
};

module.exportDefault(MessagesPerChannelSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/messages/312dd932aac6509f7c28803bf4c37cf5528d2500.map
