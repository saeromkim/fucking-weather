import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator, StatusBar } from 'react-native';
import Weather from "./Weather";

export default class App extends Component {
  state = {
    isLoaded: false,
    error : null
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          error: error
        });
      },
      error => {
        this.setState({
          error:error
        });
      }
    );
  }
  render() {
    const { isLoaded, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        {isLoaded ? (
         <Weather />
        ) : (
         <View style={styles.loading}>
           <Text style={styles.loadingText}>날씨를 불러오는 중입니다 ^0^</Text>
           {error ? <Text style={styles.errorText}>error</Text> : null}
         </View> 
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex:1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText:{
    fontSize: 29,
    marginBottom: 34
  }
});
