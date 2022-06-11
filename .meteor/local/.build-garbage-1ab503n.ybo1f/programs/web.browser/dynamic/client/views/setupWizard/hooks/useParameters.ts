function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/hooks/useParameters.ts                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useParameters: () => useParameters
});
let useState, useEffect;
module.link("react", {
  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 1);

const useParameters = () => {
  const [loaded, setLoaded] = useState(false);
  const [settings, setSettings] = useState([]);
  const [canDeclineServerRegistration, setCapableOfDeclineServerRegistration] = useState(false);
  const getSetupWizardParameters = useMethod('getSetupWizardParameters');
  useEffect(() => {
    let mounted = true;

    const requestParameters = async () => {
      try {
        const {
          settings = [],
          allowStandaloneServer = false
        } = (await getSetupWizardParameters()) || {};

        if (!mounted) {
          return;
        }

        setLoaded(true);
        setSettings(settings);
        setCapableOfDeclineServerRegistration(allowStandaloneServer);
      } catch (error) {
        setLoaded(false);
        setSettings([]);
        setCapableOfDeclineServerRegistration(false);
      }
    };

    requestParameters();
    return () => {
      mounted = false;
    };
  }, [getSetupWizardParameters]);
  return {
    loaded,
    settings,
    canDeclineServerRegistration
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/hooks/b87aa868f55c6a12030f96b58bfa2042b35b9244.map
