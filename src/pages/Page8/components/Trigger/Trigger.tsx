import { useEffect, useState } from 'react';

import type { Timer } from 'activeBook-core/@types';

import { Action } from 'activeBook-core/components/ColoredTextTrigger';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { Emojis } from '../Emojis';

let timer: Timer = null;

export const Trigger = () => {
  const [show, setShow] = useState(false);

  const Component = show ? <Emojis /> : null;

  useBackground({
    id: 'page-8-trigger-emojis',
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
    setShow(true);

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setShow(false);
      timer = null;
    }, 5000);
  };

  return (
    <Action onClick={clickHandler}>
      что-то совсем нелепое
    </Action>
  );
};
