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
    <span className={swingClassNames}>
      &nbsp;раскачиваясь из стороны в сторону,&nbsp;
    </span>
  );
};
