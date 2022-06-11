function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/index.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Metrics;
module.link("./Metrics", {
  "default": function (v) {
    Metrics = v;
  }
}, 0);
var MetricsFollowing;
module.link("./MetricsFollowing", {
  "default": function (v) {
    MetricsFollowing = v;
  }
}, 1);
var MetricsItem;
module.link("./MetricsItem", {
  "default": function (v) {
    MetricsItem = v;
  }
}, 2);
var MetricsItemIcon;
module.link("./MetricsItemIcon", {
  "default": function (v) {
    MetricsItemIcon = v;
  }
}, 3);
var MetricsItemLabel;
module.link("./MetricsItemLabel", {
  "default": function (v) {
    MetricsItemLabel = v;
  }
}, 4);
module.exportDefault(Object.assign(Metrics, {
  Item: Object.assign(MetricsItem, {
    Label: MetricsItemLabel,
    Icon: MetricsItemIcon
  }),
  Following: MetricsFollowing
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/8cbe446fff798f45c304d1b5ae0a95e122877c0d.map
