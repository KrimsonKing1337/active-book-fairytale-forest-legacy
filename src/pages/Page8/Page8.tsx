import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { Action } from 'activeBook-core/components/ColoredTextTrigger';

import { Trigger } from './components';

export const Page8 = () => {
  const audioInst = useAudio({
    src: '/assets/book_data/audios/sounds/kids-laughing-short.mp3',
  });

  const clickHandler = () => {
    audioInst?.play();
  };

  return (
    <PageWrapper>
      <p>
        В конце концов Барсик запутался в словах и спел вместо последней фразы
        <Trigger />,
        отчего братья так и
        <Action onClick={clickHandler}>
          покатились со смеху.
        </Action>
      </p>
    </PageWrapper>
  );
};
