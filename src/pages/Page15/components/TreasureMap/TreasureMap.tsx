import { useEffect, useRef } from 'react';

import { type DotLottie, DotLottieReactWrapper, DotLottieReact } from 'activeBook-core/components';

import classNames from 'classnames';

import * as styles from './TreasureMap.scss';

export type TreasureMapProps = {
  isActive: boolean;
};

export const TreasureMap = ({ isActive }: TreasureMapProps) => {
  const dotLottieRef = useRef<DotLottie | null>(null);

  useEffect(() => {
    if (!dotLottieRef.current) {
      return;
    }

    if (isActive) {
      dotLottieRef.current.play();
    } else {
      dotLottieRef.current.stop();
    }
  }, [isActive]);

  const refCallback = (dotLottieItem: DotLottie) => {
    dotLottieRef.current = dotLottieItem;
  };

  const wrapperClassnames = classNames({
    [styles.wrapper]: true,
    [styles.isActive]: isActive,
  });

  return (
    <DotLottieReactWrapper className={wrapperClassnames}>
      <DotLottieReact
        src="./assets/book_data/animations/treasure-map.lottie"
        height={300}
        width={300}
        loop
        refCallback={refCallback}
      />
    </DotLottieReactWrapper>
  );
};
