function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/emoji/client/emojiPicker.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  updateRecentEmoji: () => updateRecentEmoji
});

let _;

module.link("underscore", {
  default(v) {
    _ = v;
  }

}, 0);
let ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar(v) {
    ReactiveVar = v;
  }

}, 1);
let ReactiveDict;
module.link("meteor/reactive-dict", {
  ReactiveDict(v) {
    ReactiveDict = v;
  }

}, 2);
let FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter(v) {
    FlowRouter = v;
  }

}, 3);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 4);
let escapeRegExp;
module.link("@rocket.chat/string-helpers", {
  escapeRegExp(v) {
    escapeRegExp = v;
  }

}, 5);
module.link("../../theme/client/imports/components/emojiPicker.css");
let t;
module.link("../../utils/client", {
  t(v) {
    t = v;
  }

}, 6);
let EmojiPicker;
module.link("./lib/EmojiPicker", {
  EmojiPicker(v) {
    EmojiPicker = v;
  }

}, 7);
let emoji;
module.link("../lib/rocketchat", {
  emoji(v) {
    emoji = v;
  }

}, 8);
module.link("./emojiPicker.html");
const ESCAPE = 27;
const emojiListByCategory = new ReactiveDict('emojiList');

const getEmojiElement = (emoji, image) => image && "<li class=\"emoji-".concat(emoji, " emoji-picker-item\" data-emoji=\"").concat(emoji, "\" title=\"").concat(emoji, "\">").concat(image, "</li>");

const createEmojiList = (category, actualTone) => {
  const html = Object.values(emoji.packages).map(emojiPackage => {
    if (!emojiPackage.emojisByCategory || !emojiPackage.emojisByCategory[category]) {
      return;
    }

    return emojiPackage.emojisByCategory[category].map(current => {
      const tone = actualTone > 0 && emojiPackage.toneList.hasOwnProperty(current) ? "_tone".concat(actualTone) : '';
      return getEmojiElement(current, emojiPackage.renderPicker(":".concat(current).concat(tone, ":")));
    }).join('');
  }).join('') || "<li>".concat(t('No_emojis_found'), "</li>");
  return html;
};

function updateRecentEmoji(category) {
  emojiListByCategory.set(category, createEmojiList(category));
}

const createPickerEmojis = instance => {
  const categories = instance.categoriesList;
  const actualTone = instance.tone;
  categories.forEach(category => emojiListByCategory.set(category.key, createEmojiList(category.key, actualTone)));
};

function getEmojisBySearchTerm(searchTerm) {
  let html = '<ul class="emoji-list">';
  const t = Template.instance();
  const actualTone = t.tone;
  EmojiPicker.currentCategory.set('');
  const searchRegExp = new RegExp(escapeRegExp(searchTerm.replace(/:/g, '')), 'i');

  for (let current in emoji.list) {
    if (!emoji.list.hasOwnProperty(current)) {
      continue;
    }

    if (searchRegExp.test(current)) {
      const emojiObject = emoji.list[current];
      const {
        emojiPackage,
        shortnames = []
      } = emojiObject;
      let tone = '';
      current = current.replace(/:/g, '');
      const alias = shortnames[0] !== undefined ? shortnames[0].replace(/:/g, '') : shortnames[0];

      if (actualTone > 0 && emoji.packages[emojiPackage].toneList.hasOwnProperty(emoji)) {
        tone = "_tone".concat(actualTone);
      }

      let emojiFound = false;

      for (const key in emoji.packages[emojiPackage].emojisByCategory) {
        if (emoji.packages[emojiPackage].emojisByCategory.hasOwnProperty(key)) {
          const contents = emoji.packages[emojiPackage].emojisByCategory[key];
          const searchValArray = alias !== undefined ? alias.replace(/:/g, '').split('_') : alias;

          if (contents.indexOf(current) !== -1 || searchValArray !== undefined && searchValArray.includes(searchTerm)) {
            emojiFound = true;
            break;
          }
        }
      }

      if (emojiFound) {
        const image = emoji.packages[emojiPackage].renderPicker(":".concat(current).concat(tone, ":"));
        html += getEmojiElement(current, image);
      }
    }
  }

  html += '</ul>';
  return html;
}

Template.emojiPicker.helpers({
  emojiCategories() {
    return Template.instance().categoriesList;
  },

  emojiByCategory(category) {
    let emojisByCategory = [];

    for (const emojiPackage in emoji.packages) {
      if (emoji.packages.hasOwnProperty(emojiPackage)) {
        if (emoji.packages[emojiPackage].emojisByCategory.hasOwnProperty(category)) {
          emojisByCategory = emojisByCategory.concat(emoji.packages[emojiPackage].emojisByCategory[category]);
        }
      }
    }

    return emojisByCategory;
  },

  searching() {
    return Template.instance().currentSearchTerm.get().length > 0;
  },

  searchResults() {
    return getEmojisBySearchTerm(Template.instance().currentSearchTerm.get());
  },

  emojiList(category) {
    return emojiListByCategory.get(category);
  },

  currentTone() {
    return "tone-".concat(Template.instance().tone);
  },

  /**
   * Returns true if a given emoji category is active
   *
   * @param {string} category hash
   * @return {boolean} true if active, false otherwise
   */
  activeCategory(category) {
    return EmojiPicker.currentCategory.get() === category ? 'active' : '';
  },

  /**
   * Returns currently active emoji category hash
   *
   * @return {string} category hash
   */
  currentCategory() {
    return EmojiPicker.currentCategory.get();
  }

});
Template.emojiPicker.events({
  'click .emoji-picker'(event) {
    event.stopPropagation();
    event.preventDefault();
  },

  'click .add-custom'(event) {
    event.stopPropagation();
    event.preventDefault();
    FlowRouter.go('/admin/emoji-custom');
    EmojiPicker.close();
  },

  'click .category-link'(event) {
    event.stopPropagation();
    event.preventDefault();
    EmojiPicker.showCategory(event.currentTarget.hash.substr(1));
    return false;
  },

  'scroll .emojis': _.throttle((event, instance) => {
    if (EmojiPicker.scrollingToCategory) {
      return;
    }

    const container = instance.$(event.currentTarget);
    const scrollTop = container.scrollTop() + 8;
    const last = EmojiPicker.getCategoryPositions().filter(pos => pos.top <= scrollTop).pop();

    if (!last) {
      return;
    }

    const {
      el
    } = last;
    const category = el.id.replace('emoji-list-category-', '');
    EmojiPicker.currentCategory.set(category);
  }, 300),

  'click .change-tone > a'(event, instance) {
    event.stopPropagation();
    event.preventDefault();
    instance.$('.tone-selector').toggleClass('show');
  },

  'click .tone-selector .tone'(event, instance) {
    event.stopPropagation();
    event.preventDefault();
    const tone = parseInt(event.currentTarget.dataset.tone);
    let newTone;

    if (tone > 0) {
      newTone = "_tone".concat(tone);
    } else {
      newTone = '';
    }

    for (const emojiPackage in emoji.packages) {
      if (emoji.packages.hasOwnProperty(emojiPackage)) {
        if (emoji.packages[emojiPackage].hasOwnProperty('toneList')) {
          for (const _emoji in emoji.packages[emojiPackage].toneList) {
            if (emoji.packages[emojiPackage].toneList.hasOwnProperty(_emoji)) {
              $(".emoji-".concat(_emoji)).html(emoji.packages[emojiPackage].render(":".concat(_emoji).concat(newTone, ":")));
            }
          }
        }
      }
    }

    EmojiPicker.setTone(tone);
    instance.setCurrentTone(tone);
    $('.tone-selector').toggleClass('show');
  },

  'click .emoji-list .emoji-picker-item'(event, instance) {
    event.stopPropagation();
    const _emoji = event.currentTarget.dataset.emoji;
    const actualTone = instance.tone;
    let tone = '';

    for (const emojiPackage in emoji.packages) {
      if (emoji.packages.hasOwnProperty(emojiPackage)) {
        if (actualTone > 0 && emoji.packages[emojiPackage].toneList.hasOwnProperty(_emoji)) {
          tone = "_tone".concat(actualTone);
        }
      }
    }

    const input = $('.emoji-picker .js-emojipicker-search');

    if (input) {
      input.val('');
    }

    instance.currentSearchTerm.set('');
    EmojiPicker.pickEmoji(_emoji + tone);
  },

  'keyup .js-emojipicker-search, change .js-emojipicker-search'(event, instance) {
    event.preventDefault();
    event.stopPropagation();

    if (event.keyCode === ESCAPE) {
      return EmojiPicker.close();
    }

    const value = event.target.value.trim();
    const cst = instance.currentSearchTerm;

    if (value === cst.get()) {
      return;
    }

    cst.set(value);
  }

});
Template.emojiPicker.onCreated(function () {
  this.tone = EmojiPicker.getTone();
  const recent = EmojiPicker.getRecent();
  this.currentSearchTerm = new ReactiveVar('');
  this.categoriesList = [];

  for (const emojiPackage in emoji.packages) {
    if (emoji.packages.hasOwnProperty(emojiPackage)) {
      if (emoji.packages[emojiPackage].emojiCategories) {
        if (typeof emoji.packages[emojiPackage].categoryIndex !== 'undefined') {
          this.categoriesList.splice(emoji.packages[emojiPackage].categoryIndex, 0, ...emoji.packages[emojiPackage].emojiCategories);
        } else {
          this.categoriesList = this.categoriesList.concat(emoji.packages[emojiPackage].emojiCategories);
        }
      }
    }
  }

  recent.forEach(_emoji => {
    emoji.packages.base.emojisByCategory.recent.push(_emoji);
  });

  this.setCurrentTone = newTone => {
    $('.current-tone').removeClass("tone-".concat(this.tone));
    $('.current-tone').addClass("tone-".concat(newTone));
    this.tone = newTone;
  };

  createPickerEmojis(this);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/emoji/client/e5fa693fc49ab87bd75f85cd8dfa5ac3126e7cc3.map
