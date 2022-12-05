
import Footer from '../../Footer'
import Navbar from '../../componets/Navbar'
import Sidebar from '../../componets/Sidebar'
import React, { useEffect } from 'react'
import { fetchRequest, fetchSuccess, fetchError } from '../../reducers/Action';
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'


const AddProduct = () => {


    const addproduct = useSelector(state => state.values)
    const dispatch = useDispatch()


    useEffect(() => {


        const config = {

            headers: {

                "Content-Type": "application/json"

            }

        }

        dispatch(fetchRequest)

        axios.get('https://salepanel.mulum.pk/product/new', config).then((res) => {

            const addproduct = res.data.data.materials

            dispatch(fetchSuccess(addproduct))

        }

        ).catch((error) => {

            const errormsg = error.message

            dispatch(fetchError(errormsg))

        })

    }, [])



    return (
        <>

            <Sidebar />

            <main className="content">
                <div className="dashboard-container" >
                    <Navbar />
                    <div className="row my-4">
                        <div class="col-12 col-xl-12">
                            <div class="card card-body border-0 shadow mb-4">
                                <h2 class="h5 mb-4">Add Product</h2>
                                <form>
                                    <div class="row">
                                        {/* <div class="col-md-6 mb-3">
                                            <div><label for="first_name">Company</label> <select class="form-select form-select-md" aria-label=".form-select-sm example">
                                                <option selected>Select Company</option>
                                                <option value="1">Cash</option>
                                                <option value="2">Online</option>

                                            </select></div>
                                        </div> */}
                                        

                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <div><label for="last_name">Name</label> <input class="form-control" id="last_name" type="text" placeholder="name" required /></div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group"><label for="email">Sale Price</label> <input class="form-control" id="salePrice" type="text" placeholder="Sale Price..." required /></div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group"><label for="email">Purchase Price</label> <input class="form-control" id="purchasePrice" type="text" placeholder="Purchase Price..." required /></div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group"><label for="email">Category</label> <input class="form-control" id="purchasePrice" type="text" placeholder="Category..." required /></div>
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

export default AddProduct