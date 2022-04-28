import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import {Home} from "./components/Home";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Documents from "./components/Documents";
import NoteState from "./context/notes/NoteState";
import Result from "./components/Result";
import Profile from "./components/Profile";
import Admin from "./components/Admin";
import Questions from "./components/Questions";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
    <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert}/>
              </Route>
              <Route exact path="/personal">
                <Personal showAlert={showAlert}/>
              </Route>
              <Route exact path="/education">
                <Education showAlert={showAlert}/>
              </Route>
              <Route exact path="/documents">
                <Documents showAlert={showAlert}/>
              </Route>
              <Route exact path="/result">
                <Result/>
              </Route>
              <Route exact path="/profile">
                <Profile/>
              </Route>
              <Route exact path="/admin">
                <Admin/>
              </Route>
              <Route exact path="/login">
                <Login showAlert={showAlert}/>
              </Route>
              <Route exact path="/signup">
                <Signup showAlert={showAlert}/>
              </Route>
              <Route exact path="/questions">
                <Questions showAlert={showAlert}/>
              </Route>
            </Switch>
          </div>
        </Router>
        </NoteState>
    </>
  );
}

export default App;
