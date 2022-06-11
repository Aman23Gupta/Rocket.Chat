function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/new/NewZapier.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 2);
module.export({
  "default": function () {
    return NewZapier;
  }
});
var Box, Skeleton, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var React, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var blogSpotStyleScriptImport = function (src) {
  return new Promise(function (resolve) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    document.body.appendChild(script);

    var resolveFunc = function (event) {
      return resolve(event.currentTarget);
    };

    script.onreadystatechange = resolveFunc;
    script.onload = resolveFunc;
    script.src = src;
  });
};

function NewZapier(_ref) {
  var props = _extends({}, _ref);

  var t = useTranslation();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      script = _useState2[0],
      setScript = _useState2[1];

  useEffect(function () {
    var importZapier = function () {
      function _callee() {
        var scriptEl;
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _regeneratorRuntime.awrap(blogSpotStyleScriptImport('https://zapier.com/apps/embed/widget.js?services=rocketchat&html_id=zapier-goes-here'));

                case 2:
                  scriptEl = _context.sent;
                  setScript(scriptEl);

                case 4:
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

    if (!script) {
      importZapier();
    }

    return function () {
      return script && script.parentNode.removeChild(script);
    };
  }, [script]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    pb: "x20",
    fontScale: "h4",
    dangerouslySetInnerHTML: {
      __html: t('additional_integrations_Zapier')
    }
  }), !script && /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    mbs: 10
  }, /*#__PURE__*/React.createElement(Margins, {
    blockEnd: 14
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: 71
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: 71
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: 71
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: 71
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: 71
  }))), /*#__PURE__*/React.createElement(Box, _extends({
    id: "zapier-goes-here"
  }, props)));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/new/0c542801a738125e6b66f904584534a665877964.map
