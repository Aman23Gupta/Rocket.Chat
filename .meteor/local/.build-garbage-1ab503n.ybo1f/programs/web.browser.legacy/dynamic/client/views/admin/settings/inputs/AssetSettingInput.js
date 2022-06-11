function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/AssetSettingInput.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var Button, Field, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Field: function (v) {
    Field = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var Random;
module.link("meteor/random", {
  Random: function (v) {
    Random = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 3);
var useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 4);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
module.link("./AssetSettingInput.css");

function AssetSettingInput(_ref) {
  var _id = _ref._id,
      label = _ref.label,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? {} : _ref$value,
      asset = _ref.asset,
      _ref$fileConstraints = _ref.fileConstraints,
      fileConstraints = _ref$fileConstraints === void 0 ? {} : _ref$fileConstraints;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var setAsset = useMethod('setAsset');
  var unsetAsset = useMethod('unsetAsset');

  var handleUpload = function (event) {
    event = event.originalEvent || event;
    var files = event.target.files;

    if (!files || files.length === 0) {
      if (event.dataTransfer && event.dataTransfer.files) {
        files = event.dataTransfer.files;
      } else {
        files = [];
      }
    }

    Object.values(files).forEach(function (blob) {
      dispatchToastMessage({
        type: 'info',
        message: t('Uploading_file')
      });
      var reader = new FileReader();
      reader.readAsBinaryString(blob);

      reader.onloadend = function () {
        function _callee() {
          return _regeneratorRuntime.async(function () {
            function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return _regeneratorRuntime.awrap(setAsset(reader.result, blob.type, asset));

                  case 3:
                    dispatchToastMessage({
                      type: 'success',
                      message: t('File_uploaded')
                    });
                    _context.next = 9;
                    break;

                  case 6:
                    _context.prev = 6;
                    _context.t0 = _context["catch"](0);
                    dispatchToastMessage({
                      type: 'error',
                      message: _context.t0
                    });

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }

            return _callee$;
          }(), null, null, [[0, 6]], Promise);
        }

        return _callee;
      }();
    });
  };

  var handleDeleteButtonClick = function () {
    function _callee2() {
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _regeneratorRuntime.awrap(unsetAsset(asset));

              case 3:
                _context2.next = 8;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context2.t0
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[0, 5]], Promise);
    }

    return _callee2;
  }();

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: _id,
    title: _id
  }, label), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement("div", {
    className: "settings-file-preview"
  }, value.url ? /*#__PURE__*/React.createElement("div", {
    className: "preview",
    style: {
      backgroundImage: "url(" + value.url + "?_dc=" + Random.id() + ")"
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
    accept: fileConstraints.extensions && fileConstraints.extensions.length && "." + fileConstraints.extensions.join(', .'),
    onChange: handleUpload
  }))))));
}

module.exportDefault(AssetSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/f380cdbf2ec81f9c2237fb6cb81f3383965c46f3.map
