export const images = [
  '/assets/book_data/images/cloud1.svg',
  '/assets/book_data/images/cloud2.svg',
  '/assets/book_data/images/cloud3.svg',
  '/assets/book_data/images/cloud4.svg',
];

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * 3) + 1;

  return images[randomIndex];
};
