import React , {Component} from 'react';

import classes from './Person.css';

class Person extends Component {

    constructor(props){
        super(props);
        console.log('[Person.js] Inside constructor()', props);
    }
    
        
      componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
      }
    
      componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
      }
 render() {
    console.log('[Person.js] Inside render()');
    return (
       
        <div className={classes.Person}>
    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
    <p>{this.props.children}</p>
    <input type="text" onChange={this.props.changed} value={this.props.name}/>
    </div>
    )
};

}

export default Person;






//Stateless functional component
/* import React from 'react';

import classes from './Person.css';

const person = (props) => {
/*     const rnd= Math.random();

    if(rnd > 0.7) {
        throw new Error('Something went wrong');
    } */

/*
    return (
       
        <div className={classes.Person}>
    <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
};



export default person; */