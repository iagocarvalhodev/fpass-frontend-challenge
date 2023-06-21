'use client';

import { ReactNode } from 'react';

import { Header } from '../components/Header/header';
import { styled } from 'styled-components';

interface DefaultPageTemplateProps {
  children: ReactNode;
}
export function DefaultTemplatePage({ children }: DefaultPageTemplateProps) {
  return (
    <>
      <head>
        <title>Herois Marvel</title>
        <meta property="title" content="Herois Marvel" />
        <meta property="og:title" content="Marvel" />
      </head>
      <Header />
      <Main>{children}</Main>
    </>
  );
}

const { Main } = {
  Main: styled.div`
    min-height: calc(100vh - 128px);
    max-width: calc(var(--screen-xl) - 48px);
    margin: 0 auto;
    width: 100%;
  `
};
