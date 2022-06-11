function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/CodeMirror.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["lineNumbers", "lineWrapping", "mode", "gutters", "foldGutter", "matchBrackets", "autoCloseBrackets", "matchTags", "showTrailingSpace", "highlightSelectionMatches", "readOnly", "value", "defaultValue", "onChange"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, useEffect, useRef, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var defaultGutters = ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'];

function CodeMirror(_ref) {
  var _ref$lineNumbers = _ref.lineNumbers,
      lineNumbers = _ref$lineNumbers === void 0 ? true : _ref$lineNumbers,
      _ref$lineWrapping = _ref.lineWrapping,
      lineWrapping = _ref$lineWrapping === void 0 ? true : _ref$lineWrapping,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'javascript' : _ref$mode,
      _ref$gutters = _ref.gutters,
      gutters = _ref$gutters === void 0 ? defaultGutters : _ref$gutters,
      _ref$foldGutter = _ref.foldGutter,
      foldGutter = _ref$foldGutter === void 0 ? true : _ref$foldGutter,
      _ref$matchBrackets = _ref.matchBrackets,
      matchBrackets = _ref$matchBrackets === void 0 ? true : _ref$matchBrackets,
      _ref$autoCloseBracket = _ref.autoCloseBrackets,
      autoCloseBrackets = _ref$autoCloseBracket === void 0 ? true : _ref$autoCloseBracket,
      _ref$matchTags = _ref.matchTags,
      matchTags = _ref$matchTags === void 0 ? true : _ref$matchTags,
      _ref$showTrailingSpac = _ref.showTrailingSpace,
      showTrailingSpace = _ref$showTrailingSpac === void 0 ? true : _ref$showTrailingSpac,
      _ref$highlightSelecti = _ref.highlightSelectionMatches,
      highlightSelectionMatches = _ref$highlightSelecti === void 0 ? true : _ref$highlightSelecti,
      readOnly = _ref.readOnly,
      valueProp = _ref.value,
      defaultValue = _ref.defaultValue,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(valueProp || defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var textAreaRef = useRef();
  var editorRef = useRef();
  var handleChange = useMutableCallback(onChange);
  useEffect(function () {
    if (editorRef.current) {
      return;
    }

    var setupCodeMirror = function () {
      function _callee() {
        var CodeMirror;
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _regeneratorRuntime.awrap(module.dynamicImport('codemirror/lib/codemirror.js'));

                case 2:
                  CodeMirror = _context.sent;
                  _context.next = 5;
                  return _regeneratorRuntime.awrap(module.dynamicImport('../../../../../app/ui/client/lib/codeMirror/codeMirror'));

                case 5:
                  _context.next = 7;
                  return _regeneratorRuntime.awrap(module.dynamicImport('codemirror/lib/codemirror.css'));

                case 7:
                  if (textAreaRef.current) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt("return");

                case 9:
                  editorRef.current = CodeMirror.fromTextArea(textAreaRef.current, {
                    lineNumbers: lineNumbers,
                    lineWrapping: lineWrapping,
                    mode: mode,
                    gutters: gutters,
                    foldGutter: foldGutter,
                    matchBrackets: matchBrackets,
                    autoCloseBrackets: autoCloseBrackets,
                    matchTags: matchTags,
                    showTrailingSpace: showTrailingSpace,
                    highlightSelectionMatches: highlightSelectionMatches,
                    readOnly: readOnly
                  });
                  editorRef.current.on('change', function (doc) {
                    var value = doc.getValue();
                    setValue(value);
                    handleChange(value);
                  });

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, null, Promise);
      }

      return _callee;
    }();

    setupCodeMirror();
    return function () {
      if (!editorRef.current) {
        return;
      }

      editorRef.current.toTextArea();
    };
  }, [autoCloseBrackets, foldGutter, gutters, highlightSelectionMatches, lineNumbers, lineWrapping, matchBrackets, matchTags, mode, handleChange, readOnly, textAreaRef, showTrailingSpace]);
  useEffect(function () {
    setValue(valueProp);
  }, [valueProp]);
  useEffect(function () {
    if (!editorRef.current) {
      return;
    }

    if (value !== editorRef.current.getValue()) {
      editorRef.current.setValue(value);
    }
  }, [textAreaRef, value]);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    readOnly: true,
    ref: textAreaRef,
    style: {
      display: 'none'
    },
    value: value
  }, props));
}

module.exportDefault(CodeMirror);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/eb43842dd3d76a2078b2019d566464ac84e3a5fa.map
