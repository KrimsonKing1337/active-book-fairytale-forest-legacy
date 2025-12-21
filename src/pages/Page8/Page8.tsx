import { PageWrapper } from 'activeBook-core/components/PageWrapper';
import { useBackground } from 'activeBook-core/hooks/effects/background';

export const Page8 = () => {
  useBackground({
    id: 'page-8_bg',
    images: [{
      src: './assets/book_data/images/backgrounds/stream.png',
    }],
  });

  return (
    <PageWrapper />
  );
};
