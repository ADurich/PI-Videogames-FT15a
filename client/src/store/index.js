import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer"; //importo reducer

//1- Creo el store con el reducer. Lo exporto y lo recibe index.js. Allá voy... 

export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));