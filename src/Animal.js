import React from "react";
import { Link } from "react-router-dom";
import ApiManager from "./ApiManager"
// import { withRouter } from 'react-router-dom';

const checkOutAnimal = (props, animalId) => {
    ApiManager.deleteItem("animals", animalId)
    .then(() => {
        // this.history.push('/animals')
        console.log("props", props.history)
        props.history.push('/animals')
      })
}

const Animal = props => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <h5 className="card-title">{props.animal.name}</h5>
        <p className="card-text">{props.animal.breed}</p>
        <Link
          className="card-link"
          to={{
            pathname: `/animals/${props.animal.id}`,
            state: { animal: props.animal}
          }}
        >
          Details
        </Link>
        <a href="#" onClick={() => {
            checkOutAnimal(props, props.animal.id)
        }}>Delete</a>
      </div>
    </div>
  );
};

export default Animal
