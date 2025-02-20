import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

export const Page5 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/pigeon-flying-and-bed-creaking.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <p>
        В этот момент где-то неподалёку вспорхнула птица.
        <br />
        Лёва лениво повернулся на другой бок и протянул:
        <br />
        <br />
        — Подумаешь… Это точно не что-нибудь вроде «О-о, смотрите, я изобрёл часы, которые тикают громче всех»? Помнишь,
        что было в прошлый раз?
      </p>
    </PageWrapper>
  );
};
