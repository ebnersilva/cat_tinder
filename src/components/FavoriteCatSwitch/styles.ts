import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  height: 28px;
  width: 84px;
  border-radius: 28px;
  align-items: center;
  flex-direction: row;

  background: ${props => props.theme.colors.shape};
`;

export const InsideButton = styled.TouchableOpacity`
  width: 40px;
  height: 24px;

  align-items: center;
  justify-content: center;
  z-index: 1;
`;
