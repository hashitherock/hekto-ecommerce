import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import FAQ from './pages/FAQ'
import ProductDetails from './pages/ProductDetails'
import MyAccount from './pages/MyAccount'
import Blog from './pages/Blog'
import Contact from './pages/Contact'


function App() {
  let myRouter = createBrowserRouter(createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/product' element={<ProductDetails/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/my-account' element={<MyAccount/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
  ))

  return (
    <>
    <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
