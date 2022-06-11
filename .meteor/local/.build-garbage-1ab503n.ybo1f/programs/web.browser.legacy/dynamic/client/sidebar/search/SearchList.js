function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/search/SearchList.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _excluded = ["setValue"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 3);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 4);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 5);
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Sidebar, TextInput, Box, Icon;
module.link("@rocket.chat/fuselage", {
  Sidebar: function (v) {
    Sidebar = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 1);
var useMutableCallback, useDebouncedValue, useStableArray, useAutoFocus, useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  },
  useStableArray: function (v) {
    useStableArray = v;
  },
  useAutoFocus: function (v) {
    useAutoFocus = v;
  },
  useUniqueId: function (v) {
    useUniqueId = v;
  }
}, 2);
var escapeRegExp;
module.link("@rocket.chat/string-helpers", {
  escapeRegExp: function (v) {
    escapeRegExp = v;
  }
}, 3);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 4);
var React, forwardRef, useState, useMemo, useEffect, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 5);
var Virtuoso;
module.link("react-virtuoso", {
  Virtuoso: function (v) {
    Virtuoso = v;
  }
}, 6);
var tinykeys;
module.link("tinykeys", {
  "default": function (v) {
    tinykeys = v;
  }
}, 7);
var useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 8);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var useUserPreference, useUserSubscriptions;
module.link("../../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  },
  useUserSubscriptions: function (v) {
    useUserSubscriptions = v;
  }
}, 10);
var AsyncStatePhase;
module.link("../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 11);
var useMethodData;
module.link("../../hooks/useMethodData", {
  useMethodData: function (v) {
    useMethodData = v;
  }
}, 12);
var useAvatarTemplate;
module.link("../hooks/useAvatarTemplate", {
  useAvatarTemplate: function (v) {
    useAvatarTemplate = v;
  }
}, 13);
var useTemplateByViewMode;
module.link("../hooks/useTemplateByViewMode", {
  useTemplateByViewMode: function (v) {
    useTemplateByViewMode = v;
  }
}, 14);
var Row;
module.link("./Row", {
  "default": function (v) {
    Row = v;
  }
}, 15);
var ScrollerWithCustomProps;
module.link("./ScrollerWithCustomProps", {
  "default": function (v) {
    ScrollerWithCustomProps = v;
  }
}, 16);

var shortcut = function () {
  if (!Meteor.Device.isDesktop()) {
    return '';
  }

  if (window.navigator.platform.toLowerCase().includes('mac')) {
    return "(\u2318+K)";
  }

  return "(\u2303+K)";
}();

var useSpotlight = function () {
  var filterText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var usernames = arguments.length > 1 ? arguments[1] : undefined;
  var expression = /(@|#)?(.*)/i;

  var _filterText$match = filterText.match(expression),
      _filterText$match2 = _slicedToArray(_filterText$match, 3),
      mention = _filterText$match2[1],
      name = _filterText$match2[2];

  var searchForChannels = mention === '#';
  var searchForDMs = mention === '@';
  var type = useMemo(function () {
    if (searchForChannels) {
      return {
        users: false,
        rooms: true
      };
    }

    if (searchForDMs) {
      return {
        users: true,
        rooms: false
      };
    }

    return {
      users: true,
      rooms: true
    };
  }, [searchForChannels, searchForDMs]);
  var args = useMemo(function () {
    return [name, usernames, type];
  }, [type, name, usernames]);

  var _useMethodData = useMethodData('spotlight', args),
      _useMethodData$value = _useMethodData.value,
      data = _useMethodData$value === void 0 ? {
    users: [],
    rooms: []
  } : _useMethodData$value,
      status = _useMethodData.phase;

  return useMemo(function () {
    if (!data) {
      return {
        data: {
          users: [],
          rooms: []
        },
        status: 'loading'
      };
    }

    return {
      data: data,
      status: status
    };
  }, [data, status]);
};

var options = {
  sort: {
    lm: -1,
    name: 1
  }
};

var useSearchItems = function (filterText) {
  var expression = /(@|#)?(.*)/i;
  var teste = filterText.match(expression);

  var _teste = _slicedToArray(teste, 3),
      type = _teste[1],
      name = _teste[2];

  var query = useMemo(function () {
    var filterRegex = new RegExp(escapeRegExp(name), 'i');
    return _objectSpread({
      $or: [{
        name: filterRegex
      }, {
        fname: filterRegex
      }]
    }, type && {
      t: type === '@' ? 'd' : {
        $ne: 'd'
      }
    });
  }, [name, type]);
  var localRooms = useUserSubscriptions(query, options);
  var usernamesFromClient = useStableArray(_toConsumableArray(localRooms === null || localRooms === void 0 ? void 0 : localRooms.map(function (_ref) {
    var t = _ref.t,
        name = _ref.name;
    return t === 'd' ? name : null;
  })).filter(Boolean));

  var _useSpotlight = useSpotlight(filterText, usernamesFromClient),
      spotlight = _useSpotlight.data,
      status = _useSpotlight.status;

  return useMemo(function () {
    var resultsFromServer = [];

    var filterUsersUnique = function (_ref2, index, arr) {
      var _id = _ref2._id;
      return index === arr.findIndex(function (user) {
        return _id === user._id;
      });
    };

    var roomFilter = function (room) {
      return !localRooms.find(function (item) {
        var _room$uids;

        return room.t === 'd' && ((_room$uids = room.uids) === null || _room$uids === void 0 ? void 0 : _room$uids.length) > 1 && room.uids.includes(item._id) || [item.rid, item._id].includes(room._id);
      });
    };

    var usersfilter = function (user) {
      return !localRooms.find(function (room) {
        var _room$uids2;

        return room.t === 'd' && ((_room$uids2 = room.uids) === null || _room$uids2 === void 0 ? void 0 : _room$uids2.length) === 2 && room.uids.includes(user._id);
      });
    };

    var userMap = function (user) {
      return {
        _id: user._id,
        t: 'd',
        name: user.username,
        fname: user.name,
        avatarETag: user.avatarETag
      };
    };

    var exact = resultsFromServer.filter(function (item) {
      return [item.usernamame, item.name, item.fname].includes(name);
    });
    resultsFromServer.push.apply(resultsFromServer, _toConsumableArray(spotlight.users.filter(filterUsersUnique).filter(usersfilter).map(userMap)));
    resultsFromServer.push.apply(resultsFromServer, _toConsumableArray(spotlight.rooms.filter(roomFilter)));
    return {
      data: Array.from(new Set([].concat(_toConsumableArray(exact), _toConsumableArray(localRooms), resultsFromServer))),
      status: status
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localRooms, name, spotlight]);
};

var useInput = function (initial) {
  var _useState = useState(initial),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var onChange = useMutableCallback(function (e) {
    setValue(e.currentTarget.value);
  });
  return {
    value: value,
    onChange: onChange,
    setValue: setValue
  };
};

var toggleSelectionState = function (next, current, input) {
  input.setAttribute('aria-activedescendant', next.id);
  next.setAttribute('aria-selected', true);
  next.classList.add('rcx-sidebar-item--selected');

  if (current) {
    current.setAttribute('aria-selected', false);
    current.classList.remove('rcx-sidebar-item--selected');
  }
};
/**
 * @type import('react').ForwardRefExoticComponent<{ onClose: unknown } & import('react').RefAttributes<HTMLElement>>
 */


var SearchList = /*#__PURE__*/forwardRef(function () {
  function SearchList(_ref3, ref) {
    var onClose = _ref3.onClose;
    var listId = useUniqueId();
    var t = useTranslation();

    var _useInput = useInput(''),
        setFilterValue = _useInput.setValue,
        filter = _objectWithoutProperties(_useInput, _excluded);

    var autofocus = useAutoFocus();
    var listRef = useRef();
    var boxRef = useRef();
    var selectedElement = useRef();
    var itemIndexRef = useRef(0);
    var sidebarViewMode = useUserPreference('sidebarViewMode');
    var showRealName = useSetting('UI_Use_Real_Name');
    var sideBarItemTemplate = useTemplateByViewMode();
    var avatarTemplate = useAvatarTemplate();
    var extended = sidebarViewMode === 'extended';
    var filterText = useDebouncedValue(filter.value, 100);
    var placeholder = [t('Search'), shortcut].filter(Boolean).join(' ');

    var _useSearchItems = useSearchItems(filterText),
        items = _useSearchItems.data,
        status = _useSearchItems.status;

    var itemData = useMemo(function () {
      return {
        items: items,
        t: t,
        SideBarItemTemplate: sideBarItemTemplate,
        avatarTemplate: avatarTemplate,
        showRealName: showRealName,
        extended: extended,
        sidebarViewMode: sidebarViewMode
      };
    }, [avatarTemplate, extended, items, showRealName, sideBarItemTemplate, sidebarViewMode, t]);
    var changeSelection = useMutableCallback(function (dir) {
      var nextSelectedElement = null;

      if (dir === 'up') {
        nextSelectedElement = selectedElement.current.parentElement.previousSibling.querySelector('a');
      } else {
        nextSelectedElement = selectedElement.current.parentElement.nextSibling.querySelector('a');
      }

      if (nextSelectedElement) {
        toggleSelectionState(nextSelectedElement, selectedElement.current, autofocus.current);
        return nextSelectedElement;
      }

      return selectedElement.current;
    });
    var resetCursor = useMutableCallback(function () {
      var _boxRef$current;

      itemIndexRef.current = 0;
      listRef.current.scrollToIndex({
        index: itemIndexRef.current
      });
      selectedElement.current = (_boxRef$current = boxRef.current) === null || _boxRef$current === void 0 ? void 0 : _boxRef$current.querySelector('a.rcx-sidebar-item');

      if (selectedElement.current) {
        toggleSelectionState(selectedElement.current, undefined, autofocus.current);
      }
    });
    useEffect(function () {
      resetCursor();
    });
    useEffect(function () {
      resetCursor();
    }, [filterText, resetCursor]);
    useEffect(function () {
      if (!autofocus.current) {
        return;
      }

      var unsubscribe = tinykeys(autofocus.current, {
        Escape: function (event) {
          event.preventDefault();
          setFilterValue(function (value) {
            if (!value) {
              onClose();
            }

            resetCursor();
            return '';
          });
        },
        Tab: onClose,
        ArrowUp: function () {
          var currentElement = changeSelection('up');
          itemIndexRef.current = Math.max(itemIndexRef.current - 1, 0);
          listRef.current.scrollToIndex({
            index: itemIndexRef.current
          });
          selectedElement.current = currentElement;
        },
        ArrowDown: function () {
          var currentElement = changeSelection('down');
          itemIndexRef.current = Math.min(itemIndexRef.current + 1, (items === null || items === void 0 ? void 0 : items.length) + 1);
          listRef.current.scrollToIndex({
            index: itemIndexRef.current
          });
          selectedElement.current = currentElement;
        },
        Enter: function () {
          if (selectedElement.current) {
            selectedElement.current.click();
          }
        }
      });
      return function () {
        unsubscribe();
      };
    }, [autofocus, changeSelection, items.length, onClose, resetCursor, setFilterValue]);
    return /*#__PURE__*/React.createElement(Box, {
      position: "absolute",
      "rcx-sidebar": true,
      h: "full",
      display: "flex",
      flexDirection: "column",
      zIndex: 99,
      w: "full",
      className: css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\t\t\tleft: 0;\n\t\t\t\ttop: 0;\n\t\t\t"]))),
      ref: ref
    }, /*#__PURE__*/React.createElement(Sidebar.TopBar.Section, {
      role: "search",
      is: "form"
    }, /*#__PURE__*/React.createElement(TextInput, _extends({
      "aria-owns": listId,
      "data-qa": "sidebar-search-input",
      ref: autofocus
    }, filter, {
      placeholder: placeholder,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "cross",
        size: "x20",
        onClick: onClose
      })
    }))), /*#__PURE__*/React.createElement(Box, {
      ref: boxRef,
      "aria-expanded": "true",
      role: "listbox",
      id: listId,
      tabIndex: -1,
      flexShrink: 1,
      h: "full",
      w: "full",
      "data-qa": "sidebar-search-result",
      onClick: onClose,
      "aria-busy": status !== AsyncStatePhase.RESOLVED
    }, /*#__PURE__*/React.createElement(Virtuoso, {
      style: {
        height: '100%',
        width: '100%'
      },
      totalCount: items === null || items === void 0 ? void 0 : items.length,
      data: items,
      components: {
        Scroller: ScrollerWithCustomProps
      },
      itemContent: function (index, data) {
        return /*#__PURE__*/React.createElement(Row, {
          data: itemData,
          item: data
        });
      },
      ref: listRef
    })));
  }

  return SearchList;
}());
module.exportDefault(SearchList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/search/732540f8c9472f6a7caf4fe0595e1186a989cb0d.map
