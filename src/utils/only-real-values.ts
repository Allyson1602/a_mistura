export const onlyRealValues = <T>(values: T[]) => {
  return values.filter(
    (valueItem) =>
      valueItem !== undefined ||
      valueItem !== 'undefined' ||
      valueItem !== null,
  );
};
