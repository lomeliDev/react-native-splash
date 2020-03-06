import React, { useState, useEffect } from 'react';
import { Animated, View } from 'react-native';
import styled from 'styled-components/native';

const FadeInView = props => {
    const [fadeAnim] = useState(new Animated.Value(0));

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 2,
            duration: 1000,
        }).start();
    }, []);

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
                transform: [
                    {
                        translateY: fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [50, 0],
                        }),
                    },
                ],
            }}>
            {props.children}
        </Animated.View>
    );
};

export default function Splash(){
    const logo = require('assets/img/splash.png');
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <FadeInView style={{width: 150, height: 250}}>
            <Image source={logo} />
          </FadeInView>
        </View>
      );
};

const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;