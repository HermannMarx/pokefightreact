import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Button } from "@material-ui/core";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/pokemon/:id/:info">
          <ViewPokemonInfo />
        </Route>
        <Route path="/pokemon/:id">
          <ViewPokemon />
        </Route>
        <Route path="/pokemon">
          <ViewPokemonAll />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
