function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/hooks/useCategories.ts                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
module.export({
  useCategories: function () {
    return useCategories;
  }
});
var useCallback, useEffect, useMemo, useState;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 0);
var Apps;
module.link("../../../../../app/apps/client/orchestrator", {
  Apps: function (v) {
    Apps = v;
  }
}, 1);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var handleAPIError;
module.link("../helpers", {
  handleAPIError: function (v) {
    handleAPIError = v;
  }
}, 3);
var useCategoryFlatList;
module.link("./useCategoryFlatList", {
  useCategoryFlatList: function (v) {
    useCategoryFlatList = v;
  }
}, 4);
var useCategoryToggle;
module.link("./useCategoryToggle", {
  useCategoryToggle: function (v) {
    useCategoryToggle = v;
  }
}, 5);

var useCategories = function () {
  var t = useTranslation();

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      categories = _useState2[0],
      setCategories = _useState2[1];

  var fetchCategories = useCallback(function () {
    function _callee() {
      var fetchedCategories, mappedCategories;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(Apps.getCategories());

              case 3:
                fetchedCategories = _context.sent;
                mappedCategories = fetchedCategories.map(function (currentCategory) {
                  return {
                    id: currentCategory.id,
                    label: currentCategory.title,
                    checked: false
                  };
                });
                setCategories([{
                  items: [{
                    id: 'all',
                    label: t('All_categories')
                  }]
                }, {
                  label: t('Filter_by_category'),
                  items: mappedCategories
                }]);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                handleAPIError(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 8]], Promise);
    }

    return _callee;
  }(), [t]);
  useEffect(function () {
    var fetchCategoriesWrapper = function () {
      function _callee2() {
        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _regeneratorRuntime.awrap(fetchCategories());

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, null, Promise);
      }

      return _callee2;
    }();

    fetchCategoriesWrapper();
  }, [fetchCategories]);
  var onSelected = useCategoryToggle(setCategories);
  var flatCategories = useCategoryFlatList(categories);
  var originalSize = useCategoryFlatList(categories).length;
  var selectedCategories = useMemo(function () {
    return flatCategories.filter(function (category) {
      return Boolean(category.checked);
    });
  }, [flatCategories]);
  return [categories, selectedCategories, originalSize === selectedCategories.length ? [] : selectedCategories, onSelected];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/hooks/2d517881ded7c2281b220ef79a23a497c91338d1.map
