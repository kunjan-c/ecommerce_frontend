import React, { Suspense, lazy } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Loader from './components/Loader'

const Home = lazy(()=>import('./pages/home'))
const Cart = lazy(()=>import('./pages/cart'))
const Search = lazy(()=> import('./pages/search'))
const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/search' element={<Search></Search>}></Route>
    
    </Routes>
    </Suspense>
    </BrowserRouter>
  
  )
}

export default App