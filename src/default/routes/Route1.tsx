import React from 'react';

import { Component1 } from 'frontm/components/module/Component1';
import { Component2 } from 'frontm/components/module/Component2';
import { Component3 } from 'frontm/components/module/Component3';

export default class Route1 extends React.Component {
  public render() {
    return (
      <>
        <Component1 />
        <Component2 />
        <Component3 />
      </>
    );
  }
}
