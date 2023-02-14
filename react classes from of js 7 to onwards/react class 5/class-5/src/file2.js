
import 'bootstrap/dist/css/bootstrap.min.css';
import Mybar from "./component/navbar"
import Container from 'react-bootstrap';
function App() {

    return (
        <>
            <Mybar />
            <div className='row'>
                {/* {4 boxes in each column}*/}
                <div className='col-md-4 mt-2'>
                    <div className='p-2 rounder shadow'>
                        <div >
                            <img src='https://w7.pngwing.com/pngs/723/514/png-transparent-laptop-personal-computer-laptops-electronics-photography-computer-thumbnail.png' width={"100%"} alt="laptop product"></img>
                        </div>
                        <h1>
                            Title
                        </h1>
                        <p>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
