import React , {Component} from 'react';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import Aux from '../../../hoc/Aux2';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';

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
       
        <Aux>
            <AuthContext.Consumer>
            {auth => auth ? <p>I'm authenticated</p>:null}
            </AuthContext.Consumer>
    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
    <p>{this.props.children}</p>
    <input type="text" onChange={this.props.changed} value={this.props.name}  />
    </Aux>
    )
};

}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);






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