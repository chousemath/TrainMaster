import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
export default TouchableImage = ({style, onPress, source}) => {
    return (
    <TouchableOpacity
        activeOpacity={0.6}
        style={styles.touchableTimetable}
        onPress={onPress}>
        <Image source={source} style={style} />
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchableTimetable: {
        marginBottom: 8,
    },
});
