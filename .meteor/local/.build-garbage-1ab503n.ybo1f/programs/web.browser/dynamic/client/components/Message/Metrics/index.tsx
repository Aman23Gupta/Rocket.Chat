function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/index.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Metrics;
module.link("./Metrics", {
  default(v) {
    Metrics = v;
  }

}, 0);
let MetricsFollowing;
module.link("./MetricsFollowing", {
  default(v) {
    MetricsFollowing = v;
  }

}, 1);
let MetricsItem;
module.link("./MetricsItem", {
  default(v) {
    MetricsItem = v;
  }

}, 2);
let MetricsItemIcon;
module.link("./MetricsItemIcon", {
  default(v) {
    MetricsItemIcon = v;
  }

}, 3);
let MetricsItemLabel;
module.link("./MetricsItemLabel", {
  default(v) {
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
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/ea01150811473280aeaf7a61cc08b70c9bf37b99.map
