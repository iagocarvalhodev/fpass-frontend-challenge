'use client';

import Link from 'next/link';
import { useState } from 'react';

import { styled } from 'styled-components';

import { useMarvelCharacters } from '@/app/hooks/useMarvelCharacters';

export const ListCharactersMarvel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { characters, loading, error } = useMarvelCharacters(searchQuery);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro: {error}</div>;
  }

  return (
    <>
      <Search
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Pesquisar personagens"
      />

      <CharGrid>
        {characters.map((char) => (
          <Link href={`/char/${char.id}`} key={char.id}>
            <div>
              <Img
                src={char.thumbnail.path + '.' + char.thumbnail.extension}
                alt={char.name}
              />
              <Title>{char.name}</Title>
            </div>
          </Link>
        ))}
      </CharGrid>
    </>
  );
};

const { CharGrid, Img, Title, Search } = {
  CharGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
    padding: 0px;
    > div {
      width: 200px;
      height: 230px;
    }
  `,
  Img: styled.img`
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 200px;
    height: 200px;
    background-position: center center;
    background-repeat: no-repeat;
  `,
  Title: styled.div`
    width: 100%;
    max-width: 200px;
    height: 30px;
    background: #202020;
    color: #fff;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Search: styled.input`
    margin: 10px 0px;
    height: 40px;
    border-radius: 15px;
    width: 100%;
    max-width: 300px;
    font-size: 15px;
    padding: 5px;
    color: #202020;
    font-weight: bold;
  `
};
