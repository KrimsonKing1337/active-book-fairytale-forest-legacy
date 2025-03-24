import { getShuffledArray } from 'activeBook-core/utils/getShuffledArray';

export const images = [
  '/assets/book_data/images/apple-slice1.svg',
  '/assets/book_data/images/apple-slice2.svg',
  '/assets/book_data/images/apple-slice3.svg',
  '/assets/book_data/images/apple-slice4.svg',
  '/assets/book_data/images/apple-slice5.svg',
  '/assets/book_data/images/apple-slice2.svg',
  '/assets/book_data/images/apple-slice3.svg',
  '/assets/book_data/images/apple-slice4.svg',
  '/assets/book_data/images/apple-slice1.svg',
  '/assets/book_data/images/apple-slice5.svg',
];

export const getShuffledImages = () => {
  return getShuffledArray(images);
};
