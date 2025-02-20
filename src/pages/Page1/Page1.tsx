import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { Flowers } from './components';

export const Page1 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/birds-brook-leafs.mp3',
    type: 'bg',
    playOnLoad: true,
    loop: true,
  });

  const backgroundComponent = {
    Component: <Flowers />,
    withShadow: false,
  };

  return (
    <PageWrapper backgroundComponent={backgroundComponent}>
      <h1>
        Сказка первая.
      </h1>

      <h2>
        Сказочный лес и его обитатели.
      </h2>

      <p>
        В Сказочном лесу начиналось утро: птицы весело распевали свои песни, солнечные лучи пробивались сквозь высокие
        кроны, мягко касаясь земли, а в ветвях шумел ветерок.
      </p>
    </PageWrapper>
  );
};
