require('normalize.css/normalize.css');

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderBar from 'components/Header';
injectTapEventPlugin();

require('styles/App.scss');


class AppComponent extends React.Component {
  render() {
    return (
        <MuiThemeProvider>
            <HeaderBar />
        </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
