import { useState } from 'react';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { PageWrapper, Segment, P } from 'activeBook-core/components';

import { Questions } from './components';

export const Page13 = () => {
  const [isQuestionActive, setIsQuestionActive] = useState(false);

  const audioInst1 = useAudio({
    id: 'page-13_wow',
    page: 13,
    src: './assets/book_data/audios/sounds/wow.mp3',
  });

  const audioInst2 = useAudio({
    id: 'page-13_hmm',
    page: 13,
    src: './assets/book_data/audios/sounds/hmm.mp3',
  });

  const audioInst3 = useAudio({
    id: 'page-13-applause-cheer',
    page: 13,
    src: './assets/book_data/audios/sounds/applause-cheer.mp3',
  });

  useBackground({
    id: 'page-13_bg',
    style: {
      zIndex: -1,
    },
    images: [{
      src: './assets/book_data/images/backgrounds/stream.jpg',
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

    setIsQuestionActive(true);
  };

  const segment2ExitHandler = () => {
    audioInst2?.stop();

    setIsQuestionActive(false);
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
          Дойдя до ручья, они увидели Ёжика, гордо стоящего рядом с чем-то необычным. Барсик помахал ему:
        </P>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <P>
          — Привет, Ёжик! Что это за чудо техники у тебя такое?
          <Questions isActive={isQuestionActive} />
        </P>
      </Segment>

      <Segment onEnter={segment3EnterHandler} onExit={segment3ExitHandler}>
        <P>
          Ёжик, сияя от гордости, ответил:
          <br />
          <br />
          — Привет, Барсик! Это мой супер-уникальный вездеход! Думаю, он произведет революцию в мире транспорта!
        </P>
      </Segment>
    </PageWrapper>
  );
};
