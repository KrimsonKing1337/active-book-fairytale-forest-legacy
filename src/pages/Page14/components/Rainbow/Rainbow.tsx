import styles from './Rainbow.scss';

export type RainbowProps = {
  isActive: boolean;
};

export const Rainbow = ({ isActive }: RainbowProps) => {
  if (!isActive) {
    return null;
  }

  return (
    <span className={styles.wrapper} />
  );
};
