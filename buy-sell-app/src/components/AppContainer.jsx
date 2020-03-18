import React, { Component } from 'react';
import ListOfItems from './ListOfItems';
import Buy from './Buy';
import Sell from './Sell';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsForSell: [],
            itemOffers: [],
            userIsSelling: false,
            userIsBuying: false,
        }
    }

    updateItemsForSell = (items) => {
        this.state.itemsForSell.push(items);
        this.setState({ itemsForSell: this.state.itemsForSell });
    }
    updateItemOffers = (items) => {
        this.state.itemOffers.push(items);
        this.setState({ itemOffers: this.state.itemOffers });
    }

    updateUserIsSelling = () => {
        this.setState({ userIsBuying: false });
        this.setState({ userIsSelling: true });
    }

    updateUserIsBuying = () => {
        this.setState({ userIsSelling: false });
        this.setState({ userIsBuying: true });
    }

    render() {
        let userForm;
        if (this.state.userIsBuying) {
            userForm = <Buy updateItemOffers={this.updateItemOffers} />
        } else if (this.state.userIsSelling) {
            userForm = <Sell updateItemsForSell={this.updateItemsForSell} />
        }
        return (
            <div>
                <h1>Buy Sell App</h1>
                <div className = "appGrid">
                    <ListOfItems className = "listGridItem" itemsForSell={this.state.itemsForSell} itemOffers={this.state.itemOffers} />
                    <div className = "formGridItem">
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