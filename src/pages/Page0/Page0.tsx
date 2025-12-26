import { Page0 as Page0Default } from 'activeBook-core/pages/Page0';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';
import { useFlashlight } from 'activeBook-core/hooks/effects/flashlight';
import { useVibration } from 'activeBook-core/hooks/effects/vibration';

export const Page0 = () => {
  const { flashlightOn } = useFlashlight();
  const { vibrationOn } = useVibration();

  const audioInst = useAudio({
    id: 'page-0-start-reading',
    page: 0,
    src: './assets/book_data/audios/sounds/start-reading.mp3',
    fadeOutWhenUnload: false,
    onPlay() {
      vibrationOn(200);
      flashlightOn(200);
    },
  });

  useBackground({
    id: 'page-0-bg',
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

  const goCallback = async () => {
    await audioInst?.play();
  };

  return (
    <Page0Default
      header="Сказочный лес и его обитатели"
      subHeader="Небольшой сборник сказок для детей и их родителей (пока готова только первая сказка)"
      goCallback={goCallback}
    />
  );
};
