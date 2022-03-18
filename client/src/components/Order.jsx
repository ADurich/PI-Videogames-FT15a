import React from "react";
import { useDispatch } from "react-redux";
import { orderByName} from "../actions/index";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


export default function Order(){

	const [order, setOrder] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
    	setOrder(event.target.value);
    	dispatch(orderByName(event.target.value));
    };

	const dispatch = useDispatch();

  return(

  		<div>
	      	  <FormControl sx={{ m: 1, minWidth: 120, mb:0 }}>
		        <InputLabel id="demo-simple-select-autowidth-label">Orden</InputLabel>
		        <Select
		          labelId="demo-simple-select-autowidth-label"
		          id="demo-simple-select-autowidth"
		          value={order}
		          onChange={handleChange}
		          autoWidth
		          label="Order"
		        >
		          <MenuItem value=""><em>Ninguno</em></MenuItem>
		          <MenuItem value={"asc"}>Ascendente</MenuItem>
		          <MenuItem value={"desc"}>Descendente</MenuItem>
		        </Select>
		      </FormControl>     
		      <Box component="div" sx={{ display: 'block'}}>
		      	<Link to={"/Home"}>
			      	<Button variant="contained" color="success">
			        	Cambiar
			        </Button>
		      	</Link>		      	
		      </Box>  
	    </div>
  	)
}