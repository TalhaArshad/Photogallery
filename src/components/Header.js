import React from 'react'
import styled from 'styled-components/native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const Container = styled.SafeAreaView`
  position: absolute;
  top: 0;
  z-index: 1;
`
const ContentContainer = styled.SafeAreaView`
  width: ${width};
  flex-direction: row;
  align-items: center;
  height: 70;
`

const BackIcon = styled.TouchableOpacity`
  padding: 16px;
`

const Header = ({ title, iconSize = 26, onPress }) => {
  return (
    <Container>
      <ContentContainer>
        <BackIcon activeOpacity={0.8} onPress={onPress}>
          <AntIcon name="close" size={iconSize} />
        </BackIcon>
      </ContentContainer>
    </Container>
  )
}

export default Header
