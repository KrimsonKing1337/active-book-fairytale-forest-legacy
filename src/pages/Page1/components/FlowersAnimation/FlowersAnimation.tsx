import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import styles from './FlowersAnimation.scss';

export const FlowersAnimation = () => {
  return (
    <div>
      <div className={styles.flower1}>
        <DotLottieReact
          src="/assets/book_data/animations/flower-1.lottie"
          style={{ height: '100%', width: '100%' }}
          loop
          autoplay
        />
      </div>

      <div className={styles.flower2}>
        <DotLottieReact
          src="/assets/book_data/animations/flower-2.lottie"
          style={{ height: '100%', width: '100%' }}
          loop
          autoplay
        />
      </div>

      <div className={styles.flower3}>
        <DotLottieReact
          src="/assets/book_data/animations/flower-3.lottie"
          style={{ height: '100%', width: '100%' }}
          loop
          autoplay
        />
      </div>

      <div className={styles.flower4}>
        <DotLottieReact
          src="/assets/book_data/animations/flower-4.lottie"
          style={{ height: '100%', width: '100%' }}
          loop
          autoplay
        />
      </div>

      <div className={styles.flower5}>
        <DotLottieReact
          src="/assets/book_data/animations/flower-5.lottie"
          style={{ height: '100%', width: '100%' }}
          loop
          autoplay
        />
      </div>

      <div className={styles.flower6}>
        <DotLottieReact
          src="/assets/book_data/animations/flower-6.lottie"
          style={{ height: '100%', width: '100%' }}
          loop
          autoplay
        />
      </div>
    </div>
  );
};
