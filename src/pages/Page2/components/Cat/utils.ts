import CircleType from 'circletype';

export type InitCircleTypeParams = {
  elementRef: React.RefObject<HTMLSpanElement | null>;
  circleTypeRef: React.RefObject<any>;
  reverse: boolean;
  isActive: boolean;
};

export const initCircleType = ({ elementRef, circleTypeRef, reverse, isActive }: InitCircleTypeParams) => {
  if (!elementRef.current) {
    return;
  }

  if (isActive) {
    const newCircleType = new CircleType(elementRef.current);
    newCircleType.radius(200);

    if (reverse) {
      newCircleType.dir(-1);
    }

    circleTypeRef.current = newCircleType;

    return;
  }

  if (circleTypeRef.current) {
    setTimeout(() => {
      circleTypeRef.current.destroy();
      circleTypeRef.current = null;
    }, 1000); // длина анимации ёжика
  }
};
