import { PageWrapper } from 'activeBook-core/components/PageWrapper';
import { useBackground } from 'activeBook-core/hooks/effects/background';

export const Page18 = () => {
  useBackground({
    id: 'page-18_bg',
    images: [{
      src: './assets/book_data/images/backgrounds/treasure.png',
    }],
  });

  return (
    <PageWrapper />
  );
};
