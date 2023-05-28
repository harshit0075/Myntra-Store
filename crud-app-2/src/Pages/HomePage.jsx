import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { ProductList } from '../Components/ProductList'
import styled from 'styled-components'

export const HomePage = () => {
  return (
    <Div>
      <div className='sidebar'>
      <Sidebar/>
      </div>
      <div className='productList'>
        <ProductList/>
      </div>
    </Div>
  )
}


const Div=styled.div`
  display: flex;

  .sidebar{
     width: 15%;
  }

   .productList{
     width: 85%;
   }
 `