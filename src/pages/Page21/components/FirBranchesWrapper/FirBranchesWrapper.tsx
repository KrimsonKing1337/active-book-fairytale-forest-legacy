import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import { Img } from 'activeBook-core/components';

import * as styles from './FirBranchesWrapper.scss';

export type FirstBranchesProps = PropsWithChildren & {
  isActive: boolean;
};

export const FirBranchesWrapper = ({ children, isActive }: FirstBranchesProps) => {
  const wrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [styles.isActive]: isActive,
  });

  const img1ClassNames = classNames({
    [styles.Img]: true,
    [styles.Img1]: true,
    [styles.isActive]: isActive,
  });

  const img2ClassNames = classNames({
    [styles.Img]: true,
    [styles.Img2]: true,
    [styles.isActive]: isActive,
  });

  const img3ClassNames = classNames({
    [styles.Img]: true,
    [styles.Img3]: true,
    [styles.isActive]: isActive,
  });

  const img4ClassNames = classNames({
    [styles.Img]: true,
    [styles.Img4]: true,
    [styles.isActive]: isActive,
  });

  return (
    <div className={wrapperClassNames}>
      <Img src="./assets/book_data/images/spruce-branches/spruce-branch-1.png" className={img1ClassNames} />
      <Img src="./assets/book_data/images/spruce-branches/spruce-branch-4.png" className={img2ClassNames} />
      <Img src="./assets/book_data/images/spruce-branches/spruce-branch-3.png" className={img3ClassNames} />
      <Img src="./assets/book_data/images/spruce-branches/spruce-branch-2.png" className={img4ClassNames} />

      {children}
    </div>
  );
};
