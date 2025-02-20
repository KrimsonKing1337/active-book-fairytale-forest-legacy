import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

export const Page3 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/cat-meow.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <p>
        Клара видела, как в небольшой уютной избушке – Барсик и Лёва – начинали свой день. Барсик уже бодро прохаживался
        по комнате, вытирая усы после утреннего умывания, а вот его младший брат Лёва только-только просыпался.
      </p>
    </PageWrapper>
  );
};
