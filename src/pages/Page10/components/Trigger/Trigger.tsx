import { useState } from 'react';

import type { Timer } from 'activeBook-core/@types';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useVibration } from 'activeBook-core/hooks/effects/vibration';

import { Action } from 'activeBook-core/components';

import { sleep } from 'activeBook-core/utils/sleep';

import classNames from 'classnames';

import styles from './Trigger.scss';

const text = '\xa0дров наломал\xa0';

let timer: Timer = null;

export const Trigger = () => {
  const [isTrembling, setIsTrembling] = useState(false);
  const [isBroken, setIsBroken] = useState(false);

  const { vibrationOn } = useVibration();

  const audioInst = useAudio({
    id: 'page-10-trigger-wood-broke',
    src: '/assets/book_data/audios/sounds/wood-broke.mp3',
  });

  const clickHandler = async () => {
    if (isTrembling || timer) {
      return;
    }

    setIsTrembling(true);
    audioInst?.play();

    await sleep(1000);

    vibrationOn(100);
    setIsTrembling(false);
    setIsBroken(true);

    timer = setTimeout(() => {
      setIsBroken(false);
      timer = null;
    }, 1500);
  };

  const actionClassNames = classNames({
    [styles.action]: true,
    [styles.isBroken]: isBroken,
    [styles.isTrembling]: isTrembling,
  });

  const text1ClassNames = classNames({
    [styles.text1]: true,
    [styles.isBroken]: isBroken,
    [styles.isTrembling]: isTrembling,
  });

  const text2ClassNames = classNames({
    [styles.text2]: true,
    [styles.isBroken]: isBroken,
    [styles.isTrembling]: isTrembling,
  });

  return (
    <span className={styles.wrapper} onClick={clickHandler}>
      <Action className={text1ClassNames}>
        {text}
      </Action>

      <Action className={actionClassNames}>
        {text}
      </Action>

      <Action className={text2ClassNames}>
        {text}
      </Action>
    </span>
  );
};
