import React, { Component } from 'react';

import './person-details.css';

import SwapiService from '../../services/swapi-service'

/* export default class PersonDetails extends Component {
  swapiService = new SwapiService;
  
  constructor(props) {
    super(props)
  
    this.state = {
      people: {}
    }
  }

  onPerson = (people) => {
    this.setState({
      people,
    })
    console.log(people);
  }
  
  render() {
    const {id, name, gender, birthYear, eyeColor} = props.people;
    getImgPerson = (id) =>{
      this.swapiService
        .getPersonImage(id)
        .then(onPerson)

    }
    getPersonImage
    return (
      <div>
        {name};
      </div>
    )
  }
}
 */
const PersonDetails = (props) => { 
  const {id, name, gender, birthYear, eyeColor} = props.people;
  
  
    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  
}


export default PersonDetails;

