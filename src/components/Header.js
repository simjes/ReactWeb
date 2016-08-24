import React from 'react';
var githubIcon = require('../images/github.svg');
var androidIcon = require('../images/android.svg');
var mailIcon = require('../images/mail.svg');
var linkedinIcon = require('../images/linkedin.svg');
import {Appbar, Container, Row, Col} from 'muicss/react';

class HeaderBar extends React.Component {
    render() {
        return (
            <Appbar className="mui--z2 header">
                <Container>
                    <Row>
                        <a href="#" className="mui--visible-xs-block mui--text-center"><div className="header-logo" /></a>
                        <Col xs="12" md="6" lg="6" className="mui--text-center mui--hidden-xs">
                            <a href="#"><div className="header-logo" /></a>
                            <div className="header-text">
                                <h1>Simon Jespersen</h1>
                                <h4>Master student @ UiO </h4>
                            </div>
                        </Col>
                        <Col md="6" lg="6" className="mui--hidden-xs mui--hidden-sm">
                            <div className="header-icons">
                                <a href="https://github.com/simjes" target="_blank"><img src={githubIcon} alt="Github" /></a>
                                <a href="https://play.google.com/store/apps/developer?id=Simjes" target="_blank"><img src={androidIcon} alt="Google Play" /></a>
                                <a href="https://no.linkedin.com/in/simjes" target="_blank"><img src={linkedinIcon} alt="Linkedin" /></a>
                                <a href="mailto:simjes91@me.com"><img src={mailIcon} alt="Mail" /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Appbar>
        )
    }
}
export default HeaderBar;
