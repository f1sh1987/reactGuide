import React, { Component } from 'react';
import classes from './App.css';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor ', props);
    this.state = {
      persons: [
        {id: 'sah21j2',name: 'Andy', age:28},
        {id: 'sas11j2',name: 'Peter', age:29},
        {id: 'sah12x2',name: 'Stephanie', age:36}
      ],
      showPersons: false
    }
    
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }
  
  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }
  
  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }


  //if state changes ==> re-render dom

deletePerson = (personsIndex) => {
  //makes a copy of the array --> old way
//const persons = this.state.persons.slice();
//ES 6
const persons = [...this.state.persons];
persons.splice(personsIndex, 1);
this.setState({persons: persons});
}

nameChangedHandler = (event,id)  => {
  //true or false if it's the person looking for
  const personIndex = this.state.persons.findIndex(p =>{
return p.id ===id;
  });
//Get a copy of the person of the particular index
  const person = {
    ...this.state.persons[personIndex]
  };

  //Alternative
// const person = Object.assign({},this.state.persons[personIndex])
person.name = event.target.value;

//Get a copy of the persons array
const persons = [...this.state.persons];
//Update the person in the copy
persons[personIndex] = person;

  this.setState({
    persons: persons
  })

}
toogleHandler = () =>{
const doesShow = this.state.showPersons;
this.setState({
 showPersons: !doesShow 
});
}
//gets executed when react rerender something
  render() {
    console.log('[App.js] Inside render()');
    //JavaScript not JSX Area

let persons = null;

if(this.state.showPersons){

//Important!!! key muss in die Error Boundary <ErrorBoundary key={index} um person gewrapped

  persons = (
  <Persons persons={this.state.persons} clicked={this.deletePerson} changed={this.nameChangedHandler}/> 
  );
}

    return (
     
      <div className={classes.App}>
 <Cockpit persons={this.state.persons} showPersons={this.state.showPersons} clicked={this.toogleHandler}/>
 {persons}
      </div>
    
    );
  //  return React.createElement('div',{className: 'App'},React.createElement('h1', null, 'Does this work'))
  }
}

export default App;
