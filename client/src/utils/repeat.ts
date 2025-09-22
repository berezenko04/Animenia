export const repeat = <T,>(count: number, factory: (index: number) => T): T[] =>
  Array.from({ length: count }, (_, i) => factory(i));
