
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'
import * as actions from './redux/actions'
import Tooltip from 'react-native-walkthrough-tooltip'


import AccordionComponent from './Components/Accordian';
import { Content } from 'native-base';
import PriceAcoordian from './Components/PriceAccordian';
class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            promoCode: '',
            count: 0,
            toolTipVisible: false
        }
    this.handleCode=this.handleCode.bind(this)
    }




    // componentWillUnmount() {
    //     const { removeAmount } = this.props
    //     removeAmount()
    // }

    handleCode(value) {

        if (value == 'DISCOUNT') {
            this.props.discount()
            this.setState({
                count: 1
            })

        }
        else {

            alert('Promo Code is invalid')
        }

    }

    render() {

        const { details, itemName, price, quantity } = this.props
        return (
            <View style={styles.container}>
                <Content contentContainerStyle={{ flexGrow: 1 }} scrollEnabled>

              
                    <View style={{ flex: 0.7, marginTop: 10, padding: 10 }}>
                        <View style={styles.invoice1}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 14, fontWeight: '600' }}>Sub Total</Text>
                                <Text style={{ fontWeight: '800' }}>${price}</Text>

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Tooltip
                                    animated
                                    isVisible={this.state.toolTipVisible}
                                    content={<Text style={{ alignSelf: 'flex-end', textAlign: 'center' }} numberOfLines={2}>    Picking Up from the stores will  cut off the  stores expense</Text>}
                                    placement="top"
                                    onClose={() => this.setState({ toolTipVisible: false })}
                                >
                                    <TouchableHighlight onPressIn={() => this.setState({ toolTipVisible: true })}>
                                        <Text style={{ fontSize: 14, fontWeight: '600', textDecorationLine: 'underline' }}>PickUp Savings</Text>
                                    </TouchableHighlight>
                                </Tooltip>
                                <Text style={{ fontWeight: '800', color: 'red' }}>-$3.96</Text>

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600' }}>Est. Taxes and fees</Text>
                                <Text style={{ fontWeight: '800' }}>$8.56</Text>
                            </View>


                        </View>
                        <View style={{ flex: 0.33, top: 10 }}>
                            <AccordionComponent data={[{ details, itemName, price, quantity }]} />

                            <PriceAcoordian data={[{}]}  count={this.state.count} handleFunc={this.handleCode}/>


                        </View>
                        
                    </View>

                </Content>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    header: {
        flex: 0.3, justifyContent: 'center', borderWidth: 1, borderRadius: 15, flexDirection: 'row',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        backgroundColor: 'white',
        elevation: 10
    },
    invoice1: { flex: 0.33, justifyContent: 'center', padding: 10, borderWidth: 2, borderRadius: 12, borderColor: 'rgb(206,214,227)' },
    invoice2: { flex: 0.33,  }

})

mapStateToProps = ({ pricing, itemDetails }) => {
    return { ...pricing, ...itemDetails }
}

export default connect(mapStateToProps, actions)(HomeScreen)