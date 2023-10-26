import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { WeatherService } from './weather.service';
import { AddedWeather, Weather } from './weather.entity';
import { FetchWeatherDTO } from './dto/fetch-weather.dto';
import { UseInterceptors } from '@nestjs/common';
import { ResponseFormatterInterceptor } from 'src/response-formatter/response-formatter.interceptor';

@Resolver()
export class WeatherResolver {
    constructor(private weatherService: WeatherService) { }
    @UseInterceptors(ResponseFormatterInterceptor)
    @Query(() => Weather)
    weather(@Args('input') input: FetchWeatherDTO) {
        return this.weatherService.getData(input);
    }
    @Mutation(() => AddedWeather)
    addWeather(@Args('input') input: FetchWeatherDTO) {
        return this.weatherService.fetchData(input);
    }
}
