import logo from './logo.svg';
import './App.css';
import Approuter from './Config/approuter';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import store from './Reducer/Store/store';
import Home from './Home';


function App() {

 
  return (
    <Provider store={store} >


     <Approuter/>
    </Provider>
  );
}

export default App;
