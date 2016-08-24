require('normalize.css/normalize.css');

import React from 'react';
import HeaderBar from 'components/Header';
import Card from 'components/Card';

require('styles/App.scss');

var githubIcon = require('../images/simjes.svg');

class AppComponent extends React.Component {
  render() {
    return (
        <div>
            <HeaderBar />
            <Card image={githubIcon} />
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
