import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact Us'
import User from './components/User'
import Github,{githubInfoLoader} from './components/github'

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element:<Layout/>,
//       children:[
//         {
//           path:"",
//           element:<Home />
//         },{
//           path:"about",
//           element:<About />
//         }
//       ]
//     }
// ])

//Route used to navigate the route where we need to do routing
//Outlet used to render its child components we are using all these router from layout itself
//under outlet all the home,about,contact will be rendered
//here we used star to display that 404 - Page Not Found
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='User/:userid' element={<User />}/>
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}/>
      

    </Route>
  )
)
//RouterProvider:-a wrapper which wraps all the routes has a single parameter called router with which it accesses 
//all other routes
//Link-used to navigate to the particular route without rendering
//NavLink-used to navigate to the particular route without rendering but adds active class to it(like we can have a css to it)
//Hook-UseParams()-used to get the parameters from the url(route)
//Hook-useLocation()-to find the current location

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
