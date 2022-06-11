function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/ErrorBoundary.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ErrorBoundary: () => ErrorBoundary
});
let Component;
module.link("react", {
  Component(v) {
    Component = v;
  }

}, 0);

class ErrorBoundary extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/e8fd004684dd5448c46067029c066ca673555623.map
