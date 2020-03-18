import React, { Component } from 'react';

class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            price: 0,
        }
    }

    handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        if (fieldName === "title") {
            this.setState({ [fieldName]: fieldValue });
        } else if (fieldName === "price") {
            this.setState({ [fieldName]: fieldValue });
        }
    }

    handleSubmission = (event) => {
        event.preventDefault();
        this.props.updateItemOffers(this.state);
        this.setState({
            title: "",
            price: 0,
        })
    }

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