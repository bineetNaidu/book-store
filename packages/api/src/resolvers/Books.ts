import { Book } from '../entities/Book';
import { Query, Resolver, Arg, FieldResolver, Root } from 'type-graphql';
import { Author } from '../entities/Author';
import { Genre } from '../entities/Genre';

@Resolver(Book)
export class BookResolver {
  @FieldResolver(() => Author)
  async author(@Root() book: Book): Promise<Author> {
    const author = await Author.findOne({ where: { id: book.authorId } });
    return author!;
  }

  @FieldResolver(() => Genre)
  async genre(@Root() book: Book): Promise<Genre> {
    const genre = await Genre.findOne({ where: { id: book.genreId } });
    return genre!;
  }

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
