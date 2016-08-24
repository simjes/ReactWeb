require('normalize.css/normalize.css');

import React from 'react';
import HeaderBar from 'components/Header';

require('styles/App.scss');


class AppComponent extends React.Component {
  render() {
    return (
            <HeaderBar />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
