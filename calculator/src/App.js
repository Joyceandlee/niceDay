import React from 'react';
import Plane from './components/Plane'
import Show from './components/Show'
import calculate from './script/calculate'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  render() {
    return (
      <div>
        <Show msg={this.state.next || this.state.total || 0} />
        <Plane change={this.change.bind(this)} />
      </div>
    )
  }

  change(msg) {
    this.setState(calculate(this.state, msg));
  }
}

export default App
