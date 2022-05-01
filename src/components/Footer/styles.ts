import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  height: 50px;
  background: ${props => props.theme.colors.shape};
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
`;

export const StyledButton = styled.TouchableOpacity`
  display: flex;
  height: 50px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.shape};
  margin: 10px;
`;

export const StyledText = styled.Text`
  font-size: 10px;
  font-weight: bold;
`;
