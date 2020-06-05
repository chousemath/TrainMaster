import React, { useState } from 'react';
import {
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import {
    _flexEnd,
    _flexOne,
    _flexStart,
    _flexLeftRight,
    _flexUpDown,
    _flexCenter,
} from './styles/Common';
import TouchableImage from './components/TouchableImage';
import Modal from 'react-native-modal';
import { colors, colorList } from './libraries/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const mascot = require('./images/colin.png');

function LineCard({ line }) {
    return (
        <View
            key={`card-${line.value}`}
            style={{ ...styles.lineCard, ..._flexLeftRight, backgroundColor: line.value }}>
            <View style={{
                ..._flexUpDown,
                flexGrow: 1,
            }}>
                <View style={{
                    ..._flexStart,
                    flexGrow: 1,
                    paddingTop: 32,
                    paddingLeft: 32,
                }}>
                    <Text style={styles.lineCardTitle}>{line.viewValue}</Text>
                </View>
            </View>
            <View style={{
                ..._flexEnd,
                width: 150,
                height: '100%',
            }}>
                <Image
                    source={mascot}
                    style={styles.mascot}
                />
            </View>
        </View>
    );
}
export default function App() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={_flexOne}>
                <ScrollView bounces={false} style={styles.containerMain}>
                    {colorList.map((line) => (
                        <LineCard 
                        key={`line-card-${line.value}`}
                        line={line} />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { ..._flexOne, alignItems: 'center', justifyContent: 'center' },
    containerMain: { ..._flexOne },
    lineCard: {
        width: windowWidth,
        height: 180,
    },
    lineCardTitle: {
        fontSize: 32,
        color: '#ffffff',
    },
    mascot: { width: 150, height: 150, },
});
