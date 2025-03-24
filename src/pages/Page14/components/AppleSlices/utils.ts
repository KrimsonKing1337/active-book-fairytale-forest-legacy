import { getShuffledArray } from 'activeBook-core/utils/getShuffledArray';

export const images = [
  '/assets/book_data/images/apple-slices/apple-slice-1.svg',
  '/assets/book_data/images/apple-slices/apple-slice-2.svg',
  '/assets/book_data/images/apple-slices/apple-slice-3.svg',
  '/assets/book_data/images/apple-slices/apple-slice-4.svg',
  '/assets/book_data/images/apple-slices/apple-slice-5.svg',
  '/assets/book_data/images/apple-slices/apple-slice-2.svg',
  '/assets/book_data/images/apple-slices/apple-slice-3.svg',
  '/assets/book_data/images/apple-slices/apple-slice-4.svg',
  '/assets/book_data/images/apple-slices/apple-slice-1.svg',
  '/assets/book_data/images/apple-slices/apple-slice-5.svg',
];

export const getShuffledImages = () => {
  return getShuffledArray(images);
};
