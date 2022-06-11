function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/info/SeatsCard.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Button, ButtonGroup, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 0);
var colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  "default": function (v) {
    colors = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var Card;
module.link("../../../../../client/components/Card", {
  "default": function (v) {
    Card = v;
  }
}, 3);
var ExternalLink;
module.link("../../../../../client/components/ExternalLink", {
  "default": function (v) {
    ExternalLink = v;
  }
}, 4);
var useTranslation;
module.link("../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var UsagePieGraph;
module.link("../../../../../client/views/admin/info/UsagePieGraph", {
  "default": function (v) {
    UsagePieGraph = v;
  }
}, 6);
var useRequestSeatsLink;
module.link("../users/useRequestSeatsLink", {
  useRequestSeatsLink: function (v) {
    useRequestSeatsLink = v;
  }
}, 7);
var useSeatsCap;
module.link("../users/useSeatsCap", {
  useSeatsCap: function (v) {
    useSeatsCap = v;
  }
}, 8);

var SeatsCard = function () {
  var t = useTranslation();
  var seatsCap = useSeatsCap();
  var requestSeatsLink = useRequestSeatsLink();
  var seatsLeft = seatsCap && Math.max(seatsCap.maxActiveUsers - seatsCap.activeUsers, 0);
  var isNearLimit = seatsCap && seatsCap.activeUsers / seatsCap.maxActiveUsers >= 0.8;
  var color = isNearLimit ? colors.r500 : undefined;

  if (seatsCap && seatsCap.maxActiveUsers === Infinity) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Title, null, t('Seats_usage')), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Col, null, /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontScale: isNearLimit ? 'p2m' : 'p2'
  }, !seatsCap ? /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    width: "x112",
    height: "x112"
  }) : /*#__PURE__*/React.createElement(UsagePieGraph, {
    label: /*#__PURE__*/React.createElement(Box, {
      color: color
    }, t('Seats_Available', {
      seatsLeft: seatsLeft
    })),
    used: seatsCap.activeUsers,
    total: seatsCap.maxActiveUsers,
    size: 140,
    color: color
  }))))), /*#__PURE__*/React.createElement(Card.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(ExternalLink, {
    to: requestSeatsLink
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    primary: true
  }, t('Request_seats'))))));
};

module.exportDefault(SeatsCard);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/info/ccafbd007573094677f7b804cff19c5f9a9a4304.map
