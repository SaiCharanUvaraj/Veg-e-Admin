import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import origin from '../Origin';

const UpdateItem = () => {
    const [updateItemData, setUpdateItemData] = useState({item:"", type:"", price:"", quantity:"", url:""});
    const [msg,setMsg]=useState("");
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUpdateItemData((prev) => ({ ...prev, [id]: value }));
    };
    const updateItem = async (e) => {
        e.preventDefault();
        const { item, type, price, quantity, url } = updateItemData;
        try 
        {
          const response = await axios.post(`${origin}/update-items`, 
            {item:item.toLowerCase().trim(), 
            type, price, quantity, url});
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
            <select id="type" value={updateItemData.type} onChange={handleChange} >
                <option value="" disabled>
                    Select an item type
                </option>
                <option value="fruit">Fruit</option>
                <option value="vegetable">Vegetable</option>
                <option value="dairy">Dairy</option>
            </select>
            <br />
            <br />
            <label htmlFor="quantity">Available amount (in Kgs):</label>
            <input type="number" id="quantity" value={updateItemData.quantity} onChange={handleChange} required />
            <br />
            <br />
            <label htmlFor="price">Price (per kg):</label>
            <input type="number" id="price" value={updateItemData.price} onChange={handleChange} required />
            <br />
            <br />
            <label htmlFor="url">Image URL:</label>
            <input type="text" id="url" value={updateItemData.url} onChange={handleChange} required />
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