import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home/Home';
import AppointmentPage from './Components/AppointmentPage/AppointmentPage';
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './Components/LogIn/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Patients from './Components/Patients/Patients';
import AddDoctor from './Components/AddDoctor/AddDoctor';

export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
  <Router>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/appointment">
       <AppointmentPage></AppointmentPage>
      </Route>
      <Route exact path="/login">
        <LogIn></LogIn>
      </Route>
      <PrivateRoute exact path="/dashboard">
      <Dashboard></Dashboard>
      </PrivateRoute>
      <Route exact path="/dashboard/patients">
        <Patients></Patients>
      </Route>
      <Route exact path="/dashboard/addDoctor">
        <AddDoctor></AddDoctor>
      </Route>
    </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
