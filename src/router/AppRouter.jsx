import React from 'react';
import { MarvelPage } from '../Heroes/Pages/MarvelPage';
import { DcPages} from '../Heroes/Pages/DcPages'
import { LoginPage } from '../auth/pages/LoginPage';
import {Navbar} from '../ui/components/navbar'
import { Navigate, Route,Routes } from 'react-router-dom';
export const AppRouter = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/dc" element={<DcPages />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path='/' element={<Navigate to="/marvel"/>}/>
      </Routes>
    </>
  );
};
