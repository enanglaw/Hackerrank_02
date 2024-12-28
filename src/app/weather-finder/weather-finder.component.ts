import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiResponse } from '../common/models/api-response.model';
import { ApiChallengeService } from '../common/api/api-challenge.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IweatherInfoRespose } from '../common/models/weather-info-response';

@Component({
  selector: 'app-weather-finder',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './weather-finder.component.html',
  styleUrl: './weather-finder.component.scss',
})
export class WeatherFinderComponent implements OnInit, OnDestroy {
  weatherSub!: Subscription;
  weatherInfo: any;
  weatherActualMeasurment: any;
  searchForm!: FormGroup;
  constructor(
    private apiService: ApiChallengeService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchTerm: ['', Validators.required],
    });
    // this.fetchWeatherInfo();
  }
  searchItem() {
    if (this.searchForm.get('searchTerm')?.value) {
      const searchTerm = this.searchForm.get('searchTerm')?.value;
      console.log('searchedTerm ' + searchTerm);
      this.fetchWeatherInfo(searchTerm);
    }
  }
  fetchWeatherInfo(searchTerm: string) {
    this.weatherSub = this.apiService.changedCountryState.subscribe(
      (response: any[]) => {
        const result: any = response;

        if (result.data) {
          this.weatherInfo = {
            name: result.data[0].name,
            weather: result.data[0].weather,
            windStatus: result.data[0].status[0],
            humidity: result.data[0].status[1],
          };
          this.weatherActualMeasurment = Number(
            this.weatherInfo.weather.split(' ')[0]
          );
          console.log('current weather measurement');
          console.log(this.weatherActualMeasurment);
        }
      }
    );
    this.apiService.fetchWeatherInfo(searchTerm);
  }
  ngOnDestroy() {
    if (this.weatherSub) {
      this.weatherSub.unsubscribe();
    }
  }
}
