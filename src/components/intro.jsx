import React from 'react';
import { View } from "react-native";
import { Video } from 'expo-av';
import { VIDEO_MP4 } from '../../assets';

let videoMp4 = VIDEO_MP4;

export function Intro(props) {
    return (<View style={props?.styles}>
        <Video
            source={videoMp4}
            isMuted={true}
            resizeMode="contain"
            shouldPlay
            isLooping
            style={
                {
                    width: 1280,
                    height: 720,
                    borderRadius: 20,
                }
            }
            onReadyForDisplay={videoData => {
                videoData.srcElement.style.position = "initial"
            }}
        />
    </View>
    );
}