import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { PageWrapper, P } from 'activeBook-core/components';

import { Emojis } from './components';

export const Page11 = () => {
  useBackground({
    id: 'page-11_emojis',
    Component: <Emojis />,
  });

  useAudio({
    id: 'page-11_kids-laughing-short',
    page: 11,
    src: './assets/book_data/audios/sounds/kids-laughing-2.mp3',
    playOnLoad: true,
  });

  useBackground({
    id: 'page-11_bg',
    style: {
      zIndex: -1,
    },
    images: [{
      src: './assets/book_data/images/backgrounds/trail.png',
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
        В конце концов Барсик запутался в словах и спел вместо последней фразы что-то совсем нелепое,
        отчего братья так и покатились со смеху.
      </P>
    </PageWrapper>
  );
};
