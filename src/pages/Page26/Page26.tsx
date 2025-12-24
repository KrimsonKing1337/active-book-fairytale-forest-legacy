import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useBackground } from 'activeBook-core/hooks/effects/background';

export const Page26 = () => {
  useBackground({
    id: 'page-26-bg',
    images: [{ src: './assets/book_data/images/backgrounds/fox_and_rabbit.png' }],
  });

  return (
    <PageWrapper />
  );
};
