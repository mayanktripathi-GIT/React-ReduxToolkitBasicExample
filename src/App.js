import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Incrementnumber, Decrementnumber}  from "./action/index";

const App = () => {

  const myState = useSelector((state) => state. changenumber) 
  const dispatch = useDispatch ();

  
  return (
    <>
    <div className="Container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1> Welcome to Redux</h1>
          <h4>Using React and redux</h4>
          
          <div className="quantity">
            <a className="quantity_minus" title="Decrement" onClick={()=>dispatch (Decrementnumber ()) } ><span>-</span></a>
            <input name="quantity" type= "text" class="quantity_input" value={myState}/>
            <a className="quantity_plus" title="Increment" onClick={()=>dispatch (Incrementnumber ()) }> <span>+</span></a>


          </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
