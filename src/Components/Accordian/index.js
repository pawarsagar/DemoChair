import React, { Component, } from "react";
import { View, Text, Image } from 'react-native'
import { Accordion, Icon, } from "native-base";

export default class AccordionComponent extends Component {
    _renderHeader(item, expanded) {
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgb(246,194,216)"
            }}>
                <Text style={{ fontWeight: "600" }}>
                    {" "}{!expanded ? 'Show Item Details' : 'Hide Item Details'}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
                    : <Icon style={{ fontSize: 18 }} name="add-circle" />}
            </View>
        );
    }
    _renderContent(item) {
        console.log(item, '<---------------- item');

        return (
            <View style={{ padding: 10, bottom: 0, flexDirection: 'row' }}>
                <View style={{flex:0.5}}>

                    <Text
                        style={{
                            // backgroundColor: "#e3f1f1",
                            // padding: 10,
                            // fontStyle: "italic",
                            fontSize: 14,
                            textDecorationLine: 'underline'
                        }}
                    >
                        <Text>
                            Product Details:-
                 </Text>
                        {item.details}
                    </Text>
                    <Text
                        style={{
                            // backgroundColor: "#e3f1f1",
                            // padding: 10,
                            fontStyle: "italic",
                            fontWeight: '500',
                            marginTop: 10,
                            textDecorationLine: 'line-through'
                        }}
                    >
                        ${item.price}
                    </Text>

                    <Text
                        style={{
                            // backgroundColor: "#e3f1f1",
                            // padding: 10,
                            fontStyle: "italic",
                            fontWeight: '500',


                        }}
                    >
                        Price:- $92.11
                </Text>
                </View>
                <View style={{flex:0.5}}>

                    <Image
                        source={require('../../../assets/chair.jpeg')}
                        style={{ height: 125, width: 125, margin: 10 }}
                    />
                </View>
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