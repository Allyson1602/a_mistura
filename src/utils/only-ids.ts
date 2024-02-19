interface IOnlyIds {
  id: number | string;
  [key: string]: any;
}

export const onlyIds = (values: IOnlyIds[]): (string | number)[] => {
  const ids = values.map((value) => value.id);

  return ids;
};
