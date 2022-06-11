function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/hooks/useSidebarPaletteColor.js                                                                      //
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

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
module.export({
  useSidebarPaletteColor: function () {
    return useSidebarPaletteColor;
  }
});
var colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  "default": function (v) {
    colors = v;
  }
}, 0);
var useLayoutEffect, useEffect, useMemo;
module.link("react", {
  useLayoutEffect: function (v) {
    useLayoutEffect = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useSettings;
module.link("../../contexts/SettingsContext", {
  useSettings: function (v) {
    useSettings = v;
  }
}, 2);
var isIE11;
module.link("../../lib/utils/isIE11", {
  isIE11: function (v) {
    isIE11 = v;
  }
}, 3);
var oldPallet = {
  'color-dark-100': '#0c0d0f',
  'color-dark-90': '#1e232a',
  'color-dark-80': '#2e343e',
  'color-dark-70': '#53585f',
  'color-dark-30': '#9da2a9',
  'color-dark-20': '#caced1',
  'color-dark-10': '#e0e5e8',
  'color-dark-05': '#f1f2f4',
  'color-dark-blue': '#175cc4',
  'color-blue': '#1d74f5',
  'color-light-blue': '#4eb2f5',
  'color-lighter-blue': '#e8f2ff',
  'color-purple': '#861da8',
  'color-red': '#f5455c',
  'color-dark-red': '#e0364d',
  'color-orange': '#f38c39',
  'color-yellow': '#ffd21f',
  'color-dark-yellow': '#f6c502',
  'color-green': '#2de0a5',
  'color-dark-green': '#26d198',
  'color-darkest': '#1f2329',
  'color-dark': '#2f343d',
  'color-dark-medium': '#414852',
  'color-dark-light': '#6c727a',
  'color-gray': '#9ea2a8',
  'color-gray-medium': '#cbced1',
  'color-gray-light': '#e1e5e8',
  'color-gray-lightest': '#f2f3f5',
  'color-black': '#000000',
  'color-white': '#ffffff'
};

var getStyleTag = function () {
  var style = document.getElementById('sidebar-style');

  if (style) {
    return style;
  }

  var newElement = document.createElement('style');
  newElement.id = 'sidebar-style';
  newElement.setAttribute('type', 'text/css');
  document.head.appendChild(newElement);
  return newElement;
};

function lightenDarkenColor(col, amt) {
  var usePound = false;

  if (col[0] === '#') {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;

  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  var b = (num >> 8 & 0x00ff) + amt;

  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  var g = (num & 0x0000ff) + amt;

  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }

  return (usePound ? '#' : '') + (g | b << 8 | r << 16).toString(16);
}

function h2r() {
  var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var a = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = hex.match(/#([0-f]{2})([0-f]{2})([0-f]{2})/i) || [],
      _ref2 = _slicedToArray(_ref, 4),
      hash = _ref2[0],
      r = _ref2[1],
      g = _ref2[2],
      b = _ref2[3];

  return hash ? "rgba(" + [r, g, b].map(function (value) {
    return parseInt(value, 16);
  }).join() + ", " + a + ")" : hex;
}

var modifier = '.sidebar--custom-colors';
var query = {
  _id: /theme-color-rc/
};

var useTheme = function () {
  var customColors = useSettings(query);
  var result = useMemo(function () {
    var n900 = customColors.find(function (_ref3) {
      var _id = _ref3._id;
      return _id === 'theme-color-rc-color-primary-darkest';
    });
    var n800 = customColors.find(function (_ref4) {
      var _id = _ref4._id;
      return _id === 'theme-color-rc-color-primary-dark';
    });
    var sibebarSurface = customColors.find(function (_ref5) {
      var _id = _ref5._id;
      return _id === 'theme-color-rc-color-primary-background';
    });
    var n700 = customColors.find(function (_ref6) {
      var _id = _ref6._id;
      return _id === '';
    });
    var n600 = customColors.find(function (_ref7) {
      var _id = _ref7._id;
      return _id === 'theme-color-rc-color-primary-light';
    });
    var n500 = customColors.find(function (_ref8) {
      var _id = _ref8._id;
      return _id === 'theme-color-rc-primary-light-medium';
    });
    var n400 = customColors.find(function (_ref9) {
      var _id = _ref9._id;
      return _id === '';
    });
    var n300 = customColors.find(function (_ref10) {
      var _id = _ref10._id;
      return _id === '';
    });
    var n200 = customColors.find(function (_ref11) {
      var _id = _ref11._id;
      return _id === 'theme-color-rc-color-primary-lightest';
    });
    var n100 = customColors.find(function (_ref12) {
      var _id = _ref12._id;
      return _id === '';
    });
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, colors), n900 && {
      n900: n900.value
    }), n800 && {
      n800: n800.value
    }), (sibebarSurface || n800) && {
      sibebarSurface: sibebarSurface.value || n800.value
    }), ((n700 === null || n700 === void 0 ? void 0 : n700.value[0]) === '#' || (n800 === null || n800 === void 0 ? void 0 : n800.value[0]) === '#') && {
      n700: (n700 === null || n700 === void 0 ? void 0 : n700.value) || lightenDarkenColor(n800.value, 10)
    }), n700 && {
      n700: n700.value
    }), n600 && {
      n600: n600.value
    }), n500 && {
      n500: n500.value
    }), n400 && {
      n400: n400.value
    }), n300 && {
      n300: n300.value
    }), n200 && {
      n200: n200.value
    }), n100 && {
      n100: n100.value
    });
  }, [customColors]);
  return result;
};

var toVar = function (color) {
  return color && color[0] === '#' ? color : oldPallet[color] || "var(--" + color + ")";
};

var getStyle = function (selector) {
  return function (colors) {
    return "\n\t\t" + selector + " {\n\t\t\t--rcx-color-neutral-100: " + toVar(colors.n900) + ";\n\t\t\t--rcx-color-neutral-200: " + toVar(colors.n800) + ";\n\t\t\t--rcx-color-neutral-300: " + toVar(colors.n700) + ";\n\t\t\t--rcx-color-neutral-400: " + toVar(colors.n600) + ";\n\t\t\t--rcx-color-neutral-500: " + toVar(colors.n500) + ";\n\t\t\t--rcx-color-neutral-600: " + toVar(colors.n400) + ";\n\t\t\t--rcx-color-neutral-700: " + toVar(colors.n300) + ";\n\t\t\t--rcx-color-neutral-800: " + toVar(colors.n200) + ";\n\t\t\t--rcx-color-neutral-900: " + toVar(colors.n100) + ";\n\n\t\t\t--rcx-color-primary-100: " + toVar(colors.b900) + ";\n\t\t\t--rcx-color-primary-200: " + toVar(colors.b800) + ";\n\t\t\t--rcx-color-primary-300: " + toVar(colors.b700) + ";\n\t\t\t--rcx-color-primary-400: " + toVar(colors.b600) + ";\n\t\t\t--rcx-color-primary-500: " + toVar(colors.b500) + ";\n\t\t\t--rcx-color-primary-600: " + toVar(colors.b400) + ";\n\t\t\t--rcx-color-primary-700: " + toVar(colors.b300) + ";\n\t\t\t--rcx-color-primary-800: " + toVar(colors.b200) + ";\n\t\t\t--rcx-color-primary-900: " + toVar(colors.b100) + ";\n\n\t\t\t--rcx-button-colors-ghost-active-border-color: " + toVar(colors.n900) + ";\n\t\t\t--rcx-button-colors-ghost-active-background-color: " + toVar(colors.n800) + ";\n\t\t\t--rcx-button-colors-ghost-color: " + toVar(colors.n600) + ";\n\t\t\t--rcx-button-colors-ghost-border-color: " + toVar(colors.sibebarSurface) + ";\n\t\t\t--rcx-button-colors-ghost-background-color: " + toVar(colors.sibebarSurface) + ";\n\t\t\t--rcx-button-colors-ghost-hover-background-color: " + toVar(colors.n900) + ";\n\t\t\t--rcx-button-colors-ghost-hover-border-color: " + toVar(colors.n900) + ";\n\n\t\t\t--rcx-button-colors-ghost-success-active-border-color: " + toVar(colors.n900) + ";\n\t\t\t--rcx-button-colors-ghost-success-active-background-color: " + toVar(colors.n800) + ";\n\t\t\t--rcx-button-colors-ghost-success-color: " + toVar(colors.n600) + ";\n\t\t\t--rcx-button-colors-ghost-success-border-color: " + toVar(colors.sibebarSurface) + ";\n\t\t\t--rcx-button-colors-ghost-success-background-color: " + toVar(colors.sibebarSurface) + ";\n\t\t\t--rcx-button-colors-ghost-success-hover-background-color: " + toVar(colors.n900) + ";\n\t\t\t--rcx-button-colors-ghost-success-hover-border-color: " + toVar(colors.n900) + ";\n\n\n\t\t\t--rcx-sidebar-item-background-color-hover: " + toVar(colors.n900) + ";\n\t\t\t--rcx-sidebar-item-background-color-selected: " + h2r(toVar(colors.n700 || colors.n800), 0.3) + ";\n\t\t\t--rcx-badge-colors-ghost-background-color: " + toVar(colors.n700) + ";\n\t\t\t--rcx-tag-colors-ghost-background-color: " + toVar(colors.n700) + ";\n\t\t\t--rcx-color-surface: " + toVar(colors.n900) + ";\n\n\t\t\t--rcx-divider-color: " + h2r(toVar(colors.n900), 0.4) + ";\n\t\t\t--rcx-color-foreground-alternative: " + toVar(colors.n100) + ";\n\t\t\t--rcx-color-foreground-hint: " + toVar(colors.n600) + ";\n\t\t}\n\t\t.rcx-sidebar {\n\t\t\tbackground-color: " + toVar(colors.sibebarSurface) + ";\n\t\t}\n\t";
  };
}(isIE11 ? ':root' : modifier);

var useSidebarPaletteColorIE11 = function () {
  var colors = useTheme();
  useEffect(function () {
    (function () {
      function _callee() {
        var _await$Promise$all, _await$Promise$all2, cssVars, CSSOM, fuselageStyle, sidebarStyle, fuselageStyleRules, sheet, filterSelectors, insertSelector;

        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _regeneratorRuntime.awrap(Promise.all([module.dynamicImport('css-vars-ponyfill'), module.dynamicImport('cssom')]));

                case 2:
                  _await$Promise$all = _context.sent;
                  _await$Promise$all2 = _slicedToArray(_await$Promise$all, 2);
                  cssVars = _await$Promise$all2[0].default;
                  CSSOM = _await$Promise$all2[1];
                  _context.prev = 6;
                  getStyleTag().innerHTML = getStyle(colors);
                  fuselageStyle = document.getElementById('fuselage-style');

                  if (fuselageStyle) {
                    _context.next = 11;
                    break;
                  }

                  return _context.abrupt("return");

                case 11:
                  sidebarStyle = fuselageStyle.cloneNode(true);
                  sidebarStyle.setAttribute('id', 'sidebar-modifier');
                  document.head.appendChild(sidebarStyle);
                  fuselageStyleRules = sidebarStyle.innerText.match(/(.|\n)*?\{((.|\n)*?)\}(.|\n)*?/gi).filter(function (text) {
                    return /\.rcx-(sidebar|button|divider|input)/.test(text);
                  });
                  sheet = CSSOM.parse(fuselageStyleRules.join(' ').match(/((?!\}).|\n)*?\{|(.)*(color|background|shadow)(.)*|\}/gi).join(' '));

                  filterSelectors = function (selector) {
                    return /rcx-(sidebar|button|divider|input)/.test(selector);
                  };

                  insertSelector = function (selector) {
                    return selector.replace(/^((html:not\(\.js-focus-visible\)|\.js-focus-visible)|\.)(.*)/, function (match, group, g2, g3, offset, text) {
                      if (group === '.') {
                        return modifier + " " + text;
                      }

                      return match + " " + modifier + " " + g3;
                    });
                  };

                  sidebarStyle.innerHTML = sheet.cssRules.map(function (rule) {
                    rule.selectorText = rule.selectorText.split(/,[ \n]/).filter(filterSelectors).map(insertSelector).join();
                    Array.from(rule.style.length).map(function (_, index) {
                      return rule.style[index];
                    }).forEach(function (key, index) {
                      return !/color|background|shadow/.test(key) && rule.style.removeProperty(rule.style[index]);
                    });
                    return rule.cssText;
                  }).join('');
                  cssVars({
                    include: 'style#sidebar-style,style#sidebar-modifier',
                    onlyLegacy: false,
                    preserveStatic: true,
                    // preserveVars: true,
                    silent: true
                  });
                  _context.next = 25;
                  break;

                case 22:
                  _context.prev = 22;
                  _context.t0 = _context["catch"](6);
                  console.log(_context.t0);

                case 25:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[6, 22]], Promise);
      }

      return _callee;
    })()();
    return function () {
      getStyleTag().remove();
    };
  }, [colors]);
};

var useSidebarPaletteColor = isIE11 ? useSidebarPaletteColorIE11 : function () {
  var colors = useTheme();
  useLayoutEffect(function () {
    getStyleTag().innerHTML = getStyle(colors);
    return function () {
      getStyleTag().innerHTML = '';
    };
  }, [colors]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/hooks/b8a8f442de0f934b465301538dc8618ba14e2519.map
