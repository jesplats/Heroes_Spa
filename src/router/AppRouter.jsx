import React from 'react';
//import { MarvelPage } from '../Heroes/Pages/MarvelPage';
import { HeroesRoutes } from '../Heroes/Routes/HeroesRoutes';
//import { DcPages} from '../Heroes/Pages/DcPages'
import { LoginPage } from '../auth/pages/LoginPage';
import {Navbar} from '../ui/components/navbar'
import {  Route,Routes } from 'react-router-dom';
export const AppRouter = () => {
  return (
    <>

   
      <Routes>
       
        <Route path="/login" element={<LoginPage />} />
         <Route path="/*" element={<HeroesRoutes/>}/>
       
      </Routes>
    </>
  );
};
