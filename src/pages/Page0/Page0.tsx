import { Page0 as Page0Default } from 'activeBook-core/pages/Page0';

import { useSound } from 'activeBook-core/hooks/effects/audio/sound';
import { useFlashlight } from 'activeBook-core/hooks/effects/flashlight';
import { useVibration } from 'activeBook-core/hooks/effects/vibration';

export const Page0 = () => {
  const { flashlightOn } = useFlashlight();
  const { vibrationOn } = useVibration();

  const audioInst = useSound({
    src: '/assets/book_data/audios/sounds/sword.mp3',
    fadeOutWhenUnload: false,
    onPlay() {
      vibrationOn(200);
      flashlightOn(200);
    },
  });

  const goCallback = async () => {
    await audioInst?.play();
  }

  return (
    <Page0Default
      header="Сказочный лес и его обитатели"
      article="Небольшой сборник сказок для детей и их родителей"
      goCallback={goCallback}
    />
  );
};
