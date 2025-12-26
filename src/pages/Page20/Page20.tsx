import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { PageWrapper, Action, P } from 'activeBook-core/components';

import { Trigger } from './components';

export const Page20 = () => {
  const audioInst1 = useAudio({
    id: 'page-16_kids-laughing-2',
    page: 20,
    src: './assets/book_data/audios/sounds/kid-laughing.mp3',
  });

  useBackground({
    id: 'page-20_bg',
    style: {
      zIndex: -1,
    },
    images: [{
      src: './assets/book_data/images/backgrounds/fox_hut.jpg',
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

  const clickHandler = () => {
    audioInst1?.play();
  };

  return (
    <PageWrapper>
      <P>
        — Ты, Прыг-Прыг, всегда думаешь, что можешь придумать что-то лучше всех! — отозвалась она. — Уверена, твоя книга
        будет... ну, интересной, но я могла бы написать не хуже!
      </P>

      <P>
        Прыг-Прыг
        <Action onClick={clickHandler}>
          рассмеялся,
        </Action>
        а Ягодка только покачала головой:
      </P>

      <P>
        — Лиса Ярка всегда найдёт, что сказать!
      </P>

      <P>
        — Это точно! — ответил зайчонок, с довольным видом глядя на Ягодку. — Ну что, пошли дальше, искать клад?
      </P>

      <P>
        И они пошли дальше, искать
        <Trigger />
      </P>
    </PageWrapper>
  );
};
