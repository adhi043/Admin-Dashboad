
import Navbar from '../../componets/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'
import Sidebar from '../../componets/Sidebar'
import React, { useEffect } from 'react'
import { fetchRequest, fetchSuccess, fetchError } from '../../reducers/Action';
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'

const Company = () => {
  const company = useSelector(state => state.values)
  const dispatch = useDispatch()


  useEffect(() => {


    const config = {

      headers: {

        "Content-Type": "application/json"

      }

    }

    dispatch(fetchRequest)

    axios.get('https://salepanel.mulum.pk/admin/getCompany', config).then((res) => {

      const materials = res.data.data.materials

      dispatch(fetchSuccess(materials))

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
   <div>
   <div className="row pt-5 mt-5 mb-5 pb-5">
       <div className="col-md-4 mx-auto mt-5 mb-5">
          <div className="card p-4 text-center">
            <div>
                <img src='' alt='' />
            </div>
            <hr/>
            <h5>Ghulam Mustafa</h5>
            <p>nice</p>
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

export default Company;