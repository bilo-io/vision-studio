/* eslint-disable no-undef */

import { getSlidesSpecs, getTilesCount, getDuration } from '../slides'

const slides = [
  {
    duration: 2,
    tiles: [{ layout: {} }, { layout: {} }]
  },
  {
    duration: 5,
    tiles: [{ layout: {} }, { layout: {} }]
  }
]

describe('null/undefined test case', () => {
  test('getDuration of undefined', () => {
    expect(getDuration(undefined)).toMatchObject({
      slides: undefined,
      error: 'getDuration(slides): slides is undefined or null'
    })
  })
  test('getTilesCount of undefined', () => {
    expect(getTilesCount(undefined)).toMatchObject({
      slides: undefined,
      error: 'getTilesCount(slides): slides is undefined or null'
    })
  })
  test('getSlidesSpecs of undefined', () => {
    expect(getSlidesSpecs(undefined)).toMatchObject({
      slides: undefined,
      error: 'getSlidesSpecs(slides): slides is undefined or null'
    })
  })
})

describe('notAnArray test case', () => {
  test('getDuration of 5', () => {
    expect(getDuration(5)).toMatchObject({
      slides: 5,
      error: 'getDuration(slides): slides is not an array'
    })
  })
  test('getTilesCount of 9', () => {
    expect(getTilesCount(9)).toMatchObject({
      slides: 9,
      error: 'getTilesCount(slides): slides is not an array'
    })
  })
  test('getSlidesSpecs of undefined', () => {
    expect(getSlidesSpecs('Hello')).toMatchObject({
      slides: 'Hello',
      error: 'getSlidesSpecs(slides): slides is not an array'
    })
  })
})

describe('empty data [] test case', () => {
  test('getDuration of []', () => {
    expect(getDuration([])).toBe(0)
  })
  test('getTilesCount of []', () => {
    expect(getTilesCount([])).toBe(0)
  })
  test('getSlidesSpecs of []', () => {
    expect(getSlidesSpecs([])).toMatchObject({
      slides: [],
      error: 'getSlidesSpecs(slides): slides is empty []'
    })
  })
})

describe('normal test case', () => {
  test('getDuration of slides', () => {
    expect(getDuration(slides)).toBe(7)
  })
  test('getTilesCount of slides', () => {
    expect(getDuration(slides)).toBe(7)
  })
  test('getSlidesSpecs of slides', () => {
    expect(getSlidesSpecs(slides)).toMatchObject({
      slidesCount: 2,
      tilesCount: 4,
      duration: 7
    })
  })
})
