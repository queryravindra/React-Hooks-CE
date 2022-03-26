import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  // componentDidMount() is called only once in its life
  // and is called at initial render of its component

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  // componentDidUpdate() is called after every update
  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.count} times`;
  }
  
  render() {
    return (
        <div>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click {this.state.count} times</button>
        </div>
    );
  }
}

export default ClassCounter;
