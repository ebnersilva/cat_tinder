import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 32px;
  left: 0px;
  right: 0px;

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const BubbleContainer = styled.View`
  display: flex;
  background: #fff;
  flex-direction: row;
  height: 44px;
  border-radius: 36px;

  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.TouchableOpacity`
  display: flex;
  height: 44px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text`
  font-size: 10px;
  font-weight: bold;
`;
