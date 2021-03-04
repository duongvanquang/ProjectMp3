import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Dimensions, Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import CartActions from './redux/cart'

const like = require('./like.png')
const unlike = require('./unlike.png')
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        const { route } = this.props
        const item = route?.params?.item
        const { addPlusCart } = this.props
        const { id, title, description, poster } = item
        return (
            <View style={{ flex: 1 }}>
                <View
                    style={styles.containerWord}>
                    <View>
                        <Text style={styles.gia}>{title.s}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={styles.imageProduct}
                            source={{ uri: poster.s }} />
                        <Text style={styles.textcolor}> {description.s} </Text>
                        <Text style={styles.textcolor}> {id.s}</Text>
                        <View style={styles.contaiberbutton}>
                            <TouchableOpacity onPress={() => {
                                addPlusCart(item, this.state.count + 1)
                                this.setState({ count: this.state.count + 1 })
                            }}>
                                <Image
                                    source={like}
                                    style={[styles.textimage, { tintColor: 'blue' }]}
                                />
                            </TouchableOpacity>
                            <Text style={styles.texttouchble}> {this.state.count}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.count !== 0) {
                                        addPlusCart(item, this.state.count - 1)
                                        this.setState({ count: this.state.count - 1 })
                                    }
                                }}>
                                <Image
                                    source={unlike}
                                    style={[styles.textimage, { tintColor: 'blue' }]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const { height, width } = Dimensions.get('screen')
const heightImage = Math.round(width)
const widthImage = Math.round(width)
const mapStateToProps = (state) => {
    return ({
    });
}
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
    return ({
        addCart: (product) => (dispatch(CartActions.addCart(product))),
        addPlusCart: (product, count) => (dispatch(CartActions.addPlusCart(product, count))),

    });
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail)

const styles = StyleSheet.create({
    containerWord: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
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
        fontSize: 25,
        color: 'red',
        marginTop: 25,
        alignItems: 'center',
        marginHorizontal: 10,
        
    },
    colorimage: {
        fontSize: 15,
        color: 'green',
        fontWeight: 'bold'
    },
    textcolor: {
        color: 'blue',
        fontSize: 30,
        marginTop: 10

    },
    contaiberbutton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 250, marginTop: 20, height: 60,
        backgroundColor: '#F5F5F5',
        borderRadius: 5
    },
    imgaetext: {
        backgroundColor: 'red',
        justifyContent: 'space-between', alignItems: 'center',
        marginTop: 10,
        height: 30,
        width: 150,
        borderRadius: 10,
        borderWidth: 1,
        marginLeft: 25
    },
    textimage: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    texttouchble: {
        color: 'green',
        fontSize: 30
    }
})
