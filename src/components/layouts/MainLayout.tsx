import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';

const MainLayout = () => {
  return (
    <div className="min-h-dvh bg-black text-white overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};




export default MainLayout;
