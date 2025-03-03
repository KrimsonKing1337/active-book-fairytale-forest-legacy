import { useEffect, useState } from 'react';

import { Action } from 'activeBook-core/components/ColoredTextTrigger';

import type { Timer } from 'activeBook-core/@types';

import { TreasureMap } from '../TreasureMap';

let timer: Timer = null;

export const Trigger = () => {
  const [isTreasureMapActive, setIsTreasureMapActive] = useState(false);

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, []);

  const clickHandler = () => {
    if (timer) {
      return;
    }

    setIsTreasureMapActive(true);

    timer = setTimeout(() => {
      setIsTreasureMapActive(false);
      timer = null;
    }, 12000);
  };

  return (
    <>
      <Action onClick={clickHandler}>
        клад.
      </Action>

      {isTreasureMapActive && (
        <TreasureMap />
      )}
    </>
  );
};
