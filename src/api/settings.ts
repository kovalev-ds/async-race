export const API_URL = 'http://localhost:3000/';

export const enum Endpoint {
  winners = 'winners/',
  garage = 'garage/',
  engine = 'engine/',
}

export type SearchParamsBase = {
  _page: number;
  _limit: number;
  _sort: 'id' | 'wins' | 'time';
  _order: 'ASC' | 'DESC';
};
