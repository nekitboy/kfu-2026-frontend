import React from 'react';
import { Route, Routes } from 'react-router';

import HomePage from './pages/home';
import ShopPage from './pages/shop';
import Header from './features/header';

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} action={(args) => console.log(args)} />
          <Route path="/shop/:id?" element={<ShopPage />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
