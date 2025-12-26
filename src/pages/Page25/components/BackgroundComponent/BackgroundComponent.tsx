import { Rainbow, Balloons } from '../';

import * as styles from './BackgroundComponents.scss';

export const BackgroundComponent = () => {
  return (
    <div className={styles.Wrapper}>
      <Rainbow />
      <Balloons />
    </div>
  );
};
