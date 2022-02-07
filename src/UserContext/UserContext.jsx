import { useState, useContext, createContext } from 'react'

// create context
const UserContext = createContext()

// create the provider component to provide context value
const UserProvider = ({ children }) => {
  // set state
  const [user, setUser] = useState({})
  // set state to a variable
  const contextValue = { user, setUser }
  // return UserContext.Provider with value of state
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}

// create custom hook for provided context value
const useUser = () => {
  const context = useContext(UserContext)
  // create checkError
  if (context === undefined) {
    throw new Error('useUser must be used within a UserContext Provider')
  }
  // return context
  return context
}

// export provider and custom hook
export { UserProvider, useUser }
