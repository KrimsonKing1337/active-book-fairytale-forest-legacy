import { useState } from 'react';

import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { Segment } from 'activeBook-core/components';

import { Action } from 'activeBook-core/components/ColoredTextTrigger';

import { Timer } from 'activeBook-core/@types';

import { Fox } from './components';

let timer: Timer = null;

export const Page16 = () => {
  const [isFoxActive, setIsFoxActive] = useState(false);

  const audioInst1 = useAudio({
    id: 'page-16-fireplace',
    src: '/assets/book_data/audios/sounds/fireplace.mp3',
    loop: true,
  });

  const audioInst2 = useAudio({
    id: 'page-16-running',
    src: '/assets/book_data/audios/sounds/running.mp3',
    delay: 500,
  });

  const segment1EnterHandler = () => {
    audioInst1?.play();
  };

  const segment1ExitHandler = () => {
    audioInst1?.stop();
  };

  const actionClickHandler = () => {
    if (timer) {
      return;
    }

    setIsFoxActive(true);
    audioInst2?.play();

    timer = setTimeout(() => {
      setIsFoxActive(false);
      timer = null;
    }, 2500);
  };

  return (
    <PageWrapper>
      <Segment isActive onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
        <p>
          Сова Клара знала, что вдвоем им будет весело, так что продолжила наблюдать за тем, как готовит Лиса Ярка. Вот
          только она как раз
          <Action onClick={actionClickHandler}>
            забежала в нору,
          </Action>
          поставив пирог на огонь.
          <Fox isActive={isFoxActive} />
        </p>
      </Segment>
    </PageWrapper>
  );
};
