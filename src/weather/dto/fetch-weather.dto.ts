import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class FetchWeatherDTO {
    @Field()
    readonly lat: number
    @Field()
    readonly lon: number
    @Field()
    readonly part: string
 }