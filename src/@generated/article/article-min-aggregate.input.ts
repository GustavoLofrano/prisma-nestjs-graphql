import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ArticleMinAggregateInput {
    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: true;
}
