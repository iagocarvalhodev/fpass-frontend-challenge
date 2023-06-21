'use client';
import styled from 'styled-components';

export const Header = () => {
  return (
    <Content>
      <Img src="/marvel.svg" alt="Marvel Studios" />
      <SubMenu>Herois da Marvel by Fpass Teste</SubMenu>
    </Content>
  );
};

const { Content, Img, SubMenu } = {
  Content: styled.div`
    height: auto;
    background: #202020;
  `,
  Img: styled.img`
    width: 100%;
    max-height: 100px;
  `,
  SubMenu: styled.div`
    border-top: 1px solid #fff;
    padding: 10px;
    display: flex;
    justify-content: center;
    color: #fff;
  `
};
