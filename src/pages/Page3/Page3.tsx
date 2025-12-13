import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { Segment } from 'activeBook-core/components';
import { Action } from 'activeBook-core/components/ColoredTextTrigger';

export const Page3 = () => {
  const audioInst1 = useAudio({
    id: 'page-3-pigeon-flying-and-bed-creaking',
    page: 3,
    src: './assets/book_data/audios/sounds/pigeon-flying-and-bed-creaking.mp3',
  });

  const audioInst2 = useAudio({
    id: 'page-3-book-dropped',
    page: 3,
    src: './assets/book_data/audios/sounds/book-dropped.mp3',
  });

  const audioInst3 = useAudio({
    id: 'page-3-cuckoo-watch',
    page: 3,
    src: './assets/book_data/audios/sounds/cuckoo-watch.mp3',
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
        <p>
          В этот момент где-то неподалёку вспорхнула птица.
          <br />
          Лёва лениво повернулся на другой бок и протянул:
          <br />
          <br />
          — Подумаешь… Это точно не что-нибудь вроде «О-о, смотрите, я изобрёл часы, которые тикают громче всех»?
          Помнишь, что было в прошлый раз?
        </p>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <p>
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
        </p>
      </Segment>
    </PageWrapper>
  );
};
