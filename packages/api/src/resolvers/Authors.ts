import { Query, Resolver, Arg } from 'type-graphql';
import { Author } from '../entities/Author';

@Resolver()
export class AuthorResolver {
  @Query(() => [Author])
  async authors(): Promise<Author[]> {
    return Author.find();
  }

  @Query(() => Author, { nullable: true })
  async author(@Arg('id') id: number): Promise<Author | null> {
    const author = await Author.findOne({
      where: { id },
    });

    return author || null;
  }
}
