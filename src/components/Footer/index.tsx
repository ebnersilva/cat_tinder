import React, { useState } from 'react';
import { Image } from 'react-native';

import CatPawEnabledIcon from '~/assets/cat_paw_enabled_icon.png';
import CatPawDisabledIcon from '~/assets/cat_paw_disabled_icon.png';
import ChatEnabledIcon from '~/assets/chat_enabled_icon.png';
import ChatDisabledIcon from '~/assets/chat_disabled_icon.png';
import ProfileEnabledIcon from '~/assets/profile_enabled_icon.png';
import ProfileDisabledIcon from '~/assets/profile_disabled_icon.png';
import NavigationService from '../../routes/navigation';
import { Container, BubbleContainer, StyledButton } from './styles';

export function Footer() {
  const [selectedMenu, setSelectedMenu] = useState<1 | 2 | 3>(1);

  return (
    <Container>
      <BubbleContainer
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,

          elevation: 14,
        }}
      >
        <StyledButton
          onPress={() => {
            NavigationService.navigate('CatVoteScreen');
            setSelectedMenu(1);
          }}
        >
          <Image
            source={selectedMenu === 1 ? CatPawEnabledIcon : CatPawDisabledIcon}
          />
        </StyledButton>

        <StyledButton
          onPress={() => {
            NavigationService.navigate('SecondScreen');
            setSelectedMenu(2);
          }}
        >
          <Image
            source={selectedMenu === 2 ? ChatEnabledIcon : ChatDisabledIcon}
          />
        </StyledButton>

        <StyledButton
          onPress={() => {
            NavigationService.navigate('ThirdScreen');
            setSelectedMenu(3);
          }}
        >
          <Image
            source={
              selectedMenu === 3 ? ProfileEnabledIcon : ProfileDisabledIcon
            }
          />
        </StyledButton>
      </BubbleContainer>
    </Container>
  );
}

export default Footer;
