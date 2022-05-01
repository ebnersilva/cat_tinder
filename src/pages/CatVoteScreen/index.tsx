import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, PanResponder } from 'react-native';
import Card from '~/components/Card';
import FavoriteCatSwitch from '~/components/FavoriteCatSwitch';
import LikeButton from '~/components/LikeButton';
import NopeButton from '~/components/NopeButton';
import { ACTION_OFFSET, CARD } from '~/utils/constants';
import { CatBreed, catsArray } from './data';

import { Container, Header, VoteButtonsContainer } from './styles';

export function CatVoteScreen() {
  const [cats, setCats] = useState<CatBreed[]>(catsArray);
  const swipe = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    if (cats.length === 0) {
      setCats(catsArray);
    }
  }, [cats]);

  const removeTopCard = useCallback(() => {
    setCats(prevState => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const handleChoice = useCallback(
    (direction: number) => {
      Animated.timing(swipe.x, {
        toValue: direction * CARD.OUT_OF_SCREEN,
        duration: 400,
        useNativeDriver: true,
      }).start(removeTopCard);
    },
    [swipe.x, removeTopCard],
  );

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy }) => {
      swipe.setValue({ x: dx, y: 0 });
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > ACTION_OFFSET;

      if (isActionActive) {
        Animated.timing(swipe, {
          duration: 200,
          toValue: {
            x: direction * 500,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard);
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  return (
    <Container>
      <Header>
        <FavoriteCatSwitch />
      </Header>
      {cats
        .map((cat, index) => {
          const isFirst = index === 0;
          const dragHandlers = isFirst ? panResponder.panHandlers : {};

          return (
            <Card
              key={cat.image.url}
              image_url={cat.image.url}
              name={cat.name}
              affection_level={cat.affection_level}
              origin={cat.origin}
              isFirst={isFirst}
              swipe={swipe}
              {...dragHandlers}
            />
          );
        })
        .reverse()}

      <VoteButtonsContainer>
        <NopeButton onPress={() => handleChoice(-1)} />
        <LikeButton onPress={() => handleChoice(1)} />
      </VoteButtonsContainer>
    </Container>
  );
}

export default CatVoteScreen;
