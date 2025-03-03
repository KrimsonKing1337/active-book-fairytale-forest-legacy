import { useEffect, useState } from 'react';

import type { Timer } from 'activeBook-core/@types';

import { Action } from 'activeBook-core/components/ColoredTextTrigger';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { Clouds } from '../Clouds';

let timer: Timer = null;

export const TriggerClouds = () => {
  const [isActive, setIsActive] = useState(false);

  const Component = isActive ? <Clouds /> : null;

  useBackground({
    id: 'clouds',
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
    }, 25000);
  };

  return (
    <Action onClick={clickHandler}>
      небо.
    </Action>
  );
};
