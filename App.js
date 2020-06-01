import React from 'react';
import {
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
    _flexStart,
    _flexLeftRight,
    _flexUpDown,
    _flexCenter,
} from './styles/Common';
import TouchableImage from './components/TouchableImage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const imLedger = require('./images/ledger.jpg');
const imWood = require('./images/wood.jpg');
const imPaper = require('./images/paper.jpg');
const imMap = require('./images/map.jpg');
const imCalculator = require('./images/calculator.jpg');
const _dimPaper = 0.2 * windowWidth;
const dimPaper = { height: (_dimPaper * 4) / 3, width: _dimPaper };
const dimCalculator = { height: (_dimPaper * 5) / 3, width: _dimPaper };
const dimLedger = { height: _dimPaper * 2, width: _dimPaper };
const _dimMap = 0.35 * windowWidth;
const dimMap = { height: (_dimMap * 2) / 3, width: _dimMap };
const onPressTimetable = () => {
    alert('timetable pressed');
};
const onPressNotes = () => {
    alert('notes pressed');
};
const onPressMap = () => {
    alert('map pressed');
};
const onPressCalculator = () => {
    alert('calculator pressed');
};
const onPressLedger = () => {
    alert('ledger pressed');
};
export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView bounces={false} style={styles.containerMain}>
                <View style={styles.containerClock}></View>
                <View style={styles.containerTerminal}></View>
                <ImageBackground source={imWood} style={styles.containerDesk}>
                    <View style={{ ..._flexUpDown }}>
                        <TouchableImage source={imPaper} style={dimPaper} onPress={onPressTimetable}/>
                        <TouchableImage source={imPaper} style={dimPaper} onPress={onPressNotes}/>
                        <TouchableImage source={imCalculator} style={dimCalculator} onPress={onPressCalculator}/>
                    </View>
                    <View
                        style={{
                            ..._flexStart,
                            paddingLeft: 8,
                        }}>
                        <TouchableImage source={imMap} style={dimMap} onPress={onPressMap}/>
                        <TouchableImage source={imLedger} style={dimLedger} onPress={onPressLedger}/>
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerMain: {
        width: windowWidth,
        height: windowHeight,
        display: 'flex',
        flex: 1,
        backgroundColor: 'pink',
    },
    containerClock: {
        display: 'flex',
        width: windowWidth,
        height: windowHeight * 0.2,
        backgroundColor: 'darkgreen',
    },
    containerTerminal: {
        display: 'flex',
        width: windowWidth,
        height: windowHeight * 0.7,
        backgroundColor: 'aqua',
    },
    containerDesk: {
        ..._flexLeftRight,
        width: windowWidth,
        paddingTop: 24,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 40,
    },
    touchableTimetable: {
        marginBottom: 8,
    },
    touchableNotes: {
        marginBottom: 8,
    },
    touchableMap: {
        marginBottom: 8,
    },
});
