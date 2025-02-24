import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

export const Page9 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/paper.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <p>
        Он проверял каждую деталь своего нового изобретения. Повсюду валялись чертежи, какие-то деревяшки и даже пара
        свёрнутых носков (где он их нашёл — загадка).
      </p>
    </PageWrapper>
  );
};
