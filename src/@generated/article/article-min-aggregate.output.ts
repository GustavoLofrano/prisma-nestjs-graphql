import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ArticleMinAggregate {
    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: number | null;
}
