import logo from './logo.svg';
import './App.css';
// import Navbar from './components/navbar/Navbar';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './Root';
import { Children } from 'react';
import Home from './components/Home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import About from './components/about/About';

function App() {

  let routes=createBrowserRouter([
    {
    path:'/',element:<Root></Root>,children:[
      
      {index:true,element:<Home/>},
      {path:'home',element:<Home></Home>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<h1 className='text-center'>Error 404</h1>},
    ]
    },
  ])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    {/* <Navbar/> */}
    
    </>
  );
}

export default App;
