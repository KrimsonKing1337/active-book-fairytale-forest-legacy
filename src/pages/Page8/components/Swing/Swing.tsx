import classNames from 'classnames';

import styles from './Swing.scss';

export type SwingProps = {
  isActive: boolean;
};

export const Swing = ({ isActive }: SwingProps) => {
  const swingClassNames = classNames({
    [styles.swing]: true,
    [styles.isActive]: isActive,
  });

  return (
    <div className={swingClassNames}>
      раскачиваясь из стороны в сторону,
    </div>
  );
};
