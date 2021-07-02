import React from "react";
import { observer } from "mobx-react-lite";
// import { Context } from "../index";

import { Container, Col, Image, Row,Card, Button} from "react-bootstrap";
import bigStar from "../assets/bigStar.png";

export const DevicePage = observer(() => {
  const device = {
    id: 1,
    name: "Iphone 12 pro 64gb",
    price: 27999,
    rating: 4.8,
    img: "https://i.citrus.ua/imgcache/size_800/uploads/shop/9/6/9601bc1ab5df854d950ccbc255a6b5ec.jpg",
  };
  const descriptions = [
      {id:1, title: 'Оперативная память', description: '4gb'},
      {id:2, title: 'Камера', description: '12 Мп'},
      {id:3, title: 'Процессор', description: 'Пентиум 1'},
      {id:4, title: 'Кол-ядер', description: '64'},
      {id:5, title: 'Аккумулятор', description: '100'},
  ]
  // const {device} = React.useContext(Context);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Image width={240} height={350} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 50,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
            <Card 
                className ='d-flex flex-column align-items-center justify-content-around'
                style={{width:240, height:350, fontSize: 32, border: '3px solid lightgrey'}}
            >
                <h3>{device.price}$</h3>
                <Button variant="outline-dark">Add to Basket</Button>
            </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
          {descriptions.map(info =>
            <Row key={info.id} style={{border: '1px solid lightgrey'}}>
                {info.title} : {info.description}
            </Row>
          )}
      </Row>
    </Container>
  );
});
