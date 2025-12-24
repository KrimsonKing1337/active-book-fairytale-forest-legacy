import { useEffect, useState } from 'react';

import classNames from 'classnames';

import { getRandomNumber } from 'activeBook-core/utils/getRandomNumber';

import Icon from 'assets/book_data/images/question.svg';

import { nanoid } from 'nanoid';

import * as styles from './Question.scss';

export type QuestionsProps = {
  isActive: boolean;
};

const fills = [
  'green',
  'blue',
  'yellow',
];

export const Questions = ({ isActive }: QuestionsProps) => {
  const [fillItems, setFillItems] = useState<string[]>([]);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const newFillItemsValue = fills.map(() => {
      const randomIndex = getRandomNumber(0, fills.length - 1);

      return fills[randomIndex];
    });

    setFillItems(newFillItemsValue);
  }, [isActive]);

  const wrapperClassNames = classNames({
    [styles.wrapper]: true,
    [styles.isActive]: isActive,
  });

  return (
    <span className={wrapperClassNames}>
      {fillItems.map((fillItemCur) => {
        const uuid = nanoid();

        return (
          <Icon key={uuid} style={{ fill: fillItemCur }} className={styles.Icon} />
        );
      })}
    </span>
  );
};
