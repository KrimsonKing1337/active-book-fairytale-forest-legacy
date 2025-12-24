import { useState } from 'react';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { PageWrapper, Segment, P } from 'activeBook-core/components';

import { Swing } from './components';

export const Page10 = () => {
  const [isSwingActive, setIsSwingActive] = useState(false);

  const audioInst1 = useAudio({
    id: 'page-10_child-humming',
    page: 10,
    src: './assets/book_data/audios/sounds/child-humming.mp3',
  });

  const audioInst2 = useAudio({
    id: 'page-10_child-humming2',
    page: 10,
    src: './assets/book_data/audios/sounds/child-humming2.mp3',
  });

  useBackground({
    id: 'page-10_bg',
    style: {
      zIndex: -1,
    },
    images: [{
      src: './assets/book_data/images/backgrounds/trail.png',
    }],
    shadow: {
      show: true,
      style: {
        zIndex: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(3px)',
      },
    },
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
        <P>
          Барсик,
          <Swing isActive={isSwingActive} />
          запел свою версию известной всему Сказочному лесу песни о природе, добавляя к каждому слову весёлые звуки.
        </P>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <P>
          Лёва пытался подхватить мелодию по-своему, путая брата и делая песню ещё забавнее.
        </P>
      </Segment>
    </PageWrapper>
  );
};
