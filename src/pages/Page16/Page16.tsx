import { PageWrapper, Action, P } from 'activeBook-core/components';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { TriggerCarrots, TriggerClouds } from './components';

export const Page16 = () => {
  const audioInst1 = useAudio({
    id: 'page-16-intrigue',
    page: 16,
    src: './assets/book_data/audios/sounds/intrigue.mp3',
  });

  useBackground({
    id: 'page-16_bg',
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

  const action1ClickHandler = () => {
    audioInst1?.play();
  };

  return (
    <PageWrapper>
      <P>
        — Сначала я найду самую огромную
        <TriggerCarrots />
        в лесу! — сказал он громко, как будто кто-то должен был услышать и порадоваться вместе с ним.
      </P>

      <P>
        — Хотя нет, морковь в лесу не растёт. Тогда я… э-э, тогда я найду
        <Action onClick={action1ClickHandler}>
          клад!
        </Action>
        Ну а потом напишу про это книгу!
      </P>

      <P>
        Он остановился и задумчиво посмотрел на
        <TriggerClouds />
      </P>
    </PageWrapper>
  );
};
