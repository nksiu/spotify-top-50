import React from 'react';
import { render } from '@testing-library/react';

//Component
import App from '../App';

//Redux
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

const initialState = {
  auth: {
    token: null
  }
}

//Uses browser to get token, thus cannot dispatch the authAction to update store
const getTokenState = {
  auth: {
    token: 'mockToken'
  },
  tracks: {
    tracks: []
  }
}

describe('App', () => {

  it('Checks the initial button is rendered', () => {
    const store = mockStore(initialState)
    const { getByText } = render(<Provider store={store}> <App /> </Provider>);
    const buttonText = getByText('Get Spotify Token');
    expect(buttonText).toBeInTheDocument();
  })

  it('Checks page with token is rendered', () => {
    const store = mockStore(getTokenState)
    const { getByText } = render(<Provider store={store}> <App /> </Provider>);
    const headerText = getByText('Top 50 Tracks')
    expect(headerText).toBeInTheDocument();
  })

});
