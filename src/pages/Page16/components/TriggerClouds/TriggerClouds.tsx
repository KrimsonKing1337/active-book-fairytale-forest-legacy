import { useEffect, useState } from 'react';

import type { Timer } from 'activeBook-core/@types';

import { Action } from 'activeBook-core/components/ColoredTextTrigger';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { Clouds } from '../Clouds';

let timer: Timer = null;

export const TriggerClouds = () => {
  const [isActive, setIsActive] = useState(false);

  const Component = isActive ? <Clouds /> : null;

  const destroy = useBackground({
    id: 'page-12-trigger-clouds',
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
    destroy();
    setIsActive(true);

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      destroy();
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
