/* eslint-disable no-undef */
import React from 'react'

export const addToast = (arg: {
    type: string,
    content: JSX.Element,
}) => {
  console.log('----\n[redux.action]: app.addToast \n----\n', arg)
}

export const setVideoModal = (arg: {
    url: string
}) => {
  console.log('----\n[redux.actions] app.setVideoModal\n----\n', arg)
}
