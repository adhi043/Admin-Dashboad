
import Sidebar from '../../componets/Sidebar'
import Footer from '../../Footer'
import Navbar from '../../componets/Navbar'
import React from 'react'
import axios from "axios"



const AddCustomer = () => {



    const submit = (e) => {
        e.preventDefault();
    
        const param = new FormData();
        param.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');
        param.append('name', 'productIn.name')
        param.append('price', 'productIn.price')
        param.append('image', 'addImage')
    
    
    
        const configu = {
    
          headers: {
    
            "Content-Type": "application/x-www-form-urlencoded"
    
          }
    
        }
    
        axios.post('https://salepanel.mulum.pk/product/allProducts', param, configu).then((res) => {
          console.log(res.data);
    
          
    
        }
    
        )
      }





    return (
        <>

            <Sidebar />

            <main className="content">
                <div className="dashboard-container" >
                    <Navbar />
                    <div className="row my-4">
                        <div class="col-12 col-xl-12">
                            <div class="card card-body border-0 shadow mb-4">
                                <h2 class="h5 mb-4">Add Customer</h2>
                                <form>
                                    
                                    {/* <div class="row align-items-center">
                           
                            {/* <div class="col-md-6 mb-3">
                            <label for="gender">Gender</label> 
                            <select class="form-select mb-0" id="gender" aria-label="Gender select example">
                                <option selected="selected">Gender</option>
                                <option value="1">Female</option>
                                <option value="2">Male</option>
                            </select>
                            </div> 
                        </div> */}
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <div><label for="last_name">Name</label> <input class="form-control" id="name" type="text" placeholder="Name..." required /></div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group"><label for="email">City</label> <input class="form-control" id="city" type="text" placeholder="City..." required /></div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group"><label for="email">Region</label> <input class="form-control" id="region" type="text" placeholder="Region..." required /></div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group"><label for="email">Phone</label> <input class="form-control" id="phone" type="text" placeholder="Phone..." required /></div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group"><label for="email">Invoice</label> <input class="form-control" id="invoice" type="text" placeholder="Invoice..." required /></div>
                                        </div>
                                        {/* <div class="col-md-6 mb-3">
                                            <div><label for="first_name">Method</label> <select class="form-select form-select-md" aria-label=".form-select-sm example">
                                                <option selected>Select Method</option>
                                                <option value="1">Cash</option>
                                                <option value="2">Online</option>

                                            </select></div>
                                        </div> */}


                                    </div>


                                    <div class="mt-3"><button class="btn btn-gray-800 mt-2 animate-up-2" type="submit">Add Payment</button></div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
                <Footer />
            </main>
        </>
    )
}

export default AddCustomer