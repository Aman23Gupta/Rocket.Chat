function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/info/SeatsCard.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, ButtonGroup, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Skeleton(v) {
    Skeleton = v;
  }

}, 0);
let colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  default(v) {
    colors = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let Card;
module.link("../../../../../client/components/Card", {
  default(v) {
    Card = v;
  }

}, 3);
let ExternalLink;
module.link("../../../../../client/components/ExternalLink", {
  default(v) {
    ExternalLink = v;
  }

}, 4);
let useTranslation;
module.link("../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let UsagePieGraph;
module.link("../../../../../client/views/admin/info/UsagePieGraph", {
  default(v) {
    UsagePieGraph = v;
  }

}, 6);
let useRequestSeatsLink;
module.link("../users/useRequestSeatsLink", {
  useRequestSeatsLink(v) {
    useRequestSeatsLink = v;
  }

}, 7);
let useSeatsCap;
module.link("../users/useSeatsCap", {
  useSeatsCap(v) {
    useSeatsCap = v;
  }

}, 8);

const SeatsCard = () => {
  const t = useTranslation();
  const seatsCap = useSeatsCap();
  const requestSeatsLink = useRequestSeatsLink();
  const seatsLeft = seatsCap && Math.max(seatsCap.maxActiveUsers - seatsCap.activeUsers, 0);
  const isNearLimit = seatsCap && seatsCap.activeUsers / seatsCap.maxActiveUsers >= 0.8;
  const color = isNearLimit ? colors.r500 : undefined;

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
      seatsLeft
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/info/d1b9e942b738e9a3e11f7f15d65d6ac4124bb2dc.map
