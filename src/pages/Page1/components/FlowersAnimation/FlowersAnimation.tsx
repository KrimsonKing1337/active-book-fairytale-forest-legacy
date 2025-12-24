import { DotLottieReactWrapper, DotLottieReact } from 'activeBook-core/components';

import * as styles from './FlowersAnimation.scss';

export const FlowersAnimation = () => {
  return (
    <DotLottieReactWrapper amount={6}>
      <div className={styles.Flower1}>
        <DotLottieReact
          src="./assets/book_data/animations/flower-1.lottie"
          height={250}
          width={250}
          loop
          autoplay
        />
      </div>

      <div className={styles.Flower2}>
        <DotLottieReact
          src="./assets/book_data/animations/flower-2.lottie"
          height={250}
          width={250}
          loop
          autoplay
        />
      </div>

      <div className={styles.Flower3}>
        <DotLottieReact
          src="./assets/book_data/animations/flower-3.lottie"
          height={250}
          width={250}
          loop
          autoplay
        />
      </div>

      <div className={styles.Flower4}>
        <DotLottieReact
          src="./assets/book_data/animations/flower-4.lottie"
          height={250}
          width={250}
          loop
          autoplay
        />
      </div>

      <div className={styles.Flower5}>
        <DotLottieReact
          src="./assets/book_data/animations/flower-5.lottie"
          height={250}
          width={250}
          loop
          autoplay
        />
      </div>

      <div className={styles.Flower6}>
        <DotLottieReact
          src="./assets/book_data/animations/flower-6.lottie"
          height={250}
          width={250}
          loop
          autoplay
        />
      </div>
    </DotLottieReactWrapper>
  );
};
