function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/monitors/MonitorsPageContainer.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let NotAuthorizedPage;
module.link("../../../../client/components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 1);
let PageSkeleton;
module.link("../../../../client/components/PageSkeleton", {
  default(v) {
    PageSkeleton = v;
  }

}, 2);
let useHasLicense;
module.link("../../hooks/useHasLicense", {
  useHasLicense(v) {
    useHasLicense = v;
  }

}, 3);
let MonitorsPage;
module.link("./MonitorsPage", {
  default(v) {
    MonitorsPage = v;
  }

}, 4);

const MonitorsPageContainer = () => {
  const license = useHasLicense('livechat-enterprise');

  if (license === 'loading') {
    return /*#__PURE__*/React.createElement(PageSkeleton, null);
  }

  if (!license) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(MonitorsPage, null);
};

module.exportDefault(MonitorsPageContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/monitors/987604762f204381e003248799f328deb467a616.map
