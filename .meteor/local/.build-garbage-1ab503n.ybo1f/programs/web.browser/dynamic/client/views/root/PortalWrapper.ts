function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/PortalWrapper.ts                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let PureComponent;
module.link("react", {
  PureComponent(v) {
    PureComponent = v;
  }

}, 0);

class PortalWrapper extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      errored: false
    };
  }

  static getDerivedStateFromError() {
    return {
      errored: true
    };
  } // eslint-disable-next-line @typescript-eslint/no-empty-function


  componentDidCatch() {}

  render() {
    if (this.state.errored) {
      return null;
    }

    return this.props.portal;
  }

}

module.exportDefault(PortalWrapper);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/0dd6807c74bb295f2485b9cb55eadf12e8ee5ad9.map
