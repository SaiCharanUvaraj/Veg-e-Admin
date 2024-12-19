import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import UpdateItem from './pages/UpdateItem';
import DeleteItem from './pages/DeleteItem';
import Landing from './pages/Landing';

const App = () => {
  return (
    <BrowserRouter>
        <div>
            <Menu />
            <div>
                <Routes>
                    <Route>
                        <Route path='/' element={<Landing />} />
                        <Route path='/update-item' element={<UpdateItem />} />
                        <Route path='/delete-item' element={<DeleteItem />} />
                    </Route>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  )
}

export default App;