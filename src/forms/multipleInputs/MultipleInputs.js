import React, { Component } from 'react';

class MultipleInputs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        // console.log('The event', event);

        // Capture the name of the input 
        const inputName = event.target.name;
        // console.log(inputName);

        // Capture the value of the input 
        const inputValue = event.target.value;
        // console.log(inputValue);

        // Mutate the state corresponding to the given input name with the ES6 computed property name
        this.setState(
            { [inputName]: inputValue }
        );
    }

    handleSubmit = (event) => {
        console.log('Form was submited');
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>Multiple Inputs (controlled component)</h3>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Username
                        <input name='username' value={this.state.username} type='text' onChange={this.handleInputChange} />
                    </label>

                    <label>
                        Password
                        <input name='password' value={this.state.password} type='password' onChange={this.handleInputChange} />
                    </label>

                    <input type='submit' value="Submit" />
                </form>
            </div>
        )
    }
}

export default MultipleInputs;
