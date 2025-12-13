import { useState } from 'react';

import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { Segment } from 'activeBook-core/components';

import { Action } from 'activeBook-core/components/ColoredTextTrigger';

import type { Timer } from 'activeBook-core/@types';

import { Fox, FirBranchesWrapper, Tea } from './components';
import { useFoxVibration } from './hooks';

let timer: Timer = null;

export const Page16 = () => {
  const [isFoxActive, setIsFoxActive] = useState(false);
  const [isFirBranchesActive, setIsFirBranchesActive] = useState(false);
  const [isTeaActive, setIsTeaActive] = useState(false);

  const { vibrate } = useFoxVibration();

  const audioInst1 = useAudio({
    id: 'page-16-fireplace',
    page: 16,
    src: './assets/book_data/audios/sounds/fireplace.mp3',
    loop: true,
  });

  const audioInst2 = useAudio({
    id: 'page-16-running',
    page: 16,
    src: './assets/book_data/audios/sounds/running.mp3',
    delay: 500,
    relativeVolume: 5,
  });

  const segment1EnterHandler = () => {
    audioInst1?.play();
  };

  const segment1ExitHandler = () => {
    audioInst1?.stop();
  };

  const actionClickHandler = async () => {
    if (timer) {
      return;
    }

    setIsFoxActive(true);
    audioInst2?.play();
    vibrate();

    timer = setTimeout(() => {
      setIsFoxActive(false);
      timer = null;
    }, 2500);
  };

  const segment2EnterHandler = () => {
    setIsFirBranchesActive(true);
  };

  const segment2ExitHandler = () => {
    setIsFirBranchesActive(false);
  };

  const segment3EnterHandler = () => {
    setIsTeaActive(true);
  };

  const segment3ExitHandler = () => {
    setIsTeaActive(false);
  };

  return (
    <PageWrapper>
      <Segment isActive onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
        <p>
          Сова Клара знала, что вдвоем им будет весело, так что продолжила наблюдать за тем, как готовит Лиса Ярка. Вот
          только она как раз
          <Action onClick={actionClickHandler}>
            забежала в нору,
          </Action>
          поставив пирог на огонь.
          <Fox isActive={isFoxActive} />
        </p>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <FirBranchesWrapper isActive={isFirBranchesActive}>
          <p>
            Клара бывала у Ярки в гостях не раз и знала, как хорошо у той дома. Лиса обустроила свою нору с заботой и
            вкусом. Вход украшали маленькие еловые веточки, а внутри было тепло и уютно благодаря мягким коврам из мха
            и листвы, разложенным по полу.
          </p>

          <p>
            Когда пирог был готов, Лиса вышла из норы с причесанной шерстью и в красивом шарфе, и сняла пирог с печи.
          </p>
        </FirBranchesWrapper>
      </Segment>

      <Segment onEnter={segment3EnterHandler} onExit={segment3ExitHandler}>
        <p>
          — Что ж, наш Прыг-Прыг опять что-то великое придумал, — проворковала Ярка, лениво потирая лапку. — Пусть его.
          А я пойду к нашим котам на чай напрошусь.
          <Tea isActive={isTeaActive} />
          Самый хитрый зверь — это тот, кто вовремя напомнит о чае. А если они меня не пригласят, не получат
          свой любимый пирог, ха-ха!
        </p>
      </Segment>
    </PageWrapper>
  );
};
