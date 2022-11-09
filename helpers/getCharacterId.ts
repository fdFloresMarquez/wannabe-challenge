/** function that returns and Id from an url using Regex to get the only number */

export const getCharacterId = (url: string): string => {
  const [id] = url.match(/\d+/) || [];

  return id;
};
