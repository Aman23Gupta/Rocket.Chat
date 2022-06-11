function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/BlazeTemplate.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Blaze;
module.link("meteor/blaze", {
  Blaze(v) {
    Blaze = v;
  }

}, 0);
let ReactiveDict;
module.link("meteor/reactive-dict", {
  ReactiveDict(v) {
    ReactiveDict = v;
  }

}, 1);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 2);
let React, useEffect, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 3);
const hiddenStyle = {
  display: 'none'
};

const BlazeTemplate = _ref => {
  let {
    template,
    data
  } = _ref;
  const ref = useRef(null);
  const dataRef = useRef(new ReactiveDict());
  useEffect(() => {
    if (data) {
      dataRef.current.set(data);
    }
  });
  useEffect(() => {
    if (!ref.current || !ref.current.parentNode) {
      return;
    }

    const data = dataRef.current;
    const view = Blaze.renderWithData(Template[template], () => data.all(), ref.current.parentNode, ref.current);
    return () => {
      Blaze.remove(view);
    };
  }, [template]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-blaze-template": true,
    style: hiddenStyle
  });
};

module.exportDefault(BlazeTemplate);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/ccfe346435616296f904822af3d71760c76160e2.map
