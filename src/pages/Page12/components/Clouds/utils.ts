export const images = [
  '/assets/book_data/images/clouds/cloud-1.svg',
  '/assets/book_data/images/clouds/cloud-2.svg',
  '/assets/book_data/images/clouds/cloud-3.svg',
  '/assets/book_data/images/clouds/cloud-4.svg',
];

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * 3) + 1;

  return images[randomIndex];
};
