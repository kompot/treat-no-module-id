import React from 'react';
import { useStyles } from 'react-treat';

import * as styleRefs from './Component2.treat';

export const Component2: React.FC = () => {
  const styles = useStyles(styleRefs);
  return (
    <div className={styles.container}>
      123
    </div>
  );
};
