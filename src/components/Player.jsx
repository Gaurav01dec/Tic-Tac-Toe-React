import { useState } from "react"

export default function Player({ initialName, logo, isActive }) {

    // i want to extract the name of player and share it to Gameboard.jsx so that after winning i can share name of x and o





    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick() {
        // setIsEditing(!isEditing);// this will not do instantly updation so we use arrow function to instantly change 
        setIsEditing((editing) => !editing)
    }
    function handleChange(event) {
        setPlayerName(event.target.value);
    }


    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing === true) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }
    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{logo}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}