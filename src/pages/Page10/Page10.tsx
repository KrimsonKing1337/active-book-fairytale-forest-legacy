import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

export const Page10 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/screw-bolt.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <p>
        — Ну вот, деталь сюда, болтик сюда... Ух, кажется, готово!
      </p>
    </PageWrapper>
  );
};
