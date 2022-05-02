import React, { useCallback, useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  Animated,
  PanResponder,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import Card from '~/components/Card';
import FavoriteCatSwitch from '~/components/FavoriteCatSwitch';
import LikeButton from '~/components/LikeButton';
import NopeButton from '~/components/NopeButton';
import { IStoreState } from '~/store';
import {
  actionCatBreedIndexRequest,
  actionRemoveLastCat,
} from '~/store/modules/catBreed/index/actions';
import { ICatBreedIndexState } from '~/store/modules/catBreed/index/types';
import { actionCatVoteStoreRequest } from '~/store/modules/catVote/store/actions';
import { ACTION_OFFSET, CARD } from '~/utils/constants';

import {
  Container,
  Header,
  VoteButtonsContainer,
  LoadingView,
  ShowMoreView,
} from './styles';

export function CatVoteScreen() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const swipe = useRef(new Animated.ValueXY()).current;

  const {
    data: catsBreedData,
    page,
    totalPages,
    loading: loadingCatBreeds,
  } = useSelector<IStoreState, ICatBreedIndexState>(
    state => state.catBreedIndex,
  );

  useEffect(() => {
    dispatch(
      actionCatBreedIndexRequest({
        page: 1,
        limit: 10,
      }),
    );
  }, [dispatch]);

  const showMore = useCallback(() => {
    const isTheEnd = page === totalPages;

    dispatch(
      actionCatBreedIndexRequest({
        page: isTheEnd ? 1 : page + 1,
        limit: 10,
      }),
    );
  }, [page, dispatch, totalPages]);

  const removeTopCard = useCallback(() => {
    dispatch(actionRemoveLastCat());
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe, dispatch]);

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
      {loadingCatBreeds && (
        <LoadingView>
          <ActivityIndicator color={theme.colors.secondary} />
        </LoadingView>
      )}
      {catsBreedData.length === 0 && !loadingCatBreeds && (
        <ShowMoreView>
          <TouchableOpacity onPress={showMore}>
            <Text>Show more</Text>
          </TouchableOpacity>
        </ShowMoreView>
      )}

      {catsBreedData
        .map((cat, index) => {
          const isFirst = index === 0;
          const dragHandlers = isFirst ? panResponder.panHandlers : {};

          if (!cat.image) return;

          return (
            <Card
              key={cat.image.url + cat.id}
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
        <LikeButton
          onPress={() => {
            handleChoice(1);

            const currentCat = catsBreedData[0];
            const imageId = currentCat.image?.id;

            if (!imageId) return;

            dispatch(
              actionCatVoteStoreRequest({
                image_id: imageId,
                value: 1,
              }),
            );
          }}
        />
      </VoteButtonsContainer>
    </Container>
  );
}

export default CatVoteScreen;
