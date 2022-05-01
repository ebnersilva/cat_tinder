import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme.colors.background};
`;

export const StyledText = styled.Text`
  font-size: 10px;
  font-weight: bold;
`;
