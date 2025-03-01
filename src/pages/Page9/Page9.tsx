import { useState } from 'react';

import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { Segment } from 'activeBook-core/components';

import { Questions } from './components';

export const Page9 = () => {
  const [isQuestionActive, setIsQuestionActive] = useState(false);

  const audioInst1 = useAudio({
    src: '/assets/book_data/audios/sounds/wow.mp3',
  });

  const audioInst2 = useAudio({
    src: '/assets/book_data/audios/sounds/hmm.mp3',
  });

  const audioInst3 = useAudio({
    src: '/assets/book_data/audios/sounds/applause-cheer.mp3',
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
        <p>
          Лёва, рассмотрев изобретение, снова рассмеялся:
          <br />
          <br />
          — Это же велосипед!
        </p>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <p>
          — Привет, Ёжик! Что это за чудо техники у тебя такое?
          <Questions isActive={isQuestionActive} />
        </p>
      </Segment>

      <Segment onEnter={segment3EnterHandler} onExit={segment3ExitHandler}>
        <p>
          Ёжик, сияя от гордости, ответил:
          <br />
          <br />
          — Привет, Барсик! Это мой супер-уникальный вездеход! Думаю, он произведет революцию в мире транспорта!
        </p>
      </Segment>
    </PageWrapper>
  );
};
