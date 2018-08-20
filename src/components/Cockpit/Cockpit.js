import React from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
    const assignedClasses = [];

    if(props.persons.length <=2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

    let btnClass = null;
    if(props.showPersons) {
        btnClass = classes.Red;
    }

//in root div scoping classes.Cockpit
return( 
<div className={classes.Cockpit}>
<h1>Hi i'm a react app</h1>
<p className={assignedClasses.join(' ')}> This is really working</p>
<button className={btnClass}
onClick={props.clicked}>Toogle Persons</button>
</div>
);
};

export default cockpit;