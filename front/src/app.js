import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {home} from './views/home/home'

function app() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route exact path ='/' element={<home/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default app