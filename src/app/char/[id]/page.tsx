'use client';

import { CharacterMarvel } from '@/app/components/CharacterMarvel/CharacterMarvel';

import { useMarvelCharacter } from '@/app/hooks/useMarvelCharacter';
import { DefaultTemplatePage } from '@/app/shared/DefaultTemplatePage';

export default function CharPage({ params }: { params: { id: number } }) {
  const { character, loading } = useMarvelCharacter(params.id);

  const image =
    character && character.thumbnail
      ? character.thumbnail.path + '.' + character.thumbnail.extension
      : '';

  return (
    <DefaultTemplatePage>
      <CharacterMarvel
        id={params.id}
        name={character.name}
        image={image}
        description={character.description}
        loading={loading}
      />
    </DefaultTemplatePage>
  );
}
