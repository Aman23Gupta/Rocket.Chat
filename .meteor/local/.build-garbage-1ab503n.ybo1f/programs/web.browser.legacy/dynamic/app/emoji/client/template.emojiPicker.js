function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/emoji/client/template.emojiPicker.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("emojiPicker");
Template["emojiPicker"] = new Template("Template.emojiPicker", (function() {
  var view = this;
  return HTML.DIV({
    class: "emoji-picker rc-popover__content"
  }, "\n\t\t", HTML.DIV({
    class: "emoji-top"
  }, "\n\t\t\t", HTML.DIV({
    class: "rc-input"
  }, "\n\t\t\t\t", HTML.LABEL({
    class: "rc-input__label"
  }, "\n\t\t\t\t\t", HTML.DIV({
    class: "rc-input__wrapper"
  }, "\n\t\t\t\t\t\t", HTML.DIV({
    class: "rc-input__icon"
  }, "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
    return {
      block: Spacebars.call("rc-input__icon-svg"),
      icon: Spacebars.call("magnifier")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("icon"));
  }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.INPUT({
    name: "name",
    type: "text",
    class: "rc-input__element js-emojipicker-search",
    placeholder: function() {
      return Spacebars.mustache(view.lookup("_"), "Search");
    },
    autofocus: "",
    autocomplete: "off"
  }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({
    class: "change-tone"
  }, "\n\t\t\t\t", HTML.A({
    href: "#change-tone"
  }, HTML.SPAN({
    class: function() {
      return [ "current-tone ", Spacebars.mustache(view.lookup("currentTone")) ];
    }
  })), HTML.Raw('\n\t\t\t\t<ul class="tone-selector secondary-background-color">\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="0"><span class="tone-0"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="1"><span class="tone-1"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="2"><span class="tone-2"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="3"><span class="tone-3"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="4"><span class="tone-4"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="5"><span class="tone-5"></span></a></li>\n\t\t\t\t</ul>\n\t\t\t')), "\n\t\t"), "\n\t\t", HTML.DIV({
    class: "filter"
  }, "\n\t\t\t", HTML.UL({
    class: "filter-list"
  }, "\n\t\t\t\t", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("emojiCategories")),
      _variable: "category"
    };
  }, function() {
    return [ "\n\t\t\t\t\t", HTML.LI({
      class: function() {
        return [ "filter-item border-secondary-background-color ", Spacebars.mustache(view.lookup("activeCategory"), Spacebars.dot(view.lookup("category"), "key")) ];
      },
      title: function() {
        return Spacebars.mustache(view.lookup("_"), Spacebars.dot(view.lookup("category"), "i18n"));
      }
    }, "\n\t\t\t\t\t\t", HTML.A({
      href: function() {
        return [ "#", Spacebars.mustache(Spacebars.dot(view.lookup("category"), "key")) ];
      },
      class: "category-link color-info-font-color"
    }, HTML.I({
      class: function() {
        return [ "category-icon icon-", Spacebars.mustache(Spacebars.dot(view.lookup("category"), "key")) ];
      }
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];
  }), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({
    class: "emojis"
  }, "\n\t\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("searching"));
  }, function() {
    return [ "\n\t\t\t\t", Blaze.View("lookup:searchResults", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("searchResults")));
    }), "\n\t\t\t" ];
  }, function() {
    return [ "\n\t\t\t\t", Blaze.Each(function() {
      return {
        _sequence: Spacebars.call(view.lookup("emojiCategories")),
        _variable: "category"
      };
    }, function() {
      return [ "\n\t\t\t\t\t", HTML.H4({
        class: "emoji-list-category",
        id: function() {
          return [ "emoji-list-category-", Spacebars.mustache(Spacebars.dot(view.lookup("category"), "key")) ];
        }
      }, Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), Spacebars.dot(view.lookup("category"), "i18n"));
      })), "\n\t\t\t\t\t", HTML.UL({
        class: function() {
          return [ "emoji-list emoji-category-", Spacebars.mustache(Spacebars.dot(view.lookup("category"), "key")) ];
        }
      }, "\n\t\t\t\t\t\t", Blaze.View("lookup:emojiList", function() {
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("emojiList"), Spacebars.dot(view.lookup("category"), "key")));
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];
    }), "\n\t\t\t" ];
  }), "\n\t\t"), "\n\t\t", HTML.DIV({
    class: "emoji-footer"
  }, "\n\t\t\t", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("hasPermission"), "manage-emoji");
  }, function() {
    return HTML.A({
      class: "add-custom",
      href: "/admin/emoji-custom"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Add_custom_emoji");
    }));
  }), "\n\t\t\t", Blaze.View("lookup:_", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Emoji_provided_by_JoyPixels"));
  }), "\n\t\t"), "\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/emoji/client/3219cfdbbf792cbcddf597b08ae978c3080954df.map
