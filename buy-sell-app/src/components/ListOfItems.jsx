import React, { Component } from 'react';

class ListOfItems extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>List of Items</h1>
                <h2>Items for Sell</h2>
                <div>
                    {
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
                        this.props.itemOffers.map((item, index) => {
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
            </div>
        )
    }
}

export default ListOfItems;