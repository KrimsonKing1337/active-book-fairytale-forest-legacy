import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { Action } from 'activeBook-core/components/ColoredTextTrigger';

import { Trigger } from './components';

export const Page15 = () => {
  const audioInst1 = useAudio({
    id: 'page-15-kids-laughing-2',
    src: '/assets/book_data/audios/sounds/kids-laughing-2.mp3',
  });

  const clickHandler = () => {
    audioInst1?.play();
  };

  return (
    <PageWrapper>
      <p>
        — Ты, Прыг-Прыг, всегда думаешь, что можешь придумать что-то лучше всех! — отозвалась она. — Уверена, твоя книга
        будет... ну, интересной, но я могла бы написать не хуже!
      </p>

      <p>
        Прыг-Прыг
        <Action onClick={clickHandler}>
          рассмеялся,
        </Action>
        а Ягодка только покачала головой:
      </p>

      <p>
        — Лиса Ярка всегда найдёт, что сказать!
      </p>

      <p>
        — Это точно! — ответил зайчонок, с довольным видом глядя на Ягодку. — Ну что, пошли дальше, искать клад?
      </p>

      <p>
        И они пошли дальше, искать
        <Trigger />
      </p>
    </PageWrapper>
  );
};
