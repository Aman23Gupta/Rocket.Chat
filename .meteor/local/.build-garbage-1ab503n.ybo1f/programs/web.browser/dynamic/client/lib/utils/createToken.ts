function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/utils/createToken.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  createToken: () => createToken
});

const createToken = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/utils/d39fe7bf9c2a0c91778efc4087777a9c8c7e44ba.map
