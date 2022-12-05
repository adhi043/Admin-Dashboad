
import Dashboard from './Dashboard'
import Settings from './Settings'
import Tables from './Tables'
import SignIn from './SignIn'

import SignUp from './SignUp'

import ResetPassword from './ResetPassword';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Company from './pages/Company/Company';
import Customer from './pages/Customer/Customer';
import Product from './pages/Product/Product';
import Report from './pages/Report/Report';
import AddCustomer from './pages/AddCustomer/AddCustomer'
import AddProduct from './pages/AddProduct/AddProduct'
import {Provider} from 'react-redux'
import store from './reducers/Store'

function App() {
  return (
    <Provider store={store}>
      
        <BrowserRouter>
         
              <Routes>
                <Route  path='/' element={<SignIn/>}  />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                
                <Route path='/company' element={<Company/>}  />
                
                <Route path='/addcustomer' element={<AddCustomer/>}  />
                <Route path='/product' element={<Product/>}  />
                <Route path='/addproduct' element={<AddProduct/>}  />
                <Route path='/customer' element={<Customer/>} />
                <Route path='/report' element={<Report/>}  />
                <Route path="/resetpassword" element={<ResetPassword />} />
              </Routes>
            
        </BrowserRouter>
     
    </Provider>
  );
}

export default App;