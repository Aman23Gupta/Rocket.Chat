function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/FederationCard/components/FederationModal/Types.ts                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DNSRecordType: () => DNSRecordType,
  DNSRecordName: () => DNSRecordName,
  TXTRecordValue: () => TXTRecordValue
});
var DNSRecordType;

(function (DNSRecordType) {
  DNSRecordType["SRV"] = "srv";
  DNSRecordType["TXT"] = "txt";
})(DNSRecordType || module.runSetters(DNSRecordType = {}, ["DNSRecordType"]));

var DNSRecordName;

(function (DNSRecordName) {
  DNSRecordName["HOST"] = "host";
  DNSRecordName["NAME"] = "name";
  DNSRecordName["PORT"] = "port";
  DNSRecordName["PRIORITY"] = "priority";
  DNSRecordName["PROTOCOL"] = "protocol";
  DNSRecordName["SERVICE"] = "service";
  DNSRecordName["TARGET"] = "target";
  DNSRecordName["TTL"] = "ttl";
  DNSRecordName["WEIGHT"] = "weight";
})(DNSRecordName || module.runSetters(DNSRecordName = {}, ["DNSRecordName"]));

var TXTRecordValue;

(function (TXTRecordValue) {
  TXTRecordValue["PUBLIC_KEY"] = "host";
  TXTRecordValue["PROTOCOL"] = "protocol";
})(TXTRecordValue || module.runSetters(TXTRecordValue = {}, ["TXTRecordValue"]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/FederationCard/components/FederationModal/6d6b94784b0457ffc6efe07defa95e2d773ea820.map
