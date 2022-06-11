function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/monitors/MonitorsPageContainer.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var NotAuthorizedPage;
module.link("../../../../client/components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 1);
var PageSkeleton;
module.link("../../../../client/components/PageSkeleton", {
  "default": function (v) {
    PageSkeleton = v;
  }
}, 2);
var useHasLicense;
module.link("../../hooks/useHasLicense", {
  useHasLicense: function (v) {
    useHasLicense = v;
  }
}, 3);
var MonitorsPage;
module.link("./MonitorsPage", {
  "default": function (v) {
    MonitorsPage = v;
  }
}, 4);

var MonitorsPageContainer = function () {
  var license = useHasLicense('livechat-enterprise');

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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/monitors/d5c22f855a1c00b87976703730f0ba905e72aaca.map
