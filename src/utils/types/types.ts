export interface ILocation {
  value: string;
  label: string;
}

export interface ICardData {
  accumulated_cases?: number[];
  accumulated_deaths?: number[];
  new_cases?: number[];
  new_deaths?: number[];
}

export interface IDefaultChartData extends ICardData {
  date?: string[];
}

export interface INationalData {
  accumulated_num_cases: number[];
  accumulated_num_deaths: number[];
  country: string[];
  date: string[];
  epidemiological_week: number[];
  new_num_cases: number[];
  new_num_deaths: number[];
}

export interface IDailyData {
  accumulated_cases: number[];
  accumulated_deaths: number[];
  date: string[];
  epidemiological_week: number[];
  is_last: boolean[];
  last_available_date: string[];
  new_cases: number[];
  new_deaths: number[];
  region: string[];
  state: string[];
}

export interface IEpidemiologicalData {
  epidemiological_week: number[];
  new_cases: number[];
  new_deaths: number[];
}

export interface IStateData {
  accumulated_num_cases: number[];
  accumulated_num_deaths: number[];
  new_num_cases: number[];
  new_num_deaths: number[];
  date: string[];
  country: string[];
  state: string[];
}

export interface IChartData {
  chartTitle: string;
  chartColors: string[];
  seriesName: string;
  seriesData?: number[];
  seriesCategories?: string[];
}
