import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../../src/store'
import '../../src/App.scss'

export const withProvider = (getStory: () => React.ReactNode) => (
    <Provider store={store}>
        <div className="app-body">
            {getStory()}
        </div>
    </Provider>
);

// export default withProvider
