import { useState } from 'react';

import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { Segment } from 'activeBook-core/components';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { BunnyAndFoxFacesWrapper, Feather } from './components';

export const Page18 = () => {
  const [isFacesActive, setIsFacesActive] = useState(false);

  useBackground({
    id: 'page-18-feather',
    Component: <Feather />,
  });

  const audioInst1 = useAudio({
    id: 'page-18-bird-flapping-wings-short',
    src: './assets/book_data/audios/sounds/bird-flapping-wings-short.mp3',
  });

  const audioInst2 = useAudio({
    id: 'page-18-tea-party',
    src: './assets/book_data/audios/sounds/tea-party.mp3',
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
        <p>
          — Каждый день – новый урок, — сказала она, хлопая крыльями. — Сегодня, кажется мне, урок будет такой:
          «Планируйте и договаривайтесь заранее!» Вот Ёжик предупредил Барсика с Лёвой о своей затее, и они чудесно
          провели день. А Зайчонок и Корова пошли за кладом наобум, и Ярка свой пирог приготовила, не пригласив гостей –
          а в итоге и клада не нашли, и пирог ещё чуть-чуть и пропал бы.
        </p>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <BunnyAndFoxFacesWrapper isActive={isFacesActive}>
          <p>
            - А велосипед и пирог разве не клад? – спросил Зайчонок. – По-моему, настоящий клад!
          </p>

          <p>
            - Да и пирог не пропал. А чуть-чуть не считается! – хитро добавила Лиса.
          </p>
        </BunnyAndFoxFacesWrapper>
      </Segment>

      <Segment onEnter={segment3EnterHandler} onExit={segment3ExitHandler}>
        <p>
          - Тогда пойдемте пить чай, - сказал Барсик.
        </p>

        <p>
          И все дружно пошли пить чай с пирогом, смеясь и рассказывая о том, как весело провели сегодняшний день.
        </p>
      </Segment>
    </PageWrapper>
  );
};
