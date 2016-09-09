import React from 'react';
import Card from 'components/Card';
var ProjectInfo = require('sources/ProjectInfo.json');


class CardContainer extends React.Component {




    render() {
        const cards = ProjectInfo.projects;
        return (
            <div id="card-columns">
                {cards.map((card, i) => {
                    return <Card content={card} key={i}/>;
                })}
            </div>
        )
    }
}
export default CardContainer;
