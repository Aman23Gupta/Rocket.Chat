function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customSounds/lib.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  validate: () => validate,
  createSoundData: () => createSoundData
});

function validate(soundData, soundFile) {
  const errors = [];

  if (!soundData.name) {
    errors.push('Name');
  }

  if (!soundData._id && !soundFile) {
    errors.push('Sound File');
  }

  if (soundFile) {
    if (!soundData.previousSound || soundData.previousSound !== soundFile) {
      if (!/audio\/mp3/.test(soundFile.type) && !/audio\/mpeg/.test(soundFile.type) && !/audio\/x-mpeg/.test(soundFile.type)) {
        errors.push('FileType');
      }
    }
  }

  return errors;
}

function createSoundData(soundFile) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  let previousData = arguments.length > 2 ? arguments[2] : undefined;
  const soundData = {
    extension: soundFile.name.split('.').pop()
  };

  if (previousData) {
    soundData._id = previousData._id;
    soundData.previousName = previousData.previousName;
    soundData.previousSound = previousData.previousSound;
    soundData.previousExtension = previousData.previousSound.extension;
    soundData.name = name;
    soundData.newFile = false;
  } else {
    soundData.name = name.trim();
    soundData.newFile = true;
  }

  return soundData;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customSounds/a0eef748ccdfb8478b439d11f88414cb687b65a1.map
