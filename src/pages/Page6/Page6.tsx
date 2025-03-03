import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { BackgroundComponent } from './components';

export const Page6 = () => {
  useAudio({
    id: 'page-6-children-playing',
    src: '/assets/book_data/audios/sounds/children-playing.mp3',
    playOnLoad: true,
  });

  useBackground({
    id: 'page-6-background-component',
    Component: <BackgroundComponent />,
  });

  return (
    <PageWrapper>
      <p>
        Лёва и Барсик, смеясь и оживленно болтая, бежали по лесной тропинке к ручью. Солнышко пробивалось сквозь кроны
        деревьев, играя бликами в их глазах.
      </p>
    </PageWrapper>
  );
};
