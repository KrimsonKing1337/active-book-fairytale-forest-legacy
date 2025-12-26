import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useBackground } from 'activeBook-core/hooks/effects/background';

export const Page12 = () => {
  useBackground({
    id: 'page-12_bg',
    images: [{
      src: './assets/book_data/images/backgrounds/trail.jpg',
    }],
  });

  return (
    <PageWrapper />
  );
};
