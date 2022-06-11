function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/RoomFilesWithData.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var useMutableCallback, useLocalStorage;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useLocalStorage: function (v) {
    useLocalStorage = v;
  }
}, 0);
var React, useState, useCallback, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var GenericModal;
module.link("../../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 2);
var useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 3);
var useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 5);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var useUserId;
module.link("../../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 7);
var useRecordList;
module.link("../../../../hooks/lists/useRecordList", {
  useRecordList: function (v) {
    useRecordList = v;
  }
}, 8);
var AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 9);
var useTabBarClose;
module.link("../../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 10);
var RoomFiles;
module.link("./RoomFiles", {
  "default": function (v) {
    RoomFiles = v;
  }
}, 11);
var useFilesList;
module.link("./hooks/useFilesList", {
  useFilesList: function (v) {
    useFilesList = v;
  }
}, 12);
var useMessageDeletionIsAllowed;
module.link("./hooks/useMessageDeletionIsAllowed", {
  useMessageDeletionIsAllowed: function (v) {
    useMessageDeletionIsAllowed = v;
  }
}, 13);

var RoomFilesWithData = function (_ref) {
  var rid = _ref.rid;
  var uid = useUserId();
  var onClickClose = useTabBarClose();
  var t = useTranslation();
  var setModal = useSetModal();
  var closeModal = useMutableCallback(function () {
    return setModal();
  });
  var dispatchToastMessage = useToastMessageDispatch();
  var deleteFile = useMethod('deleteFileMessage');

  var _useLocalStorage = useLocalStorage('file-list-type', 'all'),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      type = _useLocalStorage2[0],
      setType = _useLocalStorage2[1];

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var handleTextChange = useCallback(function (event) {
    setText(event.currentTarget.value);
  }, []);

  var _useFilesList = useFilesList(useMemo(function () {
    return {
      rid: rid,
      type: type,
      text: text
    };
  }, [rid, type, text])),
      filesList = _useFilesList.filesList,
      loadMoreItems = _useFilesList.loadMoreItems,
      reload = _useFilesList.reload;

  var _useRecordList = useRecordList(filesList),
      phase = _useRecordList.phase,
      filesItems = _useRecordList.items,
      totalItemCount = _useRecordList.itemCount;

  var handleDelete = useMutableCallback(function (_id) {
    var onConfirm = function () {
      function _callee() {
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _regeneratorRuntime.awrap(deleteFile(_id));

                case 3:
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Deleted')
                  });
                  reload();
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context.t0
                  });

                case 10:
                  closeModal();

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[0, 7]], Promise);
      }

      return _callee;
    }();

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onConfirm,
      onCancel: closeModal,
      confirmText: t('Delete')
    }, t('Delete_File_Warning')));
  }, []);
  var isDeletionAllowed = useMessageDeletionIsAllowed(rid, uid);
  return /*#__PURE__*/React.createElement(RoomFiles, {
    rid: rid,
    loading: phase === AsyncStatePhase.LOADING,
    type: type,
    text: text,
    loadMoreItems: loadMoreItems,
    setType: setType,
    setText: handleTextChange,
    filesItems: filesItems,
    total: totalItemCount,
    onClickClose: onClickClose,
    onClickDelete: handleDelete,
    isDeletionAllowed: isDeletionAllowed
  });
};

module.exportDefault(RoomFilesWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/58e16d62ee8e695e4f4a545d751d033ac785995c.map
