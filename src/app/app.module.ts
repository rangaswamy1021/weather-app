import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { DatePipePipe } from './pipes/date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherDetailComponent,
    NavbarComponent,
    DatePipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
