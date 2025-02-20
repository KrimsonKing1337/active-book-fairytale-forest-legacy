import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { Action } from 'activeBook-core/components/ColoredTextTrigger';

export const Page6 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/book-dropped.mp3',
    playOnLoad: true,
  });

  const audioInst = useAudio({
    src: '/assets/book_data/audios/sounds/cuckoo-watch.mp3',
  });

  const onClick = () => {
    audioInst?.play();
  };

  return (
    <PageWrapper>
      <p>
        Барсик неосторожно махнул хвостом и смахнул с тумбочки брата книгу.
        Подняв ее, он сказал:
        <br />
        <br />
        — Да ладно, часы были хороши! Просто никто не ждал, что они начнут куковать каждые тридцать секунд.
        <br />
        <br />
        — До сих пор это
        <Action onClick={onClick}>«ку-ку»</Action>
        мне во снах снится...
      </p>
    </PageWrapper>
  );
};
