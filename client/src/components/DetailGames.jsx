import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail,getInitialPageNumber } from "../actions/index";
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

export default function DetailGames({match}){
const dispatch = useDispatch()

 useEffect(() => {
     dispatch(getDetail(match.params.id));
 },[dispatch])

const myVideogame = useSelector((state) => state.details);

function handleChangePageNumber(){
      dispatch(getInitialPageNumber(1)); 
   }

return (
    <div>
        {myVideogame.map((el) => { 
          return (
                <Card sx={{ mx: "auto",maxWidth:800,maxHeight:900}} key={el.id} >
                  <CardActionArea>
                    {el.img!==""?
                    <CardMedia
                        component="img"
                        image={el.img}
                        alt="image not found"
                        sx={{mx:"auto",height:400}}
                    />:
                    <CardMedia
                        component="img"
                        image="https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg"
                        alt="image not found"
                        sx={{mx:"auto",height:400}}
                    />}                   
                    <CardContent id="cardContent">
                      <Typography gutterBottom variant="h5" component="div">
                        {el.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <b>Descripción: </b>
                        {el.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <b>Géneros: </b>
                        {el.genres.map((el)=>{return el.name+' '})}
                      </Typography>
                      {/*<Typography variant="body2" color="text.secondary">
                        {el.genres.map((el)=>{return el+' '})}
                       </Typography>*/}
                      <Typography variant="body2" color="text.secondary">
                        <b>Plataformas: </b>
                        {el.platforms.map((el)=>{return el+ ', '})}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
         );
         })}
        
        <Link to= '/home'>
            <Button variant="contained" onClick={handleChangePageNumber}>Volver al inicio</Button>
        </Link>
    </div>
)}



