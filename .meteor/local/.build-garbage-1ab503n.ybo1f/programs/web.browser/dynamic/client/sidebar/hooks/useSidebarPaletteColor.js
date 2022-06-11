function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/hooks/useSidebarPaletteColor.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  useSidebarPaletteColor: () => useSidebarPaletteColor
});
let colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  default(v) {
    colors = v;
  }

}, 0);
let useLayoutEffect, useEffect, useMemo;
module.link("react", {
  useLayoutEffect(v) {
    useLayoutEffect = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useSettings;
module.link("../../contexts/SettingsContext", {
  useSettings(v) {
    useSettings = v;
  }

}, 2);
let isIE11;
module.link("../../lib/utils/isIE11", {
  isIE11(v) {
    isIE11 = v;
  }

}, 3);
const oldPallet = {
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

const getStyleTag = () => {
  const style = document.getElementById('sidebar-style');

  if (style) {
    return style;
  }

  const newElement = document.createElement('style');
  newElement.id = 'sidebar-style';
  newElement.setAttribute('type', 'text/css');
  document.head.appendChild(newElement);
  return newElement;
};

function lightenDarkenColor(col, amt) {
  let usePound = false;

  if (col[0] === '#') {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);
  let r = (num >> 16) + amt;

  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  let b = (num >> 8 & 0x00ff) + amt;

  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  let g = (num & 0x0000ff) + amt;

  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }

  return (usePound ? '#' : '') + (g | b << 8 | r << 16).toString(16);
}

function h2r() {
  let hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let a = arguments.length > 1 ? arguments[1] : undefined;
  const [hash, r, g, b] = hex.match(/#([0-f]{2})([0-f]{2})([0-f]{2})/i) || [];
  return hash ? "rgba(".concat([r, g, b].map(value => parseInt(value, 16)).join(), ", ").concat(a, ")") : hex;
}

const modifier = '.sidebar--custom-colors';
const query = {
  _id: /theme-color-rc/
};

const useTheme = () => {
  const customColors = useSettings(query);
  const result = useMemo(() => {
    const n900 = customColors.find(_ref => {
      let {
        _id
      } = _ref;
      return _id === 'theme-color-rc-color-primary-darkest';
    });
    const n800 = customColors.find(_ref2 => {
      let {
        _id
      } = _ref2;
      return _id === 'theme-color-rc-color-primary-dark';
    });
    const sibebarSurface = customColors.find(_ref3 => {
      let {
        _id
      } = _ref3;
      return _id === 'theme-color-rc-color-primary-background';
    });
    const n700 = customColors.find(_ref4 => {
      let {
        _id
      } = _ref4;
      return _id === '';
    });
    const n600 = customColors.find(_ref5 => {
      let {
        _id
      } = _ref5;
      return _id === 'theme-color-rc-color-primary-light';
    });
    const n500 = customColors.find(_ref6 => {
      let {
        _id
      } = _ref6;
      return _id === 'theme-color-rc-primary-light-medium';
    });
    const n400 = customColors.find(_ref7 => {
      let {
        _id
      } = _ref7;
      return _id === '';
    });
    const n300 = customColors.find(_ref8 => {
      let {
        _id
      } = _ref8;
      return _id === '';
    });
    const n200 = customColors.find(_ref9 => {
      let {
        _id
      } = _ref9;
      return _id === 'theme-color-rc-color-primary-lightest';
    });
    const n100 = customColors.find(_ref10 => {
      let {
        _id
      } = _ref10;
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

const toVar = color => color && color[0] === '#' ? color : oldPallet[color] || "var(--".concat(color, ")");

const getStyle = (selector => colors => "\n\t\t".concat(selector, " {\n\t\t\t--rcx-color-neutral-100: ").concat(toVar(colors.n900), ";\n\t\t\t--rcx-color-neutral-200: ").concat(toVar(colors.n800), ";\n\t\t\t--rcx-color-neutral-300: ").concat(toVar(colors.n700), ";\n\t\t\t--rcx-color-neutral-400: ").concat(toVar(colors.n600), ";\n\t\t\t--rcx-color-neutral-500: ").concat(toVar(colors.n500), ";\n\t\t\t--rcx-color-neutral-600: ").concat(toVar(colors.n400), ";\n\t\t\t--rcx-color-neutral-700: ").concat(toVar(colors.n300), ";\n\t\t\t--rcx-color-neutral-800: ").concat(toVar(colors.n200), ";\n\t\t\t--rcx-color-neutral-900: ").concat(toVar(colors.n100), ";\n\n\t\t\t--rcx-color-primary-100: ").concat(toVar(colors.b900), ";\n\t\t\t--rcx-color-primary-200: ").concat(toVar(colors.b800), ";\n\t\t\t--rcx-color-primary-300: ").concat(toVar(colors.b700), ";\n\t\t\t--rcx-color-primary-400: ").concat(toVar(colors.b600), ";\n\t\t\t--rcx-color-primary-500: ").concat(toVar(colors.b500), ";\n\t\t\t--rcx-color-primary-600: ").concat(toVar(colors.b400), ";\n\t\t\t--rcx-color-primary-700: ").concat(toVar(colors.b300), ";\n\t\t\t--rcx-color-primary-800: ").concat(toVar(colors.b200), ";\n\t\t\t--rcx-color-primary-900: ").concat(toVar(colors.b100), ";\n\n\t\t\t--rcx-button-colors-ghost-active-border-color: ").concat(toVar(colors.n900), ";\n\t\t\t--rcx-button-colors-ghost-active-background-color: ").concat(toVar(colors.n800), ";\n\t\t\t--rcx-button-colors-ghost-color: ").concat(toVar(colors.n600), ";\n\t\t\t--rcx-button-colors-ghost-border-color: ").concat(toVar(colors.sibebarSurface), ";\n\t\t\t--rcx-button-colors-ghost-background-color: ").concat(toVar(colors.sibebarSurface), ";\n\t\t\t--rcx-button-colors-ghost-hover-background-color: ").concat(toVar(colors.n900), ";\n\t\t\t--rcx-button-colors-ghost-hover-border-color: ").concat(toVar(colors.n900), ";\n\n\t\t\t--rcx-button-colors-ghost-success-active-border-color: ").concat(toVar(colors.n900), ";\n\t\t\t--rcx-button-colors-ghost-success-active-background-color: ").concat(toVar(colors.n800), ";\n\t\t\t--rcx-button-colors-ghost-success-color: ").concat(toVar(colors.n600), ";\n\t\t\t--rcx-button-colors-ghost-success-border-color: ").concat(toVar(colors.sibebarSurface), ";\n\t\t\t--rcx-button-colors-ghost-success-background-color: ").concat(toVar(colors.sibebarSurface), ";\n\t\t\t--rcx-button-colors-ghost-success-hover-background-color: ").concat(toVar(colors.n900), ";\n\t\t\t--rcx-button-colors-ghost-success-hover-border-color: ").concat(toVar(colors.n900), ";\n\n\n\t\t\t--rcx-sidebar-item-background-color-hover: ").concat(toVar(colors.n900), ";\n\t\t\t--rcx-sidebar-item-background-color-selected: ").concat(h2r(toVar(colors.n700 || colors.n800), 0.3), ";\n\t\t\t--rcx-badge-colors-ghost-background-color: ").concat(toVar(colors.n700), ";\n\t\t\t--rcx-tag-colors-ghost-background-color: ").concat(toVar(colors.n700), ";\n\t\t\t--rcx-color-surface: ").concat(toVar(colors.n900), ";\n\n\t\t\t--rcx-divider-color: ").concat(h2r(toVar(colors.n900), 0.4), ";\n\t\t\t--rcx-color-foreground-alternative: ").concat(toVar(colors.n100), ";\n\t\t\t--rcx-color-foreground-hint: ").concat(toVar(colors.n600), ";\n\t\t}\n\t\t.rcx-sidebar {\n\t\t\tbackground-color: ").concat(toVar(colors.sibebarSurface), ";\n\t\t}\n\t"))(isIE11 ? ':root' : modifier);

const useSidebarPaletteColorIE11 = () => {
  const colors = useTheme();
  useEffect(() => {
    (async () => {
      const [{
        default: cssVars
      }, CSSOM] = await Promise.all([module.dynamicImport('css-vars-ponyfill'), module.dynamicImport('cssom')]);

      try {
        getStyleTag().innerHTML = getStyle(colors);
        const fuselageStyle = document.getElementById('fuselage-style');

        if (!fuselageStyle) {
          return;
        }

        const sidebarStyle = fuselageStyle.cloneNode(true);
        sidebarStyle.setAttribute('id', 'sidebar-modifier');
        document.head.appendChild(sidebarStyle);
        const fuselageStyleRules = sidebarStyle.innerText.match(/(.|\n)*?\{((.|\n)*?)\}(.|\n)*?/gi).filter(text => /\.rcx-(sidebar|button|divider|input)/.test(text));
        const sheet = CSSOM.parse(fuselageStyleRules.join(' ').match(/((?!\}).|\n)*?\{|(.)*(color|background|shadow)(.)*|\}/gi).join(' '));

        const filterSelectors = selector => /rcx-(sidebar|button|divider|input)/.test(selector);

        const insertSelector = selector => selector.replace(/^((html:not\(\.js-focus-visible\)|\.js-focus-visible)|\.)(.*)/, (match, group, g2, g3, offset, text) => {
          if (group === '.') {
            return "".concat(modifier, " ").concat(text);
          }

          return "".concat(match, " ").concat(modifier, " ").concat(g3);
        });

        sidebarStyle.innerHTML = sheet.cssRules.map(rule => {
          rule.selectorText = rule.selectorText.split(/,[ \n]/).filter(filterSelectors).map(insertSelector).join();
          Array.from(rule.style.length).map((_, index) => rule.style[index]).forEach((key, index) => !/color|background|shadow/.test(key) && rule.style.removeProperty(rule.style[index]));
          return rule.cssText;
        }).join('');
        cssVars({
          include: 'style#sidebar-style,style#sidebar-modifier',
          onlyLegacy: false,
          preserveStatic: true,
          // preserveVars: true,
          silent: true
        });
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      getStyleTag().remove();
    };
  }, [colors]);
};

const useSidebarPaletteColor = isIE11 ? useSidebarPaletteColorIE11 : () => {
  const colors = useTheme();
  useLayoutEffect(() => {
    getStyleTag().innerHTML = getStyle(colors);
    return () => {
      getStyleTag().innerHTML = '';
    };
  }, [colors]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/hooks/5d7fc87a1dd3705fc21750edf48d468bd69c8bc9.map
