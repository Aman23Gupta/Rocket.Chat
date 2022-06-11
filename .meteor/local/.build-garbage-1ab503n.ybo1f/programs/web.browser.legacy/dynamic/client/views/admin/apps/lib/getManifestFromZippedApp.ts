function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/lib/getManifestFromZippedApp.ts                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
module.export({
  getManifestFromZippedApp: function () {
    return getManifestFromZippedApp;
  }
});
var unzipSync, strFromU8;
module.link("fflate", {
  unzipSync: function (v) {
    unzipSync = v;
  },
  strFromU8: function (v) {
    strFromU8 = v;
  }
}, 0);

function fileToUint8Array(file) {
  return _regeneratorRuntime.async(function () {
    function fileToUint8Array$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var fileReader = new FileReader();

              fileReader.onload = function (e) {
                return resolve(new Uint8Array(e.target.result));
              };

              fileReader.onerror = function (e) {
                return reject(e);
              };

              fileReader.readAsArrayBuffer(file);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }

    return fileToUint8Array$;
  }(), null, null, null, Promise);
}

function unzipAppBuffer(zippedAppBuffer) {
  return unzipSync(zippedAppBuffer);
}

function getAppManifest(unzippedAppBuffer) {
  if (!unzippedAppBuffer['app.json']) {
    throw new Error('No app.json file found in the zip');
  }

  try {
    return JSON.parse(strFromU8(unzippedAppBuffer['app.json']));
  } catch (e) {
    throw new Error("Failed to parse app.json: " + e.message);
  }
}

function unzipZippedApp(zippedApp) {
  return _regeneratorRuntime.async(function () {
    function unzipZippedApp$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (!(zippedApp instanceof File)) {
              _context2.next = 5;
              break;
            }

            _context2.next = 4;
            return _regeneratorRuntime.awrap(fileToUint8Array(zippedApp));

          case 4:
            zippedApp = _context2.sent;

          case 5:
            return _context2.abrupt("return", unzipAppBuffer(zippedApp));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            throw _context2.t0;

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }

    return unzipZippedApp$;
  }(), null, null, [[0, 8]], Promise);
}

function getManifestFromZippedApp(zippedApp) {
  var unzippedBuffer;
  return _regeneratorRuntime.async(function () {
    function getManifestFromZippedApp$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _regeneratorRuntime.awrap(unzipZippedApp(zippedApp));

          case 2:
            unzippedBuffer = _context3.sent;
            return _context3.abrupt("return", getAppManifest(unzippedBuffer));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }

    return getManifestFromZippedApp$;
  }(), null, null, null, Promise);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/lib/88089734e27e236a224aeb36e471ac31ed1f30b4.map
