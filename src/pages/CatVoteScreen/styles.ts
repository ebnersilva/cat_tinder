import styled from 'styled-components/native';

// export const Container = styled.ScrollView.attrs({
//   contentContainerStyle: {
//     alignItems: 'center',
//     flex: 1,
//     minHeight: 800,
//   },
// })`
//   display: flex;
//   flex: 1;

//   background: ${props => props.theme.colors.background};
// `;

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: ${props => props.theme.colors.background};
  min-height: 800px;
  align-items: center;
`;

export const Header = styled.View`
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

export const StyledText = styled.Text`
  font-size: 10px;
  font-weight: bold;
`;

export const VoteButtonsContainer = styled.View`
  position: absolute;

  bottom: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 50%;

  margin-top: 58px;

  margin-bottom: 80px;
`;

export const LoadingView = styled.View`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ShowMoreView = styled.View`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
