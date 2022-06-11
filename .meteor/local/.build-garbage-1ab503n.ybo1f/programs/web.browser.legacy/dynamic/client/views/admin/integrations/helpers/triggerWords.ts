function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/helpers/triggerWords.ts                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  triggerWordsToArray: function () {
    return triggerWordsToArray;
  },
  triggerWordsToString: function () {
    return triggerWordsToString;
  }
});
var separator = ',';

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
//# sourceMappingURL=/dynamic/client/views/admin/integrations/helpers/a470945c946baa1013710b4926778bd4117cf1c2.map
