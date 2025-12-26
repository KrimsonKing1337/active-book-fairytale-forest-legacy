import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { H1, H2, P } from 'activeBook-core/components';

import { FlowersAnimation } from './components';

export const Page1 = () => {
  useBackground({
    id: 'page-1_flowers-animation',
    Component: <FlowersAnimation />,
  });

  useBackground({
    id: 'page-1_bg',
    style: {
      zIndex: -1,
    },
    images: [{
      src: './assets/book_data/images/backgrounds/forest.jpg',
    }],
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
      <H1>
        Сказка первая.
      </H1>

      <H2>
        Сказочный лес и его обитатели.
      </H2>

      <P>
        В Сказочном лесу начиналось утро: птицы весело распевали свои песни, солнечные лучи пробивались сквозь высокие
        кроны деревьев, мягко касаясь земли, а в ветвях шумел ветерок.
      </P>
    </PageWrapper>
  );
};
