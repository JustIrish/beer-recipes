import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { IoBeer } from 'react-icons/io5';

import { GlobalStyle } from 'components/GlobalStyle';
import { Layout, Header, MainContainer } from './SharedLayout.styled';
import Spinner from 'components/Spinner/Spinner';

const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <IoBeer size="25" color="#ffffff" />
      </Header>
      <Suspense fallback={<Spinner />}>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Suspense>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
    </Layout>
  );
};

export default SharedLayout;
