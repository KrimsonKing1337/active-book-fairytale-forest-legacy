import { useState } from 'react';

import { modalsWereShowed } from 'activeBook-core/utils/localStorage/modalsWereShowed';
import { Flags as ModalsFlags } from 'activeBook-core/utils/localStorage/modalsWereShowed';

export function useModal() {
  const [modalIsActive, setModalIsActive] = useState(false);

  const modalOnClose = () => {
    setModalIsActive(false);

    modalsWereShowed.set(ModalsFlags.usingCamera, true);
  };

  return { modalIsActive, modalOnClose, setModalIsActive };
}
