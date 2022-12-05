
import Navbar from '../../componets/Navbar'
import Sidebar from '../../componets/Sidebar'
import Footer from '../../Footer'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { fetchRequest, fetchSuccess, fetchError } from '../../reducers/Action';
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'


const Customer = () => {


  const customer = useSelector(state => state.values)
  const dispatch = useDispatch()


  useEffect(() => {


    const config = {

      headers: {

        "Content-Type": "application/json"

      }

    }

    dispatch(fetchRequest)

    axios.get('https://salepanel.mulum.pk/product/allProducts', config).then((res) => {

      const customer = res.data.data.materials

      dispatch(fetchSuccess(customer))

    }

    ).catch((error) => {

      const errormsg = error.message

      dispatch(fetchError(errormsg))

    })

  }, [])





  return (
    <>
    <Sidebar/>

<main className="content">
     <div>
    <Navbar/>
    <div className="row my-4">
        <div className="col-md-4">
            <div>
            <input type="date" class="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon" />
            </div>
        </div>
        <div className="col-md-4">
        <div>
            <input type="date" class="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon" />
            </div>
        </div>
        <div className="col-md-4">
            <div>
            <input type="text" class="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon" />
            </div>
        </div>
    </div>
    <div className="row mt-5">
    <div class="col-12 col-xl-12">
            <div class="row">
                <div class="col-12 mb-4">
                    <div class="card border-0 shadow">
                        <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h2 class="fs-5 fw-bold mb-0">Customer</h2>
                            </div>
                            <div class="col text-end"><Link to="/addcustomer" class="btn btn-sm btn-primary">Add</Link></div>
                        </div>
                        </div>
                        <div class="table-responsive">
                        <table class="table align-items-center table-flush">
                            <thead class="thead-light">
                                <tr>
                                <th class="border-bottom" scope="col">Sr.no</th>
                                    <th class="border-bottom" scope="col">Name</th>
                                    <th class="border-bottom" scope="col">City</th>
                                    <th class="border-bottom" scope="col">Region</th>
                                    <th class="border-bottom" scope="col">Phone</th>
                                    <th class="border-bottom" scope="col">Company Invoice</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="text-gray-900" scope="row">1</th>
                                    <td class="fw-bolder text-gray-500">Ghulam Mustafa</td>
                                    <td class="fw-bolder text-gray-500">Sargodha</td>
                                    <td class="fw-bolder text-gray-500">
                                    565445
                                    </td>
                                    <td class="fw-bolder text-gray-500">
                                    03090962660
                                    </td>
                                    <td class="fw-bolder text-gray-500">
                                      351352
                                    </td>
                                </tr>
                                
                               
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
               
            </div>
            </div>
    </div>
</div>
<Footer/>
</main>
    </>
   
  )
}

export default Customer;