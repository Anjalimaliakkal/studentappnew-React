import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            {
                "name": "Anjali",
                "rollNo": 21,
                "admNo": "FITMCA-121",
                "college": "FISAT"
            },
            {
                "name": "Arun",
                "rollNo": 22,
                "admNo": "SGIMCA-123",
                "college": "SNGIST"
            },
            {
                "name": "Abhay",
                "rollNo": 10,
                "admNo": "FITMBA-234",
                "college": "FISAT"
            }
        ]
    )

    return (
        <div>
            <NavBar />
            <h1><center>VIEWALL STUDENTS</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">NAME</th>
                                    <th scope="col">ROLL NO</th>
                                    <th scope="col">ADMISSION NO</th>
                                    <th scope="col">COLLEGE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.name}</th>
                                                <td>{value.rollNo}</td>
                                                <td>{value.admNo}</td>
                                                <td>{value.college}</td>
                                            </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll