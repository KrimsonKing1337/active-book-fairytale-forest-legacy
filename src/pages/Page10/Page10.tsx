import { useState } from 'react';

import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { Segment } from 'activeBook-core/components';

import { Swing } from './components';

export const Page10 = () => {
  const [isSwingActive, setIsSwingActive] = useState(false);

  const audioInst1 = useAudio({
    id: 'page-8_child-humming',
    page: 8,
    src: './assets/book_data/audios/sounds/child-humming.mp3',
  });

  const audioInst2 = useAudio({
    id: 'page-8_child-humming2',
    page: 8,
    src: './assets/book_data/audios/sounds/child-humming2.mp3',
  });

  const segment1EnterHandler = () => {
    audioInst1?.play();
    setIsSwingActive(true);
  };

  const segment1ExitHandler = () => {
    audioInst1?.stop();
    setIsSwingActive(false);
  };

  const segment2EnterHandler = () => {
    audioInst2?.play();
  };

  const segment2ExitHandler = () => {
    audioInst2?.stop();
  };

  return (
    <PageWrapper>
      <Segment isActive onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
        <p>
          Барсик,
          <Swing isActive={isSwingActive} />
          запел свою версию известной всему Сказочному лесу песни о природе, добавляя к каждому слову весёлые звуки.
        </p>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <p>
          Лёва пытался подхватить мелодию по-своему, путая брата и делая песню ещё забавнее.
        </p>
      </Segment>
    </PageWrapper>
  );
};
