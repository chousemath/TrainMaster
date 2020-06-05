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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

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
                    <Text
                        numberOfLines={2}
                        style={styles.lineCardTitle}>
                        {line.viewValue}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={styles.lineCardUpdatedAt}>
                        최근 퀴즈: 2020.03.15
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={styles.lineCardUpdatedAt}>
                        최고 점수: {Math.floor(Math.random() * 55).toString()}
                    </Text>
                </View>
            </View>
            <View style={{
                ..._flexEnd,
                width: 150,
                height: '100%',
            }}>
                <Image
                    source={line.character}
                    style={styles.mascot}
                />
            </View>
        </View>
    );
}
function HomeScreen() {
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

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        title: '지하철 노선을 선택하세요!',
                        headerStyle: {
                            backgroundColor: '#ffffff',
                            shadowColor: 'transparent',
                            shadowRadius: 0,
                            shadowOffset: { height: 0 },
                        },
                        headerTintColor: '#000000',
                    }}
                    name='Home'
                    component={HomeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
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
        width: windowWidth - 190,
    },
    lineCardUpdatedAt: {
        marginTop: 8,
        fontSize: 16,
        color: '#ffffff',
    },
    mascot: { width: 150, height: 150, },
});
