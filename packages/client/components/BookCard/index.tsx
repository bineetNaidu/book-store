import Image from 'next/image';
import { FC } from 'react';
import { BaseBookFragment } from '../../generated/graphql';
import { BookWrapper } from './BookWrapper';
import { FlexBox } from './FlexBox';
import styled from 'styled-components';

interface Props {
  book: BaseBookFragment;
}

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const Author = styled.p`
  font-size: 1rem;
  color: #999;
  margin-top: 0.5rem;
  text-decoration: italic;
`;

const Info = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
`;

const Price = styled.p`
  font-size: 1.5rem;
  color: blue;
  font-weight: bold;
`;

const BookCard: FC<Props> = ({ book }) => {
  return (
    <BookWrapper width="400px" height="200px">
      <FlexBox flex={0.3} flexDirection="column">
        <Image src={book.avatar} alt={book.name} height={150} width={100} />
      </FlexBox>
      <FlexBox flex={0.7} flexDirection="column">
        <Title>{book.name}</Title>
        <Author> by {book.author.name}</Author>
        <Info>{book.description.slice(0, 35)}...</Info>
        <Price>${book.rent_price}</Price>
      </FlexBox>
    </BookWrapper>
  );
};

export default BookCard;
