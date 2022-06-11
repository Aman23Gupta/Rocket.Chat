function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/UsagePieGraph.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Pie;
module.link("@nivo/pie", {
  Pie: function (v) {
    Pie = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 1);
var colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  "default": function (v) {
    colors = v;
  }
}, 2);
var React, useMemo, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 3);
var useLocalePercentage;
module.link("../../../hooks/useLocalePercentage", {
  useLocalePercentage: function (v) {
    useLocalePercentage = v;
  }
}, 4);

var graphColors = function (color) {
  return {
    used: color || colors.b500,
    free: colors.n300
  };
};

var UsageGraph = function (_ref) {
  var _ref$used = _ref.used,
      used = _ref$used === void 0 ? 0 : _ref$used,
      _ref$total = _ref.total,
      total = _ref$total === void 0 ? 0 : _ref$total,
      label = _ref.label,
      color = _ref.color,
      size = _ref.size;
  var parsedData = useMemo(function () {
    return [{
      id: 'used',
      label: 'used',
      value: used
    }, {
      id: 'free',
      label: 'free',
      value: total - used
    }];
  }, [total, used]);
  var getColor = useCallback(function (datum) {
    if (!datum || typeof datum.id !== 'string') {
      return '';
    }

    return graphColors(color)[datum.id];
  }, [color]);
  var unlimited = total === 0;
  var localePercentage = useLocalePercentage(total, used, 0);
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
//# sourceMappingURL=/dynamic/client/views/admin/info/916932cd1671d1289a67b0e66eb9674772c0c5b9.map
