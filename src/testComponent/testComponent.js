import React, {Component, PropTypes} from 'react'

class TestComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return (
      <h1>Hallo {this.props.text}</h1>
    )
  }
}

export default TestComponent
