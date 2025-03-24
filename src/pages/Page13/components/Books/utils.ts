import { getShuffledArray } from 'activeBook-core/utils/getShuffledArray';

export const images = [
  '/assets/book_data/images/open-books/open-book-1.svg',
  '/assets/book_data/images/open-books/open-book-2.svg',
  '/assets/book_data/images/open-books/open-book-3.svg',
  '/assets/book_data/images/open-books/open-book-4.svg',
  '/assets/book_data/images/open-books/open-book-5.svg',
  '/assets/book_data/images/open-books/open-book-6.svg',
  '/assets/book_data/images/open-books/open-book-7.svg',
  '/assets/book_data/images/open-books/open-book-8.svg',
  '/assets/book_data/images/open-books/open-book-9.svg',
];

export const getShuffledImages = () => {
  return getShuffledArray(images);
};
