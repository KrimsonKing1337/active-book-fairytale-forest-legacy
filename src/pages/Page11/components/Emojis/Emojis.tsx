import { nanoid } from 'nanoid';

import { Img } from 'activeBook-core/components/Img';

import * as styles from './Emojis.scss';

export const Emojis = () => {
  const imagesSrc = [
    './assets/book_data/images/emojis/happy/happy-with-teeth.svg',
    './assets/book_data/images/emojis/happy/happy-with-teeth2.svg',
    './assets/book_data/images/emojis/happy/laughing-rolling.svg',
    './assets/book_data/images/emojis/happy/happy-with-teeth.svg',
    './assets/book_data/images/emojis/happy/happy-with-teeth2.svg',
    './assets/book_data/images/emojis/happy/laughing-rolling.svg',
    './assets/book_data/images/emojis/happy/happy-with-teeth.svg',
    './assets/book_data/images/emojis/happy/happy-with-teeth2.svg',
    './assets/book_data/images/emojis/happy/laughing-rolling.svg',
  ];

  return (
    <div className={styles.EmojisWrapper}>
      {imagesSrc.map((imageSrcCur) => {
        const uuid = nanoid();

        return (
          <Img key={uuid} src={imageSrcCur} className={styles.Emoji} />
        );
      })}
    </div>
  );
};
