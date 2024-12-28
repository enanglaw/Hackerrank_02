export interface IweatherInfoRespose {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: weatherDetail[];
}
interface weatherDetail {
  name: string;
  weather: string;
  status: weatherStatus[];
}
interface weatherStatus {
  Wind: string;
  Humidity: string;
}
