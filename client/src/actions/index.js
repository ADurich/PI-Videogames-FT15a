import axios from "axios";

export function getVideogames() {
  return async function (dispatch) {
    var json = await axios("http://localhost:3001/videogames", { 
    });
    return dispatch({ type: "GET_VIDEOGAMES", payload: json.data });
  };
}

export function getNameVideogames(name){
  return async function(dispatch){


      var jsonName=await axios.get("http://localhost:3001/videogames?name="+name);
      return dispatch({
        type:"GET_NAME_VIDEOGAMES",
        payload:jsonName.data
      })
  }
}

export function postVideogame(newVideogame){
  return async function(dispatch){

    const create=await axios.post("http://localhost:3001/videogame",newVideogame);
    console.log(create);

    return dispatch({type:"POST_VIDEOGAME",payload:create.data})
   
  }
}

export function getGenres(){
  return async function(dispatch){
    var genreNames=await axios("http://localhost:3001/genres"); 

    return dispatch({type:"GET_GENRES",payload:genreNames.data});
  };
}

export function getGenresFromDb(){
  return async function(dispatch){
    var genreNamesFromDb=await axios("http://localhost:3001/genresFromDb"); 

    return dispatch({type:"GET_GENRES_FROM_DB",payload:genreNamesFromDb.data});
  };
}

export function filterVideogamessByGenre(genre) {     
   return async function(dispatch){

    return dispatch({type:"FILTER_BY_GENRE",payload:genre});
  };
}


export function getOrder(order){
  return async function(dispatch){
    try{
      var jsonOrder=await axios.get('http://localhost:3001/order/'+order);
      return dispatch({type:"GET_ORDER",payload:jsonOrder.data})

    }catch(error){
    console.log(error)
  }
  }
}


export function filterCreated(created) {    
   return async function(dispatch){

    return dispatch({type: 'FILTER_CREATED', payload:created});
  };
}

export function getDetail(id){
  return async function(dispatch){
    try{
      var jsonId=await axios.get('http://localhost:3001/videogame/'+id);
      return dispatch({
        type:"GET_DETAILS",
        payload:jsonId.data
      })
    }catch(error){
    console.log(error)
  }
  }
}

export function getPlatforms(){
  return async function(dispatch){
    var platformsNames=await axios("http://localhost:3001/platforms"); 
    
    return dispatch({type:"GET_PLATFORMS",payload:platformsNames.data});
  };
}

export function getPageNumber(pageNumber) {     
   return async function(dispatch){

    return dispatch({type:"GET_PAGE_NUMBER",payload:pageNumber});
  };
}

export function getInitialPageNumber(initialPageNumber) {     
   return async function(dispatch){

    return dispatch({type:"GET_INITIAL_PAGE_NUMBER",payload:initialPageNumber});
  };
}
