import { Injectable } from '@nestjs/common';
import { Info } from 'src/db/models';
import { FetchWeatherDTO } from './dto/fetch-weather.dto';

@Injectable()
export class WeatherService {
    async fetchData(data: FetchWeatherDTO) {
        try {
            const fetchedData = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${data.lat}&lon=${data.lon}&exclude=${data.part}&appid=${process.env.API_KEY}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((result) => { return result.json() })
            const newData = await Info.create({
                lat: data.lat,
                lon: data.lon,
                exclude: data.part,
                sunrise: fetchedData.current.sunrise,
                sunset: fetchedData.current.sunset,
                temp: fetchedData.current.temp,
                feels_like: fetchedData.current.feels_like,
                pressure: fetchedData.current.pressure,
                humidity: fetchedData.current.humidity,
                uvi: fetchedData.current.uvi,
                wind_speed: fetchedData.current.wind_speed
            })
            await newData.save();
            return newData
        }

        catch (e) {
            console.log(e.message || e);
        }
    }
    async getData(data: FetchWeatherDTO) {
        try {
            const foundData = await Info.findOne({
                where: {
                    lat: data.lat,
                    lon: data.lon,
                    exclude: data.part,
                }
            });
            return foundData;
        }
        catch (e) {
            console.log(e.message || e);
        }
    }
}
