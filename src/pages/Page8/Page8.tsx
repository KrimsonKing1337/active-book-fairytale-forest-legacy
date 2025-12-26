import { PageWrapper } from 'activeBook-core/components/PageWrapper';
import { useBackground } from 'activeBook-core/hooks/effects/background';
import { useAudio } from 'activeBook-core/hooks/effects/audio';

export const Page8 = () => {
  useAudio({
    id: 'page-8_water-stream',
    page: 8,
    src: './assets/book_data/audios/sounds/water-stream.mp3',
    loop: true,
    playOnLoad: true,
  });

  useBackground({
    id: 'page-8_bg',
    images: [{
      src: './assets/book_data/images/backgrounds/stream.jpg',
    }],
  });

  return (
    <PageWrapper />
  );
};
