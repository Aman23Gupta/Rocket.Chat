function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/emoji/client/emojiPicker.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);
module.export({
  updateRecentEmoji: function () {
    return updateRecentEmoji;
  }
});

var _;

module.link("underscore", {
  "default": function (v) {
    _ = v;
  }
}, 0);
var ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 1);
var ReactiveDict;
module.link("meteor/reactive-dict", {
  ReactiveDict: function (v) {
    ReactiveDict = v;
  }
}, 2);
var FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter: function (v) {
    FlowRouter = v;
  }
}, 3);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 4);
var escapeRegExp;
module.link("@rocket.chat/string-helpers", {
  escapeRegExp: function (v) {
    escapeRegExp = v;
  }
}, 5);
module.link("../../theme/client/imports/components/emojiPicker.css");
var t;
module.link("../../utils/client", {
  t: function (v) {
    t = v;
  }
}, 6);
var EmojiPicker;
module.link("./lib/EmojiPicker", {
  EmojiPicker: function (v) {
    EmojiPicker = v;
  }
}, 7);
var emoji;
module.link("../lib/rocketchat", {
  emoji: function (v) {
    emoji = v;
  }
}, 8);
module.link("./emojiPicker.html");
var ESCAPE = 27;
var emojiListByCategory = new ReactiveDict('emojiList');

var getEmojiElement = function (emoji, image) {
  return image && "<li class=\"emoji-" + emoji + " emoji-picker-item\" data-emoji=\"" + emoji + "\" title=\"" + emoji + "\">" + image + "</li>";
};

var createEmojiList = function (category, actualTone) {
  var html = Object.values(emoji.packages).map(function (emojiPackage) {
    if (!emojiPackage.emojisByCategory || !emojiPackage.emojisByCategory[category]) {
      return;
    }

    return emojiPackage.emojisByCategory[category].map(function (current) {
      var tone = actualTone > 0 && emojiPackage.toneList.hasOwnProperty(current) ? "_tone" + actualTone : '';
      return getEmojiElement(current, emojiPackage.renderPicker(":" + current + tone + ":"));
    }).join('');
  }).join('') || "<li>" + t('No_emojis_found') + "</li>";
  return html;
};

function updateRecentEmoji(category) {
  emojiListByCategory.set(category, createEmojiList(category));
}

var createPickerEmojis = function (instance) {
  var categories = instance.categoriesList;
  var actualTone = instance.tone;
  categories.forEach(function (category) {
    return emojiListByCategory.set(category.key, createEmojiList(category.key, actualTone));
  });
};

function getEmojisBySearchTerm(searchTerm) {
  var html = '<ul class="emoji-list">';
  var t = Template.instance();
  var actualTone = t.tone;
  EmojiPicker.currentCategory.set('');
  var searchRegExp = new RegExp(escapeRegExp(searchTerm.replace(/:/g, '')), 'i');

  for (var current in meteorBabelHelpers.sanitizeForInObject(emoji.list)) {
    if (!emoji.list.hasOwnProperty(current)) {
      continue;
    }

    if (searchRegExp.test(current)) {
      var emojiObject = emoji.list[current];
      var emojiPackage = emojiObject.emojiPackage,
          _emojiObject$shortnam = emojiObject.shortnames,
          shortnames = _emojiObject$shortnam === void 0 ? [] : _emojiObject$shortnam;
      var tone = '';
      current = current.replace(/:/g, '');
      var alias = shortnames[0] !== undefined ? shortnames[0].replace(/:/g, '') : shortnames[0];

      if (actualTone > 0 && emoji.packages[emojiPackage].toneList.hasOwnProperty(emoji)) {
        tone = "_tone" + actualTone;
      }

      var emojiFound = false;

      for (var key in meteorBabelHelpers.sanitizeForInObject(emoji.packages[emojiPackage].emojisByCategory)) {
        if (emoji.packages[emojiPackage].emojisByCategory.hasOwnProperty(key)) {
          var contents = emoji.packages[emojiPackage].emojisByCategory[key];
          var searchValArray = alias !== undefined ? alias.replace(/:/g, '').split('_') : alias;

          if (contents.indexOf(current) !== -1 || searchValArray !== undefined && searchValArray.includes(searchTerm)) {
            emojiFound = true;
            break;
          }
        }
      }

      if (emojiFound) {
        var image = emoji.packages[emojiPackage].renderPicker(":" + current + tone + ":");
        html += getEmojiElement(current, image);
      }
    }
  }

  html += '</ul>';
  return html;
}

Template.emojiPicker.helpers({
  emojiCategories: function () {
    return Template.instance().categoriesList;
  },
  emojiByCategory: function (category) {
    var emojisByCategory = [];

    for (var emojiPackage in meteorBabelHelpers.sanitizeForInObject(emoji.packages)) {
      if (emoji.packages.hasOwnProperty(emojiPackage)) {
        if (emoji.packages[emojiPackage].emojisByCategory.hasOwnProperty(category)) {
          emojisByCategory = emojisByCategory.concat(emoji.packages[emojiPackage].emojisByCategory[category]);
        }
      }
    }

    return emojisByCategory;
  },
  searching: function () {
    return Template.instance().currentSearchTerm.get().length > 0;
  },
  searchResults: function () {
    return getEmojisBySearchTerm(Template.instance().currentSearchTerm.get());
  },
  emojiList: function (category) {
    return emojiListByCategory.get(category);
  },
  currentTone: function () {
    return "tone-" + Template.instance().tone;
  },

  /**
   * Returns true if a given emoji category is active
   *
   * @param {string} category hash
   * @return {boolean} true if active, false otherwise
   */
  activeCategory: function (category) {
    return EmojiPicker.currentCategory.get() === category ? 'active' : '';
  },

  /**
   * Returns currently active emoji category hash
   *
   * @return {string} category hash
   */
  currentCategory: function () {
    return EmojiPicker.currentCategory.get();
  }
});
Template.emojiPicker.events({
  'click .emoji-picker': function (event) {
    event.stopPropagation();
    event.preventDefault();
  },
  'click .add-custom': function (event) {
    event.stopPropagation();
    event.preventDefault();
    FlowRouter.go('/admin/emoji-custom');
    EmojiPicker.close();
  },
  'click .category-link': function (event) {
    event.stopPropagation();
    event.preventDefault();
    EmojiPicker.showCategory(event.currentTarget.hash.substr(1));
    return false;
  },
  'scroll .emojis': _.throttle(function (event, instance) {
    if (EmojiPicker.scrollingToCategory) {
      return;
    }

    var container = instance.$(event.currentTarget);
    var scrollTop = container.scrollTop() + 8;
    var last = EmojiPicker.getCategoryPositions().filter(function (pos) {
      return pos.top <= scrollTop;
    }).pop();

    if (!last) {
      return;
    }

    var el = last.el;
    var category = el.id.replace('emoji-list-category-', '');
    EmojiPicker.currentCategory.set(category);
  }, 300),
  'click .change-tone > a': function (event, instance) {
    event.stopPropagation();
    event.preventDefault();
    instance.$('.tone-selector').toggleClass('show');
  },
  'click .tone-selector .tone': function (event, instance) {
    event.stopPropagation();
    event.preventDefault();
    var tone = parseInt(event.currentTarget.dataset.tone);
    var newTone;

    if (tone > 0) {
      newTone = "_tone" + tone;
    } else {
      newTone = '';
    }

    for (var emojiPackage in meteorBabelHelpers.sanitizeForInObject(emoji.packages)) {
      if (emoji.packages.hasOwnProperty(emojiPackage)) {
        if (emoji.packages[emojiPackage].hasOwnProperty('toneList')) {
          for (var _emoji in meteorBabelHelpers.sanitizeForInObject(emoji.packages[emojiPackage].toneList)) {
            if (emoji.packages[emojiPackage].toneList.hasOwnProperty(_emoji)) {
              $(".emoji-" + _emoji).html(emoji.packages[emojiPackage].render(":" + _emoji + newTone + ":"));
            }
          }
        }
      }
    }

    EmojiPicker.setTone(tone);
    instance.setCurrentTone(tone);
    $('.tone-selector').toggleClass('show');
  },
  'click .emoji-list .emoji-picker-item': function (event, instance) {
    event.stopPropagation();
    var _emoji = event.currentTarget.dataset.emoji;
    var actualTone = instance.tone;
    var tone = '';

    for (var emojiPackage in meteorBabelHelpers.sanitizeForInObject(emoji.packages)) {
      if (emoji.packages.hasOwnProperty(emojiPackage)) {
        if (actualTone > 0 && emoji.packages[emojiPackage].toneList.hasOwnProperty(_emoji)) {
          tone = "_tone" + actualTone;
        }
      }
    }

    var input = $('.emoji-picker .js-emojipicker-search');

    if (input) {
      input.val('');
    }

    instance.currentSearchTerm.set('');
    EmojiPicker.pickEmoji(_emoji + tone);
  },
  'keyup .js-emojipicker-search, change .js-emojipicker-search': function (event, instance) {
    event.preventDefault();
    event.stopPropagation();

    if (event.keyCode === ESCAPE) {
      return EmojiPicker.close();
    }

    var value = event.target.value.trim();
    var cst = instance.currentSearchTerm;

    if (value === cst.get()) {
      return;
    }

    cst.set(value);
  }
});
Template.emojiPicker.onCreated(function () {
  var _this = this;

  this.tone = EmojiPicker.getTone();
  var recent = EmojiPicker.getRecent();
  this.currentSearchTerm = new ReactiveVar('');
  this.categoriesList = [];

  for (var emojiPackage in meteorBabelHelpers.sanitizeForInObject(emoji.packages)) {
    if (emoji.packages.hasOwnProperty(emojiPackage)) {
      if (emoji.packages[emojiPackage].emojiCategories) {
        if (typeof emoji.packages[emojiPackage].categoryIndex !== 'undefined') {
          var _this$categoriesList;

          (_this$categoriesList = this.categoriesList).splice.apply(_this$categoriesList, [emoji.packages[emojiPackage].categoryIndex, 0].concat(_toConsumableArray(emoji.packages[emojiPackage].emojiCategories)));
        } else {
          this.categoriesList = this.categoriesList.concat(emoji.packages[emojiPackage].emojiCategories);
        }
      }
    }
  }

  recent.forEach(function (_emoji) {
    emoji.packages.base.emojisByCategory.recent.push(_emoji);
  });

  this.setCurrentTone = function (newTone) {
    $('.current-tone').removeClass("tone-" + _this.tone);
    $('.current-tone').addClass("tone-" + newTone);
    _this.tone = newTone;
  };

  createPickerEmojis(this);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/emoji/client/b7e254a8b3653f350c9c940e457d3b04d575bb80.map
