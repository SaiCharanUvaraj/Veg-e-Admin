import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <h1>Veg-e Admin</h1>
        <div>
            <Link to="/update-item"> Update an item</Link>
            <br />
            <Link to="/delete-item"> Delete an item</Link>
        </div>
    </div>
  )
}

export default Menu