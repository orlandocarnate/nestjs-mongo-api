import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class HelloWorldDto {
    @Field()
    message: string;
}