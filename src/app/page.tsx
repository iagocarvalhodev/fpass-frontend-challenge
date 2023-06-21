'use client';

import { ListCharactersMarvel } from './components/ListCharactersMarvel/ListCharactersMarvel';

import { DefaultTemplatePage } from './shared/DefaultTemplatePage';

export default function Home() {
  return (
    <DefaultTemplatePage>
      <ListCharactersMarvel />
    </DefaultTemplatePage>
  );
}
