import { makeImagesArray, resizeImageUrl } from '../src/utils/helpers'

it('test for makeImagesArray()', () => {
  let sampleResult = 'https://picsum.photos/id/3/400/333'

  const response = resizeImageUrl(3, 400, 333)
  expect(response).toEqual(sampleResult)
})

it('test for makeImagesArray()', () => {
  let data = [
    {
      id: '0',
      author: 'Alejandro Escamilla',
      width: 5616,
      height: 3744,
      url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
      download_url: 'https://picsum.photos/id/0/5616/3744',
    },
    {
      id: '1',
      author: 'Alejandro Escamilla',
      width: 5616,
      height: 3744,
      url: 'https://unsplash.com/photos/LNRyGwIJr5c',
      download_url: 'https://picsum.photos/id/1/5616/3744',
    },
    {
      id: '10',
      author: 'Paul Jarvis',
      width: 2500,
      height: 1667,
      url: 'https://unsplash.com/photos/6J--NXulQCs',
      download_url: 'https://picsum.photos/id/10/2500/1667',
    },
    {
      id: '100',
      author: 'Tina Rataj',
      width: 2500,
      height: 1656,
      url: 'https://unsplash.com/photos/pwaaqfoMibI',
      download_url: 'https://picsum.photos/id/100/2500/1656',
    },
  ]

  let sampleResult = { uri: 'https://picsum.photos/id/0/500/333' }

  const response = makeImagesArray(data)
  expect(response).toEqual(
    expect.arrayContaining([expect.objectContaining(sampleResult)]),
  )
})
