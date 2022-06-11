function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/new/NewZapier.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
module.export({
  default: () => NewZapier
});
let Box, Skeleton, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Skeleton(v) {
    Skeleton = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let React, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const blogSpotStyleScriptImport = src => new Promise(resolve => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  document.body.appendChild(script);

  const resolveFunc = event => resolve(event.currentTarget);

  script.onreadystatechange = resolveFunc;
  script.onload = resolveFunc;
  script.src = src;
});

function NewZapier(_ref) {
  let props = _extends({}, _ref);

  const t = useTranslation();
  const [script, setScript] = useState();
  useEffect(() => {
    const importZapier = async () => {
      const scriptEl = await blogSpotStyleScriptImport('https://zapier.com/apps/embed/widget.js?services=rocketchat&html_id=zapier-goes-here');
      setScript(scriptEl);
    };

    if (!script) {
      importZapier();
    }

    return () => script && script.parentNode.removeChild(script);
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
//# sourceMappingURL=/dynamic/client/views/admin/integrations/new/1a7648843f8a04ab2d3a805ab989afedacff0c72.map
