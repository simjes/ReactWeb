require('normalize.css/normalize.css');

import React from 'react';
import HeaderBar from 'components/Header';
import Card from 'components/Card';
import {Container} from 'muicss/react';
import 'styles/App.scss';

var githubIcon = require('../images/simjes.svg');
var test = {
    image: githubIcon,
    title: "super cool title for a sick project",
    description: "sickest stuff ever",
    links: [
        {
            link: "http://www.tek.no",
            title: "android"
        },
        {
            link: "http://www.tek.no",
            title: "youtube"
        },
        {
            link: "http://www.tek.no",
            title: "Github"
        }
    ]
}

class AppComponent extends React.Component {
  render() {
    return (
        <div>
            <HeaderBar />
            <Container>
                <Card content={test} title="weee" />
            </Container>
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
