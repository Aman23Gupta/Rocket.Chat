function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/RoomFilesWithData.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback, useLocalStorage;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useLocalStorage(v) {
    useLocalStorage = v;
  }

}, 0);
let React, useState, useCallback, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let GenericModal;
module.link("../../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 2);
let useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 3);
let useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 5);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let useUserId;
module.link("../../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 7);
let useRecordList;
module.link("../../../../hooks/lists/useRecordList", {
  useRecordList(v) {
    useRecordList = v;
  }

}, 8);
let AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 9);
let useTabBarClose;
module.link("../../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 10);
let RoomFiles;
module.link("./RoomFiles", {
  default(v) {
    RoomFiles = v;
  }

}, 11);
let useFilesList;
module.link("./hooks/useFilesList", {
  useFilesList(v) {
    useFilesList = v;
  }

}, 12);
let useMessageDeletionIsAllowed;
module.link("./hooks/useMessageDeletionIsAllowed", {
  useMessageDeletionIsAllowed(v) {
    useMessageDeletionIsAllowed = v;
  }

}, 13);

const RoomFilesWithData = _ref => {
  let {
    rid
  } = _ref;
  const uid = useUserId();
  const onClickClose = useTabBarClose();
  const t = useTranslation();
  const setModal = useSetModal();
  const closeModal = useMutableCallback(() => setModal());
  const dispatchToastMessage = useToastMessageDispatch();
  const deleteFile = useMethod('deleteFileMessage');
  const [type, setType] = useLocalStorage('file-list-type', 'all');
  const [text, setText] = useState('');
  const handleTextChange = useCallback(event => {
    setText(event.currentTarget.value);
  }, []);
  const {
    filesList,
    loadMoreItems,
    reload
  } = useFilesList(useMemo(() => ({
    rid,
    type,
    text
  }), [rid, type, text]));
  const {
    phase,
    items: filesItems,
    itemCount: totalItemCount
  } = useRecordList(filesList);
  const handleDelete = useMutableCallback(_id => {
    const onConfirm = async () => {
      try {
        await deleteFile(_id);
        dispatchToastMessage({
          type: 'success',
          message: t('Deleted')
        });
        reload();
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      closeModal();
    };

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onConfirm,
      onCancel: closeModal,
      confirmText: t('Delete')
    }, t('Delete_File_Warning')));
  }, []);
  const isDeletionAllowed = useMessageDeletionIsAllowed(rid, uid);
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/31d81f39421f8465090813aca9fa0e2b35ebb066.map
