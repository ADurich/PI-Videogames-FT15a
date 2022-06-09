import React from "react";
import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogamesPlatforms,getFilteredPlatforms,getPageNumber,getInitialPageNumber} from "../actions/index";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Platforms(){

	const [platform, setPlatform] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
    	setPlatform(event.target.value);
    	dispatch(getFilteredPlatforms(event.target.value));
    	dispatch(getPageNumber(1)) ;
    	dispatch(getInitialPageNumber(1));
    };

	const dispatch = useDispatch();

     useEffect(() => {
       dispatch(getVideogamesPlatforms()); 
   }, []);

     const allPlatforms=useSelector((state)=> state.videogamesPlatforms);

  return(

  		<div>
	      <FormControl sx={{ m: 1, width: 160 }}>
	        <InputLabel id="demo-simple-select-autowidth-label">Plataformas</InputLabel>
	        <Select
	          labelId="demo-simple-select-autowidth-label"
	          id="demo-simple-select-autowidth"
	          value={platform}
	          onChange={handleChange}
	          autoWidth
	          label="Platform"
	        >
	          {/*<MenuItem value=""><em>Ninguno</em></MenuItem>*/}
	          <MenuItem value={"all"}>Todos</MenuItem>
	          {allPlatforms.map((el) => { 
                    return (
                          <MenuItem value={el} key={el}>{el}</MenuItem>                
                   );
              })}
	        </Select>
	      </FormControl>
	    </div>
  	)
}