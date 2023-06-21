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

export const useMarvelCharacter = (characterId: number) => {
  const [character, setCharacter] = useState<Character>({} as Character);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axiosInstance.get(`/characters/${characterId}`);
        const { data } = response.data;

        console.log('data', data);

        const characterData: Character = data.results[0];

        setCharacter(characterData);
        setLoading(false);
      } catch (error) {
        setError('Erro ao obter a listagem de personagens');
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [characterId]);

  return { character, loading, error };
};
