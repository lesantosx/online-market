import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { UserProvider } from 'common/context/User'
import { ShoppingProvider } from 'common/context/Shopping'

import Login from 'pages/Login'
import Market from 'pages/Market'
import ShoppingCart from 'pages/ShoppingCart'

export default function Router(){

  return (
    <BrowserRouter>
      <Switch>
        <UserProvider>
          <Route exact path="/">          
            <Login />          
          </Route>

          <ShoppingProvider>
            <Route path="/market">
              <Market />
            </Route>
          </ShoppingProvider>
          
        </UserProvider>  

        <Route path="/shopping">
          <ShoppingCart />
        </Route>

      </Switch>    
    </BrowserRouter>
  )
}