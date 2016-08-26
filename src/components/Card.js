import React from 'react';
import 'styles/MaterializecssCard.scss';
var fillerImage = require('../images/firestorm.png');

class Card extends React.Component {
    renderLinks(links) {
        var aTags = [];
        links.forEach( (linkInfo, index) => {
            aTags.push(<a href={linkInfo.link} target="_blank" key={index}>{linkInfo.title}</a>);
        });
        return aTags;
    }

    render() {
        //TODO: add tags    <img src={this.props.content.image} />
        const links = this.renderLinks(this.props.content.links);
        return (
            <div className="bottom-card-filler">
                <div className="card">
                    <div className="card-image">
                        <img src={fillerImage} />
                        <span className="card-title">{this.props.content.title}</span>
                    </div>
                    <div className="card-content">
                        <p>{this.props.content.description}</p>
                    </div>
                    <div className="card-action mui--text-center">
                        {links}
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;
