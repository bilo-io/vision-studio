export const getTilesCount = (slides) => {
  if (!slides) {
    return {
      slides,
      error: 'getTilesCount(slides): slides is undefined or null'
    }
  }
  if (!Array.isArray(slides)) {
    return {
      slides,
      error: 'getTilesCount(slides): slides is not an array'
    }
  }
  if (Array.isArray(slides) && slides.length === 0) {
    return 0
  }
  let sum = 0
  slides.forEach((slide) => {
    if (slide.tiles) {
      sum += slide.tiles.length
    }
  })
  return sum
}

export const getDuration = (slides) => {
  if (!slides) {
    return {
      slides,
      error: 'getDuration(slides): slides is undefined or null'
    }
  }
  if (!Array.isArray(slides)) {
    return {
      slides,
      error: 'getDuration(slides): slides is not an array'
    }
  }
  if (Array.isArray(slides) && slides.length === 0) {
    return 0
  }
  let sum = 0
  slides.forEach((slide) => {
    if (slide.duration) {
      sum += slide.duration
    }
  })
  return sum
}

export const getSlidesSpecs = (slides) => {
  if (!slides) {
    return {
      slides,
      error: 'getSlidesSpecs(slides): slides is undefined or null'
    }
  }
  if (!Array.isArray(slides)) {
    return {
      slides,
      error: 'getSlidesSpecs(slides): slides is not an array'
    }
  }
  if (Array.isArray(slides) && slides.length === 0) {
    return {
      slides,
      error: 'getSlidesSpecs(slides): slides is empty []'
    }
  }
  return {
    slidesCount: (slides || []).length,
    tilesCount: getTilesCount(slides || []),
    duration: getDuration(slides || [])
  }
}

export default {
  getDuration,
  getSlidesSpecs
}
