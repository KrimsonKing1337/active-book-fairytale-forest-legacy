import classNames from 'classnames';

import { getRandomNumber } from 'activeBook-core/utils/getRandomNumber';

import Icon from '/assets/book_data/images/question.svg';

import styles from './Question.scss';

export type QuestionsProps = {
  isActive: boolean;
};

const fills = [
  'green',
  'blue',
  'yellow',
];

export const Questions = ({ isActive }: QuestionsProps) => {
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
      {fills.map((fillCur) => {
        const randomIndex = getRandomNumber(0, fills.length - 1);
        const randomFill = fills[randomIndex];

        return (
          <Icon key={fillCur} style={{ fill: randomFill }} className={iconClassNames} />
        );
      })}
    </span>
  );
};
