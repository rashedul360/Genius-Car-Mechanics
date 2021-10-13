import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Inforemation from "./Inforemation/Inforemation";
import AuthProvider from "./Pages/Context/authProvider";

import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import Registration from "./Pages/Registration/Registration";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/info/:slug">
              <Inforemation></Inforemation>
            </Route>
            <PrivetRoute path="/dash">
              <Dashboard></Dashboard>
            </PrivetRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
