import React from 'react';
var logo = require('../images/simjes.svg');
var githubIcon = require('../images/github.svg');
var androidIcon = require('../images/android.svg');
var mailIcon = require('../images/mail.svg');
var linkedinIcon = require('../images/linkedin.svg');
import {Container, Col, Row, Hidden} from 'react-grid-system';

class HeaderBar extends React.Component {
    render() {
        return (
            <header className="headerBar">
                <Container>
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3} >
                            <img src={logo} alt="logo" height="80" width="80" />
                        </Col>
                        <Col xs={9} sm={9} md={3} lg={3} >
                            <h2> Simon Jespersen</h2>
                            <h4> Master student @ UiO </h4>
                        </Col>
                        <Col xs={12} md={3} lg={6} >
                            <div id="header-icons">
                                <img src={githubIcon} alt="Github" />
                                <img src={androidIcon} alt="Google Play" />
                                <img src={linkedinIcon} alt="Linkedin" />
                                <img src={mailIcon} alt="Mail" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}
export default HeaderBar;
