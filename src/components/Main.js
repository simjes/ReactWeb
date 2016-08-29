require('normalize.css/normalize.css');

import React from 'react';
import HeaderBar from 'components/Header';
import CardContainer from 'components/CardContainer';
import 'styles/App.scss';
import 'styles/mui.min.css';
import FooterBar from 'components/Footer';

class AppComponent extends React.Component {
  render() {
    return (
        <div>
            <HeaderBar />
            <CardContainer />
            <FooterBar />
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
