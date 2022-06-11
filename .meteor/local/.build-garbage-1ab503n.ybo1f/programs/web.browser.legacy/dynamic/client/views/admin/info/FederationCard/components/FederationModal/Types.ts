function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/FederationCard/components/FederationModal/Types.ts                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DNSRecordType: function () {
    return DNSRecordType;
  },
  DNSRecordName: function () {
    return DNSRecordName;
  },
  TXTRecordValue: function () {
    return TXTRecordValue;
  }
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
//# sourceMappingURL=/dynamic/client/views/admin/info/FederationCard/components/FederationModal/88b1283f3c84cd9b68bb97d817568b9b70f74809.map
