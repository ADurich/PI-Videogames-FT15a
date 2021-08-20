import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {postVideogame} from '../actions/index'
import { useDispatch} from "react-redux";


export default function VideogameCreate(){

	const dispatch = useDispatch();
    const [error,setError] = useState({});
    const [newVideogame,setNewVideogame] = useState({
        name: "",
        description: "",
        platforms:[],
        genre:[]
    })

//-------------------------------------------------------------
    function validate(input) {

    let errors = {};
    if (!input.name) {
      errors.name = 'Poner un nombre';
    } else{
    	if (!input.description) {
      errors.description = 'Poner una descripcion';
    } 
    }
  
    return errors;
  };

//-------------------------------------------------------------

  function handleChange(e){
       setNewVideogame({
           ...newVideogame,
           [e.target.name] : e.target.value 
       })
       setError(validate({
        ...newVideogame,
        [e.target.name]: e.target.value 
      }));
   }

//-------------------------------------------------------------

function handleCheck(e){
    if (e.target.checked){
        setNewVideogame({
            ...newVideogame,
            [e.target.name]: e.target.value 
        })
    }
}

//-------------------------------------------------------------

function handleSubmit(e){
    e.preventDefault();
    setError(validate({ //
        ...newVideogame,
        [e.target.name]:e.target.value
    }));

    dispatch(postVideogame(newVideogame));

    alert("Videojuego creado");
    setNewVideogame({
        name: "",
        description: "",
        genre:[],
        platforms:[] 
    })
    
}

	return(

			<div>     
	            <h1>Crear videojuego</h1>
	            {console.log(newVideogame)}
	            <form onSubmit={(e)=>handleSubmit(e)}> 

	        {/*----------------INPUT------------------------------------*/}

	                <div>
	                    <label>Nombre:</label>
	                    <input
	                    className="border"
	                    type= "text"
	                    value= {newVideogame.name}
	                    name= "name"
	                    onChange={(e)=>handleChange(e)} 
	                    />
	                    {error.name && (
	                        <p className='error'>{error.name}</p>
	                        )}  
	                </div>
	                <div>
	                    <label>Descripción:</label>
	                    <input
	                    className="border"
	                    type= "text"
	                    value= {newVideogame.description}
	                    name= "description"
	                    onChange={(e)=>handleChange(e)} 
	                    />
	                     {error.description && (
	                        <p className='error'>{error.description}</p>
	                        )}  
	                </div>
	                
	            {/*----------------SELECT------------------------------------*/}

	                <div>
	                    <label>Plataformas</label>
	                    <label><input
	                    className="border"
	                    type="checkbox"
	                    name="platforms"
	                    value= "Playstation 4"
	                    onChange={(e)=>handleCheck(e)} 
	                    />Playstation 4</label>

	                     <label><input
	                    type="checkbox"
	                    name="platforms"
	                    value= "PC"
	                    onChange={(e)=>handleCheck(e)}
	                    />PC</label>

	                   <label><input
	                    type="checkbox"
	                    name="platforms"
	                    value= "Xbox One"
	                    onChange={(e)=>handleCheck(e)} 
	                    />Xbox One</label>

	                </div>

                {/*----------------------------------------------------*/}
	                
	                <div>
	                    <label>Géneros</label>
	                    <label><input
	                    className="border"
	                    type="checkbox"
	                    name="genre"
	                    value= "Accion"
	                    onChange={(e)=>handleCheck(e)} 
	                    />Accion</label>

	                     <label><input
	                    type="checkbox"
	                    name="genre"
	                    value= "Aventura"
	                    onChange={(e)=>handleCheck(e)}
	                    />Aventura</label>

	                   <label><input
	                    type="checkbox"
	                    name="genre"
	                    value= "Shooter"
	                    onChange={(e)=>handleCheck(e)} 
	                    />Shooter</label>
	                </div>	

	            {/*----------------------------------------------------*/}

	                <br/>
	                <button className="border" type='submit'>Crear Personaje</button>
	            </form>

	            <Link to= '/home'>
            		<button className="border">Volver</button>
        		</Link>
            </div>
		)

}