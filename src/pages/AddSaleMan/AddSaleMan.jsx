import React from 'react'
import Navbar from '../../componets/Navbar'
import Footer from '../../Footer';
import Sidebar from '../../componets/Sidebar';
const AddSaleMan= () => {
  return (
    <>
   
    <Sidebar/>

<main className="content">
<div className="dashboard-container" >
        <Navbar/>
        <div className="row my-4">
        <div class="col-12 col-xl-12">
                <div class="card card-body border-0 shadow mb-4">
                    <h2 class="h5 mb-4">Add Sale Man</h2>
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                            <div><label for="first_name">Customer Name</label> <input class="form-control" id="first_name" type="text" placeholder="Enter your Customer Name..." required /></div>
                            </div>
                            <div class="col-md-6 mb-3">
                            <div><label for="last_name">Comany Invoice code</label> <input class="form-control" id="last_name" type="text" placeholder="code ...." required /></div>
                            </div>
                        </div>
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
                            <div class="form-group"><label for="email">City</label> <input class="form-control" id="email" type="text" placeholder="Enter City..." required /></div>
                            </div>
                            <div class="col-md-6 mb-3">
                            <div class="form-group"><label for="email">Region</label> <input class="form-control" id="email" type="text" placeholder="Region..." required /></div>
                            </div>
                            <div class="col-md-6 mb-3">
                            <div class="form-group"><label for="phone">Phone</label> <input class="form-control" id="phone" type="number" placeholder="+12-345 678 910" required /></div>
                            </div>
                            
                        </div>
                        
                        
                        <div class="mt-3"><button class="btn btn-gray-800 mt-2 animate-up-2" type="submit">Save all</button></div>
                    </form>
                </div>
               
                </div>
        </div>
        
    </div>
    <Footer/>
</main>
</>
    
  )
}

export default AddSaleMan;