import React, { Component } from 'react';
export default class RootLayouts extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
