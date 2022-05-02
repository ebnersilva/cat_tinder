import React from 'react';
import { ActivityIndicator, Animated } from 'react-native';

import {
  Container,
  CatDetails,
  CatImage,
  CatDetailsHeader,
  CatBreedText,
  CatAffectionLevelText,
  CatDetailsFooter,
  CatOriginText,
} from './styles';

interface ICardProps {
  image_url: string;
  name: string;
  affection_level: number;
  origin: string;
  isFirst: boolean;
  swipe: Animated.ValueXY;
}

export function Card({
  image_url,
  name,
  affection_level,
  origin,
  isFirst,
  swipe,
  ...rest
}: ICardProps) {
  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform()],
  };

  return (
    <Container
      as={Animated.View}
      {...rest}
      style={[isFirst && animatedCardStyle]}
    >
      <CatImage source={{ uri: image_url }} resizeMode="cover" />
      <CatDetails>
        <CatDetailsHeader>
          <CatBreedText>{name}</CatBreedText>
          <CatAffectionLevelText>{affection_level}</CatAffectionLevelText>
        </CatDetailsHeader>
        <CatDetailsFooter>
          <CatOriginText>{origin}</CatOriginText>
        </CatDetailsFooter>
      </CatDetails>
    </Container>
  );
}

export default Card;
