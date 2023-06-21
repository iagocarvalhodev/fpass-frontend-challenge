'use client';

import { styled } from 'styled-components';

interface CharacterMarvelProps {
  id: number;
  name: string;
  image: string;
  description: string;
  loading: boolean;
}

export const CharacterMarvel = ({
  id,
  name,
  image,
  description,
  loading
}: CharacterMarvelProps) => {
  if (loading) {
    return <span>Carregando...</span>;
  }

  return (
    <Content>
      <Img src={image} alt={name} />
      <Title>{`${name} #${id}`}</Title>
      <Description>{description || 'no description'}</Description>
    </Content>
  );
};

const { Img, Content, Title, Description } = {
  Content: styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Img: styled.img`
    width: 300px;
    border-radius: 10px;
  `,
  Title: styled.span`
    font-size: 35px;
    font-weight: bold;
    text-align: center;
  `,
  Description: styled.p`
    font-size: 18px;
    text-align: center;
  `
};
