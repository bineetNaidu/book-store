import React, { FC } from 'react';
import { Button } from './Button';
import { FlexWrapper } from './FlexWrapper';
import { LineBreaker } from './LineBreaker';
import { Nav } from './Nav';
import { SearchInput } from './SearchInput';

interface Props {}

const Navbar: FC<Props> = () => {
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
        {/* User Auth Menu */}
        <span>Bineet</span>
        <Button width="20%">Menu</Button>
      </FlexWrapper>
    </Nav>
  );
};

export default Navbar;
