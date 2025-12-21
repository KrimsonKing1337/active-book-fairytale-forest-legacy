import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { Leaf } from './components';

export const Page5 = () => {
  useAudio({
    id: 'page-5_kids-laughing',
    page: 5,
    src: './assets/book_data/audios/sounds/kids-laughing.mp3',
    playOnLoad: true,
  });

  useBackground({
    id: 'page-5_leaf',
    Component: <Leaf />,
  });

  return (
    <PageWrapper>
      <p>
        Эти слова, наполненные комичным отчаянием, рассмешили Барсика. Лёва тоже не выдержал и рассмеялся, и вскоре
        братья хохотали уже вдвоём. Новый день начался для них с беззаботного счастья, и это было так уютно и хорошо!
      </p>
    </PageWrapper>
  );
};
