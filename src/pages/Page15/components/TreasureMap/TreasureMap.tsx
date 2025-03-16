import { DotLottieReactWrapper, DotLottieReact } from 'activeBook-core/components';

import styles from './TreasureMap.scss';

export const TreasureMap = () => {
  return (
    <DotLottieReactWrapper className={styles.wrapper}>
      <DotLottieReact
        src="/assets/book_data/animations/treasure-map.lottie"
        height={300}
        width={300}
        loop
        autoplay
      />
    </DotLottieReactWrapper>
  );
};
