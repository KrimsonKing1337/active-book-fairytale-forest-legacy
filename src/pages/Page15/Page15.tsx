import { useState } from 'react';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { PageWrapper, Segment, P } from 'activeBook-core/components';

import { Jumping } from './components';

export const Page15 = () => {
  const [isJumpingActive, setIsJumpingActive] = useState(false);

  const audioInst1 = useAudio({
    id: 'page-15-kids-laughing-2',
    page: 15,
    src: './assets/book_data/audios/sounds/kids-laughing-2.mp3',
  });

  const audioInst2 = useAudio({
    id: 'page-15-running-on-grass-with-wind',
    page: 15,
    src: './assets/book_data/audios/sounds/running-on-grass-with-wind.mp3',
    loop: true,
  });

  const audioInst3 = useAudio({
    id: 'page-15-rustling-grass-birds-singing',
    page: 15,
    src: './assets/book_data/audios/sounds/rustling-grass-birds-singing.mp3',
    loop: true,
  });

  useBackground({
    id: 'page-15_bg',
    style: {
      zIndex: -1,
    },
    images: [{
      src: './assets/book_data/images/backgrounds/stream.png',
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
  };

  const segment1ExitHandler = () => {
    audioInst1?.stop();
  };

  const segment2EnterHandler = () => {
    audioInst2?.play();
    setIsJumpingActive(true);
  };

  const segment2ExitHandler = () => {
    audioInst2?.stop();
    setIsJumpingActive(false);
  };

  const segment3EnterHandler = () => {
    audioInst3?.play();
  };

  const segment3ExitHandler = () => {
    audioInst3?.stop();
  };

  return (
    <PageWrapper>
      <Segment isActive onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
        <P>
          — Хорошо, Ёжик, пусть тогда твой велосипед будет новым стандартом колючести! – наконец сказал Лёва, и все
          засмеялись.
        </P>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <P>
          Клара оставила друзей наслаждаться летним днем и испытывать новое изобретение Ёжика и посмотрела в другую
          сторону. По залитой солнцем тропинке
          <Jumping isActive={isJumpingActive} />
          Ему сегодня было особенно весело, потому что он придумал, что станет великим первооткрывателем.
        </P>
      </Segment>

      <Segment onEnter={segment3EnterHandler} onExit={segment3ExitHandler}>
        <P>
          Листья под его лапками тихо шуршали, а где-то высоко в ветвях пели птицы.
        </P>
      </Segment>
    </PageWrapper>
  );
};
