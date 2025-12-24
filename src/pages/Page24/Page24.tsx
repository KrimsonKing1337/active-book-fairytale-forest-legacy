import { useState } from 'react';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { PageWrapper, Segment, P } from 'activeBook-core/components';

import { BunnyAndFoxFacesWrapper, Feather } from './components';

export const Page24 = () => {
  const [isFacesActive, setIsFacesActive] = useState(false);

  useBackground({
    id: 'page-24_feather',
    Component: <Feather />,
  });

  const audioInst1 = useAudio({
    id: 'page-24_bird-flapping-wings-short',
    page: 24,
    src: './assets/book_data/audios/sounds/bird-flapping-wings-short.mp3',
  });

  const audioInst2 = useAudio({
    id: 'page-24_tea-party',
    page: 24,
    src: './assets/book_data/audios/sounds/tea-party.mp3',
  });

  useBackground({
    id: 'page-24_bg',
    style: {
      zIndex: -1,
    },
    images: [{
      src: './assets/book_data/images/backgrounds/hut.png',
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
    setIsFacesActive(true);
  };

  const segment2ExitHandler = () => {
    setIsFacesActive(false);
  };

  const segment3EnterHandler = () => {
    audioInst2?.play();
  };

  const segment3ExitHandler = () => {
    audioInst2?.stop();
  };

  return (
    <PageWrapper>
      <Segment isActive onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
        <P>
          — Каждый день – новый урок, — сказала она, хлопая крыльями. — Сегодня, кажется мне, урок будет такой:
          «Планируйте и договаривайтесь заранее!» Вот Ёжик предупредил Барсика с Лёвой о своей затее, и они чудесно
          провели день. А Зайчонок и Корова пошли за кладом наобум, и Ярка свой пирог приготовила, не пригласив гостей –
          а в итоге и клада не нашли, и пирог ещё чуть-чуть и пропал бы.
        </P>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <BunnyAndFoxFacesWrapper isActive={isFacesActive}>
          <P>
            - А велосипед и пирог разве не клад? – спросил Зайчонок. – По-моему, настоящий клад!
          </P>

          <P>
            - Да и пирог не пропал. А чуть-чуть не считается! – хитро добавила Лиса.
          </P>
        </BunnyAndFoxFacesWrapper>
      </Segment>

      <Segment onEnter={segment3EnterHandler} onExit={segment3ExitHandler}>
        <P>
          - Тогда пойдемте пить чай, - сказал Барсик.
        </P>

        <P>
          И все дружно пошли пить чай с пирогом, смеясь и рассказывая о том, как весело провели сегодняшний день.
        </P>
      </Segment>
    </PageWrapper>
  );
};
