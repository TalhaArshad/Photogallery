import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import Header from '../components/Header'
import GallerySwiper from 'react-native-gallery-swiper'
import { resizeImageUrl } from '../utils/helpers'

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background: ${(props) => props.theme.background};
`

const FullPreviewScreen = ({ route, navigation }) => {
  const { index, item, allData } = route.params
  return (
    <Container>
      <Header
        title={item.author}
        onPress={() => {
          navigation.goBack()
        }}
      />

      <GallerySwiper
        style={{ flex: 1 }}
        images={[{ uri: resizeImageUrl(item.id, 500, 333) }]}
      />
    </Container>
  )
}

export default FullPreviewScreen
