import React from 'react';

import { useDispatch } from 'react-redux';
import { actionExampleIndexRequest } from '~/store/modules/example/index/actions';
import { Container, StyledButton, StyledText } from './styles';
import NavigationService from '../../routes/navigation';

export function Footer() {
  const dispatch = useDispatch();
  return (
    <Container>
      <StyledButton onPress={() => NavigationService.navigate('CatVoteScreen')}>
        <StyledText>First Screen</StyledText>
      </StyledButton>

      <StyledButton onPress={() => NavigationService.navigate('SecondScreen')}>
        <StyledText>Secondary Screen</StyledText>
      </StyledButton>

      <StyledButton onPress={() => NavigationService.navigate('ThirdScreen')}>
        <StyledText>Third Screen</StyledText>
      </StyledButton>
    </Container>
  );
}

export default Footer;
