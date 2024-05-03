import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './assets/components/header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Data } from './assets/pages/data'
import { Add } from './assets/pages/add'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Data/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
