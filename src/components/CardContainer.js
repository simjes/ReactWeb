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

//TODO: get card info, find nr of columns, rename stuff, clean up

class CardContainer extends React.Component {
    sortCards() {
        let cards = [];
        let numberOfCols = 3; //TODO get number of columns
        let numberOfCards = allProjects.length;
        let cardsPerCol = Math.ceil(numberOfCards / numberOfCols);
        console.log('cards per col: ' + cardsPerCol);
        let cardCounter = 0;

        for (var i = 0; i < numberOfCols; i++) {
            var cardOfColumn = [];
            for (var j = 0; j < cardsPerCol; j++) {
                if (cardCounter < numberOfCards) {
                    cardOfColumn[j] = allProjects[cardCounter];
                    cardCounter++;
                }
            }
            cards.push(cardOfColumn);
        }
        return cards;
    }

    renderCards() {

        var allCardInfo = this.sortCards();
        console.log(allCardInfo);
        var finishedCards = [];

        allCardInfo.forEach( (column, index) => {
            finishedCards.push(
                <Col md="6" lg='4' key={index}>
                    {column.map((card, i) => {
                        return <Card content={card} key={i}/>;
                    })}
                </Col>
            )
        });
        console.log(finishedCards);
        return finishedCards;
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
