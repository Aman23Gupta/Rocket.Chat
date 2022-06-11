function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/PriceDisplay.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["purchaseType", "pricingPlans", "price", "showType"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var formatPricingPlan, formatPrice;
module.link("./helpers", {
  formatPricingPlan: function (v) {
    formatPricingPlan = v;
  },
  formatPrice: function (v) {
    formatPrice = v;
  }
}, 3);

var formatPriceAndPurchaseType = function (purchaseType, pricingPlans, price) {
  if (purchaseType === 'subscription') {
    var type = 'Subscription';

    if (!pricingPlans || !Array.isArray(pricingPlans) || pricingPlans.length === 0) {
      return {
        type: type,
        price: '-'
      };
    }

    return {
      type: type,
      price: formatPricingPlan(pricingPlans[0])
    };
  }

  if (price > 0) {
    return {
      type: 'Paid',
      price: formatPrice(price)
    };
  }

  return {
    type: 'Free',
    price: '-'
  };
};

function PriceDisplay(_ref) {
  var purchaseType = _ref.purchaseType,
      pricingPlans = _ref.pricingPlans,
      price = _ref.price,
      _ref$showType = _ref.showType,
      showType = _ref$showType === void 0 ? true : _ref$showType,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var _useMemo = useMemo(function () {
    return formatPriceAndPurchaseType(purchaseType, pricingPlans, price);
  }, [purchaseType, pricingPlans, price]),
      type = _useMemo.type,
      formattedPrice = _useMemo.price;

  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    flexDirection: "column"
  }, props), showType && /*#__PURE__*/React.createElement(Box, {
    color: "default",
    withTruncatedText: true
  }, t(type)), /*#__PURE__*/React.createElement(Box, {
    color: "hint",
    withTruncatedText: true
  }, !showType && type === 'Free' ? t(type) : formattedPrice));
}

module.exportDefault(PriceDisplay);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/fc42c24b85180548edb44fe81df9076fe1118c28.map
