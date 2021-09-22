import { Book } from '../entities/Book';
import { Query, Resolver, Arg } from 'type-graphql';

@Resolver()
export class BookResolver {
  @Query(() => [Book])
  async books(): Promise<Book[]> {
    return Book.find();
  }

  @Query(() => Book, { nullable: true })
  async book(@Arg('id') id: number): Promise<Book | null> {
    const book = await Book.findOne({ where: { id } });
    return book || null;
  }
}
