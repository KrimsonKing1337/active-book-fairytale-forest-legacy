import type { Timer } from 'activeBook-core/@types';

import { on, off } from 'activeBook-core/utils/effects/vibration';

const timers: Timer[] = new Array(9).fill(null);

export const screwBoltVibration = () => {
  timers[0] = setTimeout(() => {
    on(100);
  }, 156);

  timers[1] = setTimeout(() => {
    on(150);
  }, 1280);

  timers[2] = setTimeout(() => {
    on(85);
  }, 2293);

  timers[3] = setTimeout(() => {
    on(125);
  }, 3278);

  timers[4] = setTimeout(() => {
    on(125);
  }, 3278);

  timers[5] = setTimeout(() => {
    on(50);
  }, 3868);

  timers[6] = setTimeout(() => {
    on(35);
  }, 3868);

  timers[7] = setTimeout(() => {
    on(40);
  }, 4415);

  timers[8] = setTimeout(() => {
    on(50);
  }, 4955);
};

export const screwBoltVibrationStop = () => {
  timers.forEach((timerCur) => {
    if (timerCur) {
      clearTimeout(timerCur);
    }
  });

  off();
};
