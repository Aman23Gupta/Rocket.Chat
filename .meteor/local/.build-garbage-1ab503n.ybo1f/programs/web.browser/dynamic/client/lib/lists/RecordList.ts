function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/lists/RecordList.ts                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _classPrivateFieldLooseBase;

module.link("@babel/runtime/helpers/classPrivateFieldLooseBase", {
  default(v) {
    _classPrivateFieldLooseBase = v;
  }

}, 0);

let _classPrivateFieldLooseKey;

module.link("@babel/runtime/helpers/classPrivateFieldLooseKey", {
  default(v) {
    _classPrivateFieldLooseKey = v;
  }

}, 1);
module.export({
  RecordList: () => RecordList
});
let Emitter;
module.link("@rocket.chat/emitter", {
  Emitter(v) {
    Emitter = v;
  }

}, 0);
let AsyncStatePhase;
module.link("../asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 1);

var _hasChanges = /*#__PURE__*/_classPrivateFieldLooseKey("hasChanges");

var _index = /*#__PURE__*/_classPrivateFieldLooseKey("index");

var _phase = /*#__PURE__*/_classPrivateFieldLooseKey("phase");

var _items = /*#__PURE__*/_classPrivateFieldLooseKey("items");

var _itemCount = /*#__PURE__*/_classPrivateFieldLooseKey("itemCount");

var _pedingMutation = /*#__PURE__*/_classPrivateFieldLooseKey("pedingMutation");

class RecordList extends Emitter {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, _hasChanges, {
      writable: true,
      value: false
    });
    Object.defineProperty(this, _index, {
      writable: true,
      value: new Map()
    });
    Object.defineProperty(this, _phase, {
      writable: true,
      value: AsyncStatePhase.LOADING
    });
    Object.defineProperty(this, _items, {
      writable: true,
      value: undefined
    });
    Object.defineProperty(this, _itemCount, {
      writable: true,
      value: undefined
    });
    Object.defineProperty(this, _pedingMutation, {
      writable: true,
      value: Promise.resolve()
    });
  }

  filter(_item) {
    return true;
  }

  compare(a, b) {
    return a._updatedAt.getTime() - b._updatedAt.getTime();
  }

  get phase() {
    return _classPrivateFieldLooseBase(this, _phase)[_phase];
  }

  get items() {
    if (!_classPrivateFieldLooseBase(this, _items)[_items]) {
      _classPrivateFieldLooseBase(this, _items)[_items] = Array.from(_classPrivateFieldLooseBase(this, _index)[_index].values()).sort(this.compare);
    }

    return _classPrivateFieldLooseBase(this, _items)[_items];
  }

  get itemCount() {
    var _classPrivateFieldLoo;

    return (_classPrivateFieldLoo = _classPrivateFieldLooseBase(this, _itemCount)[_itemCount]) !== null && _classPrivateFieldLoo !== void 0 ? _classPrivateFieldLoo : _classPrivateFieldLooseBase(this, _index)[_index].size;
  }

  insert(item) {
    _classPrivateFieldLooseBase(this, _index)[_index].set(item._id, item);

    this.emit("".concat(item._id, "/inserted"), item);

    if (typeof _classPrivateFieldLooseBase(this, _itemCount)[_itemCount] === 'number') {
      _classPrivateFieldLooseBase(this, _itemCount)[_itemCount]++;
    }

    _classPrivateFieldLooseBase(this, _hasChanges)[_hasChanges] = true;
  }

  update(item) {
    _classPrivateFieldLooseBase(this, _index)[_index].set(item._id, item);

    this.emit("".concat(item._id, "/updated"), item);
    _classPrivateFieldLooseBase(this, _hasChanges)[_hasChanges] = true;
  }

  delete(_id) {
    _classPrivateFieldLooseBase(this, _index)[_index].delete(_id);

    this.emit("".concat(_id, "/deleted"));

    if (typeof _classPrivateFieldLooseBase(this, _itemCount)[_itemCount] === 'number') {
      _classPrivateFieldLooseBase(this, _itemCount)[_itemCount]--;
    }

    _classPrivateFieldLooseBase(this, _hasChanges)[_hasChanges] = true;
  }

  push(item) {
    const exists = _classPrivateFieldLooseBase(this, _index)[_index].has(item._id);

    const valid = this.filter(item);

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

  async mutate(mutation) {
    try {
      if (_classPrivateFieldLooseBase(this, _phase)[_phase] === AsyncStatePhase.RESOLVED) {
        _classPrivateFieldLooseBase(this, _phase)[_phase] = AsyncStatePhase.UPDATING;
        this.emit('mutating');
      }

      _classPrivateFieldLooseBase(this, _pedingMutation)[_pedingMutation] = _classPrivateFieldLooseBase(this, _pedingMutation)[_pedingMutation].then(mutation);
      await _classPrivateFieldLooseBase(this, _pedingMutation)[_pedingMutation];
    } catch (error) {
      this.emit('errored', error);
    } finally {
      const hasChanged = _classPrivateFieldLooseBase(this, _hasChanges)[_hasChanges];

      _classPrivateFieldLooseBase(this, _phase)[_phase] = AsyncStatePhase.RESOLVED;

      if (hasChanged) {
        _classPrivateFieldLooseBase(this, _items)[_items] = undefined;
        _classPrivateFieldLooseBase(this, _hasChanges)[_hasChanges] = false;
      }

      this.emit('mutated', hasChanged);
    }
  }

  batchHandle(getInfo) {
    return this.mutate(async () => {
      const info = await getInfo();

      if (info.items) {
        for (const item of info.items) {
          this.push(item);
        }
      }

      if (info.itemCount) {
        _classPrivateFieldLooseBase(this, _itemCount)[_itemCount] = info.itemCount;
        _classPrivateFieldLooseBase(this, _hasChanges)[_hasChanges] = true;
      }
    });
  }

  prune(matchCriteria) {
    return this.mutate(() => {
      for (const item of _classPrivateFieldLooseBase(this, _index)[_index].values()) {
        if (matchCriteria(item)) {
          this.delete(item._id);
        }
      }
    });
  }

  handle(item) {
    return this.mutate(() => {
      this.push(item);
    });
  }

  remove(_id) {
    return this.mutate(() => {
      if (!_classPrivateFieldLooseBase(this, _index)[_index].has(_id)) {
        return;
      }

      this.delete(_id);
    });
  }

  clear() {
    return this.mutate(() => {
      if (_classPrivateFieldLooseBase(this, _index)[_index].size === 0) {
        return;
      }

      _classPrivateFieldLooseBase(this, _index)[_index].clear();

      _classPrivateFieldLooseBase(this, _items)[_items] = undefined;
      _classPrivateFieldLooseBase(this, _itemCount)[_itemCount] = undefined;
      _classPrivateFieldLooseBase(this, _hasChanges)[_hasChanges] = true;
      this.emit('cleared');
    });
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/lists/35534fed683fac1bb20906b5c823f274fa5a231e.map
