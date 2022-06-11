function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/helpers.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  appEnabledStatuses: () => appEnabledStatuses,
  apiCurlGetter: () => apiCurlGetter,
  handleInstallError: () => handleInstallError,
  handleAPIError: () => handleAPIError,
  warnStatusChange: () => warnStatusChange,
  appButtonProps: () => appButtonProps,
  appStatusSpanProps: () => appStatusSpanProps,
  formatPrice: () => formatPrice,
  formatPricingPlan: () => formatPricingPlan
});
let AppStatus;
module.link("@rocket.chat/apps-engine/definition/AppStatus", {
  AppStatus(v) {
    AppStatus = v;
  }

}, 0);
let semver;
module.link("semver", {
  default(v) {
    semver = v;
  }

}, 1);
let Utilities;
module.link("../../../../app/apps/lib/misc/Utilities", {
  Utilities(v) {
    Utilities = v;
  }

}, 2);
let t;
module.link("../../../../app/utils/client", {
  t(v) {
    t = v;
  }

}, 3);
let dispatchToastMessage;
module.link("../../../lib/toast", {
  dispatchToastMessage(v) {
    dispatchToastMessage = v;
  }

}, 4);
const appEnabledStatuses = [AppStatus.AUTO_ENABLED, AppStatus.MANUALLY_ENABLED];
const appErroredStatuses = [AppStatus.COMPILER_ERROR_DISABLED, AppStatus.ERROR_DISABLED, AppStatus.INVALID_SETTINGS_DISABLED, AppStatus.INVALID_LICENSE_DISABLED];

const apiCurlGetter = absoluteUrl => (method, api) => {
  const example = api.examples[method] || {};
  return Utilities.curl({
    url: absoluteUrl(api.computedPath),
    method,
    params: example.params,
    query: example.query,
    content: example.content,
    headers: example.headers
  }).split('\n');
};

function handleInstallError(apiError) {
  if (!apiError.xhr || !apiError.xhr.responseJSON) {
    return;
  }

  const {
    status,
    messages,
    error,
    payload = null
  } = apiError.xhr.responseJSON;
  let message;

  switch (status) {
    case 'storage_error':
      message = messages.join('');
      break;

    case 'app_user_error':
      message = messages.join('');

      if (payload && payload.username) {
        message = t('Apps_User_Already_Exists', {
          username: payload.username
        });
      }

      break;

    default:
      if (error) {
        message = error;
      } else {
        message = 'There has been an error installing the app';
      }

  }

  dispatchToastMessage({
    type: 'error',
    message
  });
}

const shouldHandleErrorAsWarning = message => {
  const warnings = ['Could not reach the Marketplace'];
  return warnings.includes(message);
};

const handleAPIError = error => {
  const message = error.xhr && error.xhr.responseJSON && error.xhr.responseJSON.error || error.message;

  if (shouldHandleErrorAsWarning(message)) {
    dispatchToastMessage({
      type: 'warning',
      message
    });
    return;
  }

  dispatchToastMessage({
    type: 'error',
    message
  });
};

const warnStatusChange = (appName, status) => {
  if (appErroredStatuses.includes(status)) {
    dispatchToastMessage({
      type: 'error',
      message: (t("App_status_".concat(status)), appName)
    });
    return;
  }

  dispatchToastMessage({
    type: 'info',
    message: (t("App_status_".concat(status)), appName)
  });
};

const appButtonProps = _ref => {
  let {
    installed,
    version,
    marketplaceVersion,
    isPurchased,
    price,
    purchaseType,
    subscriptionInfo,
    pricingPlans,
    isEnterpriseOnly
  } = _ref;
  const canUpdate = installed && version && marketplaceVersion && semver.lt(version, marketplaceVersion);

  if (canUpdate) {
    return {
      action: 'update',
      icon: 'reload',
      label: 'Update'
    };
  }

  if (installed) {
    return;
  }

  const canDownload = isPurchased;

  if (canDownload) {
    return {
      action: 'install',
      label: 'Install'
    };
  }

  const canSubscribe = purchaseType === 'subscription' && !subscriptionInfo.status;

  if (canSubscribe) {
    const cannotTry = pricingPlans.every(currentPricingPlan => currentPricingPlan.trialDays === 0);

    if (cannotTry || isEnterpriseOnly) {
      return {
        action: 'purchase',
        label: 'Subscribe'
      };
    }

    return {
      action: 'purchase',
      label: 'Trial'
    };
  }

  const canBuy = price > 0;

  if (canBuy) {
    return {
      action: 'purchase',
      label: 'Buy'
    };
  }

  return {
    action: 'purchase',
    label: 'Install'
  };
};

const appStatusSpanProps = _ref2 => {
  let {
    installed,
    status,
    subscriptionInfo
  } = _ref2;

  if (!installed) {
    return;
  }

  const isFailed = appErroredStatuses.includes(status);

  if (isFailed) {
    return {
      type: 'failed',
      icon: 'warning',
      label: status === AppStatus.INVALID_SETTINGS_DISABLED ? 'Config Needed' : 'Failed'
    };
  }

  const isEnabled = appEnabledStatuses.includes(status);

  if (!isEnabled) {
    return {
      type: 'warning',
      icon: 'warning',
      label: 'Disabled'
    };
  }

  const isOnTrialPeriod = subscriptionInfo && subscriptionInfo.status === 'trialing';

  if (isOnTrialPeriod) {
    return {
      icon: 'checkmark-circled',
      label: 'Trial period'
    };
  }

  return {
    icon: 'checkmark-circled',
    label: 'Enabled'
  };
};

const formatPrice = price => "$".concat(Number.parseFloat(price).toFixed(2));

const formatPricingPlan = _ref3 => {
  let {
    strategy,
    price,
    tiers = []
  } = _ref3;
  const {
    perUnit = false
  } = Array.isArray(tiers) && tiers.find(tier => tier.price === price) || {};
  const pricingPlanTranslationString = ['Apps_Marketplace_pricingPlan', Array.isArray(tiers) && tiers.length > 0 && 'startingAt', strategy, perUnit && 'perUser'].filter(Boolean).join('_');
  return t(pricingPlanTranslationString, {
    price: formatPrice(price)
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/6e5263e328b2c34a5548c6e2a56331bca594e625.map
