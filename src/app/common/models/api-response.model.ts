export interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: CityWeather[];
}

interface CityWeather {
  name: string;
  weather: string;
  status: string[];
}
