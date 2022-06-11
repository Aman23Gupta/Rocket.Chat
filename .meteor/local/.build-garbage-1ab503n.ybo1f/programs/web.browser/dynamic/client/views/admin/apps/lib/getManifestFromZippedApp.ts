function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/lib/getManifestFromZippedApp.ts                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getManifestFromZippedApp: () => getManifestFromZippedApp
});
let unzipSync, strFromU8;
module.link("fflate", {
  unzipSync(v) {
    unzipSync = v;
  },

  strFromU8(v) {
    strFromU8 = v;
  }

}, 0);

async function fileToUint8Array(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = e => resolve(new Uint8Array(e.target.result));

    fileReader.onerror = e => reject(e);

    fileReader.readAsArrayBuffer(file);
  });
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
    throw new Error("Failed to parse app.json: ".concat(e.message));
  }
}

async function unzipZippedApp(zippedApp) {
  try {
    if (zippedApp instanceof File) {
      zippedApp = await fileToUint8Array(zippedApp);
    }

    return unzipAppBuffer(zippedApp);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function getManifestFromZippedApp(zippedApp) {
  const unzippedBuffer = await unzipZippedApp(zippedApp);
  return getAppManifest(unzippedBuffer);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/lib/77dafba869b645a431ae93bce0f2f82b1e6daa61.map
