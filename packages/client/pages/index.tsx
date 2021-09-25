import Head from 'next/head';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import { Wrapper } from '../components/Wrapper';
import { useBooksQuery, useAuthorsQuery } from '../generated/graphql';
import { withApollo } from '../lib/withApollo';
import BookCard from '../components/BookCard';
import AuthorCard from '../components/AuthorCard';

const Index = () => {
  const { data, loading, error } = useBooksQuery();
  const { data: authorsData, loading: authorsLoading } = useAuthorsQuery();
  if (loading || authorsLoading) {
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
        <Wrapper justifyContent="space-around">
          <Wrapper flex={2} flexDirection="column">
            <h3>Author of the week</h3>

            {authorsData?.authors.map((a) => (
              <AuthorCard author={a} key={a.id} />
            ))}
          </Wrapper>

          <Wrapper
            flex={7}
            flexDirection="column"
            style={{
              paddingLeft: '2.5rem',
            }}
          >
            <h3>Books of the week</h3>

            <Wrapper flexWrap="wrap">
              {data?.books.map((book) => (
                <BookCard book={book} key={book.id} />
              ))}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default withApollo({ ssr: true })(Index);
