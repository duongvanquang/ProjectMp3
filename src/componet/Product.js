import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import CartActions from './redux/cart'
import Products from './Products'


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderProduct = ({ item }) => {
        const { navigation } = this.props
        return (<Products navigation={navigation} item={item} />)
    }
    render() {
        const { products } = this.props
        return (
            <View style={{ flex: 1 }} >
                <FlatList
                    style={styles.containertext}
                    data={products}
                    renderItem={this.renderProduct}
                    keyExtractor={(Products) => Products.id.toString()}
                    numColumns={2} 
                    />

            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return ({
        products: state.cart.products
    });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
    return ({
        dispatch,
        addCart: (product) => (dispatch(CartActions.addCart(product))),
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        flex: 1,
        backgroundColor: 'white'
    },
});
