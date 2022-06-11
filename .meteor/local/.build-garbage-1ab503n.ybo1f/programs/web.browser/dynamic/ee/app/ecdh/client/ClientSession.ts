function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/app/ecdh/client/ClientSession.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ClientSession: () => ClientSession
});
let Session;
module.link("../Session", {
  Session(v) {
    Session = v;
  }

}, 0);

class ClientSession extends Session {
  async init() {
    const sodium = await this.sodium();
    const clientKeypair = await sodium.crypto_box_keypair();
    this.secretKey = await sodium.crypto_box_secretkey(clientKeypair);
    this.publicKey = await sodium.crypto_box_publickey(clientKeypair);
    return this.publicKey.toString(this.stringFormatKey);
  }

  async setServerKey(serverPublic) {
    const sodium = await this.sodium();
    const [decryptKey, encryptKey] = await sodium.crypto_kx_client_session_keys(this.publicKey, this.secretKey, this.publicKeyFromString(serverPublic));
    this.decryptKey = decryptKey;
    this.encryptKey = encryptKey;
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/app/ecdh/client/f43c624d132a8cba27aebb3670c92bd13e92acb7.map
