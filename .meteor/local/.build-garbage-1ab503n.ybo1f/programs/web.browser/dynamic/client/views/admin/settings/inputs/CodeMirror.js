function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/CodeMirror.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["lineNumbers", "lineWrapping", "mode", "gutters", "foldGutter", "matchBrackets", "autoCloseBrackets", "matchTags", "showTrailingSpace", "highlightSelectionMatches", "readOnly", "value", "defaultValue", "onChange"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, useEffect, useRef, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useRef(v) {
    useRef = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
const defaultGutters = ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'];

function CodeMirror(_ref) {
  let {
    lineNumbers = true,
    lineWrapping = true,
    mode = 'javascript',
    gutters = defaultGutters,
    foldGutter = true,
    matchBrackets = true,
    autoCloseBrackets = true,
    matchTags = true,
    showTrailingSpace = true,
    highlightSelectionMatches = true,
    readOnly,
    value: valueProp,
    defaultValue,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [value, setValue] = useState(valueProp || defaultValue);
  const textAreaRef = useRef();
  const editorRef = useRef();
  const handleChange = useMutableCallback(onChange);
  useEffect(() => {
    if (editorRef.current) {
      return;
    }

    const setupCodeMirror = async () => {
      const CodeMirror = await module.dynamicImport('codemirror/lib/codemirror.js');
      await module.dynamicImport('../../../../../app/ui/client/lib/codeMirror/codeMirror');
      await module.dynamicImport('codemirror/lib/codemirror.css');

      if (!textAreaRef.current) {
        return;
      }

      editorRef.current = CodeMirror.fromTextArea(textAreaRef.current, {
        lineNumbers,
        lineWrapping,
        mode,
        gutters,
        foldGutter,
        matchBrackets,
        autoCloseBrackets,
        matchTags,
        showTrailingSpace,
        highlightSelectionMatches,
        readOnly
      });
      editorRef.current.on('change', doc => {
        const value = doc.getValue();
        setValue(value);
        handleChange(value);
      });
    };

    setupCodeMirror();
    return () => {
      if (!editorRef.current) {
        return;
      }

      editorRef.current.toTextArea();
    };
  }, [autoCloseBrackets, foldGutter, gutters, highlightSelectionMatches, lineNumbers, lineWrapping, matchBrackets, matchTags, mode, handleChange, readOnly, textAreaRef, showTrailingSpace]);
  useEffect(() => {
    setValue(valueProp);
  }, [valueProp]);
  useEffect(() => {
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
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/ef488f6bc4926b06cadb45d2984c6e25943cac06.map
