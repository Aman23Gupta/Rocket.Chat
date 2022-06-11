function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/webdav/client/template.webdavFilePicker.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("webdavFilePicker");
Template["webdavFilePicker"] = new Template("Template.webdavFilePicker", (function() {
  var view = this;
  return HTML.DIV({
    class: "webdav"
  }, "\n\t\t", HTML.DIV({
    class: "webdav-table-header"
  }, "\n\t\t\t", HTML.DIV({
    class: "webdav-path-breadcrumb"
  }, HTML.Raw('\n\t\t\t\t<div class="webdav-breadcrumb-item">\n\t\t\t\t\t<button class="webdav-breadcrumb-folder js-webdav-breadcrumb-folder" aria-label="Home" data-index="-1">\n\t\t\t\t\t\t<i class="icon-home"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t'), Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("parentFolders")),
      _variable: "parentFolder"
    };
  }, function() {
    return [ "\n\t\t\t\t\t", HTML.DIV({
      class: "webdav-breadcrumb-item"
    }, HTML.Raw('\n\t\t\t\t\t\t<i class="icon-angle-right"></i>\n\t\t\t\t\t\t'), HTML.BUTTON({
      class: "webdav-breadcrumb-folder js-webdav-breadcrumb-folder",
      "aria-label": function() {
        return Spacebars.mustache(view.lookup("parentFolder"));
      },
      "data-index": function() {
        return Spacebars.mustache(view.lookup("@index"));
      }
    }, "\n\t\t\t\t\t\t\t", Blaze.View("lookup:parentFolder", function() {
      return Spacebars.mustache(view.lookup("parentFolder"));
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];
  }), "\n\t\t\t"), HTML.Raw('\n\t\t\t<div class="webdav-header-spacer"></div>\n\t\t\t<div class="webdav-search">\n\t\t\t\t<form class="webdav__search-form js-search-form" role="form">\n\t\t\t\t\t<span class="webdav-search-icon js-webdav-search-icon" title="Search">\n\t\t\t\t\t\t<i class="icon-search"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<input type="text" class="webdav-search-input js-webdav-search-input" name="webdav-search-input" placeholder="Search..." autocomplete="off">\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t'), HTML.DIV({
    class: "list-grid-mode js-list-grid-mode",
    title: function() {
      return [ Blaze.If(function() {
        return Spacebars.call(view.lookup("listMode"));
      }, function() {
        return "Grid";
      }, function() {
        return "List";
      }), " View" ];
    }
  }, "\n\t\t\t\t", HTML.I({
    class: function() {
      return [ "icon-", Blaze.If(function() {
        return Spacebars.call(view.lookup("listMode"));
      }, function() {
        return "th";
      }, function() {
        return "list";
      }) ];
    }
  }), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({
    class: "rc-table-content"
  }, "\n\t\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("isLoading"));
  }, function() {
    return [ "\n\t\t\t\t", HTML.DIV({
      class: "file-picker-loading"
    }, "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t"), "\n\t\t\t" ];
  }, function() {
    return [ "\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("listMode"));
    }, function() {
      return [ "\n\t\t\t\t\t", Blaze._TemplateWith(function() {
        return {
          onSort: Spacebars.call(view.lookup("onTableSort"))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("table"), function() {
          return [ "\n\t\t\t\t\t\t", HTML.THEAD("\n\t\t\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t\t\t", HTML.TH({
            class: "webdav__file-icon"
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({
            class: "table-fake-th"
          }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({
            class: "webdav-grid-back-icon js-webdav-grid-back-icon"
          }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {
            return Spacebars.dataMustache(view.lookup("$neq"), view.lookup("webdavCurrentFolder"), "/");
          }, function() {
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
              return {
                icon: Spacebars.call("back")
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("icon"));
            }), "\n\t\t\t\t\t\t\t\t\t\t\t" ];
          }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.TH({
            class: function() {
              return [ "webdav__file-name js-sort ", Blaze.If(function() {
                return Spacebars.dataMustache(view.lookup("sortBy"), "name");
              }, function() {
                return "is-sorting";
              }) ];
            },
            "data-sort": "name"
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({
            class: "table-fake-th"
          }, HTML.Raw("<span>Name</span>"), Blaze._TemplateWith(function() {
            return {
              icon: Spacebars.call(Spacebars.dataMustache(view.lookup("sortIcon"), "name"))
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("icon"));
          })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.TH({
            class: function() {
              return [ "webdav__file-size js-sort ", Blaze.If(function() {
                return Spacebars.dataMustache(view.lookup("sortBy"), "size");
              }, function() {
                return "is-sorting";
              }) ];
            },
            "data-sort": "size"
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({
            class: "table-fake-th"
          }, HTML.Raw("<span>Size</span>"), Blaze._TemplateWith(function() {
            return {
              icon: Spacebars.call(Spacebars.dataMustache(view.lookup("sortIcon"), "size"))
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("icon"));
          })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.TH({
            class: function() {
              return [ "webdav__file-date js-sort ", Blaze.If(function() {
                return Spacebars.dataMustache(view.lookup("sortBy"), "date");
              }, function() {
                return "is-sorting";
              }) ];
            },
            "data-sort": "date"
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({
            class: "table-fake-th"
          }, HTML.Raw("<span>Date Modified</span>"), Blaze._TemplateWith(function() {
            return {
              icon: Spacebars.call(Spacebars.dataMustache(view.lookup("sortIcon"), "date"))
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("icon"));
          })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t\t\t", Blaze.Each(function() {
            return Spacebars.call(view.lookup("webdavNodes"));
          }, function() {
            return [ "\n\t\t\t\t\t\t\t\t", HTML.TR({
              class: function() {
                return [ "webdav_", Spacebars.mustache(Spacebars.dot(view.lookup("."), "type")), " js-webdav_", Spacebars.mustache(Spacebars.dot(view.lookup("."), "type")) ];
              },
              "data-name": function() {
                return Spacebars.mustache(Spacebars.dot(view.lookup("."), "basename"));
              }
            }, "\n\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({
              class: "table-file-avatar-wrapper"
            }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {
              return Spacebars.call(view.lookup("filePreview"));
            }, function() {
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({
                class: "table-file-avatar"
              }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.IMG({
                src: function() {
                  return Spacebars.mustache(view.lookup("filePreview"));
                },
                class: "file-preview"
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t" ];
            }, function() {
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", Spacebars.With(function() {
                return Spacebars.call(view.lookup("iconType"));
              }, function() {
                return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({
                  class: "table-file-avatar"
                }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
                  return {
                    icon: Spacebars.call(view.lookup("icon"))
                  };
                }, function() {
                  return Spacebars.include(view.lookupTemplate("icon"));
                }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];
              }), "\n\t\t\t\t\t\t\t\t\t\t\t" ];
            }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:getName", function() {
              return Spacebars.mustache(view.lookup("getName"), Spacebars.dot(view.lookup("."), "basename"));
            })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:getSize", function() {
              return Spacebars.mustache(view.lookup("getSize"));
            })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({
              class: "table-column-date"
            }, Blaze.View("lookup:getDate", function() {
              return Spacebars.mustache(view.lookup("getDate"));
            })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];
          }, function() {
            return [ "\n\t\t\t\t\t\t\t\t", HTML.TR({
              class: "table-no-click"
            }, "\n\t\t\t\t\t\t\t\t\t", HTML.TD({
              colspan: "4",
              class: "center-cell"
            }, Blaze.View("lookup:_", function() {
              return Spacebars.mustache(view.lookup("_"), "Nothing_found");
            })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];
          }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];
        });
      }), "\n\t\t\t\t" ];
    }, function() {
      return [ "\n\t\t\t\t\t", HTML.DIV({
        class: "webdav-grid-header"
      }, "\n\t\t\t\t\t\t", HTML.DIV({
        class: "webdav-grid-back-icon js-webdav-grid-back-icon"
      }, "\n\t\t\t\t\t\t\t", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("$neq"), view.lookup("webdavCurrentFolder"), "/");
      }, function() {
        return [ "\n\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
          return {
            icon: Spacebars.call("back")
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("icon"));
        }), "\n\t\t\t\t\t\t\t" ];
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({
        class: "rc-select webdav-sort"
      }, "\n\t\t\t\t\t\t\t", HTML.SPAN({
        class: "webdav-sort-direction js-webdav-sort-direction"
      }, "\n\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
        return {
          icon: Spacebars.call(Spacebars.dataMustache(view.lookup("sortIcon"), view.lookup("getSortBy")))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("icon"));
      }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.SELECT({
        class: "js-webdav-select-sort required rc-select__element"
      }, "\n\t\t\t\t\t\t\t\t", HTML.OPTION({
        value: "name",
        selected: function() {
          return Spacebars.mustache(view.lookup("sortBy"), "name");
        },
        dir: "auto"
      }, "Name"), "\n\t\t\t\t\t\t\t\t", HTML.OPTION({
        value: "size",
        selected: function() {
          return Spacebars.mustache(view.lookup("sortBy"), "size");
        },
        dir: "auto"
      }, "Size"), "\n\t\t\t\t\t\t\t\t", HTML.OPTION({
        value: "date",
        selected: function() {
          return Spacebars.mustache(view.lookup("sortBy"), "date");
        },
        dir: "auto"
      }, "Date Modified"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
        return {
          block: Spacebars.call("rc-select__arrow"),
          icon: Spacebars.call("arrow-down")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("icon"));
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({
        class: "webdav-grid"
      }, "\n\t\t\t\t\t\t", Blaze.Each(function() {
        return Spacebars.call(view.lookup("webdavNodes"));
      }, function() {
        return [ "\n\t\t\t\t\t\t\t", HTML.DIV({
          class: function() {
            return [ "webdav_", Spacebars.mustache(Spacebars.dot(view.lookup("."), "type")), " js-webdav_", Spacebars.mustache(Spacebars.dot(view.lookup("."), "type")), " grid-item" ];
          },
          "data-name": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "basename"));
          }
        }, "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.DIV({
          class: "grid-file-avatar-wrapper"
        }, "\n\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {
          return Spacebars.call(view.lookup("filePreview"));
        }, function() {
          return [ "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({
            class: "grid-file-avatar"
          }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.IMG({
            src: function() {
              return Spacebars.mustache(view.lookup("filePreview"));
            },
            class: "file-preview"
          }), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t" ];
        }, function() {
          return [ "\n\t\t\t\t\t\t\t\t\t\t\t", Spacebars.With(function() {
            return Spacebars.call(view.lookup("iconType"));
          }, function() {
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({
              class: "grid-file-avatar"
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
              return {
                icon: Spacebars.call(view.lookup("icon"))
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("icon"));
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t" ];
          }), "\n\t\t\t\t\t\t\t\t\t\t" ];
        }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV(Blaze.View("lookup:getName", function() {
          return Spacebars.mustache(view.lookup("getName"), Spacebars.dot(view.lookup("."), "basename"));
        })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];
      }, function() {
        return [ "\n\t\t\t\t\t\t\t", HTML.DIV({
          class: "grid-empty"
        }, Blaze.View("lookup:_", function() {
          return Spacebars.mustache(view.lookup("_"), "Nothing_found");
        })), "\n\t\t\t\t\t\t" ];
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];
    }), "\n\t\t\t" ];
  }), "\n\t\t"), "\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/webdav/client/6f3aff7f1170c5af20c5c0012c8ae8065f4b6820.map
