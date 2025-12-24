import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { PageWrapper, P } from 'activeBook-core/components';

import { BackgroundComponent } from './components';

export const Page9 = () => {
  useAudio({
    id: 'page-9_children-playing',
    page: 9,
    src: './assets/book_data/audios/sounds/children-playing.mp3',
    playOnLoad: true,
  });

  useBackground({
    id: 'page-9_background-component',
    Component: <BackgroundComponent />,
  });

  useBackground({
    id: 'page-9_bg',
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
        Лёва и Барсик, смеясь и оживленно болтая, бежали по лесной тропинке к ручью. Солнышко пробивалось сквозь кроны
        деревьев, играя бликами в их глазах.
      </P>
    </PageWrapper>
  );
};
