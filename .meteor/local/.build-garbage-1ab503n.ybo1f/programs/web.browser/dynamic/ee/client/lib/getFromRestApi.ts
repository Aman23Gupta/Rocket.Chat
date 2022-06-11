function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/lib/getFromRestApi.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getFromRestApi: () => getFromRestApi
});
let APIClient;
module.link("../../../app/utils/client/lib/RestApiClient", {
  APIClient(v) {
    APIClient = v;
  }

}, 0);

const getFromRestApi = endpoint => async params => {
  const response = await APIClient.get(endpoint.replace(/^\/+/, ''), params);

  if (typeof response === 'string') {
    throw new Error('invalid response data type');
  }

  return response;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/lib/f18770b8f4d7fdeb96b2ef0da0875cba1a84db9c.map
