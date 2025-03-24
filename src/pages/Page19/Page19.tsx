import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { BackgroundComponent } from './components';

export const Page19 = () => {
  useBackground({
    id: 'page-19-background-component',
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
