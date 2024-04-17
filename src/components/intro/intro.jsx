import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Video } from 'expo-av';
import { VIDEO_MP4 } from '../../../assets';
import { Header } from '../home/header';

// let videoMp4 = VIDEO_MP4;

export function Intro() {
    return (<View style={styles.container}>
        <View style={{
            display: 'grid',
            placeItems: 'center',
            height: '100vh',

            borderColor: 'red',
            borderWidth: 2,
        }}>
        <Video
            source={videoMp4}
            isMuted={true}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={
                {
                    // left: 5,
                    // width: '98vw',//1280,
                    // height: '100vh',//720,
                    width: '100%',
                    height: '100%',// height: '100%',                    
                }
            }
            onReadyForDisplay={videoData => {
                videoData.srcElement.style.position = "initial"
                console.log('videoData', videoData);
            }}
        />
        </View>
        <Text style={styles.text}>
            Welcome, to Civeloo!
        </Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        // top: -50,
        // height: '100vh',
        // width: '100%',//98.6vw',
        // backgroundColor: 'gray',
    },
    text: {
        position: 'absolute',
        top: '30vh',
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: 32,


    }
});