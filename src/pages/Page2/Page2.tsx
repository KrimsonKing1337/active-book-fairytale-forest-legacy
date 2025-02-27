import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { Segment } from 'activeBook-core/components';

export const Page2 = () => {
  const audioInst1 = useAudio({
    src: '/assets/book_data/audios/sounds/owl-and-branches.mp3',
  });

  const audioInst2 = useAudio({
    src: '/assets/book_data/audios/sounds/cat-meow.mp3',
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

  return (
    <PageWrapper>
      <Segment isActive onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
        <p>
          Высоко-высоко на самом большом дереве мудрая Сова Клара
          наблюдала за лесом из густой тени ветвей. Некоторые думают, что совы плохо видят днем, но это неправда – их
          круглые глаза одинаково хорошо видят в темноте и на свету. Клару уважали все звери леса.
        </p>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <p>
          Клара видела, как в небольшой уютной избушке – Барсик и Лёва – начинали свой день. Барсик уже бодро
          прохаживался по комнате, вытирая усы после утреннего умывания, а вот его младший брат Лёва только-только
          просыпался.
        </p>
      </Segment>
    </PageWrapper>
  );
};
