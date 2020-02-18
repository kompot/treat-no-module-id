import clsx from 'clsx';
import React from 'react';

import * as styles from './Component1.treat';
import * as styles1 from './Component2.treat';

export const Component1: React.FC = () => {
  return <div className={clsx(styles.root, styles1.container)}>123</div>;
};
