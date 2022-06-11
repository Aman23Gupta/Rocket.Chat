function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/search/SearchList.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

const _excluded = ["setValue"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 3);
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Sidebar, TextInput, Box, Icon;
module.link("@rocket.chat/fuselage", {
  Sidebar(v) {
    Sidebar = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 1);
let useMutableCallback, useDebouncedValue, useStableArray, useAutoFocus, useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useDebouncedValue(v) {
    useDebouncedValue = v;
  },

  useStableArray(v) {
    useStableArray = v;
  },

  useAutoFocus(v) {
    useAutoFocus = v;
  },

  useUniqueId(v) {
    useUniqueId = v;
  }

}, 2);
let escapeRegExp;
module.link("@rocket.chat/string-helpers", {
  escapeRegExp(v) {
    escapeRegExp = v;
  }

}, 3);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 4);
let React, forwardRef, useState, useMemo, useEffect, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  forwardRef(v) {
    forwardRef = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 5);
let Virtuoso;
module.link("react-virtuoso", {
  Virtuoso(v) {
    Virtuoso = v;
  }

}, 6);
let tinykeys;
module.link("tinykeys", {
  default(v) {
    tinykeys = v;
  }

}, 7);
let useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 8);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let useUserPreference, useUserSubscriptions;
module.link("../../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  },

  useUserSubscriptions(v) {
    useUserSubscriptions = v;
  }

}, 10);
let AsyncStatePhase;
module.link("../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 11);
let useMethodData;
module.link("../../hooks/useMethodData", {
  useMethodData(v) {
    useMethodData = v;
  }

}, 12);
let useAvatarTemplate;
module.link("../hooks/useAvatarTemplate", {
  useAvatarTemplate(v) {
    useAvatarTemplate = v;
  }

}, 13);
let useTemplateByViewMode;
module.link("../hooks/useTemplateByViewMode", {
  useTemplateByViewMode(v) {
    useTemplateByViewMode = v;
  }

}, 14);
let Row;
module.link("./Row", {
  default(v) {
    Row = v;
  }

}, 15);
let ScrollerWithCustomProps;
module.link("./ScrollerWithCustomProps", {
  default(v) {
    ScrollerWithCustomProps = v;
  }

}, 16);

const shortcut = (() => {
  if (!Meteor.Device.isDesktop()) {
    return '';
  }

  if (window.navigator.platform.toLowerCase().includes('mac')) {
    return "(\u2318+K)";
  }

  return "(\u2303+K)";
})();

const useSpotlight = function () {
  let filterText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let usernames = arguments.length > 1 ? arguments[1] : undefined;
  const expression = /(@|#)?(.*)/i;
  const [, mention, name] = filterText.match(expression);
  const searchForChannels = mention === '#';
  const searchForDMs = mention === '@';
  const type = useMemo(() => {
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
  const args = useMemo(() => [name, usernames, type], [type, name, usernames]);
  const {
    value: data = {
      users: [],
      rooms: []
    },
    phase: status
  } = useMethodData('spotlight', args);
  return useMemo(() => {
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
      data,
      status
    };
  }, [data, status]);
};

const options = {
  sort: {
    lm: -1,
    name: 1
  }
};

const useSearchItems = filterText => {
  const expression = /(@|#)?(.*)/i;
  const teste = filterText.match(expression);
  const [, type, name] = teste;
  const query = useMemo(() => {
    const filterRegex = new RegExp(escapeRegExp(name), 'i');
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
  const localRooms = useUserSubscriptions(query, options);
  const usernamesFromClient = useStableArray([...(localRooms === null || localRooms === void 0 ? void 0 : localRooms.map(_ref => {
    let {
      t,
      name
    } = _ref;
    return t === 'd' ? name : null;
  }))].filter(Boolean));
  const {
    data: spotlight,
    status
  } = useSpotlight(filterText, usernamesFromClient);
  return useMemo(() => {
    const resultsFromServer = [];

    const filterUsersUnique = (_ref2, index, arr) => {
      let {
        _id
      } = _ref2;
      return index === arr.findIndex(user => _id === user._id);
    };

    const roomFilter = room => !localRooms.find(item => {
      var _room$uids;

      return room.t === 'd' && ((_room$uids = room.uids) === null || _room$uids === void 0 ? void 0 : _room$uids.length) > 1 && room.uids.includes(item._id) || [item.rid, item._id].includes(room._id);
    });

    const usersfilter = user => !localRooms.find(room => {
      var _room$uids2;

      return room.t === 'd' && ((_room$uids2 = room.uids) === null || _room$uids2 === void 0 ? void 0 : _room$uids2.length) === 2 && room.uids.includes(user._id);
    });

    const userMap = user => ({
      _id: user._id,
      t: 'd',
      name: user.username,
      fname: user.name,
      avatarETag: user.avatarETag
    });

    const exact = resultsFromServer.filter(item => [item.usernamame, item.name, item.fname].includes(name));
    resultsFromServer.push(...spotlight.users.filter(filterUsersUnique).filter(usersfilter).map(userMap));
    resultsFromServer.push(...spotlight.rooms.filter(roomFilter));
    return {
      data: Array.from(new Set([...exact, ...localRooms, ...resultsFromServer])),
      status
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localRooms, name, spotlight]);
};

const useInput = initial => {
  const [value, setValue] = useState(initial);
  const onChange = useMutableCallback(e => {
    setValue(e.currentTarget.value);
  });
  return {
    value,
    onChange,
    setValue
  };
};

const toggleSelectionState = (next, current, input) => {
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


const SearchList = /*#__PURE__*/forwardRef(function SearchList(_ref3, ref) {
  let {
    onClose
  } = _ref3;
  const listId = useUniqueId();
  const t = useTranslation();

  const _useInput = useInput(''),
        {
    setValue: setFilterValue
  } = _useInput,
        filter = _objectWithoutProperties(_useInput, _excluded);

  const autofocus = useAutoFocus();
  const listRef = useRef();
  const boxRef = useRef();
  const selectedElement = useRef();
  const itemIndexRef = useRef(0);
  const sidebarViewMode = useUserPreference('sidebarViewMode');
  const showRealName = useSetting('UI_Use_Real_Name');
  const sideBarItemTemplate = useTemplateByViewMode();
  const avatarTemplate = useAvatarTemplate();
  const extended = sidebarViewMode === 'extended';
  const filterText = useDebouncedValue(filter.value, 100);
  const placeholder = [t('Search'), shortcut].filter(Boolean).join(' ');
  const {
    data: items,
    status
  } = useSearchItems(filterText);
  const itemData = useMemo(() => ({
    items,
    t,
    SideBarItemTemplate: sideBarItemTemplate,
    avatarTemplate,
    showRealName,
    extended,
    sidebarViewMode
  }), [avatarTemplate, extended, items, showRealName, sideBarItemTemplate, sidebarViewMode, t]);
  const changeSelection = useMutableCallback(dir => {
    let nextSelectedElement = null;

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
  const resetCursor = useMutableCallback(() => {
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
  useEffect(() => {
    resetCursor();
  });
  useEffect(() => {
    resetCursor();
  }, [filterText, resetCursor]);
  useEffect(() => {
    if (!autofocus.current) {
      return;
    }

    const unsubscribe = tinykeys(autofocus.current, {
      Escape: event => {
        event.preventDefault();
        setFilterValue(value => {
          if (!value) {
            onClose();
          }

          resetCursor();
          return '';
        });
      },
      Tab: onClose,
      ArrowUp: () => {
        const currentElement = changeSelection('up');
        itemIndexRef.current = Math.max(itemIndexRef.current - 1, 0);
        listRef.current.scrollToIndex({
          index: itemIndexRef.current
        });
        selectedElement.current = currentElement;
      },
      ArrowDown: () => {
        const currentElement = changeSelection('down');
        itemIndexRef.current = Math.min(itemIndexRef.current + 1, (items === null || items === void 0 ? void 0 : items.length) + 1);
        listRef.current.scrollToIndex({
          index: itemIndexRef.current
        });
        selectedElement.current = currentElement;
      },
      Enter: () => {
        if (selectedElement.current) {
          selectedElement.current.click();
        }
      }
    });
    return () => {
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
    className: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t\tleft: 0;\n\t\t\t\ttop: 0;\n\t\t\t"]))),
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
    itemContent: (index, data) => /*#__PURE__*/React.createElement(Row, {
      data: itemData,
      item: data
    }),
    ref: listRef
  })));
});
module.exportDefault(SearchList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/search/d62dc7b8c662d0850562165b6b3df9b2fd6bae16.map
