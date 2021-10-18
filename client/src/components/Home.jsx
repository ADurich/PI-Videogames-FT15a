import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames,getGenres,filterVideogamessByGenre,orderByName,filterCreated } from "../actions/index";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import axios from "axios";



export default function Home() {

   const dispatch = useDispatch();

     useEffect(() => {
       dispatch(getVideogames());
       dispatch(getGenres()); 
   }, []);

//-------------------------------------------------------------

     const allVideogames=useSelector((state)=> state.videogames);
     console.log("mis juegos", allVideogames);
     const allGenres=useSelector((state)=> state.genres);
     const [currentPage,setCurrentPage] = useState(1);
     const [videogamesPerPage,setVideogamesPerPage]= useState(9);
     const indexOfLastVideogame = currentPage * videogamesPerPage; 
     const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage; 
     const currentVidegames = allVideogames.slice(indexOfFirstVideogame,indexOfLastVideogame)

//-------------------------------------------------------------

    const handleFilterGenre = (e) => {
      dispatch(filterVideogamessByGenre(e.target.value)); 
  }; 

//-------------------------------------------------------------

  const handleSort = (e) => {
    dispatch(orderByName(e.target.value)); 
  };


//-------------------------------------------------------------

  const handleFilterCreated = (e) => {
    dispatch(filterCreated(e.target.value)); 
  };

//-------------------------------------------------------------

  const paginado = (pageNumber) => {
    
    setCurrentPage(pageNumber);
  }; 

  return (

      <div>
      {/*----------------CREAR PERSONAJE----------------------------*/}
          <Link to="/CreateVideogame"><button className="btn btn-outline-secondary rounded-0">Crear Personaje</button></Link>

      {/*----------------SEARCHBAR------------------------------*/}    

          <SearchBar />

      {/*----------------GÉNEROS------------------------------------*/}    

          <h4>Géneros</h4>
          <div>
            <select className="border" onChange={e => handleFilterGenre(e)}> 
              <option value="all">Todos</option>        
              {allGenres.map((el) => { 
                    return (
                          <option value={el}>{el}</option>                
                   );
              })}
            </select>

          </div>

      {/*------------------ORDENAR---------------------------------*/}    

          <h4>Orden</h4>
          <div>
            <select className="border" onChange={e => handleSort(e)} >
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
            <span className="border"><Link to={"/Home"}>Ir</Link></span>
          </div>
      {/*-----------------CREADOS----------------------------------*/}    

          <h4>Videojuegos</h4>
          <div>
            <select className="border" onChange={e => handleFilterCreated(e)} > 
                <option value="all">Todos</option>
                <option value="created">Creados</option>
                <option value="api">de api</option>
            </select>
          </div>  

      {/*---------------PAGINADO-------------------------------------*/}    

          <Paginado 
            videogamesPerPage={videogamesPerPage}
            allVideogames={allVideogames.length} 
            paginado={paginado}
          />

      {/*----------------CARDS-----------------------------------*/}

         
          <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
              {currentVidegames.map((el) => { 
                return (
                  <div className="col-md-4">
                    <Link to={"/DetailGames/" + el.id}>
                      <Card name={el.name} image={el.img} id={el.id} key={el.id} />             
                    </Link>
                  </div> 
              ); 
              })}          
            </div>         
          </div>
    

      </div>
  );
}




          
