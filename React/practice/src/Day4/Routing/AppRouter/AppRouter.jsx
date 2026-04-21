import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import HomeLayout from '../Layouts/HomeLayout'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import Sale from '../Pages/Sale'
import Sport from '../Pages/Sport'
import Products from '../Pages/Products'
import Motorsport from '../Pages/Motorsport'
import New from '../Pages/New'
import Kids from '../Pages/Kids'
import Category from '../Pages/Category'
import ProductsLayout from '../Layouts/ProductsLayout'
import ViewMore from '../Components/ViewMore'

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<HomeLayout/>,
            children:[
                {
                    index:true,
                    element:<Sport/>
                },
                {
                    path:'men',
                    element:<Men/>
                },
                {
                    path:'women',
                    element:<Women/>
                },
                {
                    path:'sport',
                    element:<Sport/>
                },
                {
                    path:'sale',
                    element:<Sale/>
                },
                {
                    path:'motorsport',
                    element:<Motorsport/>
                },
                {
                    path:'kids',
                    element:<Kids/>
                },
                {
                    path:'new',
                    element:<New/>
                },
                {
                    path:'products',
                    element:<ProductsLayout/>,
                    children:[
                        {
                            index:true,
                            element:<Products/>
                        },
                        {
                            path:':id',
                            element:<ViewMore/>
                        },
                        {
                            path:'/products/category/:category',
                            element:<Category/>
                        },
                        {
                            path:'/products/category/:category/:id',
                            element:<ViewMore/>
                        }
                    ]
                }
            ]
        }
    ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default AppRouter