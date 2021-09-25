import Link from 'next/link';
import { FC } from 'react';
import { BaseAuthorFragment } from '../../generated/graphql';
import { Card } from './Card';

interface Props {
  author: BaseAuthorFragment;
}

const AuthorCard: FC<Props> = ({ author }) => {
  return (
    <Link href={`/author/${author.id}`} as={`/author/${author.name}`} passHref>
      <Card>
        <span>{author.name}</span>
      </Card>
    </Link>
  );
};

export default AuthorCard;
