import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { FlowersAnimation } from './components';

export const Page1 = () => {
  useAudio({
    id: 'page1-birds-brook-leafs',
    src: '/assets/book_data/audios/sounds/birds-brook-leafs.mp3',
    type: 'bg',
    playOnLoad: true,
    loop: true,
  });

  useBackground({
    id: 'page-1-flowers-animation',
    Component: <FlowersAnimation />,
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
