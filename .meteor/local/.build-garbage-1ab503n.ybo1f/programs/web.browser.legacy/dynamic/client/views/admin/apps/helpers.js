function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/helpers.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  appEnabledStatuses: function () {
    return appEnabledStatuses;
  },
  apiCurlGetter: function () {
    return apiCurlGetter;
  },
  handleInstallError: function () {
    return handleInstallError;
  },
  handleAPIError: function () {
    return handleAPIError;
  },
  warnStatusChange: function () {
    return warnStatusChange;
  },
  appButtonProps: function () {
    return appButtonProps;
  },
  appStatusSpanProps: function () {
    return appStatusSpanProps;
  },
  formatPrice: function () {
    return formatPrice;
  },
  formatPricingPlan: function () {
    return formatPricingPlan;
  }
});
var AppStatus;
module.link("@rocket.chat/apps-engine/definition/AppStatus", {
  AppStatus: function (v) {
    AppStatus = v;
  }
}, 0);
var semver;
module.link("semver", {
  "default": function (v) {
    semver = v;
  }
}, 1);
var Utilities;
module.link("../../../../app/apps/lib/misc/Utilities", {
  Utilities: function (v) {
    Utilities = v;
  }
}, 2);
var t;
module.link("../../../../app/utils/client", {
  t: function (v) {
    t = v;
  }
}, 3);
var dispatchToastMessage;
module.link("../../../lib/toast", {
  dispatchToastMessage: function (v) {
    dispatchToastMessage = v;
  }
}, 4);
var appEnabledStatuses = [AppStatus.AUTO_ENABLED, AppStatus.MANUALLY_ENABLED];
var appErroredStatuses = [AppStatus.COMPILER_ERROR_DISABLED, AppStatus.ERROR_DISABLED, AppStatus.INVALID_SETTINGS_DISABLED, AppStatus.INVALID_LICENSE_DISABLED];

var apiCurlGetter = function (absoluteUrl) {
  return function (method, api) {
    var example = api.examples[method] || {};
    return Utilities.curl({
      url: absoluteUrl(api.computedPath),
      method: method,
      params: example.params,
      query: example.query,
      content: example.content,
      headers: example.headers
    }).split('\n');
  };
};

function handleInstallError(apiError) {
  if (!apiError.xhr || !apiError.xhr.responseJSON) {
    return;
  }

  var _apiError$xhr$respons = apiError.xhr.responseJSON,
      status = _apiError$xhr$respons.status,
      messages = _apiError$xhr$respons.messages,
      error = _apiError$xhr$respons.error,
      _apiError$xhr$respons2 = _apiError$xhr$respons.payload,
      payload = _apiError$xhr$respons2 === void 0 ? null : _apiError$xhr$respons2;
  var message;

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
    message: message
  });
}

var shouldHandleErrorAsWarning = function (message) {
  var warnings = ['Could not reach the Marketplace'];
  return warnings.includes(message);
};

var handleAPIError = function (error) {
  var message = error.xhr && error.xhr.responseJSON && error.xhr.responseJSON.error || error.message;

  if (shouldHandleErrorAsWarning(message)) {
    dispatchToastMessage({
      type: 'warning',
      message: message
    });
    return;
  }

  dispatchToastMessage({
    type: 'error',
    message: message
  });
};

var warnStatusChange = function (appName, status) {
  if (appErroredStatuses.includes(status)) {
    dispatchToastMessage({
      type: 'error',
      message: (t("App_status_" + status), appName)
    });
    return;
  }

  dispatchToastMessage({
    type: 'info',
    message: (t("App_status_" + status), appName)
  });
};

var appButtonProps = function (_ref) {
  var installed = _ref.installed,
      version = _ref.version,
      marketplaceVersion = _ref.marketplaceVersion,
      isPurchased = _ref.isPurchased,
      price = _ref.price,
      purchaseType = _ref.purchaseType,
      subscriptionInfo = _ref.subscriptionInfo,
      pricingPlans = _ref.pricingPlans,
      isEnterpriseOnly = _ref.isEnterpriseOnly;
  var canUpdate = installed && version && marketplaceVersion && semver.lt(version, marketplaceVersion);

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

  var canDownload = isPurchased;

  if (canDownload) {
    return {
      action: 'install',
      label: 'Install'
    };
  }

  var canSubscribe = purchaseType === 'subscription' && !subscriptionInfo.status;

  if (canSubscribe) {
    var cannotTry = pricingPlans.every(function (currentPricingPlan) {
      return currentPricingPlan.trialDays === 0;
    });

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

  var canBuy = price > 0;

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

var appStatusSpanProps = function (_ref2) {
  var installed = _ref2.installed,
      status = _ref2.status,
      subscriptionInfo = _ref2.subscriptionInfo;

  if (!installed) {
    return;
  }

  var isFailed = appErroredStatuses.includes(status);

  if (isFailed) {
    return {
      type: 'failed',
      icon: 'warning',
      label: status === AppStatus.INVALID_SETTINGS_DISABLED ? 'Config Needed' : 'Failed'
    };
  }

  var isEnabled = appEnabledStatuses.includes(status);

  if (!isEnabled) {
    return {
      type: 'warning',
      icon: 'warning',
      label: 'Disabled'
    };
  }

  var isOnTrialPeriod = subscriptionInfo && subscriptionInfo.status === 'trialing';

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

var formatPrice = function (price) {
  return "$" + Number.parseFloat(price).toFixed(2);
};

var formatPricingPlan = function (_ref3) {
  var strategy = _ref3.strategy,
      price = _ref3.price,
      _ref3$tiers = _ref3.tiers,
      tiers = _ref3$tiers === void 0 ? [] : _ref3$tiers;

  var _ref4 = Array.isArray(tiers) && tiers.find(function (tier) {
    return tier.price === price;
  }) || {},
      _ref4$perUnit = _ref4.perUnit,
      perUnit = _ref4$perUnit === void 0 ? false : _ref4$perUnit;

  var pricingPlanTranslationString = ['Apps_Marketplace_pricingPlan', Array.isArray(tiers) && tiers.length > 0 && 'startingAt', strategy, perUnit && 'perUser'].filter(Boolean).join('_');
  return t(pricingPlanTranslationString, {
    price: formatPrice(price)
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/7bd39bef41502c5a2e55060bf936709f59060aec.map
