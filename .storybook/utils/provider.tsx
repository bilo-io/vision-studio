import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../../src/store'
import '../../src/App.scss'
import { MemoryRouter } from 'react-router';

export const withProvider = (getStory: () => React.ReactNode) => (
    <Provider store={store}>
        {getStory()}
    </Provider>
);

export const withAppBody = (getStory: () => React.ReactNode) => (
    <div className="app-body">
        {getStory()}
    </div>
)

export const withMemoryRouter = (Story: any) => (<MemoryRouter><Story/></MemoryRouter>)
// export default withProvider
