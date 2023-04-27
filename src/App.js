import React from 'react'
import Main from './components/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Oscar from './components/Oscar'
import Info from './components/Info'
import Films from './components/Films'
import Reviews from './components/Reviews'
import Social from './components/Social'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/home' element={<Main />}/>
          <Route path='/oscar' element={<Oscar />}/>
          <Route path='/info' element={<Info />}/>
          <Route path='/films' element={<Films />}/>
          <Route path='/reviews' element={<Reviews />}/>
          <Route path='/social' element={<Social />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App