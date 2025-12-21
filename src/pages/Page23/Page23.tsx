import { useState } from 'react';

import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { Segment } from 'activeBook-core/components';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { imgSrcs } from './utils';

export const Page23 = () => {
  const [bgImageSrc, setBgImageSrc] = useState(imgSrcs[0]);

  const audioInst1 = useAudio({
    id: 'page-23_footsteps-dirt',
    page: 23,
    src: './assets/book_data/audios/sounds/footsteps-dirt.mp3',
    loop: true,
  });

  const audioInst2 = useAudio({
    id: 'page-23-owl-landing-down',
    page: 23,
    src: './assets/book_data/audios/sounds/owl-landing-down.mp3',
  });

  const audioInst3 = useAudio({
    id: 'page-23-yay-children',
    page: 23,
    src: './assets/book_data/audios/sounds/yay-children.mp3',
  });

  /* Здесь меняем только первое изображение.
   * Второе и третье нужно только для подгрузки в кэш перед показом страницы.
   * Иначе при смене bgImageSrc новое изображение будет подгрудаться, и задний фон будет мерцать
  */
  const destroy = useBackground({
    id: 'page-23_bg',
    style: {
      zIndex: -1,
    },
    images: [
      { src: bgImageSrc },
      { src: imgSrcs[1], style: { opacity: 0 } },
      { src: imgSrcs[2], style: { opacity: 0 } },
    ],
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

    if (bgImageSrc !== imgSrcs[0]) {
      destroy();
    }

    setBgImageSrc(imgSrcs[0]);
  };

  const segment1ExitHandler = () => {
    audioInst1?.stop();
  };

  const segment2EnterHandler = () => {
    audioInst2?.play();
    destroy();
    setBgImageSrc(imgSrcs[1]);
  };

  const segment2ExitHandler = () => {
    audioInst2?.stop();
  };

  const segment3EnterHandler = () => {
    audioInst3?.play();
    destroy();
    setBgImageSrc(imgSrcs[2]);
  };

  const segment3ExitHandler = () => {
    audioInst3?.stop();
  };

  return (
    <PageWrapper>
      <Segment isActive onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
        <p>
          И она направилась к дому Барсика и Лёвы.
        </p>

        <p>
          Но дома котов не было. Они ушли к ручью и остались там с Ёжиком, но Лиса Ярка этого не знала.
        </p>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <p>
          Чтобы она не расстроилась, что её пирог некому есть, Сова Клара слетела со своего дерева и вскоре села на
          крышу избушки Барсика и Лёвы.
        </p>

        <p>
          — Коты у ручья с Ёжиком, катаются на новом велосипеде, — объяснила она пригорюнившейся Ярке. — Иди к ним, а я
          остальных приведу.
        </p>

        <p>
          А Зайчонок Прыг-Прыг с Коровой Ягодкой все еще бродили по лесу. Они пока не нашли никакого клада, а идти уже
          устали. И тут мудрая Клара, пролетая над ними, посоветовала идти к ручью.
        </p>
      </Segment>

      <Segment onEnter={segment3EnterHandler} onExit={segment3ExitHandler}>
        <p>
          То-то было радости, когда все встретились у ручья! Барсик и Лева с Ёжиком уже проголодались, Прыг-Прыг с
          Ягодкой тоже, а у Ярки как раз был готов для всех ее чудесный пирог!
        </p>

        <p>
          Последней прилетела мудрая Сова.
        </p>
      </Segment>
    </PageWrapper>
  );
};
