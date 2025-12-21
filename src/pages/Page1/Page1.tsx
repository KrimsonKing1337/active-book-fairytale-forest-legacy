import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { FlowersAnimation } from './components';

export const Page1 = () => {
  useBackground({
    id: 'page-1-flowers-animation',
    Component: <FlowersAnimation />,
  });

  useBackground({
    id: 'page-1-bg',
    style: {
      zIndex: -1,
    },
    images: [{
      src: './assets/book_data/images/backgrounds/forest.png',
    }],
    shadow: {
      show: true,
      style: {
        backdropFilter: 'blur(3px)',
        zIndex: 2,
      },
    },
  });

  return (
    <PageWrapper>
      <h1>
        Сказка первая.
      </h1>

      <h2>
        Сказочный лес и его обитатели.
      </h2>

      <p>
        В Сказочном лесу начиналось утро: птицы весело распевали свои песни, солнечные лучи пробивались сквозь высокие
        кроны деревьев, мягко касаясь земли, а в ветвях шумел ветерок.
      </p>
    </PageWrapper>
  );
};
