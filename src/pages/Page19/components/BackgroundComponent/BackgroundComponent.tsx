import { Rainbow, Balloons } from '../';

import * as styles from './BackgroundComponents.scss';

export const BackgroundComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Rainbow />
      <Balloons />
    </div>
  );
};
