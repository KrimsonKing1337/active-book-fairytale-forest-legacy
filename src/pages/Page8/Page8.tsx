import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { useBackground } from 'activeBook-core/hooks/effects/background';

import { Emojis } from './components';

export const Page8 = () => {
  useBackground({
    id: 'page-8-emojis',
    Component: <Emojis />,
  });

  useAudio({
    id: 'page-8-kids-laughing-short',
    page: 8,
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
