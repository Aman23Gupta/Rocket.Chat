function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/download.ts                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["data"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
module.export({
  download: () => download,
  downloadAs: () => downloadAs,
  downloadJsonAs: () => downloadJsonAs,
  downloadCsvAs: () => downloadCsvAs
});

const download = (href, filename) => {
  const anchorElement = document.createElement('a');
  anchorElement.download = filename;
  anchorElement.href = href;
  anchorElement.target = '_blank';
  document.body.appendChild(anchorElement);
  anchorElement.click();
  document.body.removeChild(anchorElement);
};

const downloadAs = (_ref, filename) => {
  var _window$webkitURL;

  let {
    data
  } = _ref,
      options = _objectWithoutProperties(_ref, _excluded);

  const blob = new Blob(data, options);

  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob);
    return;
  }

  const URL = (_window$webkitURL = window.webkitURL) !== null && _window$webkitURL !== void 0 ? _window$webkitURL : window.URL;
  const blobUrl = URL.createObjectURL(blob);
  download(blobUrl, filename);
  URL.revokeObjectURL(blobUrl);
};

const downloadJsonAs = (jsonObject, basename) => {
  downloadAs({
    data: [decodeURIComponent(encodeURI(JSON.stringify(jsonObject, null, 2)))],
    type: 'application/json;charset=utf-8'
  }, "".concat(basename, ".json"));
};

const downloadCsvAs = (csvData, basename) => {
  const escapeCell = cell => "\"".concat(String(cell).replace(/"/g, '""'), "\"");

  const content = csvData.reduce((content, row) => "".concat(content + row.map(escapeCell).join(';'), "\n"), '');
  downloadAs({
    data: [decodeURIComponent(encodeURI(content))],
    type: 'text/csv;charset=utf-8',
    endings: 'native'
  }, "".concat(basename, ".csv"));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/54cbaff6b1ab386feba34ac074c731f458df9822.map
