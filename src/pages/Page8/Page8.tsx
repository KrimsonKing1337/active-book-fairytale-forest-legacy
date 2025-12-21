import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useBackground } from 'activeBook-core/hooks/effects/background';

import { BackgroundComponent } from './components';

export const Page8 = () => {
  useAudio({
    id: 'page-7_children-playing',
    page: 7,
    src: './assets/book_data/audios/sounds/children-playing.mp3',
    playOnLoad: true,
  });

  useBackground({
    id: 'page-7_background-component',
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
