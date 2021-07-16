import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WeatherInfo, WeatherList } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiUrl = 'https://api.openweathermap.org/data/2.5';
  apikey = '3d8b309701a13f65b660fa2c64cdc517';
  constructor(private http: HttpClient) { }

  getFiveCitysWeather(): Observable<WeatherInfo> {
    const params = new HttpParams()
      .set('lat', '55.5')
      .set('lon', '37.5')
      .set('units', 'metric')
      .set('cnt', '5')
      .set('appid', this.apikey);
    return this.http.get<WeatherInfo>(`${this.apiUrl}/find`, { params }).pipe(catchError(this.handleError));
  }

  getCityForecast(id: string): Observable<WeatherInfo> {
    const params = new HttpParams()
      .set('id', id)
      .set('units', 'metric')
      .set('appid', this.apikey);
    return this.http.get<WeatherInfo>(`${this.apiUrl}/forecast`, { params }).pipe(catchError(this.handleError));
  }

  getSelectedCityWeather(id: string): Observable<WeatherList> {
    const params = new HttpParams()
      .set('id', id)
      .set('units', 'metric')
      .set('appid', this.apikey);
    return this.http.get<WeatherList>(`${this.apiUrl}/weather`, { params }).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.status + ' ' + error.statusText);
  }

}
