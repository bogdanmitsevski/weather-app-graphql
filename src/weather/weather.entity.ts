import { Field, Float, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Weather {

    @Field()
    readonly sunrise: number

    @Field()
    readonly sunset: number

    @Field()
    readonly temp: number

    @Field()
    readonly feels_like: number

    @Field()
    readonly pressure: number

    @Field()
    readonly humidity: number

    @Field()
    readonly uvi: number

    @Field()
    readonly wind_speed: number
}

@ObjectType()
export class AddedWeather {
    @Field()
    readonly lat: number
                
    @Field()
    readonly lon: number

    @Field()
    readonly exclude: string

    @Field()
    readonly sunrise: number

    @Field()
    readonly sunset: number

    @Field()
    readonly temp: number

    @Field()
    readonly feels_like: number

    @Field()
    readonly pressure: number

    @Field()
    readonly humidity: number

    @Field()
    readonly uvi: number

    @Field()
    readonly wind_speed: number
}