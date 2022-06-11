function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/template.visitorInfo.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("visitorInfo");
Template["visitorInfo"] = new Template("Template.visitorInfo", (function() {
  var view = this;
  return [ Blaze.If(function() {
    return Spacebars.call(view.lookup("editing"));
  }, function() {
    return [ "\n\t\t", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("roomInfoData"));
    }, function() {
      return Spacebars.include(view.lookupTemplate("visitorEdit"));
    }), "\n\t" ];
  }), "\n\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("forwarding"));
  }, function() {
    return [ "\n\t\t", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("roomInfoData"));
    }, function() {
      return Spacebars.include(view.lookupTemplate("visitorForward"));
    }), "\n\t" ];
  }), "\n\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("sendingTranscript"));
  }, function() {
    return [ "\n\t\t", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("roomInfoData"));
    }, function() {
      return Spacebars.include(view.lookupTemplate("visitorTranscript"));
    }), "\n\t" ];
  }), "\n\t", HTML.DIV({
    class: function() {
      return [ "user-view ", Spacebars.mustache(view.lookup("showDetail")) ];
    }
  }, "\n\t\t", HTML.DIV({
    class: "about clearfix"
  }, "\n\t\t\t", Spacebars.With(function() {
    return Spacebars.call(view.lookup("user"));
  }, function() {
    return [ "\n\t\t\t\t", HTML.DIV({
      class: "info"
    }, "\n\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("name"));
    }, function() {
      return [ "\n\t\t\t\t\t\t", HTML.H2({
        title: function() {
          return Spacebars.mustache(view.lookup("name"));
        }
      }, Blaze.View("lookup:name", function() {
        return Spacebars.mustache(view.lookup("name"));
      }), " ", HTML.I({
        class: function() {
          return [ "status-", Spacebars.mustache(view.lookup("status")) ];
        }
      })), "\n\t\t\t\t\t\t", HTML.P({
        class: "secondary-font-color"
      }, Blaze.View("lookup:username", function() {
        return Spacebars.mustache(view.lookup("username"));
      })), "\n\t\t\t\t\t" ];
    }, function() {
      return [ "\n\t\t\t\t\t\t", HTML.H2({
        title: function() {
          return Spacebars.mustache(view.lookup("username"));
        }
      }, Blaze.View("lookup:username", function() {
        return Spacebars.mustache(view.lookup("username"));
      }), " ", HTML.I({
        class: function() {
          return [ "status-", Spacebars.mustache(view.lookup("status")) ];
        }
      })), "\n\t\t\t\t\t" ];
    }), "\n\t\t\t\t\t", HTML.UL("\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("utc"));
    }, function() {
      return HTML.LI(HTML.Raw('<i class="icon-clock"></i>'), Blaze.View("lookup:userTime", function() {
        return Spacebars.mustache(view.lookup("userTime"));
      }), " (UTC ", Blaze.View("lookup:utc", function() {
        return Spacebars.mustache(view.lookup("utc"));
      }), ")");
    }), "\n\t\t\t\t\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("visitorEmails"));
    }, function() {
      return [ HTML.LI(HTML.Raw('<i class="icon-mail"></i> '), Blaze.View("lookup:address", function() {
        return Spacebars.mustache(view.lookup("address"));
      }), Blaze.If(function() {
        return Spacebars.call(view.lookup("verified"));
      }, function() {
        return HTML.Raw('&nbsp;<i class="icon-ok success-color"></i>');
      })), " " ];
    }), "\n\t\t\t\t\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("phone"));
    }, function() {
      return [ HTML.LI(HTML.Raw('<i class="icon-phone"></i> '), Blaze.View("lookup:phoneNumber", function() {
        return Spacebars.mustache(view.lookup("phoneNumber"));
      })), " " ];
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("lastLogin"));
    }, function() {
      return [ HTML.LI(HTML.Raw('<i class="icon-calendar"></i> '), Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Created_at");
      }), ": ", Blaze.View("lookup:createdAt", function() {
        return Spacebars.mustache(view.lookup("createdAt"));
      })), " " ];
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("lastLogin"));
    }, function() {
      return [ HTML.LI(HTML.Raw('<i class="icon-calendar"></i> '), Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Last_login");
      }), ": ", Blaze.View("lookup:lastLogin", function() {
        return Spacebars.mustache(view.lookup("lastLogin"));
      })), " " ];
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("ip"));
    }, function() {
      return HTML.LI(HTML.Raw('<i class="icon-laptop"></i>'), HTML.SPAN(Blaze.View("lookup:ip", function() {
        return Spacebars.mustache(view.lookup("ip"));
      })));
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("os"));
    }, function() {
      return HTML.LI(HTML.I({
        class: function() {
          return Spacebars.mustache(view.lookup("osIcon"));
        }
      }), HTML.SPAN(Blaze.View("lookup:os", function() {
        return Spacebars.mustache(view.lookup("os"));
      })));
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("browser"));
    }, function() {
      return HTML.LI(HTML.I({
        class: function() {
          return Spacebars.mustache(view.lookup("browserIcon"));
        }
      }), HTML.SPAN(Blaze.View("lookup:browser", function() {
        return Spacebars.mustache(view.lookup("browser"));
      })));
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("customVisitorFields"));
    }, function() {
      return [ "\n\t\t\t\t\t\t\t", Blaze.Each(function() {
        return Spacebars.call(view.lookup("customVisitorFields"));
      }, function() {
        return HTML.LI(HTML.STRONG(Blaze.View("lookup:label", function() {
          return Spacebars.mustache(view.lookup("label"));
        })), ": ", Blaze.View("lookup:value", function() {
          return Spacebars.mustache(view.lookup("value"));
        }));
      }), "\n\t\t\t\t\t\t" ];
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];
  }), "\n\n\t\t\t", HTML.DIV({
    class: "info"
  }, "\n\t\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Conversation");
  })), "\n\t\t\t\t", HTML.UL("\n\t\t\t\t\t", Spacebars.With(function() {
    return Spacebars.call(view.lookup("room"));
  }, function() {
    return [ "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("servedBy"));
    }, function() {
      return HTML.LI(HTML.STRONG(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Agent");
      })), ": ", Blaze.View("lookup:servedBy.username", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("servedBy"), "username"));
      }));
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("email"));
    }, function() {
      return HTML.LI(HTML.STRONG(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Email_Inbox");
      })), ": ", Blaze.View("lookup:email.inbox", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("email"), "inbox"));
      }));
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("email"));
    }, function() {
      return HTML.LI(HTML.STRONG(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Email_subject");
      })), ": ", Blaze.View("lookup:email.subject", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("email"), "subject"));
      }));
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("facebook"));
    }, function() {
      return HTML.LI(HTML.Raw('<i class="icon-facebook"></i>'), Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Facebook_Page");
      }), ": ", Blaze.View("lookup:facebook.page.name", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("facebook"), "page", "name"));
      }));
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("sms"));
    }, function() {
      return HTML.LI(HTML.Raw('<i class="i con-mobile"></i>'), Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "SMS_Enabled");
      }));
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("topic"));
    }, function() {
      return HTML.LI(HTML.STRONG(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Topic");
      })), ": ", Blaze.View("lookup:markdown", function() {
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("markdown"), view.lookup("topic")));
      }));
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("tags"));
    }, function() {
      return HTML.LI(HTML.STRONG(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Tags");
      })), ": ", Blaze.View("lookup:joinTags", function() {
        return Spacebars.mustache(view.lookup("joinTags"));
      }));
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("closedAt"));
    }, function() {
      return HTML.LI(HTML.STRONG(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Closed_At");
      })), ": ", Blaze.View("lookup:roomClosedDateTime", function() {
        return Spacebars.mustache(view.lookup("roomClosedDateTime"));
      }), " ", HTML.STRONG(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "by");
      }), ":"), " ", Blaze.View("lookup:roomClosedBy", function() {
        return Spacebars.mustache(view.lookup("roomClosedBy"));
      }));
    }), "\n\t\t\t\t\t\t", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("customInfoTemplate")),
        data: Spacebars.call(view.lookup("roomDataContext"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n\t\t\t\t\t" ];
  }), "\n\t\t\t\t\t", Spacebars.With(function() {
    return Spacebars.call(view.lookup("department"));
  }, function() {
    return [ "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("name"));
    }, function() {
      return HTML.LI(HTML.STRONG(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Department");
      })), ": ", Blaze.View("lookup:name", function() {
        return Spacebars.mustache(view.lookup("name"));
      }));
    }), "\n\t\t\t\t\t" ];
  }), "\n\t\t\t\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("customRoomFields"));
  }, function() {
    return [ "\n\t\t\t\t\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("customRoomFields"));
    }, function() {
      return HTML.LI(HTML.STRONG(Blaze.View("lookup:label", function() {
        return Spacebars.mustache(view.lookup("label"));
      })), ": ", Blaze.View("lookup:value", function() {
        return Spacebars.mustache(view.lookup("value"));
      }));
    }), "\n\t\t\t\t\t" ];
  }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\n\t\t\t", Spacebars.With(function() {
    return Spacebars.call(view.lookup("transcriptRequest"));
  }, function() {
    return [ "\n\t\t\t\t", HTML.DIV({
      class: "info"
    }, "\n\t\t\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Transcript_Request");
    })), "\n\t\t\t\t\t", HTML.UL("\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("requestedAt"));
    }, function() {
      return HTML.LI(HTML.STRONG(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Requested_At");
      })), ": ", Blaze.View("lookup:transcriptRequestedDateTime", function() {
        return Spacebars.mustache(view.lookup("transcriptRequestedDateTime"));
      }));
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("requestedBy"));
    }, function() {
      return HTML.LI(HTML.STRONG(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Requested_By");
      })), ": ", Blaze.View("lookup:requestedBy.username", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("requestedBy"), "username"));
      }));
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];
  }), "\n\t\t"), "\n\n\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("canSeeButtons"));
  }, function() {
    return [ "\n\t\t\t", HTML.NAV({
      class: "centered-buttons"
    }, "\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("canEditRoom"));
    }, function() {
      return [ "\n\t\t\t\t\t", HTML.BUTTON({
        class: "button rc-button rc-button--secondary button-block edit-livechat"
      }, HTML.SPAN(HTML.Raw('<i class="icon-edit"></i> '), Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Edit");
      }))), "\n\t\t\t\t" ];
    }), "\n\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("roomOpen"));
    }, function() {
      return [ "\n\t\t\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("canCloseRoom"));
      }, function() {
        return [ "\n\t\t\t\t\t\t", HTML.BUTTON({
          class: "button rc-button rc-button--secondary button-block close-livechat"
        }, HTML.SPAN(HTML.Raw('<i class="icon-cancel"></i> '), Blaze.View("lookup:_", function() {
          return Spacebars.mustache(view.lookup("_"), "Close");
        }))), "\n\t\t\t\t\t" ];
      }), "\n\t\t\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("canForwardGuest"));
      }, function() {
        return [ "\n\t\t\t\t\t\t", HTML.BUTTON({
          class: "button rc-button rc-button--secondary button-block forward-livechat"
        }, HTML.SPAN(HTML.Raw('<i class="icon-forward"></i> '), Blaze.View("lookup:_", function() {
          return Spacebars.mustache(view.lookup("_"), "Forward");
        }))), "\n\t\t\t\t\t" ];
      }), "\n\t\t\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("canReturnQueue"));
      }, function() {
        return [ "\n\t\t\t\t\t\t", HTML.BUTTON({
          class: "button rc-button rc-button--secondary button-block return-inquiry"
        }, HTML.SPAN(HTML.Raw('<i class="icon-ccw"></i> '), Blaze.View("lookup:_", function() {
          return Spacebars.mustache(view.lookup("_"), "Return");
        }))), "\n\t\t\t\t\t" ];
      }), "\n\t\t\t\t" ];
    }), "\n\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("canSendTranscript"));
    }, function() {
      return [ "\n\t\t\t\t\t", HTML.BUTTON({
        class: "button rc-button rc-button--secondary button-block send-transcript"
      }, HTML.SPAN(HTML.Raw('<i class="icon-mail"></i> '), Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Transcript");
      }))), "\n\t\t\t\t" ];
    }), "\n\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("canPlaceChatOnHold"));
    }, function() {
      return [ "\n\t\t\t\t\t", HTML.BUTTON({
        class: "button rc-button rc-button--secondary button-block on-hold"
      }, HTML.SPAN(HTML.Raw('<i class="icon-pause"></i> '), Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "On_Hold_Chats");
      }))), "\n\t\t\t\t" ];
    }), "\n\t\t\t"), "\n\t\t" ];
  }), "\n\n\t\t", Blaze._TemplateWith(function() {
    return Spacebars.call(view.lookup("."));
  }, function() {
    return Spacebars.include(view.lookupTemplate("visitorNavigation"));
  }), "\n\t") ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/03e774a706dcba4f8f3d8b2204eae049685f9c61.map
