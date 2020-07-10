import React, { Component } from "react";

import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  };

  updatePlanet() {
    /*     fetch("http://localhost:3000/planets/2/")
      .then((res) => res.json())
      .then(this.onPlanetLoaded); */
    const id = 1;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch((e) => console.log(e));
  }

  render() {
    const { planet, loading } = this.state;
    const spinner = loading ? <Spinner /> : <PlanetView planet={planet} /> ;
    const content = !loading ? <ErrorPlanet /> : null;

    return(
      <div className="random-planet jumbotron rounded">
        {spinner}
{/*         {content}
 */}      </div>
    );
  }
}
const ErrorPlanet = () => {
  <div className='errorPlanet'>Error: bad way</div>  
}
const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
