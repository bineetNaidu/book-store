import Link from 'next/link';
import { FC } from 'react';
import { Button } from './Button';
import { FlexWrapper } from './FlexWrapper';
import { LineBreaker } from './LineBreaker';
import { Nav } from './Nav';
import { SearchInput } from './SearchInput';
import { useUserStore } from '../../lib/user.store';

interface Props {}

const Navbar: FC<Props> = () => {
  const user = useUserStore((s) => s.user);

  return (
    <Nav>
      <FlexWrapper flex={3}>
        <Button>browse category</Button>
        <LineBreaker>|</LineBreaker>
        <SearchInput placeholder="Search Books" />
      </FlexWrapper>
      <FlexWrapper flex={4}>
        <h1>ReadBook.io</h1>
      </FlexWrapper>
      <FlexWrapper flex={3} justifyContent="end">
        {user ? (
          <FlexWrapper flex={1}>
            <Button>@{user.username}</Button>
            <LineBreaker>|</LineBreaker>
            <Button>Logout</Button>
          </FlexWrapper>
        ) : (
          <FlexWrapper flex={1}>
            <Link href="/login" passHref>
              <Button>Login</Button>
            </Link>
            <LineBreaker>|</LineBreaker>
            <Link href="/signup" passHref>
              <Button>Signup</Button>
            </Link>
          </FlexWrapper>
        )}
        <LineBreaker>|</LineBreaker>

        <Button width="20%">Menu</Button>
      </FlexWrapper>
    </Nav>
  );
};

export default Navbar;
