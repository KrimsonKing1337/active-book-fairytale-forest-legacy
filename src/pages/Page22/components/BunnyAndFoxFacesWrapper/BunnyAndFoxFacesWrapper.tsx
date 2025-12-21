import type { PropsWithChildren } from 'react';

import classNames from 'classnames';
import { Img } from 'activeBook-core/components';

import * as styles from './BunnyAndFoxFacesWrapper.scss';

export type BunnyAndFoxFacesWrapperProps = PropsWithChildren & {
  isActive: boolean;
};

export const BunnyAndFoxFacesWrapper = ({ children, isActive }: BunnyAndFoxFacesWrapperProps) => {
  const wrapperClassNames = classNames({
    [styles.wrapper]: true,
    [styles.isActive]: isActive,
  });

  const bunnyClassNames = classNames({
    [styles.bunny]: true,
    [styles.isActive]: isActive,
  });

  const foxClassNames = classNames({
    [styles.fox]: true,
    [styles.isActive]: isActive,
  });

  return (
    <div className={wrapperClassNames}>
      {children}

      <Img src="./assets/book_data/images/bunny-face.svg" className={bunnyClassNames} />
      <Img src="./assets/book_data/images/fox-face.svg" className={foxClassNames} />
    </div>
  );
};
