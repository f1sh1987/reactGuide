import React, {PureComponent} from 'react';
import Person from './Person/Person';
// ( in same line omit return statemant
class Persons extends PureComponent {

constructor(props){
    super(props);
    console.log('[Persons.js] Inside constructor()', props);
}

    
  componentWillMount(){
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Persons.js] Inside componentDidMount()');
  }

componentWillReceiveProps(nextProps){
  console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
}
//Prevents an rerendering of child props or using PureComponent
/* shouldComponentUpdate(nextProps, nextState){
  console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  return nextProps.persons!==this.props.persons || nextProps.changed !==this.props.changed || nextProps.clicked!==this.props.clicked;
} */

componentWillUpdate(nextProps, nextState){
  console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
}

componentDidUpdate(){
  console.log('[UPDATE Persons.js] Inside componentDidUpdate');
}


    render() {
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((person, index) => {
        return <Person click={this.props.clicked.bind(this, index)}
        name={person.name} 
        age={person.age}
        key={index}
        changed={(event)=>this.props.changed(event,person.id)}
        position={index}/>
      });
    }
    }
export default Persons;







//Stateless functional component
/* import React from 'react';
import Person from './Person/Person';
// ( in same line omit return statemant
const persons = (props) => props.persons.map((person, index) => {
        return <Person click={props.clicked.bind(this, index)}
        name={person.name} 
        age={person.age}
        key={index}
        changed={(event)=>props.changed(event,person.id)}/>
      });
export default persons;
 */
