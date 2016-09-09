import React from 'react';
import 'styles/MaterializecssCard.scss';

class Card extends React.Component {
    render() {
        const links = this.props.content.links;
        return (
            <div className="card-box">
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.content.image} />
                        <span className="card-title">
                            {this.props.content.title}
                            <p>{this.props.content.tags}</p>
                        </span>
                    </div>
                    <div className="card-content">
                        <p>{this.props.content.description}</p>
                    </div>
                    <div className="card-action mui--text-center">
                        {links.map((link, i) => {
                            return <a href={link.link} target="_blank" key={i}>{link.title}</a>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;
