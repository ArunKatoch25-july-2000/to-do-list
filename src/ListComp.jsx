import React, { useState } from "react";
import Todo_list from "./Todo_list";
import "./App.css"

const ListComp = (props) => {
    const [line, setLine] = useState(false);

    const unsubmit = () => {
        setLine(true)
    }
    return (
        <>
            <div className="toDo-List">
                <span onClick={unsubmit}>
                    <button className="unSubmit" onClick={() => {
                        props.onSelect(props.id)
                    }}>x</button>
                </span>
                <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
            </div>
        </>
    )
}

export default ListComp;