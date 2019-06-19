import React, { Component } from "react";
import { TextInput, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Accordion, View, Text, Icon } from "native-base";

export default class PriceAcoordian extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            promoCode: '',
        }

        this._renderContent = this._renderContent.bind(this)
    }







    _renderHeader(item, expanded) {
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgb(211,211,211)"
            }}>
                <Text style={{ fontWeight: "600" }}>
                    {" "}{!expanded ? 'Apply Promo Code' : 'Hide Promo Code'}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18 }} name="remove-circle" type='Ionicons' />
                    : <Icon style={{ fontSize: 18 }} name="add-circle" type='Ionicons' />}
            </View>
        );
    }
    _renderContent(item) {
        console.log(item, '<---------------- item');
        const { handleFunc = () => { } } = this.props
        return (
            <View style={{ padding: 10, bottom: 0 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 0.4, justifyContent: 'center' }}>
                        <Text>Apply Promo Code:- </Text>
                    </View>
                    <View style={{ flex: 0.6, alignSelf: 'center', }}>

                        <View style={{ borderWidth: 1, width: '100%' }}>
                            <TextInput

                                onChangeText={(e) => this.setState({ promoCode: e })}
                            />
                        </View>
                    </View>
                </View>
                {this.props.count > 0 ? <View /> : <TouchableOpacity style={{ alignSelf: 'center', marginTop: 20 }} onPress={()=>{handleFunc(this.state.promoCode)}}>
                    <Text style={{ color: 'green' }}>Apply Code</Text>
                </TouchableOpacity>}
            </View>
        );
    }
    render() {
        const { data = [] } = this.props
        console.log(data, '<------ data');


        return (

            <Accordion
                dataArray={data}
                animation={true}
                expanded={true}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                style={{ borderWidth: 0, }}

            />

        );
    }
}