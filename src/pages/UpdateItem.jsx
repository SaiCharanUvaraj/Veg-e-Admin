import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const UpdateItem = () => {
    const [updateItemData, setUpdateItemData] = useState({item: "", type: "", price: "", quantity: ""});
    const [msg,setMsg]=useState("");
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUpdateItemData((prev) => ({ ...prev, [id]: value }));
    };
    const updateItem = async (e) => {
        e.preventDefault();
        const { item, type, price, quantity } = updateItemData;
        try 
        {
          const response = await axios.post("http://localhost:3000/update-items", {item, type, price, quantity,});
          setMsg(response.data);
        } 
        catch (error) 
        {
            setMsg(error);
        }
    };
    return (
    <div>
        <form onSubmit={updateItem}>
            <h1>Update or Add an item</h1>
            <label htmlFor="item">Item:</label>
            <input type="text" id="item" value={updateItemData.item} onChange={handleChange} required />
            <br />
            <br />
            <label htmlFor="type">Item type:</label>
            <input type="text" id="type" value={updateItemData.type} onChange={handleChange} required />
            <br />
            <br />
            <label htmlFor="quantity">Available amount:</label>
            <input type="number" id="quantity" value={updateItemData.quantity} onChange={handleChange} required />
            <br />
            <br />
            <label htmlFor="price">Price (per kg):</label>
            <input type="number" id="price" value={updateItemData.price} onChange={handleChange} required />
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

export default UpdateItem;