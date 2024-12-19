import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const DeleteItem = () => {
    const [deleteItemData, setDeleteItemData] = useState({
        item: "",
    });
    const [msg,setMsg]=useState("");
    const handleDeleteChange = (e) => {
        const { id, value } = e.target;
        setDeleteItemData((prev) => ({ ...prev, [id]: value }));
    };
    const deleteItem = async (e) => {
        e.preventDefault();
        const { item } = deleteItemData;
        try 
        {
            const response = await axios.post("http://localhost:3000/delete-items", {item});
            setMsg(response.data);
        }
        catch (error)
        {
            setMsg(error);
        }
    };
    return (
        <div>
            <form id="delete-item" onSubmit={deleteItem}>
                <h1>Delete items</h1>
                <label htmlFor="item">Item:</label>
                <input type="text" id="item" value={deleteItemData.item} onChange={handleDeleteChange} required />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <div>
                {msg}
            </div>
        </div>
    )
}

export default DeleteItem