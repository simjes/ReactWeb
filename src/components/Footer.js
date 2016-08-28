import React from 'react';
var githubIcon = require('../images/github.svg');
var androidIcon = require('../images/android.svg');
var mailIcon = require('../images/mail.svg');
var linkedinIcon = require('../images/linkedin.svg');
import {Container} from 'muicss/react';

class FooterBar extends React.Component {
    render() {
        return (
            <footer className="mui--visible-xs-block mui--visible-sm-block">
                <Container className="mui--text-center">
                    <a href="https://github.com/simjes" target="_blank"><img src={githubIcon} alt="Github" /></a>
                    <a href="https://play.google.com/store/apps/developer?id=Simjes" target="_blank"><img src={androidIcon} alt="Google Play" /></a>
                    <a href="https://no.linkedin.com/in/simjes" target="_blank"><img src={linkedinIcon} alt="Linkedin" /></a>
                    <a href="mailto:simjes91@me.com"><img src={mailIcon} alt="Mail" /></a>
                </ Container>
            </footer>
        )
    }
}
export default FooterBar;
