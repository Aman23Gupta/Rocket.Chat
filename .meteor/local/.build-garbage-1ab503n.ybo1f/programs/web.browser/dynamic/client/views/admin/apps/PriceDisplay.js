function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/PriceDisplay.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["purchaseType", "pricingPlans", "price", "showType"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let formatPricingPlan, formatPrice;
module.link("./helpers", {
  formatPricingPlan(v) {
    formatPricingPlan = v;
  },

  formatPrice(v) {
    formatPrice = v;
  }

}, 3);

const formatPriceAndPurchaseType = (purchaseType, pricingPlans, price) => {
  if (purchaseType === 'subscription') {
    const type = 'Subscription';

    if (!pricingPlans || !Array.isArray(pricingPlans) || pricingPlans.length === 0) {
      return {
        type,
        price: '-'
      };
    }

    return {
      type,
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
  let {
    purchaseType,
    pricingPlans,
    price,
    showType = true
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const {
    type,
    price: formattedPrice
  } = useMemo(() => formatPriceAndPurchaseType(purchaseType, pricingPlans, price), [purchaseType, pricingPlans, price]);
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/bff499acb51ae0e56f7383b81a03ff1fe2d6b074.map
