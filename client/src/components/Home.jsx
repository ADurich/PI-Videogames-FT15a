import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames,getGenres,filterVideogamessByGenre,orderByName,filterCreated } from "../actions/index";
import Card from "./Card";
//import Cards from "./Cards";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import Genre from "./Genre";
import Order from "./Order";
import Base from "./Base";
import axios from "axios";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


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


  const paginado = (pageNumber) => {
    
    setCurrentPage(pageNumber);

  }; 

  return (

      <div>   

      {/*----------------SEARCHBAR------------------------------*/}    
          <SearchBar />      
      {/*----------------GÉNEROS------------------------------------*/}    
          <Genre />
      {/*------------------ORDENAR---------------------------------*/}  
          <Order />  
      {/*-----------------CREADOS----------------------------------*/}    
          <Base />
      {/*---------------PAGINADO-------------------------------------*/}    

          <Paginado 
            videogamesPerPage={videogamesPerPage}
            allVideogames={allVideogames.length} 
            paginado={paginado}
          />
      {/*----------------CREAR PERSONAJE----------------------------*/}    
          <Link id="avv" to="/CreateVideogame"><Button sx={{mt:1,mb:3}} variant="contained" color="secondary">Crear videojuego</Button></Link>    

      {/*----------------CARDS-----------------------------------*/}

          <section id="my-cards">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  {currentVidegames.map((el) => { 
                      return (
                        <Grid item xs={4}>
                          <Link to={"/DetailGames/" + el.id}>
                            <Card name={el.name} image={el.img} id={el.id} key={el.id} />             
                          </Link>
                        </Grid> 
                    ); 
                  })}
                </Grid>
              </Box>
          </section>
    
         

      </div>
  );
}




          
