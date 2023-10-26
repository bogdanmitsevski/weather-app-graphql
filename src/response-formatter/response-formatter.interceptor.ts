import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseFormatterInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (data !== null) {
          return {
            sunrise: data.sunrise,
            sunset: data.sunset,
            temp: data.temp,
            feels_like: data.feels_like,
            pressure: data.pressure,
            humidity: data.humidity,
            uvi: data.uvi,
            wind_speed: data.wind_speed,
          }
        }
        else {
          return {    //return this when data were not found in DataBase
            sunrise: 0,
            sunset: 0,
            temp: 0,
            feels_like: 0,
            pressure: 0,
            humidity: 0,
            uvi: 0,
            wind_speed: 0,
           }
        }
      }),
    );
  }
}
