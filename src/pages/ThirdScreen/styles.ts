import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const StyledText = styled.Text`
  font-size: 126px;
  font-family: ${props => props.theme.fonts.bold};
  margin-top: 120px;
  color: ${props => props.theme.colors.tertiary};
`;
