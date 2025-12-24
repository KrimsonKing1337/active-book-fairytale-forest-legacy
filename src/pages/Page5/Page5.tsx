import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { PageWrapper, P } from 'activeBook-core/components';

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

  useBackground({
    id: 'page-5_bg',
    style: {
      zIndex: -1,
    },
    images: [{
      src: './assets/book_data/images/backgrounds/hut.png',
    }],
    shadow: {
      show: true,
      style: {
        zIndex: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(3px)',
      },
    },
  });

  return (
    <PageWrapper>
      <P>
        Эти слова, наполненные комичным отчаянием, рассмешили Барсика. Лёва тоже не выдержал и рассмеялся, и вскоре
        братья хохотали уже вдвоём. Новый день начался для них с беззаботного счастья, и это было так уютно и хорошо!
      </P>
    </PageWrapper>
  );
};
