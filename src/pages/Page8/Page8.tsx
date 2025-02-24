import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

export const Page8 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/water-stream.mp3',
    playOnLoad: true,
    loop: true,
  });

  return (
    <PageWrapper>
      <p>
        Ещё Клара видела, как Ёжик в полном восторге бегал туда-сюда вдоль тихо журчащего ручья.
      </p>
    </PageWrapper>
  );
};
