import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { Action } from 'activeBook-core/components/ColoredTextTrigger';

export const Page12 = () => {
  const hummingAudioInst1 = useAudio({
    src: '/assets/book_data/audios/sounds/child-humming.mp3',
  });

  const hummingAudioInst2 = useAudio({
    src: '/assets/book_data/audios/sounds/child-humming2.mp3',
  });

  const action1ClickHandler = () => {
    hummingAudioInst1?.play();
  };

  const action2ClickHandler = () => {
    hummingAudioInst2?.play();
  };

  return (
    <PageWrapper>
      <p>
        Барсик, раскачиваясь из стороны в сторону,
        <Action onClick={action1ClickHandler}>запел</Action>
        свою версию известной всему Сказочному лесу песни о природе,
        добавляя к каждому слову весёлые звуки. Лёва
        <Action onClick={action2ClickHandler}>пытался подхватить</Action>
        мелодию по-своему, путая брата и делая песню ещё
        забавнее.
      </p>
    </PageWrapper>
  );
};
