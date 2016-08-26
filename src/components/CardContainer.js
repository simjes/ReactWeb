import React from 'react';
import Card from 'components/Card';
import {Container, Row, Col} from 'muicss/react';

var cardImage = require('../images/firestorm.png');
var test = {
    image: cardImage,
    title: 'super cool title for a sick project',
    description: 'sickest stuff everdaskdklasøkdløaksldøkløsakdlø',
    links: [
        {
            link: 'http://www.tek.no',
            title: 'android'
        },
        {
            link: 'http://www.tek.no',
            title: 'youtube'
        },
        {
            link: 'http://www.tek.no',
            title: 'Github'
        }
    ]
}

var test2 = {
    image: cardImage,
    title: 'super cool title for a sick project',
    description: 'sickest stuff everdaskdklasøkdløaksldøkløsakdckest stuff everdaskdklasøkdløaksldøkløsakdckest stuff everdaskdklasøkdløaksldøkløsakdckest stuff everdaskdklasøkdløaksldøkløsakdckest stuff everdaskdklasøkdløaksldøkløsakdlø',
    links: [
        {
            link: 'http://www.tek.no',
            title: 'android'
        },
        {
            link: 'http://www.tek.no',
            title: 'youtube'
        },
        {
            link: 'http://www.tek.no',
            title: 'Github'
        }
    ]
}

var allProjects = [test2, test2, test, test, test2, test2, test, test2, test];
var numberOfCols = 3;
//TODO: get card info, find nr of columns, rename stuff, clean up

class CardContainer extends React.Component {

    componentWillMount() {
        this.updateNumberOfColumns();
        //this.loadBlocksFromServer();
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

    assignToColumn() {
        let colCardInfo = [];
        let numberOfCards = allProjects.length;
        let cardsPerCol = Math.ceil(numberOfCards / numberOfCols);
        let cardCounter = 0;

        for (var i = 0; i < numberOfCols; i++) {
            var cardOfColumn = [];
            for (var j = 0; j < cardsPerCol; j++) {
                if (cardCounter < numberOfCards) {
                    cardOfColumn[j] = allProjects[cardCounter];
                    cardCounter++;
                }
            }
            colCardInfo.push(cardOfColumn);
        }
        return colCardInfo;
    }

    renderCards() {
        var colCardInfo = this.assignToColumn();
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
        const cards = this.renderCards();

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
