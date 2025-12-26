import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useBackground } from 'activeBook-core/hooks/effects/background';

export const Page2 = () => {
  useBackground({
    id: 'page-2_bg',
    images: [{
      src: './assets/book_data/images/backgrounds/forest.jpg',
    }],
  });

  return (
    <PageWrapper />
  );
};
