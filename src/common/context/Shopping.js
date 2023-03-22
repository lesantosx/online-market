import { createContext, useContext, useState } from 'react'

export const ShoppingContext = createContext()
ShoppingContext.displayName = 'Shopping'

export const ShoppingProvider = ({ children }) => {
  const [wallet, setWallet] = useState([])

  return (
    <ShoppingContext.Provider value={{ wallet, setWallet }}>
      {children}
    </ShoppingContext.Provider>
  )
}

export const useShoppingContext = () => {
  const { wallet, setWallet } = useContext(ShoppingContext)

  function addProduct(product){
    const isProductExist = wallet.some( item => item.id === product.id)

    if(!isProductExist){
      product.qty = Number(1)
      return setWallet(previousValue => 
        [...previousValue, product]
      )
    }

    setWallet(previousValue =>  previousValue.map(item => {
      if(item.id === product.id){
        item.qty += Number(1)
      }
      return item
    }))
    
  }

  return {
    wallet,
    setWallet,
    addProduct
  }
}
