import Icon from '/assets/book_data/images/question.svg';

import classNames from 'classnames';

import styles from './Question.scss';

import { useMemo } from 'react';

export type QuestionsProps = {
  isActive: boolean;
};

export const Questions = ({ isActive }: QuestionsProps) => {
  const fills = useMemo(() => {
    return [
      'green',
      'blue',
      'yellow',
    ];
  }, []);

  const wrapperClassNames = classNames({
    [styles.wrapper]: true,
    [styles.isActive]: isActive,
  });

  const iconClassNames = classNames({
    [styles.icon]: true,
    [styles.isActive]: isActive,
  });

  return (
    <span className={wrapperClassNames}>
      {fills.map((fillCur) => (
        <Icon key={fillCur} style={{ fill: fillCur }} className={iconClassNames} />
      ))}
    </span>
  );
};
