import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

// constrct a fucntional component which obtain some props
function RenderItem(props) {
    const item = props.item;

    // this function do conditional rendering
    if(item != null) {
        switch (item.id) {
            case 0:
                icon = require('./images/carrot.png');
              break;
            case 1:
                icon = require('./images/beetroot.png');
              break;
            case 2:
                icon = require('./images/cabbage.png');
              break;
            case 3:
                icon = require('./images/pumpking.png');
              break;
            default:
                icon = require('./images/uthappizza.png');
          }
        // render item using a card
        return (
            <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image = { icon } >
                
                <Text style = {{ margin: 10 }} >
                    { item.description }
                </Text>

            </Card>
        )
    }
    else {
        // render empty view
        return (<VIEW></VIEW>);
    }
}


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    // Local navigation within the component.
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.state.dishes.filter((dish) => dish.featured)[0]}
                    />
                <RenderItem
                    item={this.state.promotions.filter((promo) => promo.featured)[0]}
                    />
                <RenderItem
                    item={this.state.leaders.filter((leader) => leader.featured)[0]}
                    />
            </ScrollView>
        );
    }
}

export default Home;