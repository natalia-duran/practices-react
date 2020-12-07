import React, { Component } from 'react';

class Uncontrolled extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        // console.log('The ref', this.inputRef);
        this.inputRef.current.focus();
    }

    handleSubmit = (event) => {
        console.log('Uncontrolled component was submited', this.inputRef.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>Uncontrolled Component</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username
                        <input type='text' ref={this.inputRef} defaultValue="Natalia" />
                    </label>

                    <input type='submit' value="Submit" />
                </form>
            </div>
        )
    }
}

export default Uncontrolled;
