import Home from "../components/Home";


const initialState = {
    videogames:[],
    allVideogames: [],
    genres: [],
    details: [],
    platforms: [],


};


function rootReducer(state = initialState, action) {

    switch(action.type){
    	case "GET_VIDEOGAMES":

    		return{
    			...state,
    			videogames:action.payload,
    			allVideogames:action.payload,

    		}

        case 'GET_NAME_VIDEOGAMES':
            return{
                ...state, 
                videogames:action.payload 
            }

        case "POST_VIDEOGAME":
            return{
                  ...state,                                  
            }    

        case "GET_GENRES":
            const myGenresFrom=action.payload;
            const myGenres= myGenresFrom.map((el)=>{
                return el.name;
            })

            return{
                ...state,
                genres:myGenres,

            } 
             
        case "FILTER_BY_GENRE":

                    const myVideogames = state.allVideogames

                    const videogamesFiltered= action.payload === 'all' ? myVideogames : myVideogames.filter(el=> (el.genres.map(el=>{return el.name})).includes(action.payload))

                    return {                                        
                        ...state,
                        videogames: videogamesFiltered, 
                    }

        case 'ORDER_BY_NAME':
                let orderName = action.payload === 'asc' ?
                    state.videogames.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return -1;
                        }
                        return 0;
                    }) :
                    state.videogames.sort(function (a, b) {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (b.name > a.name) {
                            return 1;
                        }
                        return 0;
                    })
                return {
                    ...state,
                    videogames: orderName,
                }
        case "FILTER_CREATED":
                        //const orderCreated = action.payload === 'created' ? state.allVideogames.filter(el => !el.img||!el.img.includes('https://media.rawg.io/media/games')) : state.allVideogames.filter(el => )
                        const orderCreated = action.payload === 'created' ? state.allVideogames.filter(el => el.description!=='Descripcion api') : state.allVideogames.filter(el => el.description==='Descripcion api')
                        return {                                                                              
                            ...state,
                            videogames: action.payload === 'all' ? state.allVideogames : orderCreated
                            
                        }
        case "GET_DETAILS":
                return{
                    ...state,
                    details:action.payload

                }

        case "GET_PLATFORMS":
            const myPlatformsFrom=action.payload;

            return{
                ...state,
                platforms:myPlatformsFrom,

            }        


    	default:
    		return state;
        }
}

export default rootReducer;