function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/AssetSettingInput.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, Field, Icon;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Field(v) {
    Field = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let Random;
module.link("meteor/random", {
  Random(v) {
    Random = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 3);
let useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 4);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
module.link("./AssetSettingInput.css");

function AssetSettingInput(_ref) {
  let {
    _id,
    label,
    value = {},
    asset,
    fileConstraints = {}
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const setAsset = useMethod('setAsset');
  const unsetAsset = useMethod('unsetAsset');

  const handleUpload = event => {
    event = event.originalEvent || event;
    let {
      files
    } = event.target;

    if (!files || files.length === 0) {
      if (event.dataTransfer && event.dataTransfer.files) {
        files = event.dataTransfer.files;
      } else {
        files = [];
      }
    }

    Object.values(files).forEach(blob => {
      dispatchToastMessage({
        type: 'info',
        message: t('Uploading_file')
      });
      const reader = new FileReader();
      reader.readAsBinaryString(blob);

      reader.onloadend = async () => {
        try {
          await setAsset(reader.result, blob.type, asset);
          dispatchToastMessage({
            type: 'success',
            message: t('File_uploaded')
          });
        } catch (error) {
          dispatchToastMessage({
            type: 'error',
            message: error
          });
        }
      };
    });
  };

  const handleDeleteButtonClick = async () => {
    try {
      await unsetAsset(asset);
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: _id,
    title: _id
  }, label), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement("div", {
    className: "settings-file-preview"
  }, value.url ? /*#__PURE__*/React.createElement("div", {
    className: "preview",
    style: {
      backgroundImage: "url(".concat(value.url, "?_dc=").concat(Random.id(), ")")
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "preview no-file background-transparent-light secondary-font-color"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload"
  })), /*#__PURE__*/React.createElement("div", {
    className: "action"
  }, value.url ? /*#__PURE__*/React.createElement(Button, {
    onClick: handleDeleteButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash"
  }), t('Delete')) : /*#__PURE__*/React.createElement("div", {
    className: "rc-button rc-button--primary"
  }, t('Select_file'), /*#__PURE__*/React.createElement("input", {
    className: "AssetSettingInput__input",
    type: "file",
    accept: fileConstraints.extensions && fileConstraints.extensions.length && ".".concat(fileConstraints.extensions.join(', .')),
    onChange: handleUpload
  }))))));
}

module.exportDefault(AssetSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/2de36f2c2ffba7089e46fda56f2b4734201a05fe.map
