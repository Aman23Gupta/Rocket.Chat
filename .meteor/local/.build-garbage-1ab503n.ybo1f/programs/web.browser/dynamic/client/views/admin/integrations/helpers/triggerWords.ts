function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/helpers/triggerWords.ts                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  triggerWordsToArray: () => triggerWordsToArray,
  triggerWordsToString: () => triggerWordsToString
});
const separator = ',';

function triggerWordsToArray(s) {
  if (typeof s !== 'string' || s.length === 0) {
    return [];
  }

  return s.split(separator);
}

function triggerWordsToString(triggerWords) {
  var _triggerWords$join;

  return (_triggerWords$join = triggerWords === null || triggerWords === void 0 ? void 0 : triggerWords.join(separator)) !== null && _triggerWords$join !== void 0 ? _triggerWords$join : '';
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/helpers/0ee0ad97ecc0d930ef9a94af5470aa61850a8c43.map
