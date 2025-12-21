import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { Segment } from 'activeBook-core/components';

import { screwBoltVibration, screwBoltVibrationStop } from './effects';

export const Page7 = () => {
  const audioInst1 = useAudio({
    id: 'page-6_water-stream',
    page: 6,
    src: './assets/book_data/audios/sounds/water-stream.mp3',
    loop: true,
  });

  const audioInst2 = useAudio({
    id: 'page-6_paper',
    page: 6,
    src: './assets/book_data/audios/sounds/paper.mp3',
  });

  const audioInst3 = useAudio({
    id: 'page-6_screw-bolt',
    page: 5,
    src: './assets/book_data/audios/sounds/screw-bolt.mp3',
  });

  const segment1EnterHandler = () => {
    audioInst1?.play();
  };

  const segment1ExitHandler = () => {
    audioInst1?.stop();
  };

  const segment2EnterHandler = () => {
    audioInst2?.play();
  };

  const segment2ExitHandler = () => {
    audioInst2?.stop();
  };

  const segment3EnterHandler = () => {
    audioInst3?.play();
    screwBoltVibration();
  };

  const segment3ExitHandler = () => {
    audioInst3?.stop();
    screwBoltVibrationStop();
  };

  return (
    <PageWrapper>
      <Segment isActive onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
        <p>
          Ещё Клара видела, как Ёжик в полном восторге бегал туда-сюда вдоль тихо журчащего ручья.
        </p>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <p>
          Он проверял каждую деталь своего нового изобретения. Повсюду валялись чертежи, какие-то деревяшки и даже пара
          свёрнутых носков (где он их нашёл — загадка).
        </p>
      </Segment>

      <Segment onEnter={segment3EnterHandler} onExit={segment3ExitHandler}>
        <p>
          — Ну вот, деталь сюда, болтик сюда... Ух, кажется, готово!
        </p>
      </Segment>
    </PageWrapper>
  );
};
