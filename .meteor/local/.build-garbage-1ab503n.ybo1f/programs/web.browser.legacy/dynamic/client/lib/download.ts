function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/download.ts                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["data"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
module.export({
  download: function () {
    return download;
  },
  downloadAs: function () {
    return downloadAs;
  },
  downloadJsonAs: function () {
    return downloadJsonAs;
  },
  downloadCsvAs: function () {
    return downloadCsvAs;
  }
});

var download = function (href, filename) {
  var anchorElement = document.createElement('a');
  anchorElement.download = filename;
  anchorElement.href = href;
  anchorElement.target = '_blank';
  document.body.appendChild(anchorElement);
  anchorElement.click();
  document.body.removeChild(anchorElement);
};

var downloadAs = function (_ref, filename) {
  var _window$webkitURL;

  var data = _ref.data,
      options = _objectWithoutProperties(_ref, _excluded);

  var blob = new Blob(data, options);

  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob);
    return;
  }

  var URL = (_window$webkitURL = window.webkitURL) !== null && _window$webkitURL !== void 0 ? _window$webkitURL : window.URL;
  var blobUrl = URL.createObjectURL(blob);
  download(blobUrl, filename);
  URL.revokeObjectURL(blobUrl);
};

var downloadJsonAs = function (jsonObject, basename) {
  downloadAs({
    data: [decodeURIComponent(encodeURI(JSON.stringify(jsonObject, null, 2)))],
    type: 'application/json;charset=utf-8'
  }, basename + ".json");
};

var downloadCsvAs = function (csvData, basename) {
  var escapeCell = function (cell) {
    return "\"" + String(cell).replace(/"/g, '""') + "\"";
  };

  var content = csvData.reduce(function (content, row) {
    return content + row.map(escapeCell).join(';') + "\n";
  }, '');
  downloadAs({
    data: [decodeURIComponent(encodeURI(content))],
    type: 'text/csv;charset=utf-8',
    endings: 'native'
  }, basename + ".csv");
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/04e048e99005596bd0153e8926919e47a8c918c0.map
