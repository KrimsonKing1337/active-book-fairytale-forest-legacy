import { useState } from 'react';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { PageWrapper, Segment, P } from 'activeBook-core/components';

import { BookAnimation, Books } from './components';

export const Page17 = () => {
  const [isBooksActive, setIsBooksActive] = useState(false);

  const destroy = useBackground({
    id: 'page-17_books',
    Component: isBooksActive ? <Books /> : null,
  });

  const audioInst1 = useAudio({
    id: 'page-17_applause',
    page: 17,
    src: './assets/book_data/audios/sounds/applause.mp3',
  });

  const audioInst2 = useAudio({
    id: 'page-17_cow-moo',
    page: 17,
    src: './assets/book_data/audios/sounds/cow-moo.mp3',
  });

  useBackground({
    id: 'page-17_bg',
    style: {
      zIndex: -1,
    },
    images: [{
      src: './assets/book_data/images/backgrounds/treasure.jpg',
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
  };

  const segment2ExitHandler = () => {
    audioInst2?.stop();
  };

  const segment3EnterHandler = () => {
    destroy();
    setIsBooksActive(true);
  };

  const segment3ExitHandler = () => {
    destroy();
    setIsBooksActive(false);
  };

  return (
    <PageWrapper>
      <Segment isActive onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
        <P>
          — Я, наверное, назову её… эм… «Прыг-Прыг и всё-всё-всё!» — объявил он.
        </P>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <P>
          Он был так увлечён своими мыслями, что даже не заметил, что его догнала его подруга, корова Ягодка.
          Та усмехнулась, услышав, как Зайчонок мечтает вслух.
        </P>
      </Segment>

      <Segment onEnter={segment3EnterHandler} onExit={segment3ExitHandler}>
        <P>
          — Ты уверен, что тебе хватит места в книге для всего-всего-всего? — мягко спросила Ягодка.
        </P>

        <P>
          — Конечно, хватит! А если не хватит, я просто напишу вторую книгу.
          И третью. И четвёртую! — решительно сказал Зайчонок.

          <BookAnimation isActive={isBooksActive} />
        </P>
      </Segment>
    </PageWrapper>
  );
};
