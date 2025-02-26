import React, { createContext, useState } from 'react'

export let ProductIdcontext =  createContext(0)

export default function ProductContextProvider(props) {
 const [Id,SetId]   = useState(0);
 
    return (
    <ProductIdcontext.Provider value={{Id,SetId}}>
       {props.children}
    </ProductIdcontext.Provider>
  )
}
