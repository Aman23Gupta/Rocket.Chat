function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/lists/RecordList.ts                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _createForOfIteratorHelperLoose;

module.link("@babel/runtime/helpers/createForOfIteratorHelperLoose", {
  default: function (v) {
    _createForOfIteratorHelperLoose = v;
  }
}, 1);

var _createClass;

module.link("@babel/runtime/helpers/createClass", {
  default: function (v) {
    _createClass = v;
  }
}, 2);

var _assertThisInitialized;

module.link("@babel/runtime/helpers/assertThisInitialized", {
  default: function (v) {
    _assertThisInitialized = v;
  }
}, 3);

var _inheritsLoose;

module.link("@babel/runtime/helpers/inheritsLoose", {
  default: function (v) {
    _inheritsLoose = v;
  }
}, 4);

var _classPrivateFieldLooseBase;

module.link("@babel/runtime/helpers/classPrivateFieldLooseBase", {
  default: function (v) {
    _classPrivateFieldLooseBase = v;
  }
}, 5);

var _classPrivateFieldLooseKey;

module.link("@babel/runtime/helpers/classPrivateFieldLooseKey", {
  default: function (v) {
    _classPrivateFieldLooseKey = v;
  }
}, 6);
module.export({
  RecordList: function () {
    return RecordList;
  }
});
var Emitter;
module.link("@rocket.chat/emitter", {
  Emitter: function (v) {
    Emitter = v;
  }
}, 0);
var AsyncStatePhase;
module.link("../asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 1);

var _hasChanges = /*#__PURE__*/_classPrivateFieldLooseKey("hasChanges");

var _index = /*#__PURE__*/_classPrivateFieldLooseKey("index");

var _phase = /*#__PURE__*/_classPrivateFieldLooseKey("phase");

var _items = /*#__PURE__*/_classPrivateFieldLooseKey("items");

var _itemCount = /*#__PURE__*/_classPrivateFieldLooseKey("itemCount");

var _pedingMutation = /*#__PURE__*/_classPrivateFieldLooseKey("pedingMutation");

var RecordList = /*#__PURE__*/function (_Emitter) {
  _inheritsLoose(RecordList, _Emitter);

  function RecordList() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Emitter.call.apply(_Emitter, [this].concat(args)) || this;
    Object.defineProperty(_assertThisInitialized(_this), _hasChanges, {
      writable: true,
      value: false
    });
    Object.defineProperty(_assertThisInitialized(_this), _index, {
      writable: true,
      value: new Map()
    });
    Object.defineProperty(_assertThisInitialized(_this), _phase, {
      writable: true,
      value: AsyncStatePhase.LOADING
    });
    Object.defineProperty(_assertThisInitialized(_this), _items, {
      writable: true,
      value: undefined
    });
    Object.defineProperty(_assertThisInitialized(_this), _itemCount, {
      writable: true,
      value: undefined
    });
    Object.defineProperty(_assertThisInitialized(_this), _pedingMutation, {
      writable: true,
      value: Promise.resolve()
    });
    return _this;
  }

  var _proto = RecordList.prototype;

  _proto.filter = function () {
    function filter(_item) {
      return true;
    }

    return filter;
  }();

  _proto.compare = function () {
    function compare(a, b) {
      return a._updatedAt.getTime() - b._updatedAt.getTime();
    }

    return compare;
  }();

  _proto.insert = function () {
    function insert(item) {
      _classPrivateFieldLooseBase(this, _index)[_index].set(item._id, item);

      this.emit(item._id + "/inserted", item);

      if (typeof _classPrivateFieldLooseBase(this, _itemCount)[_itemCount] === 'number') {
        _classPrivateFieldLooseBase(this, _itemCount)[_itemCount]++;
      }

      _classPrivateFieldLooseBase(this, _hasChanges)[_hasChanges] = true;
    }

    return insert;
  }();

  _proto.update = function () {
    function update(item) {
      _classPrivateFieldLooseBase(this, _index)[_index].set(item._id, item);

      this.emit(item._id + "/updated", item);
      _classPrivateFieldLooseBase(this, _hasChanges)[_hasChanges] = true;
    }

    return update;
  }();

  _proto.delete = function () {
    function _delete(_id) {
      _classPrivateFieldLooseBase(this, _index)[_index].delete(_id);

      this.emit(_id + "/deleted");

      if (typeof _classPrivateFieldLooseBase(this, _itemCount)[_itemCount] === 'number') {
        _classPrivateFieldLooseBase(this, _itemCount)[_itemCount]--;
      }

      _classPrivateFieldLooseBase(this, _hasChanges)[_hasChanges] = true;
    }

    return _delete;
  }();

  _proto.push = function () {
    function push(item) {
      var exists = _classPrivateFieldLooseBase(this, _index)[_index].has(item._id);

      var valid = this.filter(item);

      if (exists && !valid) {
        this.delete(item._id);
        return;
      }

      if (exists && valid) {
        this.update(item);
        return;
      }

      if (!exists && valid) {
        this.insert(item);
      }
    }

    return push;
  }();

  _proto.mutate = function () {
    function mutate(mutation) {
      var hasChanged;
      return _regeneratorRuntime.async(function () {
        function mutate$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (_classPrivateFieldLooseBase(this, _phase)[_phase] === AsyncStatePhase.RESOLVED) {
                  _classPrivateFieldLooseBase(this, _phase)[_phase] = AsyncStatePhase.UPDATING;
                  this.emit('mutating');
                }

                _classPrivateFieldLooseBase(this, _pedingMutation)[_pedingMutation] = _classPrivateFieldLooseBase(this, _pedingMutation)[_pedingMutation].then(mutation);
                _context.next = 5;
                return _regeneratorRuntime.awrap(_classPrivateFieldLooseBase(this, _pedingMutation)[_pedingMutation]);

              case 5:
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.emit('errored', _context.t0);

              case 10:
                _context.prev = 10;
                hasChanged = _classPrivateFieldLooseBase(this, _hasChanges)[_hasChanges];
                _classPrivateFieldLooseBase(this, _phase)[_phase] = AsyncStatePhase.RESOLVED;

                if (hasChanged) {
                  _classPrivateFieldLooseBase(this, _items)[_items] = undefined;
                  _classPrivateFieldLooseBase(this, _hasChanges)[_hasChanges] = false;
                }

                this.emit('mutated', hasChanged);
                return _context.finish(10);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }

        return mutate$;
      }(), null, this, [[0, 7, 10, 16]], Promise);
    }

    return mutate;
  }();

  _proto.batchHandle = function () {
    function batchHandle(getInfo) {
      var _this2 = this;

      return this.mutate(function () {
        function _callee() {
          var info, _iterator, _step, item;

          return _regeneratorRuntime.async(function () {
            function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _regeneratorRuntime.awrap(getInfo());

                  case 2:
                    info = _context2.sent;

                    if (info.items) {
                      for (_iterator = _createForOfIteratorHelperLoose(info.items); !(_step = _iterator()).done;) {
                        item = _step.value;

                        _this2.push(item);
                      }
                    }

                    if (info.itemCount) {
                      _classPrivateFieldLooseBase(_this2, _itemCount)[_itemCount] = info.itemCount;
                      _classPrivateFieldLooseBase(_this2, _hasChanges)[_hasChanges] = true;
                    }

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }

            return _callee$;
          }(), null, null, null, Promise);
        }

        return _callee;
      }());
    }

    return batchHandle;
  }();

  _proto.prune = function () {
    function prune(matchCriteria) {
      var _this3 = this;

      return this.mutate(function () {
        for (var _iterator2 = _createForOfIteratorHelperLoose(_classPrivateFieldLooseBase(_this3, _index)[_index].values()), _step2; !(_step2 = _iterator2()).done;) {
          var item = _step2.value;

          if (matchCriteria(item)) {
            _this3.delete(item._id);
          }
        }
      });
    }

    return prune;
  }();

  _proto.handle = function () {
    function handle(item) {
      var _this4 = this;

      return this.mutate(function () {
        _this4.push(item);
      });
    }

    return handle;
  }();

  _proto.remove = function () {
    function remove(_id) {
      var _this5 = this;

      return this.mutate(function () {
        if (!_classPrivateFieldLooseBase(_this5, _index)[_index].has(_id)) {
          return;
        }

        _this5.delete(_id);
      });
    }

    return remove;
  }();

  _proto.clear = function () {
    function clear() {
      var _this6 = this;

      return this.mutate(function () {
        if (_classPrivateFieldLooseBase(_this6, _index)[_index].size === 0) {
          return;
        }

        _classPrivateFieldLooseBase(_this6, _index)[_index].clear();

        _classPrivateFieldLooseBase(_this6, _items)[_items] = undefined;
        _classPrivateFieldLooseBase(_this6, _itemCount)[_itemCount] = undefined;
        _classPrivateFieldLooseBase(_this6, _hasChanges)[_hasChanges] = true;

        _this6.emit('cleared');
      });
    }

    return clear;
  }();

  _createClass(RecordList, [{
    key: "phase",
    get: function () {
      return _classPrivateFieldLooseBase(this, _phase)[_phase];
    }
  }, {
    key: "items",
    get: function () {
      if (!_classPrivateFieldLooseBase(this, _items)[_items]) {
        _classPrivateFieldLooseBase(this, _items)[_items] = Array.from(_classPrivateFieldLooseBase(this, _index)[_index].values()).sort(this.compare);
      }

      return _classPrivateFieldLooseBase(this, _items)[_items];
    }
  }, {
    key: "itemCount",
    get: function () {
      var _classPrivateFieldLoo;

      return (_classPrivateFieldLoo = _classPrivateFieldLooseBase(this, _itemCount)[_itemCount]) !== null && _classPrivateFieldLoo !== void 0 ? _classPrivateFieldLoo : _classPrivateFieldLooseBase(this, _index)[_index].size;
    }
  }]);

  return RecordList;
}(Emitter);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/lists/c37908188a9458bee113a307352b517c69e570f4.map
