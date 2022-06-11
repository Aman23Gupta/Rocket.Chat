function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/hooks/useCannedResponseFilterOptions.ts                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useCannedResponseFilterOptions: () => useCannedResponseFilterOptions
});
let useEffect, useMemo, useState;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let useEndpoint;
module.link("../../../../client/contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 1);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const useCannedResponseFilterOptions = () => {
  const t = useTranslation();
  const getDepartments = useEndpoint('GET', 'livechat/department');
  const defaultOptions = useMemo(() => [['all', t('All')], ['global', t('Public')], ['user', t('Private')]], [t]);
  const [options, setOptions] = useState(defaultOptions);
  useEffect(() => {
    const fetchData = async () => {
      const {
        departments
      } = await getDepartments({
        text: ''
      });
      const newOptions = departments.map(department => [department._id, department.name]);
      setOptions(defaultOptions.concat(newOptions));
    };

    fetchData();
  }, [defaultOptions, getDepartments]);
  return options;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/hooks/25c61392c38118d69f9d29d18e4daac210e12a13.map
