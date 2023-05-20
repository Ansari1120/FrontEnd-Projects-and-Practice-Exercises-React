import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { fbPost } from "../../config/firebasemethods";

const SingleCard = () => {
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
            <br /> with a price launched {SingleCar.price}
          </Card.Text>
          <Card.Text>
            <h5>Availability</h5>
            {location.state.availability.map((x) => (
              <div
                className=" d-flex justify-content-center"
                style={{ gap: "2px" }}
              >
                <div className="d-flex justify-content-between ">
                  <div
                    className="d-flex justify-content-between "
                    style={{ fontSize: "14px", gap: "2px" }}
                  >
                    <p>
                      {" "}
                      Days: {x.Days} <br /> Timings: {x.Timings}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Card.Text>
          <h5>Features</h5>
          <Card.Text>
            {location.state.Features.map((x) => (
              <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-between ">
                  <div style={{ fontSize: "14px" }}>
                    {" "}
                    {x.featureOne} <br /> {x.featureTwo} <br /> {x.featureThree}{" "}
                    <br /> {x.featureFour}
                  </div>
                </div>
              </div>
            ))}
          </Card.Text>
          <h5>Reviews & Ratings</h5>
          <Card.Text>
            {location.state.ReviewsAndRatings.map((x) => (
              <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-between ">
                  <p style={{ fontSize: "14px" }}>
                    {" "}
                    {x.UserName} <br /> {x.featureTwo} <br /> {x.StarRating}{" "}
                    <br /> {x.Description}{" "}
                  </p>
                </div>
              </div>
            ))}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default SingleCard;
