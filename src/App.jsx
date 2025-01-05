import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'


function App() {
  let myRouter = createBrowserRouter(createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Route>
  ))

  return (
    <>
    <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
