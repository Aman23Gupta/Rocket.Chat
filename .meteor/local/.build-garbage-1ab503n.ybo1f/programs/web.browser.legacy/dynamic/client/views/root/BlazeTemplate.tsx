function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/BlazeTemplate.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Blaze;
module.link("meteor/blaze", {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);
var ReactiveDict;
module.link("meteor/reactive-dict", {
  ReactiveDict: function (v) {
    ReactiveDict = v;
  }
}, 1);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 2);
var React, useEffect, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 3);
var hiddenStyle = {
  display: 'none'
};

var BlazeTemplate = function (_ref) {
  var template = _ref.template,
      data = _ref.data;
  var ref = useRef(null);
  var dataRef = useRef(new ReactiveDict());
  useEffect(function () {
    if (data) {
      dataRef.current.set(data);
    }
  });
  useEffect(function () {
    if (!ref.current || !ref.current.parentNode) {
      return;
    }

    var data = dataRef.current;
    var view = Blaze.renderWithData(Template[template], function () {
      return data.all();
    }, ref.current.parentNode, ref.current);
    return function () {
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
//# sourceMappingURL=/dynamic/client/views/root/d39efa6072e177ff5681a5bba337c9a6e1bf5f75.map
