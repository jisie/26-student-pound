import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./AnimalList";
import LocationList from "./LocationList";
import EmployeeList from "./EmployeeList";
import Animal from "./Animal";
import Location from "./Location";
import Employee from "./Employee";
import Login from "./Login"
import ApiManager from "./ApiManager"

export default class ApplicationViews extends Component {
// Check if credentials are in local storage
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={props => {
    if (this.isAuthenticated()) {
        return <LocationList />
    } else {
        return <Login />
    }
}} />
        <Route path="/locations/:locationId" render={(props) => {
          return <Location location={props.location.state.location} />
        }} />
        <Route exact path="/animals" component={AnimalList} />
        <Route path="/animals/:animalId" render={(props) => {
          return <Animal animal={props.location.state.animal} checkOutAnimal={ApiManager.deleteItem}/>
        }} />
        <Route exact path="/employees" component={EmployeeList} />
        <Route path="/employees/:employeeId" render={(props) => {
    return <Employee employee={props.location.state.employee}>
        {props.location.state.employee.name}
    </Employee>
}} />
        <Route path="/login" component={Login} />
        
      </React.Fragment>
    );
  }
}
