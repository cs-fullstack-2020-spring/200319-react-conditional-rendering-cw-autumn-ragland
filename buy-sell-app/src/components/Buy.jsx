import React, { Component } from 'react';

class Buy extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            title: "",
            price: 0,
        }
    }

    // event handler - tied to OnClick
    handleChange = (event) => {
        // variables for event.target properties
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        // conditionally update state based on input 
        if (fieldName === "title") {
            this.setState({ [fieldName]: fieldValue });
        } else if (fieldName === "price") {
            this.setState({ [fieldName]: fieldValue });
        }
    }

    // event handler - tied to onClick
    handleSubmission = (event) => {
        event.preventDefault(); // stop form from reloading
        this.props.updateItemOffers(this.state); // call function based from parent passing in form values
        // reset form fields
        this.setState({
            title: "",
            price: 0,
        })
    }

    // display Buy form
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Buy an Item</legend>

                        <div className="formGroup">
                            <label htmlFor="">Title : </label>
                            <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="">Price : </label>
                            <input type="number" name="price" id="price" value={this.state.price} onChange={this.handleChange} />
                        </div>

                        <button onClick={this.handleSubmission}>Submit Your Offer!</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Buy;