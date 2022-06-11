function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useFileInput.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useFileInput: () => useFileInput
});
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let useRef, useEffect;
module.link("react", {
  useRef(v) {
    useRef = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);

const useFileInput = function (onSetFile) {
  let fileType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'image/*';
  let fileField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'image';
  const ref = useRef();
  useEffect(() => {
    const fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('style', 'display: none');
    document.body.appendChild(fileInput);
    ref.current = fileInput;
    return () => {
      ref.current = null;
      fileInput.remove();
    };
  }, []);
  useEffect(() => {
    const fileInput = ref.current;

    if (!fileInput) {
      return;
    }

    fileInput.setAttribute('accept', fileType);
  }, [fileType]);
  useEffect(() => {
    const fileInput = ref.current;

    if (!fileInput) {
      return;
    }

    const handleFiles = () => {
      const formData = new FormData();
      formData.append(fileField, fileInput.files[0]);
      onSetFile(fileInput.files[0], formData);
    };

    fileInput.addEventListener('change', handleFiles, false);
    return () => {
      fileInput.removeEventListener('change', handleFiles, false);
    };
  }, [fileField, fileType, onSetFile]);
  const onClick = useMutableCallback(() => ref.current.click());
  const reset = useMutableCallback(() => {
    ref.current.value = '';
  });
  return [onClick, reset];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/a8d3adfac67993617c964a9ee2890e2ac8db8e43.map
