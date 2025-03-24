import { useEffect } from 'react';

import type { Timer } from 'activeBook-core/@types';

import { useVibration } from 'activeBook-core/hooks/effects/vibration';

const timers: Timer[] = new Array(4).fill(null);

export const useFoxVibration = () => {
  const { vibrationOn, vibrationOff } = useVibration();

  useEffect(() => {
    return () => {
      timers.forEach((timerCur) => {
        if (timerCur) {
          clearTimeout(timerCur);
        }
      });

      vibrationOff();
    };
  }, []);

  const vibrate = () => {
    timers[0] = setTimeout(() => {
      vibrationOn(100);
    }, 500);

    timers[1] = setTimeout(() => {
      vibrationOn(100);
    }, 1000);

    timers[2] = setTimeout(() => {
      vibrationOn(100);
    }, 1500);

    timers[3] = setTimeout(() => {
      vibrationOn(100);
    }, 2000);
  };

  return {
    vibrate,
  };
};
