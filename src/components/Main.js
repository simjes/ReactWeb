require('normalize.css/normalize.css');

import React from 'react';
import HeaderBar from 'components/Header';
import CardContainer from 'components/CardContainer';
import 'styles/App.scss';

class AppComponent extends React.Component {
  render() {
    return (
        <div>
            <HeaderBar />
            <CardContainer />
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
