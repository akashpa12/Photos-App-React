import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changedata] = useState([])
    const fetchdata = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then(
            (response)=>{
                changedata(response.data)
            }
            

        ).catch().finally()

    }
    useEffect(()=>{fetchdata()},[])

return (
    <div>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {data.map(
                            (value, index) => {
                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card">
                                        <img src={value.url} class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">{index}</h5>
                                            <p class="card-text">ID:{value.id}</p>
                                            <p class="card-text">TITLE:{value.title}</p>
                                            <img src={value.thumbnailUrl} class="card-img-top" alt="..."></img>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            }

                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default ViewAll