function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/utils/mapMessageFromApi.ts                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["attachments", "tlm", "ts", "_updatedAt"],
      _excluded2 = ["ts"];

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
module.export({
  mapMessageFromApi: () => mapMessageFromApi
});

const mapMessageFromApi = _ref => {
  let {
    attachments = [],
    tlm,
    ts,
    _updatedAt
  } = _ref,
      message = _objectWithoutProperties(_ref, _excluded);

  return _objectSpread(_objectSpread(_objectSpread({}, message), {}, {
    ts: new Date(ts)
  }, tlm && {
    tlm: new Date(tlm)
  }), {}, {
    _updatedAt: new Date(_updatedAt),
    attachments: attachments.map(_ref2 => {
      let {
        ts
      } = _ref2,
          attachment = _objectWithoutProperties(_ref2, _excluded2);

      return _objectSpread(_objectSpread({}, ts && {
        ts: new Date(ts)
      }), attachment);
    })
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/utils/643f3835247f7a69dcac713e93cf149c9c66f0de.map
