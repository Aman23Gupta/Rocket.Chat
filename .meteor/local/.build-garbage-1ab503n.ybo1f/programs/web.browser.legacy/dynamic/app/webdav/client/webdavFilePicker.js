function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/webdav/client/webdavFilePicker.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 1);

var _;

module.link("underscore", {
  "default": function (v) {
    _ = v;
  }
}, 2);
var Session;
module.link("meteor/session", {
  Session: function (v) {
    Session = v;
  }
}, 3);
var Handlebars;
module.link("meteor/ui", {
  Handlebars: function (v) {
    Handlebars = v;
  }
}, 4);
var ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 5);
var ReactiveDict;
module.link("meteor/reactive-dict", {
  ReactiveDict: function (v) {
    ReactiveDict = v;
  }
}, 6);
var timeAgo;
module.link("../../ui/client/views/app/helpers", {
  timeAgo: function (v) {
    timeAgo = v;
  }
}, 7);
var modal;
module.link("../../ui-utils/client", {
  modal: function (v) {
    modal = v;
  }
}, 8);
var t;
module.link("../../utils/client", {
  t: function (v) {
    t = v;
  }
}, 9);
var fileUploadHandler;
module.link("../../file-upload/client", {
  fileUploadHandler: function (v) {
    fileUploadHandler = v;
  }
}, 10);
var call;
module.link("../../../client/lib/utils/call", {
  call: function (v) {
    call = v;
  }
}, 11);
var dispatchToastMessage;
module.link("../../../client/lib/toast", {
  dispatchToastMessage: function (v) {
    dispatchToastMessage = v;
  }
}, 12);

function sortTable(data, sortBy, sortDirection) {
  if (sortDirection === 'desc') {
    if (sortBy === 'name') {
      data.sort(function (a, b) {
        return b.basename.localeCompare(a.basename);
      });
    }

    if (sortBy === 'size') {
      data.sort(function (a, b) {
        return b.size - a.size;
      });
    }

    if (sortBy === 'date') {
      data.sort(function (a, b) {
        return new Date(b.lastmod) - new Date(a.lastmod);
      });
    }
  } else {
    if (sortBy === 'name') {
      data.sort(function (a, b) {
        return a.basename.localeCompare(b.basename);
      });
    }

    if (sortBy === 'size') {
      data.sort(function (a, b) {
        return a.size - b.size;
      });
    }

    if (sortBy === 'date') {
      data.sort(function (a, b) {
        return new Date(a.lastmod) - new Date(b.lastmod);
      });
    }
  }

  return data;
}

function showFilePreviews(accountId, nodes) {
  var promises;
  return _regeneratorRuntime.async(function () {
    function showFilePreviews$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!Array.isArray(nodes) || !nodes.length)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            promises = nodes.map(function (node, index) {
              if (node.type !== 'file') {
                return;
              }

              return call('getWebdavFilePreview', accountId, node.filename).then(function (res) {
                var blob = new Blob([res.data], {
                  type: 'image/png'
                });
                var imgURL = URL.createObjectURL(blob);
                nodes[index].preview = imgURL;
              }).catch(function (e) {
                return e;
              });
            }).filter(Boolean);
            return _context.abrupt("return", Promise.all(promises).then(function () {
              return nodes;
            }).catch(function (e) {
              return e;
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }

    return showFilePreviews$;
  }(), null, null, null, Promise);
}

function showWebdavFileList() {
  var instance, accountId, directory, unfilteredWebdavNodes, response, nodesWithPreviews;
  return _regeneratorRuntime.async(function () {
    function showWebdavFileList$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            instance = Template.instance();
            accountId = instance.data.accountId;
            directory = instance.state.get('webdavCurrentFolder');
            instance.isLoading.set(true);
            instance.state.set({
              webdavNodes: []
            });
            _context2.prev = 5;
            _context2.next = 8;
            return _regeneratorRuntime.awrap(call('getWebdavFileList', accountId, directory).catch(function (err) {
              return console.log(err);
            }));

          case 8:
            response = _context2.sent;

            if (!(!response || !response.success)) {
              _context2.next = 13;
              break;
            }

            instance.isLoading.set(false);
            modal.close();
            return _context2.abrupt("return");

          case 13:
            unfilteredWebdavNodes = response.data;
            instance.state.set({
              unfilteredWebdavNodes: unfilteredWebdavNodes
            });
            $('.js-webdav-search-input').val('');
            instance.searchText.set('');

          case 17:
            _context2.prev = 17;
            instance.isLoading.set(false);
            _context2.next = 21;
            return _regeneratorRuntime.awrap(showFilePreviews(accountId, unfilteredWebdavNodes));

          case 21:
            nodesWithPreviews = _context2.sent;

            if (Array.isArray(nodesWithPreviews) && nodesWithPreviews.length) {
              instance.state.set({
                unfilteredWebdavNodes: nodesWithPreviews
              });
            }

            return _context2.finish(17);

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }

    return showWebdavFileList$;
  }(), null, null, [[5,, 17, 24]], Promise);
}

Template.webdavFilePicker.helpers({
  iconType: function () {
    // add icon for different types
    var icon = 'clip';
    var type = '';
    var extension = this.basename.split('.').pop();

    if (extension === this.basename) {
      extension = '';
    }

    if (this.type === 'directory') {
      icon = 'folder';
      type = 'directory';
    } else if (this.mime.match(/application\/pdf/)) {
      icon = 'file-pdf';
      type = 'pdf';
    } else if (['application/vnd.oasis.opendocument.text', 'application/vnd.oasis.opendocument.presentation'].includes(this.mime)) {
      icon = 'file-document';
      type = 'document';
    } else if (['application/vnd.ms-excel', 'application/vnd.oasis.opendocument.spreadsheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(this.mime)) {
      icon = 'file-sheets';
      type = 'sheets';
    } else if (['application/vnd.ms-powerpoint', 'application/vnd.oasis.opendocument.presentation'].includes(this.mime)) {
      icon = 'file-sheets';
      type = 'ppt';
    }

    return {
      icon: icon,
      type: type,
      extension: extension
    };
  },
  filePreview: function () {
    return this.preview;
  },
  isLoading: function () {
    return Template.instance().isLoading.get();
  },
  listMode: function () {
    return Template.instance().isListMode.get();
  },
  sortBy: function (key) {
    return Template.instance().sortBy.get() === key;
  },
  getSortBy: function () {
    return Template.instance().sortBy.get();
  },
  getName: function (basename) {
    var maxwidth = Template.instance().isListMode.get() ? 35 : 20;

    if (basename.length < maxwidth) {
      return basename;
    }

    return basename.slice(0, maxwidth - 10) + "\u2026" + basename.slice(-7);
  },
  getSize: function () {
    if (this.type === 'directory') {
      return '';
    }

    var bytes = this.size;

    if (bytes === 0) {
      return '0 B';
    }

    var k = 1024;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  },
  getDate: function () {
    return timeAgo(new Date(this.lastmod), t);
  },
  sortIcon: function (key) {
    var _Template$instance = Template.instance(),
        sortDirection = _Template$instance.sortDirection,
        sortBy = _Template$instance.sortBy;

    return key === sortBy.get() && sortDirection.get() === 'asc' ? 'sort-up' : 'sort-down';
  },
  onTableSort: function () {
    var _Template$instance2 = Template.instance(),
        sortDirection = _Template$instance2.sortDirection,
        sortBy = _Template$instance2.sortBy;

    return function (type) {
      if (sortBy.get() === type) {
        sortDirection.set(sortDirection.get() === 'asc' ? 'desc' : 'asc');
      } else {
        sortBy.set(type);
        sortDirection.set('asc');
      }
    };
  },
  parentFolders: function () {
    var currentFolder = Template.instance().state.get('webdavCurrentFolder');
    return currentFolder ? currentFolder.split('/').filter(function (s) {
      return s;
    }) : [];
  },
  webdavNodes: function () {
    return Template.instance().state.get('webdavNodes');
  },
  webdavCurrentFolder: function () {
    return Template.instance().state.get('webdavCurrentFolder');
  }
});
Template.webdavFilePicker.events({
  'click .js-list-grid-mode': function () {
    var instance = Template.instance();
    instance.isListMode.set(!instance.isListMode.get());
  },
  'click .js-webdav-sort-direction': function () {
    var _Template$instance3 = Template.instance(),
        sortDirection = _Template$instance3.sortDirection;

    sortDirection.set(sortDirection.get() === 'asc' ? 'desc' : 'asc');
  },
  'change .js-webdav-select-sort': function () {
    var _Template$instance4 = Template.instance(),
        sortBy = _Template$instance4.sortBy;

    var newSortBy = $('.js-webdav-select-sort').val();
    sortBy.set(newSortBy);
  },
  'click .js-webdav-search-icon': function () {
    $('.js-webdav-search-input').focus();
  },
  'submit .js-search-form': function (e) {
    e.preventDefault();
    e.stopPropagation();
  },
  'input .js-webdav-search-input': _.debounce(function (e, t) {
    t.searchText.set(e.currentTarget.value);
  }, 200),
  'blur .js-webdav-search-input': function (e, t) {
    _.delay(function () {
      e.target.value = '';
      t.searchText.set('');
    }, 200);
  },
  'click .js-webdav-grid-back-icon': function () {
    function _callee() {
      var instance, currentFolder, parentFolder;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                instance = Template.instance();
                currentFolder = instance.state.get('webdavCurrentFolder'); // determine parent directory to go back

                parentFolder = '/';

                if (currentFolder && currentFolder !== '/') {
                  if (currentFolder[currentFolder.length - 1] === '/') {
                    currentFolder = currentFolder.slice(0, -1);
                  }

                  parentFolder = currentFolder.substr(0, currentFolder.lastIndexOf('/') + 1);
                }

                instance.state.set('webdavCurrentFolder', parentFolder);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(),
  'click .js-webdav_directory': function () {
    function _callee2() {
      var instance;
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                instance = Template.instance();
                instance.state.set('webdavCurrentFolder', this.filename);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }

        return _callee2$;
      }(), null, this, null, Promise);
    }

    return _callee2;
  }(),
  'click .js-webdav-breadcrumb-folder': function () {
    function _callee3(event) {
      var instance, index, currentFolder, parentFolders, targetFolder, i;
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                instance = Template.instance();
                index = $(event.target).data('index');
                currentFolder = instance.state.get('webdavCurrentFolder');
                parentFolders = currentFolder.split('/').filter(function (s) {
                  return s;
                }); // determine parent directory to go to

                targetFolder = '/';

                for (i = 0; i <= index; i++) {
                  targetFolder += parentFolders[i];
                  targetFolder += '/';
                }

                instance.state.set('webdavCurrentFolder', targetFolder);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, null, Promise);
    }

    return _callee3;
  }(),
  'click .js-webdav_file': function () {
    function _callee4() {
      var roomId, instance, accountId, file, response, blob, text;
      return _regeneratorRuntime.async(function () {
        function _callee4$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                roomId = Session.get('openedRoom');
                instance = Template.instance();
                accountId = instance.data.accountId;
                instance.isLoading.set(true);
                file = this;
                _context6.next = 7;
                return _regeneratorRuntime.awrap(call('getFileFromWebdav', accountId, file).catch(function (error) {
                  console.log(error);
                }));

              case 7:
                response = _context6.sent;
                instance.isLoading.set(false);

                if (!(!response || !response.success)) {
                  _context6.next = 12;
                  break;
                }

                modal.close();
                return _context6.abrupt("return", dispatchToastMessage({
                  type: 'error',
                  message: t('Failed_to_get_webdav_file')
                }));

              case 12:
                blob = new Blob([response.data], {
                  type: response.type
                }); // converting to file object

                blob.lastModified = file.lastmod;
                blob.name = file.basename;
                text = "\n\t\t\t<div class='upload-preview-title'>\n\t\t\t\t<div class=\"rc-input__wrapper\">\n\t\t\t\t\t<input class=\"rc-input__element\" id='file-name' style='display: inherit;' value='" + Handlebars._escape(blob.name) + "' placeholder='" + t('Upload_file_name') + "'>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rc-input__wrapper\">\n\t\t\t\t\t<input class=\"rc-input__element\" id='file-description' style='display: inherit;' value='' placeholder='" + t('Upload_file_description') + "'>\n\t\t\t\t</div>\n\t\t\t</div>";
                return _context6.abrupt("return", modal.open({
                  title: t('Upload_file_question'),
                  text: text,
                  showCancelButton: true,
                  closeOnConfirm: false,
                  closeOnCancel: false,
                  confirmButtonText: t('Send'),
                  cancelButtonText: t('Cancel'),
                  html: true,
                  onRendered: function () {
                    return $('#file-name').focus();
                  }
                }, function (isConfirm) {
                  var record = {
                    name: document.getElementById('file-name').value || blob.name,
                    size: blob.size,
                    type: blob.type,
                    rid: roomId,
                    description: document.getElementById('file-description').value
                  };
                  modal.close();

                  if (!isConfirm) {
                    return;
                  }

                  var upload = fileUploadHandler('Uploads', record, blob);
                  var uploading = Session.get('uploading') || [];
                  uploading.push({
                    id: upload.id,
                    name: upload.getFileName(),
                    percentage: 0
                  });
                  Session.set('uploading', uploading);

                  upload.onProgress = function (progress) {
                    uploading = Session.get('uploading');

                    var item = _.findWhere(uploading, {
                      id: upload.id
                    });

                    if (item != null) {
                      item.percentage = Math.round(progress * 100) || 0;
                      return Session.set('uploading', uploading);
                    }
                  };

                  upload.start(function (error, file, storage) {
                    if (error) {
                      var _uploading = Session.get('uploading');

                      if (!Array.isArray(_uploading)) {
                        _uploading = [];
                      }

                      var item = _.findWhere(_uploading, {
                        id: upload.id
                      });

                      if (_.isObject(item)) {
                        item.error = error.message;
                        item.percentage = 0;
                      } else {
                        _uploading.push({
                          error: error.error,
                          percentage: 0
                        });
                      }

                      return Session.set('uploading', _uploading);
                    }

                    if (file) {
                      Meteor.call('sendFileMessage', roomId, storage, file, function () {
                        setTimeout(function () {
                          var uploading = Session.get('uploading');

                          if (uploading !== null) {
                            var _item = _.findWhere(uploading, {
                              id: upload.id
                            });

                            return Session.set('uploading', _.without(uploading, _item));
                          }
                        }, 2000);
                      });
                    }
                  });
                }));

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }

        return _callee4$;
      }(), null, this, null, Promise);
    }

    return _callee4;
  }()
});
Template.webdavFilePicker.onRendered(function () {
  function _callee5() {
    var _this = this;

    return _regeneratorRuntime.async(function () {
      function _callee5$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              this.autorun(function () {
                showWebdavFileList();
              });
              this.autorun(function () {
                var _Template$instance5 = Template.instance(),
                    sortDirection = _Template$instance5.sortDirection,
                    sortBy = _Template$instance5.sortBy;

                var data = sortTable(_this.state.get('webdavNodes'), sortBy.get(), sortDirection.get());

                _this.state.set('webdavNodes', data);
              });
              this.autorun(function () {
                var loading = _this.isLoading.get();

                if (loading) {
                  return;
                }

                var input = _this.searchText.get();

                var regex = new RegExp("\\b" + input, 'i');

                var data = _this.state.get('unfilteredWebdavNodes').filter(function (_ref) {
                  var basename = _ref.basename;
                  return basename.match(regex);
                });

                _this.state.set('webdavNodes', data);
              });

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }

      return _callee5$;
    }(), null, this, null, Promise);
  }

  return _callee5;
}());
Template.webdavFilePicker.onCreated(function () {
  this.state = new ReactiveDict({
    webdavCurrentFolder: '/',
    webdavNodes: [],
    unfilteredWebdavNodes: []
  });
  this.isLoading = new ReactiveVar(true);
  this.isListMode = new ReactiveVar(true);
  this.sortBy = new ReactiveVar('name');
  this.sortDirection = new ReactiveVar('asc');
  this.searchText = new ReactiveVar('');
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/webdav/client/65911ea75e365350d9efe598b2e72ae50d8ea6d8.map
