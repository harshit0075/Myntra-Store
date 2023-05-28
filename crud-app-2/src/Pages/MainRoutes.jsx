import React from 'react'
import {Route, Routes} from "react-router-dom"
import { HomePage } from './HomePage'
import { Login } from './Login'
import { Admin } from './Admin'
import { PrivateRoute } from '../Components/PrivateRoute'
import { EditProduct } from './EditProduct'

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/edit:id' element={
              <PrivateRoute>
                <EditProduct/>
              </PrivateRoute>
            }/>
            <Route path='/admin' element=
            {<PrivateRoute>
              <Admin/>
            </PrivateRoute>}/>

        </Routes>
    </div>
  )
}

