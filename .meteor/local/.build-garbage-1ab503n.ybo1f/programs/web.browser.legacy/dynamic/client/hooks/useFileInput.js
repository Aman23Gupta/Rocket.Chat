function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useFileInput.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useFileInput: function () {
    return useFileInput;
  }
});
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var useRef, useEffect;
module.link("react", {
  useRef: function (v) {
    useRef = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);

var useFileInput = function (onSetFile) {
  var fileType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'image/*';
  var fileField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'image';
  var ref = useRef();
  useEffect(function () {
    var fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('style', 'display: none');
    document.body.appendChild(fileInput);
    ref.current = fileInput;
    return function () {
      ref.current = null;
      fileInput.remove();
    };
  }, []);
  useEffect(function () {
    var fileInput = ref.current;

    if (!fileInput) {
      return;
    }

    fileInput.setAttribute('accept', fileType);
  }, [fileType]);
  useEffect(function () {
    var fileInput = ref.current;

    if (!fileInput) {
      return;
    }

    var handleFiles = function () {
      var formData = new FormData();
      formData.append(fileField, fileInput.files[0]);
      onSetFile(fileInput.files[0], formData);
    };

    fileInput.addEventListener('change', handleFiles, false);
    return function () {
      fileInput.removeEventListener('change', handleFiles, false);
    };
  }, [fileField, fileType, onSetFile]);
  var onClick = useMutableCallback(function () {
    return ref.current.click();
  });
  var reset = useMutableCallback(function () {
    ref.current.value = '';
  });
  return [onClick, reset];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/a3825c16dc36a738ad8e776acd06cbcb82981674.map
