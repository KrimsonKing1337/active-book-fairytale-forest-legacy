import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useSound } from 'activeBook-core/hooks/effects/audio/sound';

export const Page4 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/bed-creaking-and-yawn.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <p>
        Барсик наклонился над сонным Левой и весело произнес:

        — Доброе утро, соня! Пора вставать, Ёжик Фыр-Фыр ждёт нас. Он вчера сказал, что приготовил что-то интересное и
        будет ждать нас утром у ручья!
      </p>
    </PageWrapper>
  );
};
