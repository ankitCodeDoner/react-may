import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './pages/layouts/Layout'
import UseEffectHook from './hooks/UseEffectHook'
import UseRefHook from './hooks/UseRefHook'
import RefExample from './pages/RefExample'
import UseCallBackHook from './hooks/UseCallBackHook'
import UseReducerHook from './hooks/UseReducerHook'
import MenuList from './pages/MenuList'
import AddOrEditMenu from './pages/AddOrEditMenu'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/add-menu/:id?' element={<AddOrEditMenu />} />
        <Route path='/list' element={<MenuList />} />
      </Route>
    </Routes>
  )
}

export default App
