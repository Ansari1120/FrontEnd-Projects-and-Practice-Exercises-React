import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbDelete, fbGet } from "../../config/firebasemethods";
import ScreenHeader from "../../components/screenheader";
import SearchResults from "../../components/SearchResults";
import { Button, Card } from "react-bootstrap";

const Carcards = () => {
  const [CarsList, setCarsList] = useState([
    {
      car: "Volkswagen",
      carImg:
        "https://images.pexels.com/photos/1467476/pexels-photo-1467476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      car_model: "Passat",
      car_color: "Maroon",
      car_model_year: 2008,

      car_vin: "WBANV9C51AC203320",
      price: "$1731.98",
      available: false,
      Features: [
        {
          featureOne: "AC",
          featureThree: "Bluetooth",
          featureFour: "USB Port",
        },
      ],
      ReviewsAndRatings: [
        {
          UserName: "Ahmed",
          StarRating: "****",
          Description: "fasdfasdfded",
        },
      ],
      availability: [
        {
          Days: ["Mond", "Tuesday", "Staturday"],
          Timings: "9 to 5",
        },
      ],
    },
    {
      car: "Saturn",
      carImg:
        "https://images.pexels.com/photos/16648008/pexels-photo-16648008.jpeg?auto=compress&cs=tinysrgb&w=600",
      car_model: "L-Series",
      car_color: "Red",
      car_model_year: 2003,
      car_vin: "1HGCR6F34EA246317",
      price: "$2238.35",

      Features: [
        {
          featureOne: "AC",
          featureThree: "Bluetooth",
          featureFour: "USB Port",
        },
      ],
      ReviewsAndRatings: [
        {
          UserName: "Ahmed",
          StarRating: "****",
          Description: "fasdfasdf",
        },
      ],
      availability: [
        {
          Days: ["Mond", "Tuesday", "Staturday"],
          Timings: "9 to 5",
        },
      ],
    },
    {
      car: "Jeep",
      carImg:
        "https://images.pexels.com/photos/1682666/pexels-photo-1682666.jpeg?auto=compress&cs=tinysrgb&w=600",

      car_model: "Compass",
      car_color: "Violet",
      car_model_year: 2012,
      car_vin: "4USBT33454L511606",
      price: "$2732.99",
      available: false,
      Features: [
        {
          featureOne: "AC",
          featureThree: "Bluetooth",
          featureFour: "USB Port",
        },
      ],
      ReviewsAndRatings: [
        {
          UserName: "Ahmed",
          StarRating: "****",
          Description: "fasdfasdf",
        },
      ],
      availability: [
        {
          Days: ["Mond", "Tuesday", "Staturday"],
          Timings: "9 to 5",
        },
      ],
    },
    {
      car: "Mitsubishi",
      carImg:
        "https://images.pexels.com/photos/12446376/pexels-photo-12446376.jpeg?auto=compress&cs=tinysrgb&w=600",
      car_model: "Lancer Evolution",
      car_color: "Purple",
      car_model_year: 2002,
      car_vin: "WAU2GBFCXDN339713",
      price: "$3849.47",
      available: false,
      Features: [
        {
          featureOne: "AC",
          featureTwo: "GPS",
          featureThree: "Bluetooth",
          featureFour: "USB Port",
        },
      ],
      ReviewsAndRatings: [
        {
          UserName: "Ahmed",
          StarRating: "****",
          Description: "fasdfasdf",
        },
      ],
      availability: [
        {
          Days: ["Mond", "Tuesday", "Staturday"],
          Timings: "9 to 5",
        },
      ],
    },
    {
      car: "Chevrolet",
      carImg:
        "https://images.pexels.com/photos/242139/pexels-photo-242139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      car_model: "Suburban",
      car_color: "Indigo",
      car_model_year: 2009,
      car_vin: "WAUSH98E96A592763",
      price: "$1252.30",

      available: false,
      ReviewsAndRatings: [
        {
          UserName: "Ahmed",
          StarRating: "****",
          Description: "fasdfasdf",
        },
      ],
      availability: [
        {
          Days: ["Mond", "Tuesday", "Staturday"],
          Timings: "9 to 5",
        },
      ],
    },
    {
      car: "Dodge",
      car_model: "Ram Van B350",
      car_color: "Yellow",
      car_model_year: 1994,
      car_vin: "KNADH4A37A6919967",
      carImg:
        "https://images.pexels.com/photos/1534604/pexels-photo-1534604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "$1762.42",

      Features: [
        {
          featureOne: "AC",
          featureThree: "Bluetooth",
          featureFour: "USB Port",
        },
      ],
      ReviewsAndRatings: [
        {
          UserName: "Ahmed",
          StarRating: "****",
          Description: "fasdfasdf",
        },
      ],
      availability: [
        {
          Days: ["Mond", "Tuesday", "Staturday"],
          Timings: "9 to 5",
        },
      ],
    },
    {
      car: "Isuzu",
      car_model: "Ascender",
      car_color: "Teal",
      car_model_year: 2004,
      car_vin: "5GTMNGEE8A8713093",
      price: "$1081.40",

      carImg:
        "https://images.pexels.com/photos/12979329/pexels-photo-12979329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Features: [
        {
          featureOne: "AC",
          featureTwo: "GPS",
        },
      ],
      ReviewsAndRatings: [
        {
          UserName: "Ahmed",
          StarRating: "****",
          Description: "fasdfasdf",
        },
      ],
      availability: [
        {
          Days: ["Mond", "Tuesday", "Staturday"],
          Timings: "9 to 5",
        },
      ],
    },
    {
      carImg:
        "https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      car: "Mitsubishi",
      car_model: "Montero",
      car_color: "Yellow",
      car_model_year: 2002,
      car_vin: "SAJWJ0FF3F8321657",
      price: "$2814.46",
      available: false,
      ReviewsAndRatings: [
        {
          UserName: "Ahmed",
          StarRating: "****",
          Description: "fasdfasdf",
        },
      ],
      availability: [
        {
          Days: ["Mond", "Tuesday", "Staturday"],
          Timings: "9 to 5",
        },
      ],
      Features: [
        {
          featureFour: "USB Port",
        },
      ],
    },
  ]);

  let columns = [
    {
      displayName: "CarName",
      key: "car",
      searchAble: true,
    },
    {
      displayName: "Car model",
      key: "car_model",
      searchAble: true,
    },
  ];
  const [carsFiltered, setCarsFiltered] = useState([]);
  const [singleObj, setSingleObj] = useState({});
  const [Cridentials, setCridentitals] = useState([]);
  const navigate = useNavigate();

  const save = () => {
    fbGet("AvailableCars")
      .then((res) => {
        console.log("Data retrieved SuccessFully !");
        setCarsList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let openDetail = (obj) => {
    navigate("/SingleCard", { state: obj });
  };

  let DeleteItem = (obj) => {
    console.log(obj);
    fbDelete("ListedInstitutes", obj.id)
      .then(() => {
        console.log("data Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Navigate_to_Login = (obj) => {
    navigate("/BookNow", { state: obj });
  };

  const NavToProfile = () => {
    navigate("/Profile");
  };

  useEffect(() => {
    save();
  }, []);
<<<<<<< HEAD
=======
  console.log(carsFiltered);
>>>>>>> recovery-branch
  return (
    <>
      <ScreenHeader
        title="Cars List"
        buttonsList={[
          {
            displayField: (
              <button onClick={() => NavToProfile()}>Profile</button>
            ),
          },
        ]}
      />
      <Box>
        <SearchResults
          CarsList={CarsList}
          setCarsFiltered={setCarsFiltered}
          columns={columns}
        />
      </Box>

      <Box className="d-flex row mt-4 justify-content-between p-3 align-items-center row my-3">
        {carsFiltered && Array.isArray(carsFiltered) && carsFiltered.length > 0
          ? carsFiltered.map((x, i) => (
              <div
                onClick={() => openDetail(x)}
                key={i}
                className="col-lg-4 col-12 my-4"
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={x.carImg} />
                  <Card.Body>
                    <Card.Title>{x.car}</Card.Title>
                    <Card.Text>my car details</Card.Text>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        Navigate_to_Login(x);
                      }}
                      variant="primary"
                    >
                      Book Now
                    </Button>
                  </Card.Body>
                </Card>{" "}
              </div>
            ))
          : null}
      </Box>
    </>
  );
};

export default Carcards;
