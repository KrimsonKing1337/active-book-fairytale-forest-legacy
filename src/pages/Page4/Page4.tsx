import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { Segment, Action, P } from 'activeBook-core/components';

export const Page4 = () => {
  const audioInst1 = useAudio({
    id: 'page-4_pigeon-flying-and-bed-creaking',
    page: 4,
    src: './assets/book_data/audios/sounds/pigeon-flying-and-bed-creaking.mp3',
  });

  const audioInst2 = useAudio({
    id: 'page-4_book-dropped',
    page: 4,
    src: './assets/book_data/audios/sounds/book-dropped.mp3',
  });

  const audioInst3 = useAudio({
    id: 'page-4_cuckoo-watch',
    page: 4,
    src: './assets/book_data/audios/sounds/cuckoo-watch.mp3',
  });

  useBackground({
    id: 'page-4_bg',
    style: {
      zIndex: -1,
    },
    images: [{
      src: './assets/book_data/images/backgrounds/hut.png',
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

  const actionClickHandler = () => {
    audioInst3?.play();
  };

  return (
    <PageWrapper>
      <Segment isActive onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
        <P>
          В этот момент где-то неподалёку вспорхнула птица.
          <br />
          Лёва лениво повернулся на другой бок и протянул:
          <br />
          <br />
          — Подумаешь… Это точно не что-нибудь вроде «О-о, смотрите, я изобрёл часы, которые тикают громче всех»?
          Помнишь, что было в прошлый раз?
        </P>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <P>
          Барсик неосторожно махнул хвостом и смахнул с тумбочки брата книгу.
          Подняв ее, он сказал:
          <br />
          <br />
          — Да ладно, часы были хороши! Просто никто не ждал, что они начнут куковать каждые тридцать секунд.
          <br />
          <br />
          — До сих пор это
          <Action onClick={actionClickHandler}>«ку-ку»</Action>
          мне во снах снится...
        </P>
      </Segment>
    </PageWrapper>
  );
};
