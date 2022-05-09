import './App.css';
import {createStore} from 'redux';
import {Provider,useSelector,useDispatch} from 'react-redux';

function reducer(currentState,action){
  if(currentState === undefined){
    return{
      number:1
    }  
  }
    const newState={...currentState}
    return newState;
}
const store = createStore(reducer);

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
