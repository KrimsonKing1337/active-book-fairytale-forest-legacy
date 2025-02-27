import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { Hedgehog } from './components';

export const Page3 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/bed-creaking-and-yawn.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <p>
        Барсик наклонился над сонным Лёвой и весело произнес:
        <br />
        <br />
        — Доброе утро, соня! Пора вставать,
        <Hedgehog />
        приготовил что-то интересное и будет ждать нас утром у ручья!
      </p>
    </PageWrapper>
  );
};
