function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/UsagePieGraph.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Pie;
module.link("@nivo/pie", {
  Pie(v) {
    Pie = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 1);
let colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  default(v) {
    colors = v;
  }

}, 2);
let React, useMemo, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 3);
let useLocalePercentage;
module.link("../../../hooks/useLocalePercentage", {
  useLocalePercentage(v) {
    useLocalePercentage = v;
  }

}, 4);

const graphColors = color => ({
  used: color || colors.b500,
  free: colors.n300
});

const UsageGraph = _ref => {
  let {
    used = 0,
    total = 0,
    label,
    color,
    size
  } = _ref;
  const parsedData = useMemo(() => [{
    id: 'used',
    label: 'used',
    value: used
  }, {
    id: 'free',
    label: 'free',
    value: total - used
  }], [total, used]);
  const getColor = useCallback(datum => {
    if (!datum || typeof datum.id !== 'string') {
      return '';
    }

    return graphColors(color)[datum.id];
  }, [color]);
  const unlimited = total === 0;
  const localePercentage = useLocalePercentage(total, used, 0);
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    size: size
  }, /*#__PURE__*/React.createElement(Box, {
    position: "relative"
  }, /*#__PURE__*/React.createElement(Pie, {
    data: parsedData,
    margin: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    },
    innerRadius: 0.8,
    colors: getColor,
    width: size,
    height: size,
    enableArcLabels: false,
    enableArcLinkLabels: false
  }), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    color: color,
    fontScale: "p2m",
    style: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  }, unlimited ? '∞' : localePercentage))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Box, {
    is: "span",
    color: "default"
  }, used), ' ', "/ ", unlimited ? '∞' : total), /*#__PURE__*/React.createElement(Box, {
    is: "span",
    mbs: "x4"
  }, label));
};

module.exportDefault(UsageGraph);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/6dba055dfd7910c5709ced4dd74e23f3c0010f1d.map
