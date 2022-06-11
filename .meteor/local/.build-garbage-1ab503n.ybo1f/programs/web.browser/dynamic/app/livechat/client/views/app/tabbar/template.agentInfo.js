function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/template.agentInfo.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("agentInfo");
Template["agentInfo"] = new Template("Template.agentInfo", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("editingAgent"));
  }, function() {
    return [ "\n\t\t", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("agentToEdit"));
    }, function() {
      return Spacebars.include(view.lookupTemplate("agentEdit"));
    }), "\n\t" ];
  }, function() {
    return [ "\n\t\t", Blaze.Unless(function() {
      return Spacebars.call(view.lookup("isReady"));
    }, function() {
      return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t" ];
    }, function() {
      return [ "\n\t\t\t", Spacebars.With(function() {
        return Spacebars.call(view.lookup("agent"));
      }, function() {
        return [ "\n\t\t\t\t", HTML.SECTION({
          class: "contextual-bar__content"
        }, "\n\t\t\t\t\t", HTML.DIV({
          class: "rc-user-info-wrapper"
        }, "\n\t\t\t\t\t\t", HTML.DIV({
          class: "rc-user-info"
        }, "\n\t\t\t\t\t\t\t", HTML.DIV({
          class: "rc-user-info__avatar"
        }, "\n\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
          return {
            username: Spacebars.call(view.lookup("username"))
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("avatar"));
        }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.H3({
          title: function() {
            return Spacebars.mustache(view.lookup("name"));
          },
          class: "rc-user-info__name"
        }, HTML.I({
          class: function() {
            return [ "status-", Spacebars.mustache(view.lookup("status")) ];
          }
        }), " ", Blaze.View("lookup:name", function() {
          return Spacebars.mustache(view.lookup("name"));
        })), "\n\t\t\t\t\t\t\t", Blaze.If(function() {
          return Spacebars.call(view.lookup("username"));
        }, function() {
          return HTML.P({
            class: "rc-user-info__username"
          }, "@", Blaze.View("lookup:username", function() {
            return Spacebars.mustache(view.lookup("username"));
          }));
        }), "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
          return {
            uid: Spacebars.call(view.lookup("uid"))
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("userPresence"), function() {
            return HTML.SPAN({
              class: "rc-header__status rc-user-info__status"
            }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({
              class: function() {
                return [ "rc-header__status-bullet rc-header__status-bullet--", Spacebars.mustache(view.lookup("agentStatus")) ];
              },
              title: function() {
                return Spacebars.mustache(view.lookup("_"), view.lookup("agentStatus"));
              }
            }), "\n\t\t\t\t\t\t\t\t", HTML.DIV({
              class: "rc-header__visual-status"
            }, Blaze.View("lookup:agentStatusText", function() {
              return Spacebars.mustache(view.lookup("agentStatusText"));
            })), "\n\t\t\t\t\t\t\t");
          });
        }), "\n\t\t\t\t\t\t"), "\n\n\t\t\t\t\t\t", HTML.DIV({
          class: "rc-user-info-action"
        }, "\n\t\t\t\t\t\t\t", Blaze.If(function() {
          return Spacebars.call(view.lookup("canEdit"));
        }, function() {
          return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({
            class: "js-action rc-user-info-action__item edit-agent"
          }, "\n\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
            return {
              block: Spacebars.call("rc-user-info-action__icon"),
              icon: Spacebars.call("edit")
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("icon"));
          }), "\n\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {
            return Spacebars.mustache(view.lookup("_"), "Edit");
          }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];
        }), "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
          return "manage-livechat-agents";
        }, function() {
          return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {
            return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({
              class: "js-action rc-user-info-action__item delete-agent"
            }, "\n\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
              return {
                block: Spacebars.call("rc-user-info-action__icon"),
                icon: Spacebars.call("trash")
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("icon"));
            }), "\n\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {
              return Spacebars.mustache(view.lookup("_"), "Delete");
            }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];
          });
        }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({
          class: "rc-user-info-details"
        }, "\n\t\t\t\t\t\t\t", Blaze.If(function() {
          return Spacebars.call(view.lookup("hasEmails"));
        }, function() {
          return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({
            class: "rc-user-info-details__item"
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL({
            class: "rc-user-info-details__label"
          }, Blaze.View("lookup:_", function() {
            return Spacebars.mustache(view.lookup("_"), "Email");
          })), "\n\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {
            return Spacebars.call(view.lookup("emails"));
          }, function() {
            return [ " ", HTML.A({
              href: function() {
                return [ "mailto:", Spacebars.mustache(view.lookup("address")) ];
              },
              class: "rc-user-info-details__info"
            }, Blaze.View("lookup:address", function() {
              return Spacebars.mustache(view.lookup("address"));
            }), Blaze.If(function() {
              return Spacebars.call(view.lookup("verified"));
            }, function() {
              return HTML.Raw('&nbsp;<i class="icon-ok success-color"></i>');
            })), " " ];
          }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];
        }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {
          return Spacebars.call(view.lookup("agentDepartments"));
        }, function() {
          return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({
            class: "rc-user-info-details__item"
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL({
            class: "rc-user-info-details__label"
          }, Blaze.View("lookup:_", function() {
            return Spacebars.mustache(view.lookup("_"), "Departments");
          })), "\n\t\t\t\t\t\t\t\t\t", HTML.UL({
            class: "chip-container current-user-roles"
          }, "\n\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {
            return {
              _sequence: Spacebars.call(view.lookup("agentDepartments")),
              _variable: "dept"
            };
          }, function() {
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.LI({
              class: "agent-department",
              title: function() {
                return Spacebars.mustache(Spacebars.dot(view.lookup("dept"), "name"));
              }
            }, Blaze.View("lookup:dept.name", function() {
              return Spacebars.mustache(Spacebars.dot(view.lookup("dept"), "name"));
            })), "\n\t\t\t\t\t\t\t\t\t\t" ];
          }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];
        }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {
          return Spacebars.call(view.lookup("customFieldsTemplate"));
        }, function() {
          return [ "\n\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
            return {
              template: Spacebars.call(view.lookup("customFieldsTemplate")),
              data: Spacebars.call(view.lookup("agentDataContext"))
            };
          }, function() {
            return Spacebars.include(function() {
              return Spacebars.call(Template.__dynamic);
            });
          }), "\n\t\t\t\t\t\t\t" ];
        }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];
      }), "\n\t\t" ];
    }), "\n\t" ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/b929f525da7fe18caad54be5b12e888dc3ad79e7.map
