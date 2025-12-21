import { useState } from 'react';

import { PageWrapper } from 'activeBook-core/components/PageWrapper';
import { Segment } from 'activeBook-core/components';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { AppleSlices } from './components';

export const Page15 = () => {
  const [isAppleSlicesActive, setIsAppleSlicesActive] = useState(false);

  useBackground({
    id: 'page-15_apple-slices',
    Component: isAppleSlicesActive ? <AppleSlices /> : null,
  });

  const audioInst1 = useAudio({
    id: 'page-15_humming-woman-with-echo',
    page: 15,
    src: './assets/book_data/audios/sounds/humming-woman-with-echo.mp3',
  });

  const audioInst2 = useAudio({
    id: 'page-15_fireplace',
    page: 15,
    src: './assets/book_data/audios/sounds/fireplace.mp3',
    loop: true,
  });

  const audioInst3 = useAudio({
    id: 'page-15-cutting-vegetables',
    page: 15,
    src: './assets/book_data/audios/sounds/cutting-vegetables.mp3',
    loop: true,
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

    setIsAppleSlicesActive(true);
  };

  const segment3ExitHandler = () => {
    audioInst3?.stop();

    setIsAppleSlicesActive(false);
  };

  return (
    <PageWrapper>
      <Segment isActive onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
        <p>
          Тут в воздухе раздался голос Лисы Ярки. Она пела песню, и эхо разносилось по лесу. Её нора была совсем рядом,
          и друзья решили ненадолго завернуть к ней.
        </p>

        <p>
          — Лиса Ярка! — весело закричал Прыг-Прыг, когда они вышли к ее норе. — Ты что скажешь про мою будущую книгу?
        </p>

        <p>
          Перед норой под навесом стоял деревянный стол, изготовленный из старой, но крепкой древесины – на нём всегда
          блестели чистые медные миски и деревянные ложки, готовые вступить в дело. Сегодня стол покрывала скатерть в
          клеточку, а на ней стояла прозрачная стеклянная банка с засахаренными ягодами, которые Ярка собрала ещё
          прошлым летом.
        </p>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <p>
          Рядом со столом в маленькой печи трещали дрова, Лиса Ярка готовила свой знаменитый яблочный пирог. Её хвост
          мягко покачивался, и каждый её жест был элегантен и плавен, словно танец.
        </p>
      </Segment>

      <Segment onEnter={segment3EnterHandler} onExit={segment3ExitHandler}>
        <p>
          Она ловко нарезала сочные яблоки, аккуратно складывая их в большую глиняную миску.
          Запах корицы и ванили плыл по воздуху. Сова Клара с самого высокого дерева восхищенно смотрела, как Лиса Ярка
          с любовью и мастерством создает своё кулинарное чудо.
        </p>
      </Segment>
    </PageWrapper>
  );
};
