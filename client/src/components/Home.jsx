import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames,getGenres,getPageNumber,getInitialPageNumber,getBackPage,getVideogamesPlatforms} from "../actions/index";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import Genre from "./Genre";  
import Platforms from "./Platforms"; 
import Order from "./Order";
import Base from "./Base";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Home() {

   const dispatch = useDispatch();

     useEffect(() => {
       dispatch(getVideogames());
       dispatch(getVideogamesPlatforms());
   }, []);

//-------------------------------------------------------------
     const allVideogames=useSelector((state)=> state.videogames);
     var pageNumber=useSelector((state)=> state.pageNumber);
     var backPageNumber=useSelector((state)=>state.backPageNumber)
     var initialPageNumber=useSelector((state)=>state.initialPageNumber)
     console.log("mis videojuegos",allVideogames) 

     const [currentPage,setCurrentPage]= useState(1);
     const [videogamesPerPage,setVideogamesPerPage]= useState(9);
     var indexOfLastVideogame;
     if(pageNumber===1){
      indexOfLastVideogame = pageNumber * videogamesPerPage;
     }
     if(pageNumber!==1&&backPageNumber===false){
      indexOfLastVideogame = currentPage * videogamesPerPage;
     }
     if(backPageNumber===true){
      indexOfLastVideogame = initialPageNumber * videogamesPerPage;
     }
     const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage; 
     const currentVidegames = allVideogames.slice(indexOfFirstVideogame,indexOfLastVideogame)
     //console.log("mis actuales videojuegos",currentVidegames)  
  
//-------------------------------------------------------------


  const paginado = (page) => {

    if(pageNumber===1){
      dispatch(getPageNumber(0))
    }
    setCurrentPage(page);
    dispatch(getInitialPageNumber(page))
    dispatch(getBackPage(false))

  }; 

  return (

      <div>   

      {/*----------------SEARCHBAR------------------------------*/}    
          <SearchBar />      
      {/*----------------GÉNEROS------------------------------------*/}    
          <Genre />
      {/*----------------GÉNEROS------------------------------------*/}    
          <Platforms />    
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

          {allVideogames.length>0?
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  {currentVidegames.map((el) => { 
                      return (
                        <Grid key={el.id} item xs={4}>
                          <Link to={"/DetailGames/" + el.id}>
                            <Card name={el.name} image={el.img} id={el.id} key={el.id} />             
                          </Link>
                        </Grid> 
                    ); 
                  })}
                </Grid>
              </Box>:
              null} 

              <footer>
                  &copy; 2022
              </footer>             
      </div>
  );
}



