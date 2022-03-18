import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames} from "../actions/index";
import Card from "./Card";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function Cards() {

	const dispatch = useDispatch();

     useEffect(() => {
       dispatch(getVideogames()); 
   	}, []);

     const allVideogames=useSelector((state)=> state.videogames);
     const [currentPage,setCurrentPage] = useState(1);
     const [videogamesPerPage,setVideogamesPerPage]= useState(9);
     const indexOfLastVideogame = currentPage * videogamesPerPage; 
     const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage; 
     const currentVidegames = allVideogames.slice(indexOfFirstVideogame,indexOfLastVideogame)

  return (
    <div>
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
    </div>
  );
}
