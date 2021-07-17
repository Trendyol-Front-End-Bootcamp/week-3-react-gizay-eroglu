import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/character/:id' exact component={DetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
