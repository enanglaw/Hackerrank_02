import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiChallengeService {
  changedCountryState = new Subject<any>();
  constructor(private httpClient: HttpClient) {}
  async fetchWeatherInfo(searchTerm: string) {
    const url = `https://jsonmock.hackerrank.com/api/weather?name=${searchTerm}`;
    //const url = `https://jsonplaceholder.typicode.com/users?name=${searchTerm}`;
    await this.httpClient.get<ApiResponse[]>(url).subscribe((data) => {
      this.changedCountryState.next(data);
    });
  }
}
