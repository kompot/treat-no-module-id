import React from 'react';

import { Component1 } from 'frontm/components/module/Component1';
import { Component3 } from 'frontm/components/module/Component3';

export default class Route3 extends React.Component {
  public render() {
    return (
      <>
        <Component1 />
        <Component3 />
      </>
    );
  }
}
