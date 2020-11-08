import React from 'react'
import styled from 'styled-components/native'
import useInfiniteFetch from '../hooks/useInfiniteFetch'
import PictureGrid from '../components/PictureGrid'
import { homeApi } from '../utils/configs'
import { ActivityIndicator } from 'react-native'
import theme from '../utils/theme'

const Container = styled.SafeAreaView`
  padding: 16px;
  background: ${(props) => props.theme.background};
  flex: 1;
`
const HeadLineTitle = styled.Text`
  font-size: ${(props) => props.theme.headlineTextSize};
  font-weight: bold;
  margin-bottom: 20;
  margin-top: 15;
`

const ErrorContainer = styled.View`
  margin-top: 150;
  align-self: center;
`
const ErrorText = styled.Text`
  font-size: ${(props) => props.theme.infoSize};
  color: ${(props) => props.theme.infoTextColor};
  align-self: center;
`

const RetryButtonText = styled.Text`
  font-size: ${(props) => props.theme.textSize};
  align-self: center;
`

const RetryButton = styled.TouchableOpacity`
  height: 45;
  color: #333333;
  background: ${(props) => props.theme.buttonColor};
  width: 100px;
  justify-content: center;
  align-self: center;
  margin-top: 20;
  border-radius: 4;
`

const HomeScreen = ({ navigation }) => {
  const [nextPage, retry, data, { status, error }] = useInfiniteFetch(homeApi)

  return (
    <Container>
      <HeadLineTitle>Gallery</HeadLineTitle>

      {status === 'fetching' && data.length <= 0 && (
        <ActivityIndicator size="large" color={theme.primaryColor} />
      )}
      <PictureGrid
        data={data}
        fetchMore={() => {
          nextPage()
        }}
        onPress={(index, item) => {
          navigation.navigate('FullPreviewScreen', {
            //index: index,
            item: item,
            //allData: makeImagesArray(data),
          })
        }}
      />

      {status === 'error' && (
        <ErrorContainer>
          <ErrorText>Could not load images. Please Try again</ErrorText>

          <RetryButton
            activeOpacity={0.7}
            onPress={() => {
              console.log('clicked')
              retry()
            }}
          >
            <RetryButtonText>Retry</RetryButtonText>
          </RetryButton>
        </ErrorContainer>
      )}
    </Container>
  )
}

export default HomeScreen
