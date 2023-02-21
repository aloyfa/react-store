import React from 'react';
import { Outlet,useNavigation } from 'react-router-dom';
import Header from './Header';
import Loading from '../components/Loading';


const Layout = () => {
  const navigation = useNavigation()
  return (
    <>
      <Header />
      {navigation.state === 'loading' && <Loading/>}
        <Outlet />
    </>
  );
};

export default Layout;
