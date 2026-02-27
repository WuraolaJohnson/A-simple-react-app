import { Component } from "react";

interface Props {
  title: string;
}

interface State {
  count: number;
}

class ClassCounter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("ClassCounter: Constructor initialized");
  }

  componentDidMount() {
    console.log("ClassCounter: Component DID Mount (Lifecycle)");
  }

  componentWillUnmount() {
    console.log("ClassCounter: Component WILL Unmount (Lifecycle)");
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className="card m-3 p-3">
        <h3>{this.props.title} (Class Component)</h3>
        <p>State Count: {this.state.count}</p>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          Increment (Class Event)
        </button>
      </div>
    );
  }
}

export default ClassCounter;
