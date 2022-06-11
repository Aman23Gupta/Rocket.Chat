function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/actions/Search.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Sidebar;
module.link("@rocket.chat/fuselage", {
  Sidebar(v) {
    Sidebar = v;
  }

}, 0);
let useMutableCallback, useOutsideClick;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useOutsideClick(v) {
    useOutsideClick = v;
  }

}, 1);
let React, useState, useEffect, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 2);
let tinykeys;
module.link("tinykeys", {
  default(v) {
    tinykeys = v;
  }

}, 3);
let SearchList;
module.link("../../search/SearchList", {
  default(v) {
    SearchList = v;
  }

}, 4);

const Search = props => {
  const [searchOpen, setSearchOpen] = useState(false);
  const ref = useRef(null);
  const handleCloseSearch = useMutableCallback(() => {
    setSearchOpen(false);
  });
  useOutsideClick([ref], handleCloseSearch);
  const openSearch = useMutableCallback(() => {
    setSearchOpen(true);
  });
  useEffect(() => {
    const unsubscribe = tinykeys(window, {
      '$mod+K': event => {
        event.preventDefault();
        openSearch();
      },
      '$mod+P': event => {
        event.preventDefault();
        openSearch();
      }
    });
    return () => {
      unsubscribe();
    };
  }, [openSearch]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Sidebar.TopBar.Action, _extends({
    icon: "magnifier",
    onClick: openSearch
  }, props)), searchOpen && /*#__PURE__*/React.createElement(SearchList, {
    ref: ref,
    onClose: handleCloseSearch
  }));
};

module.exportDefault(Search);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/actions/a2b3b7efc9e57673f7381855da9b49d653e8baac.map
