import styled from 'styled-components';

export const Layout = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 16px;
  background-color: #153c3c;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MainContainer = styled.main`
  margin: 60px auto;
  padding: 0 32px;
`;