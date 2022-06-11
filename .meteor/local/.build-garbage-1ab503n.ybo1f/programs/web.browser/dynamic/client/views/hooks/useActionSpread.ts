function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/hooks/useActionSpread.ts                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useActionSpread: () => useActionSpread
});
let useMemo;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  }

}, 0);

const mapOptions = _ref => {
  let [key, {
    action,
    label,
    icon
  }] = _ref;
  return [key, {
    label: {
      label,
      icon
    },
    action
  }];
};

const useActionSpread = function (actions) {
  let size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return useMemo(() => {
    const entries = Object.entries(actions);
    const options = entries.slice(0, size);
    const menuOptions = entries.slice(size, entries.length).map(mapOptions);
    const menu = menuOptions.length ? Object.fromEntries(menuOptions) : undefined;
    return {
      actions: options,
      menu
    };
  }, [actions, size]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/hooks/219aa942f19b0a915401f88d81b62d9949669719.map
