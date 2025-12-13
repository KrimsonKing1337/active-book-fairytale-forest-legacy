import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useVibration } from 'activeBook-core/hooks/effects/vibration';

import { Segment } from 'activeBook-core/components';

import { Trigger } from './components';

export const Page10 = () => {
  const audioInst1 = useAudio({
    id: 'page-10-kids-laughing-2',
    src: './assets/book_data/audios/sounds/kid-laughing.mp3',
  });

  const audioInst2 = useAudio({
    id: 'page-10-creaking-wood',
    src: './assets/book_data/audios/sounds/creaking-wood.mp3',
  });

  const audioInst3 = useAudio({
    id: 'page-10-rustling-grass',
    src: './assets/book_data/audios/sounds/rustling-grass.mp3',
  });

  const { vibrationOff } = useVibration();

  const segment1EnterHandler = () => {
    audioInst1?.play();
  };

  const segment1ExitHandler = () => {
    audioInst1?.stop();
  };

  const segment2EnterHandler = async () => {
    audioInst2?.play();
  };

  const segment2ExitHandler = () => {
    audioInst2?.stop();
    vibrationOff();
  };

  const segment3EnterHandler = () => {
    audioInst3?.play();
  };

  const segment3ExitHandler = () => {
    audioInst3?.stop();
  };

  return (
    <PageWrapper>
      <Segment isActive onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
        <p>
          Лёва, рассмотрев изобретение, снова рассмеялся:
          <br />
          <br />
          — Это же велосипед!
        </p>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <p>
          Барсик подхватил:
          <br />
          <br />
          — Эх, Ёжик, ты, я смотрю,
          <Trigger />
          и сделал из них новые дрова!
          Велосипед! Да это изобретение старо как мир!
        </p>
      </Segment>

      <Segment onEnter={segment3EnterHandler} onExit={segment3ExitHandler}>
        <p>
          Но Ёжик не обиделся и с добрым смехом ответил:
          <br />
          <br />
          — Ну и что с того! Зато мой велосипед самый колючий и неповторимый!
          Может, это и есть главное открытие.
        </p>
      </Segment>
    </PageWrapper>
  );
};
