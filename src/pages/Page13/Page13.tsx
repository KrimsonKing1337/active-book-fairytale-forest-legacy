import { useState } from 'react';

import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { Segment } from 'activeBook-core/components';

import { Jumping } from './components';

export const Page13 = () => {
  const [isJumpingActive, setIsJumpingActive] = useState(false);

  const audioInst1 = useAudio({
    id: 'page-12-kids-laughing-2',
    page: 12,
    src: './assets/book_data/audios/sounds/kids-laughing-2.mp3',
  });

  const audioInst2 = useAudio({
    id: 'page-12-running-on-grass-with-wind',
    page: 12,
    src: './assets/book_data/audios/sounds/running-on-grass-with-wind.mp3',
    loop: true,
  });

  const audioInst3 = useAudio({
    id: 'page-12-rustling-grass-birds-singing',
    page: 12,
    src: './assets/book_data/audios/sounds/rustling-grass-birds-singing.mp3',
    loop: true,
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
        <p>
          — Хорошо, Ёжик, пусть тогда твой велосипед будет новым стандартом колючести! – наконец сказал Лёва, и все
          засмеялись.
        </p>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <p>
          Клара оставила друзей наслаждаться летним днем и испытывать новое изобретение Ёжика и посмотрела в другую
          сторону. По залитой солнцем тропинке
          <Jumping isActive={isJumpingActive} />
          Ему сегодня было особенно весело, потому что он придумал, что станет великим первооткрывателем.
        </p>
      </Segment>

      <Segment onEnter={segment3EnterHandler} onExit={segment3ExitHandler}>
        <p>
          Листья под его лапками тихо шуршали, а где-то высоко в ветвях пели птицы.
        </p>
      </Segment>
    </PageWrapper>
  );
};
