import { React, useEffect, useState } from "react";
import "./Edit.css"
import { useParams, useNavigate } from 'react-router-dom'

function Edit() {

    const { id } = useParams();
    const url = `http://localhost:3001/`
    const [data, setData] = useState([])
    const navigate = useNavigate();

    const [foodName, setFoodName] = useState('');
    const [day, setDay] = useState('');


    useEffect(() => {
        getData();

    }, [data[0]?._id])

    const getData = () => {
        fetch(url + `items/${id}`)
        .then((response) => response.json())
        .then((data) => 
            setData(data),
            setFoodName(data[0]?.foodName),
            setDay(data[0]?.daySinceIAte),
        )
    }

    const updateData = (id) => {
        fetch(url + 'update', {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: id,
                foodName: foodName,
                day: day
            })
        })
        .then((data) => {
            console.log(data)
        })
        .then(navigate("/"))
    }

    return (
        <div className="edit">
            <div className="form">
                <label htmlFor="">New Food Name: </label>
                <input type="text" name="foodName" value={foodName} onChange={(e) => setFoodName(e.target.value)}/>

                <br />

                <label htmlFor="">New Day: </label>
                <input type="text" name="day" value={day} onChange={(e) => setDay(e.target.value)}/>

                
            </div>
            <div className="add-button">
                <br />
                <button onClick={() => updateData(id)}>UPDATE</button>
            </div>
        </div>
    )

}

export default Edit