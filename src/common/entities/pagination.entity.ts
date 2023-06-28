import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class Pagination {
    @Field(() => Int) page: number;
    @Field(() => Int) limit: number;
}