import { PageWrapper } from 'activeBook-core/components/PageWrapper';
import { useBackground } from 'activeBook-core/hooks/effects/background';

export const Page22 = () => {
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
