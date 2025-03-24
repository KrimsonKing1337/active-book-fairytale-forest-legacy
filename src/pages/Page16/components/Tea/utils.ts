import { getShuffledArray } from 'activeBook-core/utils/getShuffledArray';

const fills = [
  'deepskyblue',
  'lightgreen',
  'purple',
  'orange',
  'pink',
];

export const getShuffledFills = () => {
  return getShuffledArray(fills);
};
