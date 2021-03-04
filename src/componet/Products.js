import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Dimensions, Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import CartActions from './redux/cart'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { item } = this.props
        const { id, title, description, poster } = item
        return (
            <TouchableOpacity
                onPress={ () => 
                    this.props.navigation.navigate('Thong tin chi tiet',{item})}
                activeOpacity={0.5}
                style={styles.containerWord}>
                <View style={styles.viewTitle}>
                    <Text style={styles.gia}>{title.s}</Text>
                </View>
                <Image
                    style={styles.imageProduct}
                    source={{ uri: poster.s }} />
                <Text style={styles.colorimage}> {description.s}</Text>
                <Text style={styles.textcolor}>{id.s}</Text>
            </TouchableOpacity>
        );
    }
} const { height, width } = Dimensions.get('screen')
const heightImage = Math.round(width / 2) 
const widthImage = Math.round(width / 2) - 20


const mapStateToProps = (state) => {
    return ({
    });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
    return ({
        dispatch,
        addCart: (product) => (dispatch(CartActions.addCart(product))),
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
const styles = StyleSheet.create({
    containerWord: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#DCDCDC',

    },
    imageProduct: {
        width: widthImage,
        height: heightImage,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        marginHorizontal: 10
    },
    gia: {
        fontSize: 20,
        color: 'red',
        marginTop: 5,
        alignContent:'center'
    },
    colorimage: {
        fontSize: 20,
        color: 'green',
        fontWeight: 'bold',
        justifyContent:'center',
        alignContent:'center'

    },
    textcolor: {
        color: 'blue',
        fontSize: 20,
        alignContent:'space-between'

    },
    viewCart: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 10
    },
    textimage: {
        width: 50,
        height: 40,
        resizeMode: 'contain',
    },
})
