import { PageWrapper, P } from 'activeBook-core/components';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { BackgroundComponent } from './components';

export const Page25 = () => {
  useBackground({
    id: 'page-20_background-component',
    Component: <BackgroundComponent />,
  });

  useBackground({
    id: 'page-25-bg',
    style: {
      zIndex: -1,
    },
    images: [{ src: './assets/book_data/images/backgrounds/fox_and_rabbit.jpg' }],
    shadow: {
      show: true,
      style: {
        zIndex: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(3px)',
      },
    },
  });

  return (
    <PageWrapper>
      <P>
        Вот и сказочке конец. Кто внимал ей - молодец!
      </P>
    </PageWrapper>
  );
};
