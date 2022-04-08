import React from "react";
import { useDispatch } from "react-redux";
import { filterCreated} from "../actions/index";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Order(){

	const [base, setBase] = React.useState('');

	const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent) => {
    	setBase(event.target.value);
    	dispatch(filterCreated(event.target.value));
    };

  return(

  		<div>
	      	  <FormControl sx={{ m: 1, minWidth: 120 }}>
		        <InputLabel id="demo-simple-select-autowidth-label">Creados</InputLabel>
		        <Select
		          labelId="demo-simple-select-autowidth-label"
		          id="demo-simple-select-autowidth"
		          value={base}
		          onChange={handleChange}
		          autoWidth
		          label="Base"
		        >
		          <MenuItem value={"all"}>Todos</MenuItem>
		          <MenuItem value={"created"}>Creados</MenuItem>
		          <MenuItem value={"api"}>De api</MenuItem>
		        </Select>
		      </FormControl>     		       
	    </div>
  	)
}
