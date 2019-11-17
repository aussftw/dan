import React from "react";

import Good from "../../Components/Card/Card";
import SHOP_DATA from "../../shop.data";

import {
  Container,
  Row,
  Col,
  CardGroup,
  CardDeck,
  CardColumns
} from "reactstrap";

class CardsContainer extends React.Component {
  constructor() {
    super();

    this.state = { items: [] };
  }

  componentDidMount() {
    this.setState({ items: SHOP_DATA });
  }

  render() {
    const { items } = this.state;
    return (
      <>
        <Container className="mt-5">
          <CardColumns>
            {items
              // .filter((item, idx) => idx < 4)
              .map(({ id, ...otherProps }) => (
                <Good key={id} {...otherProps} />
              ))}
          </CardColumns>
        </Container>
      </>
    );
  }
}

export default CardsContainer;
