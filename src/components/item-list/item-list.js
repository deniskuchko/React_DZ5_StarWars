import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import PersonDetails from '../person-details/person-details';

import './item-list.css';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    people : {},
  }

  constructor(){
    super();
  };

  onPerson = (people) => {
    this.setState({
      people,
    });
  };
 
  render() {
    
    const {people} = this.state;
    const personAdd = people.id ? <PersonDetails people={people}/> : null;
    
    let clickPerson = ( id) => {
      
        this.swapiService
          .getPerson(id)
          .then(this.onPerson)
          .catch((e) => console.log(e)); 
        
    }
    
    return (
      <React.Fragment>
      <ul className="item-list list-group">
        <li className="list-group-item" onClick={() => clickPerson(1)}>
          Luke Skywalker
        </li>
        <li className="list-group-item" onClick={() => clickPerson(2)}>
          Darth Vader
        </li>
        <li className="list-group-item"onClick={() => clickPerson(3)}>
          R2-D2
        </li>
      </ul>
      {personAdd}
    </React.Fragment>
    );
  }
}