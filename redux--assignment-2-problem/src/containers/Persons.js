import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.personArray.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        personArray: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (name, age) => dispatch({type: actionTypes.ADD, personData: {name: name, age: age}}),
        onDeletePerson: (id) => dispatch({type: actionTypes.DELETE, id: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);