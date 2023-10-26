import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherResolver } from './weather.resolver';

@Module({
  providers: [WeatherService, WeatherResolver]
})
export class WeatherModule {}
