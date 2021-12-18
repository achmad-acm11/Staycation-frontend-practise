import "assets/scss/style.scss";
import Checkout from "pages/Checkout";
import DetailPage from "pages/DetailPage";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/properties/:id" component={DetailPage} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
