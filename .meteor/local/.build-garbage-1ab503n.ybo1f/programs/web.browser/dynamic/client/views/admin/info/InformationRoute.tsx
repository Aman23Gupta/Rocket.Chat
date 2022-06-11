function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/InformationRoute.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Callout, ButtonGroup, Button, Icon;
module.link("@rocket.chat/fuselage", {
  Callout(v) {
    Callout = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let React, useState, useEffect, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let PageSkeleton;
module.link("../../../components/PageSkeleton", {
  default(v) {
    PageSkeleton = v;
  }

}, 4);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 5);
let useMethod, useServerInformation, useEndpoint;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  },

  useServerInformation(v) {
    useServerInformation = v;
  },

  useEndpoint(v) {
    useEndpoint = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let downloadJsonAs;
module.link("../../../lib/download", {
  downloadJsonAs(v) {
    downloadJsonAs = v;
  }

}, 8);
let InformationPage;
module.link("./InformationPage", {
  default(v) {
    InformationPage = v;
  }

}, 9);

const InformationRoute = () => {
  const t = useTranslation();
  const canViewStatistics = usePermission('view-statistics');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [statistics, setStatistics] = useState();
  const [instances, setInstances] = useState([]);
  const [fetchStatistics, setFetchStatistics] = useState(() => () => undefined);
  const getStatistics = useEndpoint('GET', 'statistics');
  const getInstances = useMethod('instances/get');
  useEffect(() => {
    let didCancel = false;

    const fetchStatistics = async function () {
      let {
        refresh = false
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      setLoading(true);
      setError(false);

      try {
        const [statistics, instances] = await Promise.all([getStatistics({
          refresh
        }), getInstances()]);

        if (didCancel) {
          return;
        }

        setStatistics(statistics);
        setInstances(instances);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    setFetchStatistics(() => fetchStatistics);
    fetchStatistics();
    return () => {
      didCancel = true;
    };
  }, [canViewStatistics, getInstances, getStatistics]);
  const info = useServerInformation();

  const handleClickRefreshButton = () => {
    if (isLoading) {
      return;
    }

    fetchStatistics({
      refresh: true
    });
  };

  const handleClickDownloadInfo = () => {
    if (isLoading) {
      return;
    }

    downloadJsonAs(statistics, 'statistics');
  };

  if (isLoading) {
    return /*#__PURE__*/React.createElement(PageSkeleton, null);
  }

  if (error || !statistics) {
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
      title: t('Info')
    }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
      primary: true,
      type: "button",
      onClick: handleClickRefreshButton
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "reload"
    }), " ", t('Refresh')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Callout, {
      type: "danger"
    }, t('Error_loading_pages'))));
  }

  if (canViewStatistics) {
    return /*#__PURE__*/React.createElement(InformationPage, {
      canViewStatistics: canViewStatistics,
      info: info,
      statistics: statistics,
      instances: instances,
      onClickRefreshButton: handleClickRefreshButton,
      onClickDownloadInfo: handleClickDownloadInfo
    });
  }

  return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
};

module.exportDefault( /*#__PURE__*/memo(InformationRoute));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/9b84d4e99c2609e6c204642e0b3e0c090e8f6445.map
