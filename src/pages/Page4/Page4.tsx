import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useSound } from 'activeBook-core/hooks/effects/audio/sound';

import { Hedgehog } from './components';

export const Page4 = () => {
  useSound({
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
