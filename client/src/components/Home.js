import React, { useEffect, useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {

    const [foodName, setFoodName] = useState('')
    const [days, setDays] = useState('')
    const url = `http://localhost:3001/`
    const [data, setData] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch(url + 'items')
        .then((response) => response.json())
        .then((data) => setData(data))
        .then(console.log(data))
    }

    const postData = () => {
        fetch(url + 'insert', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                foodName: foodName,
                days: days
            })
        })
        .then((data) => {
            console.log(data)
        })
    }

    return (
        <div className="home">
            <h1>MERN CRUD</h1>
            <div className="table">
                <table>
                    <th>Name</th>
                    <th>Days</th>
                    <th>Actions</th>
                    {
                        data.map(
                            items => (
                                <tr key={items.id}>
                                <td>{items.foodName}</td>
                                <td>{items.daySinceIAte}</td>
                                <td>
                                    <Link to={`${items._id}`}><button>UPDATE</button></Link>
                                    <button>DELETE</button>
                                </td>
                                </tr>
                            )
                        )
                    }
                    
                    
                </table>
            </div>

            <div className="add">
                <label htmlFor="">Name: </label>
                <input type="text" name='foodName' onChange={(e) => {setFoodName(e.target.value)}}/>
                
                <br />

                <label htmlFor="">Days: </label>
                <input type="text" name='days' onChange={(e) => {setDays(e.target.value)}}/>

                <br />

                <button onClick={postData} >ADD</button>
            </div>
            
        </div>
    )
}

export default Home