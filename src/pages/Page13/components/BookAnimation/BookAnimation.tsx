import { DotLottieReactWrapper, DotLottieReact } from 'activeBook-core/components';

import classNames from 'classnames';

import styles from './BookAnimation.scss';

export type BookAnimationProps = {
  isActive: boolean;
};

export const BookAnimation = ({ isActive }: BookAnimationProps) => {
  const extraWrapperClassnames = classNames({
    [styles.extraWrapper]: true,
    [styles.isActive]: isActive,
  });

  return (
    <span className={extraWrapperClassnames}>
      <DotLottieReactWrapper className={styles.wrapper}>
        <DotLottieReact
          src="/assets/book_data/animations/book.lottie"
          width={448}
          height={400}
          loop
          autoplay
        />
      </DotLottieReactWrapper>
    </span>
  );
};
