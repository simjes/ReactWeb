import React from 'react';
var logo = require('../images/simjes.svg');
var githubIcon = require('../images/github.svg');
var androidIcon = require('../images/android.svg');
var mailIcon = require('../images/mail.svg');
var linkedinIcon = require('../images/linkedin.svg');
import {Button} from 'muicss/react';

class HeaderBar extends React.Component {
    render() {
        return (
            <header className="headerBar">
                <img src={logo} alt="logo" height="80" width="80" />
                <h2> Simon Jespersen</h2>
                <h4> Master student @ UiO </h4>
                <div id="header-icons">
                    <img src={githubIcon} alt="Github" />
                    <img src={androidIcon} alt="Google Play" />
                    <img src={linkedinIcon} alt="Linkedin" />
                    <img src={mailIcon} alt="Mail" />
                </div>
                <Button color="danger">button</Button>
            </header>
        )
    }
}
export default HeaderBar;
