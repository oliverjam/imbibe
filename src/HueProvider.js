import React, { createContext, Component } from 'react';

export const HueContext = createContext();

export class HueProvider extends Component {
  state = {
    hue: 200,
    setHue: hue => this.setState({ hue }),
  };

  render() {
    return (
      <HueContext.Provider value={this.state}>
        {this.props.children}
      </HueContext.Provider>
    );
  }
}
