import Head from 'next/head';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import { Wrapper } from '../components/Wrapper';
import { useBooksQuery } from '../generated/graphql';
import { withApollo } from '../lib/withApollo';
import BookCard from '../components/BookCard';

const Index = () => {
  const { data, loading, error } = useBooksQuery();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <Head>
        <title>Home | ReadBooks.io</title>
      </Head>
      <Navbar />
      <Container marginTop="55px">
        <h1>Welcome to Our EBook Store</h1>
        <Wrapper>
          <Wrapper flex={2}>
            <h3>Author of the week</h3>
            {/* List of Author of the week */}
          </Wrapper>

          <Wrapper flex={6.5} flexDirection="column">
            <h3>Books of the week</h3>

            <Wrapper flexWrap="wrap">
              {data?.books.map((book) => (
                <BookCard book={book} key={book.id} />
              ))}
            </Wrapper>
          </Wrapper>

          <Wrapper flex={1.5}>
            <h3>Ads</h3>

            {/*List of Books  */}
          </Wrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default withApollo({ ssr: true })(Index);
