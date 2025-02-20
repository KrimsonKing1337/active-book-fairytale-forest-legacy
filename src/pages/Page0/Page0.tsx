import { Page0 as Page0Default } from 'activeBook-core/pages/Page0';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useFlashlight } from 'activeBook-core/hooks/effects/flashlight';
import { useVibration } from 'activeBook-core/hooks/effects/vibration';

export const Page0 = () => {
  const { flashlightOn } = useFlashlight();
  const { vibrationOn } = useVibration();

  const audioInst = useAudio({
    src: '/assets/book_data/audios/sounds/start-reading.mp3',
    fadeOutWhenUnload: false,
    onPlay() {
      vibrationOn(200);
      flashlightOn(200);
    },
  });

  const goCallback = async () => {
    await audioInst?.play();
  };

  const Footer = () => {
    return (
      <>
        <br />
        <br />

        <p>
          Для перехода вперёд/назад по страницам вы можете использовать свайпы влево/вправо
        </p>
      </>
    );
  };

  return (
    <Page0Default
      header="Сказочный лес и его обитатели"
      subHeader="Небольшой сборник сказок для детей и их родителей"
      Footer={Footer}
      goCallback={goCallback}
    />
  );
};
