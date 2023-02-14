import "bootstrap/dist/css/bootstrap.min.css";
import Mybar from "./component/navbar";
import InputBar from "./component/Input";
function App() {
  const data = [
    {
      title: "laptop",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      price: "301$",
      img: "https://w7.pngwing.com/pngs/723/514/png-transparent-laptop-personal-computer-laptops-electronics-photography-computer-thumbnail.png",
    },
    {
      title: "Keyboard",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      price: "21$",
      img: "https://toppng.com/uploads/preview/keyboard-11539912607vr4amxh7jd.png",
    },
    {
      title: "Mouse",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      price: "15$",
      img: "https://e7.pngegg.com/pngimages/872/96/png-clipart-computer-mouse-logitech-g203-prodigy-optical-mouse-computer-keyboard-amazon-usb-headset.png",
    },
    {
      title: "Scanner",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      price: "2000$",
      img: "https://w7.pngwing.com/pngs/869/867/png-transparent-scanner-book-scanning-digitization-information-library-scanner-electronics-computer-business-thumbnail.png",
    },
    {
      title: "Epson",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      price: "2000$",
      img: "https://www.pngmart.com/files/7/Laser-Printer-PNG-Free-Download.png",
    },
  ];
  const dataGet = (e) => {
    console.log(e);
  };
  return (
    <>
      <Mybar />

      <div className="row ">
        {/* {4 boxes in each column}*/}

        {data.map((x) => {
          return (
            <div className="col-md-4 mt-2">
              <div className="p-2 rounder shadow">
                <img src={x.img} width={"100%"} alt="" />
                <h1>{x.title}</h1>
                <p>{x.description}</p>
                <button onClick={() => dataGet(e)}>{x.price}</button>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <InputBar variant="outlined" label="ENTER USERNAME" />
      </div>
    </>
  );
}

export default App;
