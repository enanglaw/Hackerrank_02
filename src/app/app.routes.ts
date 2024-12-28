import { Routes } from '@angular/router';
import { DataInfoComponent } from './data-info/data-info.component';
import { WeatherFinderComponent } from './weather-finder/weather-finder.component';
import { ErrorComponent } from './common/error/error.component';

export const routes: Routes = [
  { path: '', component: DataInfoComponent },
  { path: 'data-info', component: DataInfoComponent },
  { path: 'weather-info', component: WeatherFinderComponent },
  { path: '**', component: ErrorComponent },
];
