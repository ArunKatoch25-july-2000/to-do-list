import React, { useState } from "react";
import Button from '@mui/material/Button';
import './App.css';
import ListComp from "./ListComp";
import DeleteIcon from '@mui/icons-material/Delete';

const Todo_list = () => {

    const [item, setItem] = useState();
    const [newItem, setNewItem] = useState([]);


    const itemEvent = (event) => {
        setItem(event.target.value);

    }

    const clickEvent = () => {
        setNewItem((prevVal) => {
            return [...prevVal, item]
        })
        setItem("")

    }

    const unsubmitEvent = () => {
        setNewItem([])
    }

    return (
        <>
            <div className='outerDiv'>
                <h1 className="heading-1"> To_Do_List </h1>

                <div className='inputDiv'>

                    <input
                        type="text"
                        placeholder="Add a Item"
                        className='titleInput'
                        value={item}
                        onChange={itemEvent}
                        name='input-1'

                    />

                    <Button className='plusBtn' onClick={clickEvent}>+</Button>
                </div>
                <div className='listsDiv'>
                    <ol>
                        {newItem.map((Val, index) => {
                            return (
                                <ListComp
                                    text={Val}
                                    key={index}
                                    id={index}
                            

                                />
                            )
                        })}
                    </ol>
                </div>
                <div className="delete-div" onClick={unsubmitEvent}> <h2>Delete<DeleteIcon /></h2></div>
            </div>
        </>
    )

}

export default Todo_list;