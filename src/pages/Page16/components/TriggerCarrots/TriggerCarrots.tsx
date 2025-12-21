import { useEffect, useState } from 'react';

import type { Timer } from 'activeBook-core/@types';

import { Action } from 'activeBook-core/components/ColoredTextTrigger';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { Carrots } from '../Carrots';

let timer: Timer = null;

export const TriggerCarrots = () => {
  const [isActive, setIsActive] = useState(false);

  const Component = isActive ? <Carrots /> : null;

  useBackground({
    id: 'carrots',
    Component,
  });

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  const clickHandler = () => {
    setIsActive(true);

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setIsActive(false);
      timer = null;
    }, 15000);
  };

  return (
    <Action onClick={clickHandler}>
      морковь
    </Action>
  );
};
