import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import LandingPage from './components/LandingPage'; //importo LandingPage
import Home from './components/Home'; //importo Home
import VideogameCreate from './components/VideogameCreate';
import DetailGames from './components/DetailGames';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/Home' component={Home}/>
        <Route path='/CreateVideogame' component={VideogameCreate}/>
        <Route path='/DetailGames/:id' render={({match}) => <DetailGames match={match}/>}/>
      </Switch>     
    </div>
    </BrowserRouter>
  );
}

export default App;
