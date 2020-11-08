import React from 'react'
import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'
import { Dimensions, FlatList, TouchableOpacity, View } from 'react-native'
import { resizeImageUrl } from '../utils/helpers'
const { width } = Dimensions.get('window')

const box = width / 2 - 21
const Container = View
const PressableImageContainer = TouchableOpacity

const PicturePreview = styled(FastImage)`
  background: ${(props) => props.theme.imageBackground};
  width: ${box};
  height: ${box};
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10;
`
const AuthorName = styled.Text`
  color: ${(props) => props.theme.lightText};
  font-size: 17;
  font-weight: 700;
  position: absolute;
  bottom: 20;
  left: 20;
  width: 130;
`
const PictureGrid = ({ data, onPress, fetchMore }) => {
  const renderItem = ({ item, index }) => {
    return (
      <PressableImageContainer
        activeOpacity={0.7}
        onPress={() => {
          onPress(index, item)
        }}
      >
        <PicturePreview
          source={{
            uri: resizeImageUrl(item.id),
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <AuthorName>{item.author}</AuthorName>
      </PressableImageContainer>
    )
  }

  return (
    <Container>
      <FlatList
        contentContainerStyle={{ paddingBottom: box }}
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item, index) => `pictureItem_${index}`}
        onEndReached={fetchMore}
      />
    </Container>
  )
}

export default PictureGrid
