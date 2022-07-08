import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Axios from "axios";
import { Container, Row, Col } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "INSERT YOUR API KEY";
const url = "http://myjson.dit.upm.es/api/bins/boab";
const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  // const fetchPhoto = async ()=>
  // {
  //     const response = await Axios.get(url,{
  //         header:{
  //             Authorization: apiKey
  //         }
  //     })

  // }

  const fetchPhoto = async () => {
    const { data } = await Axios.get(url);

    const { photos } = data;
    console.log("datat is loaded", data);

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src?.medium,
      tinyImage: photo.src.tiny,
      productPrice: faker.commerce.price(),
      productName: faker.random.word(),
      id: faker.datatype.uuid(),
    }));

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <Container>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
