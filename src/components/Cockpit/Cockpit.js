import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';
import PropTypes from 'prop-types';
const cockpit = (props) => {
    const assignedClasses = [];

    if(props.persons.length <=2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

    let btnClass = classes.Button;
    if(props.showPersons) {
        btnClass = [classes.Button,classes.Red].join(' ');
    }

//in root div scoping classes.Cockpit
return( 
<Aux>
<h1>Hi i'm a react app</h1>
<p className={assignedClasses.join(' ')}> This is really working</p>
<button className={btnClass}
onClick={props.clicked}>Toogle Persons</button>
</Aux>
);
};

cockpit.propTypes = {
  clicked: PropTypes.func
}

export default cockpit;