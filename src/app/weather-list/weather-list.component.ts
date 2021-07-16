import { WeatherLabels } from './../labels/weather-lables';
import { Component, OnInit } from '@angular/core';
import { WeatherInfo, WeatherList } from '../models/weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {

  weatherList: WeatherList[];
  get label() { return WeatherLabels; }
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeatherList();
  }

  getWeatherList() {
    this.weatherService.getFiveCitysWeather().subscribe((res: WeatherInfo) => {
      if (res) {
        this.weatherList = res.list;
      }
    });
  }

}
