function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/lib/chartHandler.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);
module.export({
  drawLineChart: function () {
    return drawLineChart;
  },
  drawDoughnutChart: function () {
    return drawDoughnutChart;
  },
  updateChart: function () {
    return updateChart;
  }
});
var TAPi18n;
module.link("meteor/rocketchat:tap-i18n", {
  TAPi18n: function (v) {
    TAPi18n = v;
  }
}, 0);

var lineChartConfiguration = function (_ref) {
  var _ref$legends = _ref.legends,
      legends = _ref$legends === void 0 ? false : _ref$legends,
      _ref$anim = _ref.anim,
      anim = _ref$anim === void 0 ? false : _ref$anim,
      _ref$smallTicks = _ref.smallTicks,
      smallTicks = _ref$smallTicks === void 0 ? false : _ref$smallTicks,
      _ref$displayColors = _ref.displayColors,
      displayColors = _ref$displayColors === void 0 ? false : _ref$displayColors,
      _ref$tooltipCallbacks = _ref.tooltipCallbacks,
      tooltipCallbacks = _ref$tooltipCallbacks === void 0 ? {} : _ref$tooltipCallbacks;
  var config = {
    layout: {
      padding: {
        top: 10,
        bottom: 0
      }
    },
    legend: {
      display: false
    },
    title: {
      display: false
    },
    tooltips: _objectSpread({
      enabled: true,
      mode: 'point',
      displayColors: displayColors
    }, tooltipCallbacks),
    scales: {
      xAxes: [{
        scaleLabel: {
          display: false
        },
        gridLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.03)'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: false
        },
        gridLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.03)'
        },
        ticks: {
          beginAtZero: true
        }
      }]
    },
    hover: {
      animationDuration: 0 // duration of animations when hovering an item

    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 0 // animation duration after a resize

  };

  if (!anim) {
    config.animation = {
      duration: 0 // general animation time

    };
  }

  if (legends) {
    config.legend = {
      display: true,
      labels: {
        boxWidth: 20,
        fontSize: 8
      }
    };
  }

  if (smallTicks) {
    config.scales.xAxes[0].ticks = {
      fontSize: 8
    };
    config.scales.yAxes[0].ticks = {
      beginAtZero: true,
      fontSize: 8
    };
  }

  return config;
};

var doughnutChartConfiguration = function (title) {
  var tooltipCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    layout: {
      padding: {
        top: 0,
        bottom: 0
      }
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 20,
        fontSize: 8
      }
    },
    title: {
      display: 'true',
      text: title
    },
    tooltips: _objectSpread({
      enabled: true,
      mode: 'point',
      displayColors: false
    }, tooltipCallbacks),
    // animation: {
    // 	duration: 0 // general animation time
    // },
    hover: {
      animationDuration: 0 // duration of animations when hovering an item

    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 0 // animation duration after a resize

  };
};
/**
 *
 * @param {Object} chart - chart element
 * @param {Object} chartContext - Context of chart
 * @param {Array(String)} chartLabel
 * @param {Array(String)} dataLabels
 * @param {Array(Array(Double))} dataPoints
 */


var drawLineChart = function () {
  function _callee(chart, chartContext, chartLabels, dataLabels, dataSets) {
    var options,
        colors,
        datasets,
        chartImport,
        Chart,
        _args = arguments;
    return _regeneratorRuntime.async(function () {
      function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 5 && _args[5] !== undefined ? _args[5] : {};

              if (chart) {
                _context.next = 4;
                break;
              }

              console.log('No chart element');
              return _context.abrupt("return");

            case 4:
              if (chartContext) {
                chartContext.destroy();
              }

              colors = ['#2de0a5', '#ffd21f', '#f5455c', '#cbced1'];
              datasets = [];
              chartLabels.forEach(function (chartLabel, index) {
                datasets.push({
                  label: TAPi18n.__(chartLabel),
                  // chart label
                  data: dataSets[index],
                  // data points corresponding to data labels, x-axis points
                  backgroundColor: [colors[index]],
                  borderColor: [colors[index]],
                  borderWidth: 3,
                  fill: false
                });
              });
              _context.next = 10;
              return _regeneratorRuntime.awrap(module.dynamicImport('chart.js'));

            case 10:
              chartImport = _context.sent;
              Chart = chartImport.default;
              return _context.abrupt("return", new Chart(chart, {
                type: 'line',
                data: {
                  labels: dataLabels,
                  // data labels, y-axis points
                  datasets: datasets
                },
                options: lineChartConfiguration(options)
              }));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }

      return _callee$;
    }(), null, null, null, Promise);
  }

  return _callee;
}();

var drawDoughnutChart = function () {
  function _callee2(chart, title, chartContext, dataLabels, dataPoints) {
    var chartImport, Chart;
    return _regeneratorRuntime.async(function () {
      function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (chart) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              if (chartContext) {
                chartContext.destroy();
              }

              _context2.next = 5;
              return _regeneratorRuntime.awrap(module.dynamicImport('chart.js'));

            case 5:
              chartImport = _context2.sent;
              Chart = chartImport.default;
              return _context2.abrupt("return", new Chart(chart, {
                type: 'doughnut',
                data: {
                  labels: dataLabels,
                  // data labels, y-axis points
                  datasets: [{
                    data: dataPoints,
                    // data points corresponding to data labels, x-axis points
                    backgroundColor: ['#2de0a5', '#cbced1', '#f5455c', '#ffd21f'],
                    borderWidth: 0
                  }]
                },
                options: doughnutChartConfiguration(title)
              }));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }

      return _callee2$;
    }(), null, null, null, Promise);
  }

  return _callee2;
}();

var updateChart = function () {
  function _callee3(c, label, data) {
    var chart, index;
    return _regeneratorRuntime.async(function () {
      function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _regeneratorRuntime.awrap(c);

            case 2:
              chart = _context3.sent;

              if (chart.data.labels.indexOf(label) === -1) {
                // insert data
                chart.data.labels.push(label);
                chart.data.datasets.forEach(function (dataset, idx) {
                  dataset.data.push(data[idx]);
                });
              } else {
                // update data
                index = chart.data.labels.indexOf(label);
                chart.data.datasets.forEach(function (dataset, idx) {
                  dataset.data[index] = data[idx];
                });
              }

              chart.update();

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }

      return _callee3$;
    }(), null, null, null, Promise);
  }

  return _callee3;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/lib/f6233a4bee68c04adb203038cd2b1adf35f8ffac.map
