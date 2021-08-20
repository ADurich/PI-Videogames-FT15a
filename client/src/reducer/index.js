
const initialState = {
    videogames:[],
    allVideogames: [],
    genres:[],
    details: [],


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
            return{
                ...state,
                genres:action.payload
            }  
        case "FILTER_BY_GENRE":

                    const myVideogames = state.allVideogames

                    const videogamesFiltered= action.payload === 'all' ? myVideogames : myVideogames.filter(el=> el.genres.includes(action.payload))

                    return {                                        
                        ...state,
                        videogames: videogamesFiltered, 
                    }

        case 'ORDER_BY_NAME':
                let orderName = action.payload === 'asc' ?
                    state.allVideogames.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return -1;
                        }
                        return 0;
                    }) :
                    state.allVideogames.sort(function (a, b) {
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
                        const orderCreated = action.payload === 'created' ? state.allVideogames.filter(el => el.createdAt) : state.allVideogames.filter(el => !el.createdAt)
                        return {
                            ...state,
                            videogames: action.payload === 'all' ? state.allVideogames : orderCreated
                            
                        }
        case "GET_DETAILS":
                return{
                    ...state,
                    details:action.payload

                }


    	default:
    		return state;
        }
}

export default rootReducer;