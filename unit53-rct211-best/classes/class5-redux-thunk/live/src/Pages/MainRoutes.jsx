 import React from 'react'
import SingleTodo from './SingleTodo'
import { Route, Routes } from 'react-router-dom'
import Todos  from "../Components/Todos"
 
 const MainRoutes = () => {
   return (
   <Routes>
     <Route path="/" element={<Todos/>} />
     <Route path="/:id" element={<SingleTodo/>} />

   </Routes>
   )
 }
 
 export default MainRoutes
 