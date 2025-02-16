import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useSound } from 'activeBook-core/hooks/effects/audio/sound';

import { FlowersBlossom } from './components';

export const Page1 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/birds-brook-leafs.mp3',
    playOnLoad: true,
    loop: true,
  });

  return (
    <PageWrapper BackgroundComponent={<FlowersBlossom />}>
      <h1>
        Сказка первая.
      </h1>

      <h2>
        Сказочный лес и его обитатели.
      </h2>

      <p>
        В Сказочном лесу начиналось утро: птицы весело распевали свои песни, солнечные лучи пробивались сквозь высокие
        кроны, мягко касаясь земли, а в ветвях шумел ветерок. Высоко-высоко на самом большом дереве мудрая Сова Клара
        наблюдала за лесом из густой тени ветвей. Некоторые думают, что совы плохо видят днем, но это неправда – их
        круглые глаза одинаково хорошо видят в темноте и на свету. Клару уважали все звери леса.
      </p>
    </PageWrapper>
  );
};
