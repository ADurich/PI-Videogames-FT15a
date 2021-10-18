import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {postVideogame,getGenres} from '../actions/index'
import { useDispatch, useSelector} from "react-redux";
import "../index.css";


export default function VideogameCreate(){

	const dispatch = useDispatch();

	useEffect(() => {
       dispatch(getGenres()); 
   }, []);

	const allGenres=useSelector((state)=> state.genres);
    const [error,setError] = useState({});
    const [newVideogame,setNewVideogame] = useState({
        name: "",
        description: "",
        platforms:[],
        genre:[],
        img:""
    })

//-------------------------------------------------------------
    function validate(input) {

    let errors = {};
    if (!input.name) {
      errors.name = 'Poner un nombre';
    } else{
    	if (!input.description) {
      errors.description = 'Poner una descripcion';
    } else{
    	if(!input.img){
    		errors.img="Poner una imágen"
    	}
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
            platforms: [...newVideogame.platforms,e.target.value] 
        })
    }
}

function handleCheckGenre(e){
    if (e.target.checked){
        setNewVideogame({
            ...newVideogame,
            genre: [...newVideogame.genre,e.target.value]
             
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
        platforms:[],
        img:"" 
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
	                <div>
	                    <label>Imágen:</label>
	                    <input
	                    className="border"
	                    type= "text"
	                    value= {newVideogame.img}
	                    name= "img"
	                    onChange={(e)=>handleChange(e)} 
	                    />
	                    {error.img && (
	                        <p className='error'>{error.img}</p>
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

                {/*----------------GÉNEROS----------------------------*/}
	                
	                <div>
	                    <label>Géneros</label>
	                    {allGenres.map((el) => { 
			                    return (
			                        <label><input
					                    className="border"
					                    type="checkbox"
					                    name="genre"
					                    value={el}
					                    onChange={(e)=>handleCheckGenre(e)} 
		                    		/>{el}</label>                  
			                   );
			              })}
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