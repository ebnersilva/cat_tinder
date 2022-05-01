import React, { useCallback, useRef } from 'react';
import { Animated, TouchableWithoutFeedback, Image } from 'react-native';

import LikeImage from '~/assets/like_image.png';

import { styles } from './styles';

interface IRoudButtonProps {
  onPress: () => void;
}

export function RoundButton({ onPress }: IRoudButtonProps) {
  const scale = useRef(new Animated.Value(1)).current;

  const animateScale = useCallback(
    newValue => {
      Animated.spring(scale, {
        toValue: newValue,
        friction: 4,
        useNativeDriver: true,
      }).start();
    },
    [scale],
  );

  return (
    <TouchableWithoutFeedback
      onPressIn={() => animateScale(0.8)}
      delayPressIn={0}
      onPressOut={() => {
        animateScale(1);
        onPress();
      }}
      delayPressOut={110}
    >
      <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
        <Image source={LikeImage} style={{ height: 40, width: 40 }} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default RoundButton;
