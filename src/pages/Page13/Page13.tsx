import { PageWrapper } from 'activeBook-core/components/PageWrapper';
import { Action } from 'activeBook-core/components/ColoredTextTrigger';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { TriggerCarrots, TriggerClouds } from './components';

export const Page13 = () => {
  const audioInst1 = useAudio({
    id: 'page-13-intrigue',
    page: 13,
    src: './assets/book_data/audios/sounds/intrigue.mp3',
  });

  const action1ClickHandler = () => {
    audioInst1?.play();
  };

  return (
    <PageWrapper>
      <p>
        — Сначала я найду самую огромную
        <TriggerCarrots />
        в лесу! — сказал он громко, как будто кто-то должен был услышать и порадоваться вместе с ним.
      </p>

      <p>
        — Хотя нет, морковь в лесу не растёт. Тогда я… э-э, тогда я найду
        <Action onClick={action1ClickHandler}>
          клад!
        </Action>
        Ну а потом напишу про это книгу!
      </p>

      <p>
        Он остановился и задумчиво посмотрел на
        <TriggerClouds />
      </p>
    </PageWrapper>
  );
};
