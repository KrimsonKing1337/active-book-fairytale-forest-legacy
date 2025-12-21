import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useBackground } from 'activeBook-core/hooks/effects/background';

export const Page4 = () => {
  useBackground({
    id: 'page-4_bg',
    images: [{
      src: './assets/book_data/images/backgrounds/hut.png',
    }],
  });

  return (
    <PageWrapper />
  );
};
