import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Customizedchair from './Customizedchair.jsx'
import Mobile from './MobileCustomizer.jsx'
import WaterBottleCustomization from './WaterBottleCustomization.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Customizedchair />,   
    errorElement: <div>Not Found</div>,
  },
  {
    path: '/mobile',
    element: <Mobile />,            
  },{
    path: '/waterbottle',
    element: <WaterBottleCustomization />,
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
