function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/webdav/client/webdavFilePicker.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 1);

let _;

module.link("underscore", {
  default(v) {
    _ = v;
  }

}, 2);
let Session;
module.link("meteor/session", {
  Session(v) {
    Session = v;
  }

}, 3);
let Handlebars;
module.link("meteor/ui", {
  Handlebars(v) {
    Handlebars = v;
  }

}, 4);
let ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar(v) {
    ReactiveVar = v;
  }

}, 5);
let ReactiveDict;
module.link("meteor/reactive-dict", {
  ReactiveDict(v) {
    ReactiveDict = v;
  }

}, 6);
let timeAgo;
module.link("../../ui/client/views/app/helpers", {
  timeAgo(v) {
    timeAgo = v;
  }

}, 7);
let modal;
module.link("../../ui-utils/client", {
  modal(v) {
    modal = v;
  }

}, 8);
let t;
module.link("../../utils/client", {
  t(v) {
    t = v;
  }

}, 9);
let fileUploadHandler;
module.link("../../file-upload/client", {
  fileUploadHandler(v) {
    fileUploadHandler = v;
  }

}, 10);
let call;
module.link("../../../client/lib/utils/call", {
  call(v) {
    call = v;
  }

}, 11);
let dispatchToastMessage;
module.link("../../../client/lib/toast", {
  dispatchToastMessage(v) {
    dispatchToastMessage = v;
  }

}, 12);

function sortTable(data, sortBy, sortDirection) {
  if (sortDirection === 'desc') {
    if (sortBy === 'name') {
      data.sort((a, b) => b.basename.localeCompare(a.basename));
    }

    if (sortBy === 'size') {
      data.sort((a, b) => b.size - a.size);
    }

    if (sortBy === 'date') {
      data.sort((a, b) => new Date(b.lastmod) - new Date(a.lastmod));
    }
  } else {
    if (sortBy === 'name') {
      data.sort((a, b) => a.basename.localeCompare(b.basename));
    }

    if (sortBy === 'size') {
      data.sort((a, b) => a.size - b.size);
    }

    if (sortBy === 'date') {
      data.sort((a, b) => new Date(a.lastmod) - new Date(b.lastmod));
    }
  }

  return data;
}

async function showFilePreviews(accountId, nodes) {
  if (!Array.isArray(nodes) || !nodes.length) {
    return;
  }

  const promises = nodes.map((node, index) => {
    if (node.type !== 'file') {
      return;
    }

    return call('getWebdavFilePreview', accountId, node.filename).then(res => {
      const blob = new Blob([res.data], {
        type: 'image/png'
      });
      const imgURL = URL.createObjectURL(blob);
      nodes[index].preview = imgURL;
    }).catch(e => e);
  }).filter(Boolean);
  return Promise.all(promises).then(() => nodes).catch(e => e);
}

async function showWebdavFileList() {
  const instance = Template.instance();
  const {
    accountId
  } = instance.data;
  const directory = instance.state.get('webdavCurrentFolder');
  let unfilteredWebdavNodes;
  instance.isLoading.set(true);
  instance.state.set({
    webdavNodes: []
  });

  try {
    const response = await call('getWebdavFileList', accountId, directory).catch(err => console.log(err));

    if (!response || !response.success) {
      instance.isLoading.set(false);
      modal.close();
      return;
    }

    unfilteredWebdavNodes = response.data;
    instance.state.set({
      unfilteredWebdavNodes
    });
    $('.js-webdav-search-input').val('');
    instance.searchText.set('');
  } finally {
    instance.isLoading.set(false);
    const nodesWithPreviews = await showFilePreviews(accountId, unfilteredWebdavNodes);

    if (Array.isArray(nodesWithPreviews) && nodesWithPreviews.length) {
      instance.state.set({
        unfilteredWebdavNodes: nodesWithPreviews
      });
    }
  }
}

Template.webdavFilePicker.helpers({
  iconType() {
    // add icon for different types
    let icon = 'clip';
    let type = '';
    let extension = this.basename.split('.').pop();

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
      icon,
      type,
      extension
    };
  },

  filePreview() {
    return this.preview;
  },

  isLoading() {
    return Template.instance().isLoading.get();
  },

  listMode() {
    return Template.instance().isListMode.get();
  },

  sortBy(key) {
    return Template.instance().sortBy.get() === key;
  },

  getSortBy() {
    return Template.instance().sortBy.get();
  },

  getName(basename) {
    const maxwidth = Template.instance().isListMode.get() ? 35 : 20;

    if (basename.length < maxwidth) {
      return basename;
    }

    return "".concat(basename.slice(0, maxwidth - 10), "\u2026").concat(basename.slice(-7));
  },

  getSize() {
    if (this.type === 'directory') {
      return '';
    }

    const bytes = this.size;

    if (bytes === 0) {
      return '0 B';
    }

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return "".concat(parseFloat((bytes / Math.pow(k, i)).toFixed(2)), " ").concat(sizes[i]);
  },

  getDate() {
    return timeAgo(new Date(this.lastmod), t);
  },

  sortIcon(key) {
    const {
      sortDirection,
      sortBy
    } = Template.instance();
    return key === sortBy.get() && sortDirection.get() === 'asc' ? 'sort-up' : 'sort-down';
  },

  onTableSort() {
    const {
      sortDirection,
      sortBy
    } = Template.instance();
    return function (type) {
      if (sortBy.get() === type) {
        sortDirection.set(sortDirection.get() === 'asc' ? 'desc' : 'asc');
      } else {
        sortBy.set(type);
        sortDirection.set('asc');
      }
    };
  },

  parentFolders() {
    const currentFolder = Template.instance().state.get('webdavCurrentFolder');
    return currentFolder ? currentFolder.split('/').filter(s => s) : [];
  },

  webdavNodes() {
    return Template.instance().state.get('webdavNodes');
  },

  webdavCurrentFolder() {
    return Template.instance().state.get('webdavCurrentFolder');
  }

});
Template.webdavFilePicker.events({
  'click .js-list-grid-mode'() {
    const instance = Template.instance();
    instance.isListMode.set(!instance.isListMode.get());
  },

  'click .js-webdav-sort-direction'() {
    const {
      sortDirection
    } = Template.instance();
    sortDirection.set(sortDirection.get() === 'asc' ? 'desc' : 'asc');
  },

  'change .js-webdav-select-sort'() {
    const {
      sortBy
    } = Template.instance();
    const newSortBy = $('.js-webdav-select-sort').val();
    sortBy.set(newSortBy);
  },

  'click .js-webdav-search-icon'() {
    $('.js-webdav-search-input').focus();
  },

  'submit .js-search-form'(e) {
    e.preventDefault();
    e.stopPropagation();
  },

  'input .js-webdav-search-input': _.debounce((e, t) => {
    t.searchText.set(e.currentTarget.value);
  }, 200),

  'blur .js-webdav-search-input'(e, t) {
    _.delay(() => {
      e.target.value = '';
      t.searchText.set('');
    }, 200);
  },

  async 'click .js-webdav-grid-back-icon'() {
    const instance = Template.instance();
    let currentFolder = instance.state.get('webdavCurrentFolder'); // determine parent directory to go back

    let parentFolder = '/';

    if (currentFolder && currentFolder !== '/') {
      if (currentFolder[currentFolder.length - 1] === '/') {
        currentFolder = currentFolder.slice(0, -1);
      }

      parentFolder = currentFolder.substr(0, currentFolder.lastIndexOf('/') + 1);
    }

    instance.state.set('webdavCurrentFolder', parentFolder);
  },

  async 'click .js-webdav_directory'() {
    const instance = Template.instance();
    instance.state.set('webdavCurrentFolder', this.filename);
  },

  async 'click .js-webdav-breadcrumb-folder'(event) {
    const instance = Template.instance();
    const index = $(event.target).data('index');
    const currentFolder = instance.state.get('webdavCurrentFolder');
    const parentFolders = currentFolder.split('/').filter(s => s); // determine parent directory to go to

    let targetFolder = '/';

    for (let i = 0; i <= index; i++) {
      targetFolder += parentFolders[i];
      targetFolder += '/';
    }

    instance.state.set('webdavCurrentFolder', targetFolder);
  },

  async 'click .js-webdav_file'() {
    const roomId = Session.get('openedRoom');
    const instance = Template.instance();
    const {
      accountId
    } = instance.data;
    instance.isLoading.set(true);
    const file = this;
    const response = await call('getFileFromWebdav', accountId, file).catch(error => {
      console.log(error);
    });
    instance.isLoading.set(false);

    if (!response || !response.success) {
      modal.close();
      return dispatchToastMessage({
        type: 'error',
        message: t('Failed_to_get_webdav_file')
      });
    }

    const blob = new Blob([response.data], {
      type: response.type
    }); // converting to file object

    blob.lastModified = file.lastmod;
    blob.name = file.basename;
    const text = "\n\t\t\t<div class='upload-preview-title'>\n\t\t\t\t<div class=\"rc-input__wrapper\">\n\t\t\t\t\t<input class=\"rc-input__element\" id='file-name' style='display: inherit;' value='".concat(Handlebars._escape(blob.name), "' placeholder='").concat(t('Upload_file_name'), "'>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rc-input__wrapper\">\n\t\t\t\t\t<input class=\"rc-input__element\" id='file-description' style='display: inherit;' value='' placeholder='").concat(t('Upload_file_description'), "'>\n\t\t\t\t</div>\n\t\t\t</div>");
    return modal.open({
      title: t('Upload_file_question'),
      text,
      showCancelButton: true,
      closeOnConfirm: false,
      closeOnCancel: false,
      confirmButtonText: t('Send'),
      cancelButtonText: t('Cancel'),
      html: true,
      onRendered: () => $('#file-name').focus()
    }, function (isConfirm) {
      const record = {
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

      const upload = fileUploadHandler('Uploads', record, blob);
      let uploading = Session.get('uploading') || [];
      uploading.push({
        id: upload.id,
        name: upload.getFileName(),
        percentage: 0
      });
      Session.set('uploading', uploading);

      upload.onProgress = function (progress) {
        uploading = Session.get('uploading');

        const item = _.findWhere(uploading, {
          id: upload.id
        });

        if (item != null) {
          item.percentage = Math.round(progress * 100) || 0;
          return Session.set('uploading', uploading);
        }
      };

      upload.start(function (error, file, storage) {
        if (error) {
          let uploading = Session.get('uploading');

          if (!Array.isArray(uploading)) {
            uploading = [];
          }

          const item = _.findWhere(uploading, {
            id: upload.id
          });

          if (_.isObject(item)) {
            item.error = error.message;
            item.percentage = 0;
          } else {
            uploading.push({
              error: error.error,
              percentage: 0
            });
          }

          return Session.set('uploading', uploading);
        }

        if (file) {
          Meteor.call('sendFileMessage', roomId, storage, file, () => {
            setTimeout(() => {
              const uploading = Session.get('uploading');

              if (uploading !== null) {
                const item = _.findWhere(uploading, {
                  id: upload.id
                });

                return Session.set('uploading', _.without(uploading, item));
              }
            }, 2000);
          });
        }
      });
    });
  }

});
Template.webdavFilePicker.onRendered(async function () {
  this.autorun(() => {
    showWebdavFileList();
  });
  this.autorun(() => {
    const {
      sortDirection,
      sortBy
    } = Template.instance();
    const data = sortTable(this.state.get('webdavNodes'), sortBy.get(), sortDirection.get());
    this.state.set('webdavNodes', data);
  });
  this.autorun(() => {
    const loading = this.isLoading.get();

    if (loading) {
      return;
    }

    const input = this.searchText.get();
    const regex = new RegExp("\\b".concat(input), 'i');
    const data = this.state.get('unfilteredWebdavNodes').filter(_ref => {
      let {
        basename
      } = _ref;
      return basename.match(regex);
    });
    this.state.set('webdavNodes', data);
  });
});
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
//# sourceMappingURL=/dynamic/app/webdav/client/63c23c45b7742f3d66ea87da422d196061aa9d96.map
