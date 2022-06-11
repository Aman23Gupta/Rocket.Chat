function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/hooks/useCurrent.ts                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useCurrent: () => useCurrent
});
let useState;
module.link("react", {
  useState(v) {
    useState = v;
  }

}, 0);

const useCurrent = function () {
  let currentInitialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  const [current, setCurrent] = useState(currentInitialValue);
  return [current, setCurrent];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/hooks/936c38155c426a98ef5f1fae6c5592f55bf4cd8e.map
