import React, { useEffect, useState } from 'react';
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
    TouchableWithoutFeedback,
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

function LineCard({ line, navigation }) {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                navigation.navigate('Quiz', line);
            }}>
            <View
                key={`card-${line.value}`}
                style={{
                    ...styles.lineCard,
                    ..._flexLeftRight,
                    backgroundColor: line.value,
                }}>
                <View
                    style={{
                        ..._flexUpDown,
                        flexGrow: 1,
                    }}>
                    <View
                        style={{
                            ..._flexStart,
                            flexGrow: 1,
                            paddingTop: 32,
                            paddingLeft: 32,
                        }}>
                        <Text numberOfLines={2} style={styles.lineCardTitle}>
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
                            최고 점수:{' '}
                            {Math.floor(Math.random() * 55).toString()}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        ..._flexEnd,
                        width: 150,
                        height: '100%',
                    }}>
                    <Image source={line.character} style={styles.mascot} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

function QuizScreen({ route, navigation }) {
    const { value, viewValue, character } = route.params;
    useEffect(() => {
        navigation.setOptions({
            title: `${viewValue}: Let's go!`,
            headerStyle: { backgroundColor: value },
        });
    }, []);
    return (
        <View
            style={{
                ..._flexCenter,
                flex: 1,
            }}>
            <Text style={{ ...styles.inProgress, color: value }}>
                이 페이지는 개발 중입니다.
            </Text>
        </View>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={_flexOne}>
                <ScrollView bounces={false} style={styles.containerMain}>
                    {colorList.map((line) => (
                        <LineCard
                            navigation={navigation}
                            key={`line-card-${line.value}`}
                            line={line}
                        />
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
                <Stack.Screen
                    options={{
                        title: '지하철 역들을 연결하세요!',
                        headerStyle: {
                            backgroundColor: '#000000',
                            shadowColor: 'transparent',
                            shadowRadius: 0,
                            shadowOffset: { height: 0 },
                        },
                        headerTintColor: '#ffffff',
                        headerBackTitle: '뒤로',
                    }}
                    name='Quiz'
                    component={QuizScreen}
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
    mascot: { width: 150, height: 150 },
    inProgress: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
