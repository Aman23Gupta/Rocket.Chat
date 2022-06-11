function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/app/ecdh/Session.ts                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Session: () => Session
});
let SodiumPlus, X25519PublicKey;
module.link("sodium-plus", {
  SodiumPlus(v) {
    SodiumPlus = v;
  },

  X25519PublicKey(v) {
    X25519PublicKey = v;
  }

}, 0);
let sodium;

class Session {
  constructor() {
    this.stringFormatKey = 'base64';
    this.stringFormatEncryptedData = 'base64';
    this.stringFormatRawData = 'base64';
    this.decryptKey = void 0;
    this.encryptKey = void 0;
    this.secretKey = void 0;
    this.publicKey = void 0;
  }

  async sodium() {
    return sodium || SodiumPlus.auto();
  }

  get publicKeyString() {
    return this.publicKey.toString(this.stringFormatKey);
  }

  publicKeyFromString(text) {
    return new X25519PublicKey(Buffer.from(text, this.stringFormatKey));
  }

  async encryptToBuffer(plaintext) {
    const sodium = await this.sodium();
    const nonce = await sodium.randombytes_buf(24);
    const ciphertext = await sodium.crypto_secretbox(Buffer.from(plaintext).toString(this.stringFormatRawData), nonce, this.encryptKey);
    return Buffer.concat([nonce, ciphertext]);
  }

  async encrypt(plaintext) {
    const buffer = await this.encryptToBuffer(plaintext);
    return buffer.toString(this.stringFormatEncryptedData);
  }

  async decryptToBuffer(data) {
    const sodium = await this.sodium();
    const buffer = Buffer.from(Buffer.isBuffer(data) ? data.toString() : data, this.stringFormatEncryptedData);
    const decrypted = await sodium.crypto_secretbox_open(buffer.slice(24), buffer.slice(0, 24), this.decryptKey);
    return Buffer.from(decrypted.toString(), this.stringFormatRawData);
  }

  async decrypt(data) {
    const buffer = await this.decryptToBuffer(data);
    return buffer.toString();
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/app/ecdh/cc5c8be204fbd38d807457a21579a8f010fd8af9.map
