import { React, useEffect, useState } from "react";
import "./Edit.css"
import { useParams } from 'react-router-dom'

function Edit() {

    const { id } = useParams();
    const url = `http://localhost:3001/`
    const [data, setData] = useState([])
    const [newFoodName, setNewFoodName] = useState('');
    const [newDay, setNewDay] = useState('');

    const [foodName, setFoodName] = useState('');
    const [day, setDay] = useState('');


    useEffect(() => {
        getData();

    }, [])

    const getData = () => {
        fetch(url + `items/${id}`)
        .then((response) => response.json())
        .then((data) => 
            setData(data),
            setFoodName(data.foodName),
            setDay(data.daySinceIAte),
        )
    }

    // const updateData = () => {
    //     fetch(url + 'insert', {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify({
    //             foodName: foodName,
    //             days: days
    //         })
    //     })
    //     .then((data) => {
    //         console.log(data)
    //     })
    // }

    return (
        <div className="edit">
            <div className="form">
                <label htmlFor="">New Food Name: </label>
                <input type="text" name="newFoodName" value={foodName} onChange={(e) => {setNewFoodName(e.target.value)}}/>

                <br />

                <label htmlFor="">New Day: </label>
                <input type="text" name="newDay" value={day} onChange={(e) => {setNewDay(e.target.value)}}/>

                
            </div>
            <div className="add-button">
                <br />
                <button>UPDATE</button>
            </div>
        </div>
    )

}

export default Edit