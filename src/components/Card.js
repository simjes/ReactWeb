import React from 'react';
import { Button } from 'muicss/react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-image-container">
                    <img src={this.props.image} alt="Avatar" />
                    <h4>project namesdsds <br /> weeedasdasdsd </h4>
                </div>
                <div className="card-container">
                    <p>
                        <Button variant="flat"> Android </Button>
                        <Button variant="flat"> Github </Button>
                        <Button variant="flat"> Youtube </Button>
                    </p>
                </div>
            </div>
        )
    }
}
export default Card;
