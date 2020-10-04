import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import Root from './root/Root';
import store from './redux/store/configureStore';
import { domain, clientId, audience } from './constants/auth0';
import './i18n';

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      audience={audience}
      scope="read:current_user update:current_user_metadata"
    >
      <Root />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
