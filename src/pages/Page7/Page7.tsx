import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { Segment, P } from 'activeBook-core/components';

import { screwBoltVibration, screwBoltVibrationStop } from './effects';

export const Page7 = () => {
  const audioInst1 = useAudio({
    id: 'page-7_water-stream',
    page: 7,
    src: './assets/book_data/audios/sounds/water-stream.mp3',
    loop: true,
  });

  const audioInst2 = useAudio({
    id: 'page-7_paper',
    page: 7,
    src: './assets/book_data/audios/sounds/paper.mp3',
  });

  const audioInst3 = useAudio({
    id: 'page-7_screw-bolt',
    page: 7,
    src: './assets/book_data/audios/sounds/screw-bolt.mp3',
  });

  useBackground({
    id: 'page-7_bg',
    style: {
      zIndex: -1,
    },
    images: [{
      src: './assets/book_data/images/backgrounds/stream.png',
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
        <P>
          Ещё Клара видела, как Ёжик в полном восторге бегал туда-сюда вдоль тихо журчащего ручья.
        </P>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <P>
          Он проверял каждую деталь своего нового изобретения. Повсюду валялись чертежи, какие-то деревяшки и даже пара
          свёрнутых носков (где он их нашёл — загадка).
        </P>
      </Segment>

      <Segment onEnter={segment3EnterHandler} onExit={segment3ExitHandler}>
        <P>
          — Ну вот, деталь сюда, болтик сюда... Ух, кажется, готово!
        </P>
      </Segment>
    </PageWrapper>
  );
};
