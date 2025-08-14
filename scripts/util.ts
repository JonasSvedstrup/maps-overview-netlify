export const formatMapName = (str: string) =>
  str
    .replace('-', ' ')
    .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

/* const getQueryString = (n: string) => {
  if (location && location.search && location.search.length > 0) {
    const half = location.search.split(n + '=')[1];
    return half! == undefined ? decodeURIComponent(half.split('&')[0]) : null;
  }
  return null;
}; */
