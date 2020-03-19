import React, { Component } from 'react';

class ListOfItems extends Component {
    // useless constructor
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // display list of items for sell and item offers
    render() {
        return (
            <div>
                <h1>List of Items</h1>
                <h2>Items for Sell</h2>
                <div>
                    {
                        // iterate through array passed from parent
                        this.props.itemsForSell.map((item, index) => {
                            return (
                                <div key = {index}>
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                    <p>{item.condition}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <h2>Items Offers</h2>
                <div>
                    {
                        // iterate through array passed from parent
                        this.props.itemOffers.map((item, index) => {
                            return (
                                <div key = {index}>
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListOfItems;