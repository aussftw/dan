import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  ButtonGroup
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import CardModal from "../Modal/Modal";

import "./Card.scss";

function Good(props) {
  const [isFav, setFav] = useState(false);
  const [isOpened, setOpened] = useState(false);

  function toggleFav(e) {
    setFav({ isFav: !isFav });
  }

  function toggleModal() {
    setOpened({ isOpened: !isOpened });
  }
  const { name, price, imageUrl, id } = props.item;
  const { addToFav, addToCart, item, removeFromFav, favItemToggler } = props;
  console.log("Fav", isFav);
  console.log(isOpened);
  return (
    // console.log(JSON.parse(localStorage.getItem("Cards")));
    // console.log(JSON.parse(localStorage.getItem("Card")));

    // const { isFav } = this.state;

    <Card sm="6" xs="12" mt="2" id={id} outline color="secondary">
      <CardImg src={`${imageUrl}`} className="card-image" />
      <CardBody>
        <div className="card-headers">
          <CardTitle className="font-weight-bolder title mb-4">
            {name}
          </CardTitle>
          <CardText className="good-price p-1"> {`${price}$`}</CardText>
        </div>
        <ButtonGroup size="lg">
          <CardModal
            buttonLabel={"Add to card"}
            addToCart={addToCart}
            item={item}
          />
          <Button
            size="lg"
            className={isFav ? "fav ml-1" : "ml-1"}
            // onClick={e => {
            //   addToFav(item);
            //   removeFormFav(item);

            //   this.toggleFav(e);
            // }}
            onClick={e => {
              addToFav(item);
              toggleFav();
            }}
          >
            <FontAwesomeIcon icon={faStar} />
          </Button>
          {/* <Button onClick={e => addToFav(item)} />
            <Button onClick={e => removeFromFav(item)} /> */}
        </ButtonGroup>
      </CardBody>
    </Card>
  );
}

export default Good;