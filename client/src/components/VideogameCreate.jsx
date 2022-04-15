import React, {useState, useEffect} from 'react';
import {postVideogame,getGenres,getPlatforms} from '../actions/index'
import { useDispatch, useSelector} from "react-redux";
import "../index.css";
import "./css/form.css" //poner esto en app.js
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';

const theme = createTheme();

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function VideogameCreate(){

	const dispatch = useDispatch();

	useEffect(() => {
       dispatch(getGenres()); 
       dispatch(getPlatforms()); 
   }, []);

	const allGenres=useSelector((state)=> state.genres);
	const allPlatforms=useSelector((state)=> state.platforms);
    //const [error,setError] = useState({});
    const [newVideogame,setNewVideogame] = useState({
        name: "",
        description: "",
        platforms:[],
        genre:[],
        img:""
    })
    //const [baseImage, setBaseImage] = useState("");
	
//-------------------------------------------------------------
    /*function validate(input) {
    let errors = {};

    if (!input.name) {
      errors.name = 'Colocar un nombre';    
    }else{
    	if(input.name.length>30){
    		errors.name="El nombre no puede ser mayor a 30 caracteres"
    	}
    } 
    if (!input.description) {
      errors.description = 'Colocar una descripcion';
    }else{
    	if(input.description.length>50){
    		errors.description="La descripción no puede ser mayor a 50 caracteres"
    	}
    }
    if(!input.img){
    		errors.img="Colocar una imágen";
    	}else{
    		if(!(input.img.match(/\.(jpg|jpeg|gif|png)$/) != null)){
    			errors.img="Tiene que ser una imagen"
    		}
    	}
    	
    return errors;
  };*/
/*
let url="hola.jpg"
	  if (typeof url !== 'string') console.log(false);
	  console.log((url.match(/\.(jpg|jpeg|gif|png)$/) != null));*/

//-------------------------------------------------------------
    function handleChange(event){
       setNewVideogame({
           ...newVideogame,
           [event.target.name] : event.target.value
       })
       /*setError(validate({
        ...newVideogame,
        [e.target.name]: e.target.value 
      }));*/

   }

   /*async function handleCheckImg(e){ 	
       setNewVideogame({
           ...newVideogame,
           [e.target.name] : e.target.files[0],
       }) 
       const file = e.target.files[0];
    	const base64 = await convertBase64(file);
    	setBaseImage(base64);
    	console.log(base64)
   }

   const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };*/

//-------------------------------------------------------------

const [platform, setPlatform] = React.useState([]);

	  const handleCheck = (event) => {
	    const {
	      target: { value },
	    } = event;
	    setPlatform(
	      // On autofill we get a stringified value.
	      typeof value === 'string' ? value.split(',') : value,
	    );

        setNewVideogame({
            ...newVideogame,
            platforms: [...newVideogame.platforms,event.target.value[(event.target.value.length)-1]] 
        })
	  };

const [genres, setGenres] = React.useState([]);

	  const handleCheckGenre = (event) => {
	    const {
	      target: { value },
	    } = event;
	    setGenres(
	      // On autofill we get a stringified value.
	      typeof value === 'string' ? value.split(',') : value,
	    );

            setNewVideogame({
                ...newVideogame,
                genre: [...newVideogame.genre,event.target.value[(event.target.value.length)-1]]
                             
                       })                  
	   };	  


//-------------------------------------------------------------

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newVideogame)
    dispatch(postVideogame(newVideogame));

                    alert("Videojuego creado");
                    setNewVideogame({
                        name: "",
                        description: "",
                        genre:[],
                        platforms:[],
                        img:""
                    });
                    setPlatform([]);
                    setGenres([]);
  };

	return(

			<> 				  
	            <ThemeProvider theme={theme}>
			      <Container component="main" maxWidth="xs">
			        <CssBaseline />
			        <Box
			          sx={{
			            marginTop: 8,
			            display: 'flex',
			            flexDirection: 'column',
			            alignItems: 'center',
			          }}
			        >
			          <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
			            <VideogameAssetIcon />
			          </Avatar>
			          <Typography component="h1" variant="h5">
			            Crear videojuego
			          </Typography>    
			          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
			            <TextField
			              margin="normal"
			              required
			              fullWidth
			              id="email"
			              label="Nombre"
			              autoComplete="email"
			              autoFocus
			              value= {newVideogame.name}
                          name="name"
                          onChange={(e)=>handleChange(e)}
			            />
			            <TextField
			              margin="normal"
			              required
			              fullWidth
				          id="outlined-multiline-static"
				          label="Descripción"
				          multiline
				          rows={4}
				          value= {newVideogame.description}
                          name= "description"
                          onChange={(e)=>handleChange(e)}
				          
				        />
			            <TextField
			              margin="normal"
			              required
			              fullWidth
			              name="img"
			              label="Imágen"
			              type="text"
			              id="password"
			              autoComplete="current-password"
			              value= {newVideogame.img}
                          onChange={(e)=>handleChange(e)}
			            />
			            <FormControl fullWidth margin="normal">
					        <InputLabel id="demo-multiple-checkbox-label">Plataformas</InputLabel>
					        <Select
					          labelId="demo-multiple-checkbox-label"
					          id="demo-multiple-checkbox"
					          multiple
					          value={platform}
					          onChange={handleCheck}
					          input={<OutlinedInput label="Tag" />}
					          renderValue={(selected) => selected.join(', ')}
					          MenuProps={MenuProps}
					        >
					          {allPlatforms.map((el) => (
					            <MenuItem key={el} value={el}>
					              <Checkbox checked={platform.indexOf(el) > -1} />
					              <ListItemText primary={el} />
					            </MenuItem>
					          ))}
					        </Select>
					    </FormControl>
					    <FormControl fullWidth margin="normal">
					        <InputLabel id="demo-multiple-checkbox-label">Géneros</InputLabel>
					        <Select
					          labelId="demo-multiple-checkbox-label"
					          id="demo-multiple-checkbox"
					          multiple
					          value={genres}
					          onChange={handleCheckGenre}
					          input={<OutlinedInput label="Tag" />}
					          renderValue={(selected) => selected.join(', ')}
					          MenuProps={MenuProps}
					        >
					          {allGenres.map((el) => (
					            <MenuItem key={el} value={el}>
					              <Checkbox checked={genres.indexOf(el) > -1} />
					              <ListItemText primary={el} />
					            </MenuItem>
					          ))}
					        </Select>
					    </FormControl>
			            <Button
			              type="submit"
			              fullWidth
			              variant="contained"
			              sx={{ mt: 3, mb: 2 }}
			            >
			              Crear
			            </Button>			            
			          </Box>
			        </Box>
			      </Container>
			    </ThemeProvider>
	            

	            <Link to= '/home'>
            		<Button variant="contained">Volver</Button>
        		</Link>  
         </>   
		)

	}

	