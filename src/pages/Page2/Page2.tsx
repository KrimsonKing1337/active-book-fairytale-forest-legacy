import { PageWrapper } from 'activeBook-core/components/PageWrapper';

import { useSound } from 'activeBook-core/hooks/effects/audio/sound';

export const Page2 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/owl-and-branches.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <p>
        Высоко-высоко на самом большом дереве мудрая Сова Клара
        наблюдала за лесом из густой тени ветвей. Некоторые думают, что совы плохо видят днем, но это неправда – их
        круглые глаза одинаково хорошо видят в темноте и на свету. Клару уважали все звери леса.
      </p>
    </PageWrapper>
  );
};
