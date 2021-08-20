import React from 'react';
import "../index.css";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { getNameVideogames } from '../actions';

export default function SearchBar (){
const dispatch = useDispatch()
const [name,setName] = useState("") 

function handleInputChange(e){
e.preventDefault() 
setName(e.target.value) 
}

function handleSubmit(e){
    e.preventDefault() 
    dispatch(getNameVideogames(name))
}

return (
    <div>
        <input
        className="border"
        type = 'text'
        placeholder = "Buscar..."
        onChange = {(e) => handleInputChange(e)} 
        />
        <button  type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>
    </div>
)

}