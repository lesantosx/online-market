import { createContext, useState } from 'react'

export const UserContext = createContext()
UserContext.displayName = 'User'

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("")
  const [wallet, setWallet] = useState(0)

  return (
    <UserContext.Provider value={{ name, setName, wallet, setWallet }}>
      {children}
    </UserContext.Provider>
  )
}
