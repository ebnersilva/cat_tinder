import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Image } from 'react-native';

import TinderIconEnabledPng from '~/assets/tinder_icon_enabled.png';
import TinderIconDisabledPng from '~/assets/tinder_icon_disabled.png';
import StarIconEnabledPng from '~/assets/star_icon_enabled.png';
import StarIconDisabledPng from '~/assets/star_icon_disabled.png';
import { Container, InsideButton } from './styles';

export function FavoriteCatSwitch() {
  const [switchValue, setSwitchValue] = useState(false);
  const opacityTinderLogo = useRef(new Animated.Value(1)).current;
  const opacityStarLogo = useRef(new Animated.Value(1)).current;
  const buttonPosition = useRef(new Animated.Value(1)).current;

  const fadeTinderLogo = useCallback(
    (newValue: number) => {
      Animated.timing(opacityTinderLogo, {
        toValue: newValue,
        duration: 200,
        useNativeDriver: true,
      }).start();
    },
    [opacityTinderLogo],
  );

  const fadeStarLogo = useCallback(
    (newValue: number) => {
      Animated.timing(opacityStarLogo, {
        toValue: newValue,
        duration: 200,
        useNativeDriver: true,
      }).start();
    },
    [opacityStarLogo],
  );

  const animatedButtonPosition = useCallback(
    (newValue: number) => {
      Animated.timing(buttonPosition, {
        toValue: newValue,
        duration: 200,
        useNativeDriver: true,
      }).start();
    },
    [buttonPosition],
  );

  useEffect(() => {
    if (switchValue) {
      fadeTinderLogo(0);
      fadeStarLogo(1);
      animatedButtonPosition(40);
    } else {
      fadeTinderLogo(1);
      fadeStarLogo(0);
      animatedButtonPosition(1);
    }
  }, [switchValue, fadeStarLogo, fadeTinderLogo, animatedButtonPosition]);

  return (
    <Container>
      <Image
        style={{
          position: 'absolute',
          left: 14,
        }}
        source={TinderIconDisabledPng}
      />
      <Image
        style={{
          position: 'absolute',
          right: 14,
        }}
        source={StarIconDisabledPng}
      />
      <Animated.View
        style={{
          backgroundColor: '#fff',
          width: 40,
          height: 24,
          borderRadius: 24,
          marginLeft: 2,
          alignItems: 'center',
          justifyContent: 'center',
          transform: [
            {
              translateX: buttonPosition,
            },
          ],
        }}
      >
        <InsideButton onPress={() => setSwitchValue(prevState => !prevState)}>
          {switchValue ? (
            <Animated.Image
              source={StarIconEnabledPng}
              style={{ opacity: opacityStarLogo }}
            />
          ) : (
            <Animated.Image
              source={TinderIconEnabledPng}
              style={{ opacity: opacityTinderLogo }}
            />
          )}
        </InsideButton>
      </Animated.View>
    </Container>
  );
}

export default FavoriteCatSwitch;
