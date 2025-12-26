import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useBackground } from 'activeBook-core/hooks/effects/background';

export const Page6 = () => {
  useBackground({
    id: 'page-6_bg',
    images: [{
      src: './assets/book_data/images/backgrounds/hut.jpg',
    }],
  });

  return (
    <PageWrapper />
  );
};
