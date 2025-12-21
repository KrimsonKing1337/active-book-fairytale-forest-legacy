import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { BackgroundComponent } from './components';

export const Page23 = () => {
  useBackground({
    id: 'page-20_background-component',
    Component: <BackgroundComponent />,
  });

  return (
    <PageWrapper>
      <p>
        Вот и сказочке конец. Кто внимал ей - молодец!
      </p>
    </PageWrapper>
  );
};
