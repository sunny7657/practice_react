import { Component } from 'react';

export class Counter extends Component {
  state = { counter: 0 };

  handleIncrement = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '15px',
          gap: '15px',
        }}
      >
        <h2>Counter</h2>
        <p style={{ fontWeight: 'bold', fontSize: '30px', padding: '0' }}>
          {this.state.counter}
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button className="btn-counter" onClick={this.handleIncrement}>
            +
          </button>
          <button className="btn-counter" onClick={this.handleDecrement}>
            -
          </button>
        </div>
      </div>
    );
  }
}
