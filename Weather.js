import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { ionicons } from "@expo/vector-icons";
import Ionicons from "./node_modules/@expo/vector-icons/Ionicons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining a lot....",
        subtitle: "For more info look outside",
        icon: "iso-rainy"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "It's Sunny outside",
        subtitle: "Go get some taco",
        icon: "iso-sunny"
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: "iso-thunderstorm"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, it's boring",
        icon: "iso-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as ice",
        subtitle: "Do you want to build a snowman?",
        icon: "iso-snow"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay",
        icon: "iso-rainy-outline"
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay",
        icon: "iso-rainy-outline"
    }

}

function Weather({ weatherName, temp }) {
    console.log(weatherName);
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}
        >
            <View style={styles.upper}>
                <Ionicons color="white" size={144} 
                name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}도</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
});