import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TIME } from './../constants/const';
import { WeatherList } from './../models/weather';
import { WeatherInfo } from '../models/weather';
import { WeatherService } from '../services/weather.service';
import { WeatherLabels } from '../labels/weather-lables';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
  weatherData: WeatherList[] = [];
  selectedCity: WeatherList;
  get label() { return WeatherLabels; }
  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const cityId = params.id;
      this.getSelectedCityWeather(cityId);
      this.getCurrentCityForecast(cityId);
    });
  }

  getCurrentCityForecast(cityId) {
    this.weatherService.getCityForecast(cityId).subscribe((res: WeatherInfo) => {
      if (res) {
        for (const item of res.list) {
          if (item.dt_txt.includes(TIME)) {
            this.weatherData.push(item);
          }
        }
      }
    });
  }

  getSelectedCityWeather(cityId) {
    this.weatherService.getSelectedCityWeather(cityId).subscribe((res: WeatherList) => {
      if (res) {
        this.selectedCity = res;
      }
    });
  }

}
