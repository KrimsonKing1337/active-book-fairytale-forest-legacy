import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useBackground } from 'activeBook-core/hooks/effects/background';
import { useAudio } from 'activeBook-core/hooks/effects/audio';

export const Page22 = () => {
  useAudio({
    id: 'page-22_fireplace',
    page: 22,
    src: './assets/book_data/audios/sounds/fireplace.mp3',
    loop: true,
    playOnLoad: true,
  });

  useBackground({
    id: 'page-22_bg',
    images: [{
      src: './assets/book_data/images/backgrounds/fox_hut.png',
    }],
  });

  return (
    <PageWrapper />
  );
};
