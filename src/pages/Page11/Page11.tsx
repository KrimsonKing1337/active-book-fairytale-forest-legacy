import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { Emojis } from './components';

export const Page11 = () => {
  useBackground({
    id: 'page-9_emojis',
    Component: <Emojis />,
  });

  useAudio({
    id: 'page-9_kids-laughing-short',
    page: 9,
    src: './assets/book_data/audios/sounds/kids-laughing-2.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <p>
        В конце концов Барсик запутался в словах и спел вместо последней фразы что-то совсем нелепое,
        отчего братья так и покатились со смеху.
      </p>
    </PageWrapper>
  );
};
