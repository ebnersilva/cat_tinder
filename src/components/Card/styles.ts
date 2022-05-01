import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  display: flex;

  position: absolute;
  top: 120px;

  align-items: center;
  justify-content: center;

  width: 90%;
  height: 446px;
`;

export const CatImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

export const CatDetails = styled.View`
  display: flex;
  background: white;

  position: absolute;
  bottom: 0px;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  height: 48px;
  width: 90%;
`;

export const CatDetailsHeader = styled.View`
  display: flex;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
`;

export const CatBreedText = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: 16px;
  color: ${props => props.theme.colors.secondary};
`;

export const CatAffectionLevelText = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: 16px;
  color: ${props => props.theme.colors.secondary};
`;

export const CatOriginText = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(8)}px;
  color: ${props => props.theme.colors.tertiary};
`;

export const CatDetailsFooter = styled.View`
  display: flex;

  width: 100%;

  padding-left: 16px;
  padding-right: 16px;
`;
