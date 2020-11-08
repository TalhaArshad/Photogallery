import { base } from '../utils/configs'

// function not used now
export const makeImagesArray = (images) => {
  let data = []
  images.map((item) => {
    data.push({ uri: `${base}id/${item.id}/500/333` })
  })

  return data
}

export const resizeImageUrl = (id, width = 150, height = 150) => {
  return `${base}id/${id}/${width}/${height}`
}
