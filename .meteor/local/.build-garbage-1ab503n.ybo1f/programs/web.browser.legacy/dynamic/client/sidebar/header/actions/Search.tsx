function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/actions/Search.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Sidebar;
module.link("@rocket.chat/fuselage", {
  Sidebar: function (v) {
    Sidebar = v;
  }
}, 0);
var useMutableCallback, useOutsideClick;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useOutsideClick: function (v) {
    useOutsideClick = v;
  }
}, 1);
var React, useState, useEffect, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 2);
var tinykeys;
module.link("tinykeys", {
  "default": function (v) {
    tinykeys = v;
  }
}, 3);
var SearchList;
module.link("../../search/SearchList", {
  "default": function (v) {
    SearchList = v;
  }
}, 4);

var Search = function (props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      searchOpen = _useState2[0],
      setSearchOpen = _useState2[1];

  var ref = useRef(null);
  var handleCloseSearch = useMutableCallback(function () {
    setSearchOpen(false);
  });
  useOutsideClick([ref], handleCloseSearch);
  var openSearch = useMutableCallback(function () {
    setSearchOpen(true);
  });
  useEffect(function () {
    var unsubscribe = tinykeys(window, {
      '$mod+K': function (event) {
        event.preventDefault();
        openSearch();
      },
      '$mod+P': function (event) {
        event.preventDefault();
        openSearch();
      }
    });
    return function () {
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
//# sourceMappingURL=/dynamic/client/sidebar/header/actions/8f4ca62d7776bd00bd96a1f456a5b5c47bfe1504.map
