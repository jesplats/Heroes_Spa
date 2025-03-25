import React from 'react'
import { Navbar } from '../../ui/components/navbar'
import { Route,Routes,Navigate } from 'react-router-dom'
import {MarvelPage} from '../Pages/MarvelPage'
import {DcPages} from '../Pages/DcPages'
import { Search } from '../Pages/SearchPage'
import { HeroPage } from '../Pages/HeroPage'
export const HeroesRoutes = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>

   

    <Routes>
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/dc" element={<DcPages />} />
        <Route  path="/search" element={< Search/>}/>
        <Route path='hero/:id' element={<HeroPage/>}/>
       <Route />
           
        <Route path='/' element={<Navigate to="/marvel"/>}/>
      </Routes>
      </div>
    </>
  )
}
