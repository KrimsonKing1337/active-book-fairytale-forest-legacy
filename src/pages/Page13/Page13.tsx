import { useState } from 'react';

import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { Segment } from 'activeBook-core/components';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { BookAnimation, Books } from './components';

export const Page13 = () => {
  const [isBooksActive, setIsBooksActive] = useState(false);

  useBackground({
    id: 'page13-books',
    Component: isBooksActive ? <Books /> : null,
  });

  const audioInst1 = useAudio({
    id: 'page-13-applause',
    page: 13,
    src: './assets/book_data/audios/sounds/applause.mp3',
  });

  const audioInst2 = useAudio({
    id: 'page-13-cow-moo',
    page: 13,
    src: './assets/book_data/audios/sounds/cow-moo.mp3',
  });

  const segment1EnterHandler = () => {
    audioInst1?.play();
  };

  const segment1ExitHandler = () => {
    audioInst1?.stop();
  };

  const segment2EnterHandler = () => {
    audioInst2?.play();
  };

  const segment2ExitHandler = () => {
    audioInst2?.stop();
  };

  const segment3EnterHandler = () => {
    setIsBooksActive(true);
  };

  const segment3ExitHandler = () => {
    setIsBooksActive(false);
  };

  return (
    <PageWrapper>
      <Segment isActive onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
        <p>
          — Я, наверное, назову её… эм… «Прыг-Прыг и всё-всё-всё!» — объявил он.
        </p>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <p>
          Он был так увлечён своими мыслями, что даже не заметил, что его догнала его подруга, корова Ягодка.
          Та усмехнулась, услышав, как Зайчонок мечтает вслух.
        </p>
      </Segment>

      <Segment onEnter={segment3EnterHandler} onExit={segment3ExitHandler}>
        <p>
          — Ты уверен, что тебе хватит места в книге для всего-всего-всего? — мягко спросила Ягодка.
        </p>

        <p>
          — Конечно, хватит! А если не хватит, я просто напишу вторую книгу.
          И третью. И четвёртую! — решительно сказал Зайчонок.

          <BookAnimation isActive={isBooksActive} />
        </p>
      </Segment>
    </PageWrapper>
  );
};
