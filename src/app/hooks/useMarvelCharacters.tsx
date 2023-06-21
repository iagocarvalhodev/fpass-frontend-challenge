'use client';

import { useEffect, useState } from 'react';

import { axiosInstance } from '../config/axios';

type Character = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export const useMarvelCharacters = (searchQuery: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axiosInstance.get(
          `/characters${searchQuery ? `?nameStartsWith=${searchQuery}` : ``}`
        );
        const { data } = response.data;

        const charactersData: Character[] = data.results.map(
          (character: Character) => ({
            id: character.id,
            name: character.name,
            description: character.description,
            thumbnail: character.thumbnail
          })
        );

        setCharacters(charactersData);
        setLoading(false);
      } catch (error) {
        setError('Erro ao obter a listagem de personagens');
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [searchQuery]);

  return { characters, loading, error };
};
