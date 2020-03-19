import React, { Component } from 'react';
import ListOfItems from './ListOfItems';
import Buy from './Buy';
import Sell from './Sell';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            itemsForSell: [],
            itemOffers: [],
            userIsSelling: false,
            userIsBuying: false,
        }
    }

    // callback function - passed into Sell component and accepting one param
    updateItemsForSell = (items) => {
        this.state.itemsForSell.push(items); // add param (item object) passed in from Sell component to array
        this.setState({ itemsForSell: this.state.itemsForSell }); // update state globally
    }
    // callback function - passed into Buy component and accepting one param
    updateItemOffers = (items) => {
        this.state.itemOffers.push(items); // add param (item object) passed in from Buy component to array
        this.setState({ itemOffers: this.state.itemOffers }); // update state globally
    }

    // event handler - tied to onClick function to update conditional rendering flag for Sell component
    updateUserIsSelling = () => {
        this.setState({ userIsBuying: false }); // update Buy flag to false
        this.setState({ userIsSelling: true }); // update Sell flag to true
    }
    // event handler - tied to onClick function tied to onClick function to update conditional rendering flag for Buy component
    updateUserIsBuying = () => {
        this.setState({ userIsSelling: false }); // update Sell flag to false
        this.setState({ userIsBuying: true }); // update Buy flag to true
    }

    // display text, list of items, and buy form OR sell form
    render() {
        // conditionally render form using element variables
        let userForm; // declare variable with value of undefined
        // if userIsBuy is true
        if (this.state.userIsBuying) {
            // set variable to Buy component
            userForm = <Buy updateItemOffers={this.updateItemOffers} />
        }
        // if userIsSelling is true
        else if (this.state.userIsSelling) {
            // set variate to Sell component 
            userForm = <Sell updateItemsForSell={this.updateItemsForSell} />
        }
        return (
            <div>
                <h1>Buy Sell App</h1>
                <div className="appGrid">
                    <ListOfItems className="listGridItem" itemsForSell={this.state.itemsForSell} itemOffers={this.state.itemOffers} />
                    <div className="formGridItem">
                        <button onClick={this.updateUserIsSelling}>Sell an Item</button>
                        <button onClick={this.updateUserIsBuying}>Buy an Item</button>
                        {userForm}
                    </div>
                </div>
            </div>
        )
    }
}

export default AppContainer;