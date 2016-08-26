import React from 'react';
import Card from 'components/Card';
import {Container, Row, Col} from 'muicss/react';
var ProjectInfo = require('sources/ProjectInfo.json');

var numberOfCols = 3;

class CardContainer extends React.Component {

    componentWillMount() {
        this.updateNumberOfColumns();
    }

    componentDidMount() {
        window.addEventListener('resize', ::this.updateNumberOfColumns);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', ::this.updateNumberOfColumns);
    }

    updateNumberOfColumns() {
        var windowWidth = window.innerWidth;
        var lastNumberOfCols = numberOfCols;
        if (windowWidth <= 767) {
            numberOfCols = 1;
        } else if (windowWidth <= 991) {
            numberOfCols = 2;
        } else {
            numberOfCols = 3
        }

        if (lastNumberOfCols != numberOfCols) {
          this.forceUpdate();
        }

    }

    assignToColumn(projects) {
        let colCardInfo = [];
        let numberOfCards = projects.length;
        let cardsPerCol = Math.ceil(numberOfCards / numberOfCols);
        let cardCounter = 0;

        for (var i = 0; i < numberOfCols; i++) {
            var cardOfColumn = [];
            for (var j = 0; j < cardsPerCol; j++) {
                if (cardCounter < numberOfCards) {
                    cardOfColumn[j] = projects[cardCounter];
                    cardCounter++;
                }
            }
            colCardInfo.push(cardOfColumn);
        }
        return colCardInfo;
    }

    renderCards(projects) {
        var colCardInfo = this.assignToColumn(projects);
        var colToRender = [];

        colCardInfo.forEach( (column, index) => {
            colToRender.push(
                <Col xs="12" sm="12" md="6" lg='4' key={index}>
                    {column.map((card, i) => {
                        return <Card content={card} key={i}/>;
                    })}
                </Col>
            )
        });
        return colToRender;
    }

    render() {
        const cards = this.renderCards(ProjectInfo.projects);
        return (
            <Container>
                <Row>
                    {cards}
                </Row>
            </Container>
        )
    }
}
export default CardContainer;
