import type { MapsData } from './types';

export const formatMapName = (str: string) =>
  str
    .replace('-', ' ')
    .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
export const formatMapShort = (str: string) =>
  str.replace(' ', '-').toLowerCase();
export const formatMapLink = (str: string) =>
  `map/${str.toLowerCase().replace(' ', '-')}`;
export const formatNumer = (number: number) =>
  number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '';
export const linkField = (link: string, value: string) =>
  `<a href="${link}">${value}</a>`;
export const formatBooleanToText = (bool: boolean) => (bool ? 'Yes' : '');

export const navs = [
  { name: 'Overview', path: '/' },
  { name: 'Map', path: '/map/roslyn-peninsula' },
  { name: 'Playthroughs', path: '/playthroughs' },
  { name: 'Compare', path: '/compare' },
];
export const mapViews: string[] = [
  'top',
  'tiles',
  'start',
  'resources',
  'height',
  'wind',
  'fish',
  'transport',
];
export const Connections = {
  Highway: `Highway`,
  Railway: `Railway`,
  Ship: `Ship`,
  Air: `Air`,
};
export const pickRandomMap = (mapsData: MapsData[]) => {
  const mapsSplice = mapsData.filter(map => map.hasImages === true);
  const randomNumber = Math.floor(Math.random() * mapsSplice.length);
  location.href = `/map/${formatMapShort(mapsSplice[randomNumber].name)}`;
};
export const pickSelectedMap = (map: string) => {
  location.href = `/map/${map}`;
};
