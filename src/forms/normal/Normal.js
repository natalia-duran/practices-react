import React, { Component } from 'react';

class Normal extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '' };
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState(
            { name: event.target.value }
        );
    }

    handleSubmit = (event) => {
        console.log('Form was submited');
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <h3>Bare Bones (controlled component)</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Normal;
