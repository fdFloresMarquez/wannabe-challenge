export const getCharacterId = (url: string): string => {
  const [id] = url.match(/\d+/) || [];

  return id;
};
