import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { fbPost } from "../../config/firebasemethods";

const SelectedCar = () => {
  const [SingleCar, setSingleCar] = useState({});
  const location = useLocation();
  console.log(SingleCar);

  useEffect(() => {
    setSingleCar(location.state);
  }, []);

  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={SingleCar.carImg} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{SingleCar.car}</Card.Title>
          <Card.Text>
            This is a <br /> {SingleCar.car_color} <br /> color with model{" "}
            <br /> {SingleCar.car_model} <br /> first Inception in the year{" "}
            <br /> {SingleCar.car_model_year}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default SelectedCar;
