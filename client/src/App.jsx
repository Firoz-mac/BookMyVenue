import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import { useThemeStore } from './store/themeStore';



function App() {

  const {theme} = useThemeStore();

  useEffect(()=>{

    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
    
  },[ theme ])

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
      
    </Routes>
  )
}

export default App
